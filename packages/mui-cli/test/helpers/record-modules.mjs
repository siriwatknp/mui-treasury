import { register } from 'node:module';

register('./record-modules-hooks.mjs', { parentURL: import.meta.url, data: { out: process.env.MUI_CLI_RECORD_MODULES } });
