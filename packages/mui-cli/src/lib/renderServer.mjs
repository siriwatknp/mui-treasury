import fs from 'node:fs';
import http from 'node:http';
import { bootEngine, helpersFor, runOn } from './renderEngine.mjs';

const { key, lockFile, hostRoot, themeDirs, idleMs } = JSON.parse(process.argv[2]);
const engine = await bootEngine({ hostRoot, themeDirs });
const sessions = new Map();
let nextId = 1;
let idleTimer = null;

let closing = false;
async function shutdown() {
  if (closing) {
    return;
  }
  closing = true;
  try {
    if (JSON.parse(fs.readFileSync(lockFile, 'utf8')).pid === process.pid) {
      fs.rmSync(lockFile, { force: true });
    }
  } catch {
    // lock already replaced or gone
  }
  server.close();
  await engine.close();
  process.exit(0);
}

const touch = () => {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    if (!sessions.size) {
      shutdown();
    } else {
      touch();
    }
  }, idleMs);
};

const handlers = {
  status: async () => {
    if (closing) {
      throw new Error('closing');
    }
    return { key, pid: process.pid, themeDirs: engine.themeDirs, sessions: sessions.size };
  },
  stop: async () => {
    setTimeout(shutdown, 10);
    return { stopping: true };
  },
  open: async (opts) => {
    const id = nextId++;
    sessions.set(id, await engine.acquire(opts));
    return { id };
  },
  run: async ({ id, cfg }) => {
    await engine.ready(sessions.get(id).page, cfg);
    return runOn(sessions.get(id).page, cfg);
  },
  helper: async ({ id, name, args }) => helpersFor(sessions.get(id).page)[name](...args),
  close: async ({ id }) => {
    const session = sessions.get(id);
    sessions.delete(id);
    if (session) {
      await engine.release(session);
    }
    return { closed: true };
  },
};

const server = http.createServer((req, res) => {
  touch();
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });
  req.on('end', async () => {
    const op = req.url.slice(1);
    try {
      const result = await handlers[op](body ? JSON.parse(body) : {});
      res.writeHead(200, { 'content-type': 'application/json' }).end(JSON.stringify({ ok: true, result }));
    } catch (err) {
      res.writeHead(500, { 'content-type': 'application/json' }).end(JSON.stringify({ ok: false, error: err.message }));
    }
  });
});

server.listen(0, '127.0.0.1', () => {
  fs.writeFileSync(lockFile, JSON.stringify({ key, pid: process.pid, port: server.address().port, themeDirs }));
  touch();
});
process.on('SIGTERM', shutdown);
