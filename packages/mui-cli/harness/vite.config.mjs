import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { searchForWorkspaceRoot } from 'vite';
import { X_STYLED, xStyledProducts } from '../src/lib/xStyled.mjs';

// Every Material UI entry a render may import, bundled in one pass up front: renders import components lazily, and
// a later optimizer pass would bundle a second copy of the theme context (the theme then never reaches the component).
const record = path.resolve(fileURLToPath(import.meta.url), '../../data/material/renders.json');
const rendered = Object.keys(JSON.parse(fs.readFileSync(record, 'utf8')).components);
// composites with no styles of their own (TextField) render too: every graph component the project's Material UI exports
const { graph } = JSON.parse(fs.readFileSync(path.resolve(record, '../graph.json'), 'utf8'));
const requireFromHost = createRequire(path.join(process.env.MUI_CLI_HOST_ROOT ?? process.cwd(), 'package.json'));
const exported = (c) => {
  try {
    requireFromHost.resolve(`@mui/material/${c.replace(/^Mui/, '')}`);
    return true;
  } catch {
    return false;
  }
};
const composites = Object.keys(graph).filter((c) => !rendered.includes(c) && exported(c));
// …and every package entry the shipped docs demos import (Box, Stack, colors…): one found mid-run re-bundles and reloads every page
const demoDirs = ['render-demos', 'composition-demos', 'content-cases'].map((d) => path.resolve(record, '..', d)).filter((d) => fs.existsSync(d));
const demoImports = demoDirs
  .flatMap((dir) => fs.readdirSync(dir, { recursive: true }).filter((f) => /\.tsx?$/.test(f)).map((f) => fs.readFileSync(path.join(dir, f), 'utf8')))
  .flatMap((src) => [...src.matchAll(/from '(@mui\/(?:material|icons-material|system|utils)(?:\/[\w/-]+)?)'/g)].map((m) => m[1]));
const resolvable = (entry) => {
  try {
    requireFromHost.resolve(entry);
    return true;
  } catch {
    return false;
  }
};
// MUI X packages with style rows, when the project has them (a project without MUI X renders Material UI only)
const xEntries = xStyledProducts().map((p) => X_STYLED[p].package).filter(resolvable);
const muiEntries = [...new Set(['@mui/material/styles', '@mui/material/SvgIcon', ...[...rendered, ...composites].map((c) => `@mui/material/${c.replace(/^Mui/, '')}`), ...demoImports.filter(resolvable), ...xEntries])];

export default {
  plugins: [react()],
  optimizeDeps: {
    include: ['prop-types', 'react-is', 'hoist-non-react-statics', 'react', 'react-dom', 'react-dom/client', 'react/jsx-runtime', 'react/jsx-dev-runtime', ...new Set(muiEntries)],
  },
  server: {
    // theme files are not Vite's to watch: the render engine drops their modules and reloads a page between renders
    // (renderEngine `ready`); a Vite reload could land in the middle of one
    watch: { ignored: (process.env.MUI_CLI_THEME_DIR ? process.env.MUI_CLI_THEME_DIR.split(path.delimiter) : []).map((dir) => `${dir}/**`) },
    fs: {
      // /@fs/ + raw-file serves: package root, the host project and its workspace root (peer deps and the
      // font packages --font names live there; pnpm keeps them in the workspace root's store), and the --theme dir
      allow: [
        path.resolve(fileURLToPath(import.meta.url), '../..'),
        ...(process.env.MUI_CLI_HOST_ROOT ? [process.env.MUI_CLI_HOST_ROOT, searchForWorkspaceRoot(process.env.MUI_CLI_HOST_ROOT)] : []),
        ...(process.env.MUI_CLI_THEME_DIR ? process.env.MUI_CLI_THEME_DIR.split(path.delimiter) : []),
      ],
    },
  },
};
