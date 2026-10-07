import { renderServerStatus, stopRenderServer } from '../lib/capture.mjs';
import { jsonOut } from '../lib/json.mjs';

export async function run(program, action = 'status') {
  if (action === 'stop') {
    const stopped = await stopRenderServer();
    if (program.opts().json) {
      jsonOut('server', { stopped });
      return;
    }
    console.log(stopped ? 'render server stopped' : 'no render server running for this project');
    return;
  }
  if (action !== 'status') {
    throw new Error(`unknown action '${action}' — use status or stop`);
  }
  const status = await renderServerStatus();
  if (program.opts().json) {
    jsonOut('server', status ?? { running: false });
    return;
  }
  console.log(status ? `render server running (pid ${status.pid}, ${status.sessions} open sessions) — stops after ${Math.round(status.idleMs / 60000)} idle minutes` : 'no render server running for this project — the next render starts one');
}
