import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import withCli from './sides/with-cli/theme';
import noCli from './sides/no-cli/theme';
const themes: Record<string, any> = { 'with-cli': withCli, 'no-cli': noCli, vanilla: createTheme() };
const side = new URLSearchParams(location.search).get('side') ?? 'vanilla';
const controls = { Switch: <Switch defaultChecked />, Checkbox: <Checkbox defaultChecked />, Radio: <Radio checked /> };
createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={themes[side]}><CssBaseline />
    {Object.entries(controls).map(([name, c]) => (['end', 'start', 'top', 'bottom'] as const).map((p) => (
      <div key={name + p} data-case={`${name} ${p}`} style={{ padding: 24, display: 'inline-block', outline: '1px dashed #ccc', margin: 8 }}>
        <FormControlLabel control={c} label="Label" labelPlacement={p} />
      </div>)))}
  </ThemeProvider>);
