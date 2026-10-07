import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import withCli from './sides/with-cli/theme';
import noCli from './sides/no-cli/theme';
import { createTheme } from '@mui/material/styles';

const themes: Record<string, any> = { 'with-cli': withCli, 'no-cli': noCli, vanilla: createTheme() };
const q = new URLSearchParams(location.search);
const theme = themes[q.get('side') ?? 'vanilla'];
const props = JSON.parse(q.get('props') ?? '{}');
const label = q.get('label');
const el = <Switch {...props} />;

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <div id="cell" style={{ display: 'inline-block', padding: 24 }}>
      {label ? <FormControlLabel control={el} label={label} /> : el}
    </div>
  </ThemeProvider>,
);
