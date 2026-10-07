import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Autocomplete from '@mui/material/Autocomplete';
import withCli from './sides/with-cli/theme';
import noCli from './sides/no-cli/theme';

const themes: Record<string, any> = { 'with-cli': withCli, 'no-cli': noCli, vanilla: createTheme() };
const side = new URLSearchParams(location.search).get('side') ?? 'vanilla';
const variants = ['outlined', 'filled', 'standard'] as const;
const sizes = ['medium', 'small'] as const;
const options = ['Apple', 'Banana', 'Cherry'];

type Case = { id: string; kind: string; el: React.ReactNode; labelled: boolean; adorned?: boolean; shrunk?: boolean };
const cases: Case[] = [];
for (const v of variants) {
  for (const s of sizes) {
    const p = { variant: v, size: s } as const;
    const k = `${v}/${s}`;
    cases.push({ id: `${k} label empty`, kind: 'text', labelled: true, el: <TextField {...p} label="Label" /> });
    cases.push({ id: `${k} label value`, kind: 'text', labelled: true, shrunk: true, el: <TextField {...p} label="Label" defaultValue="Value" /> });
    cases.push({ id: `${k} no label`, kind: 'text', labelled: false, el: <TextField {...p} placeholder="Placeholder" /> });
    cases.push({ id: `${k} adornments`, kind: 'text', labelled: true, adorned: true, shrunk: true, el: <TextField {...p} label="Amount" defaultValue="12" slotProps={{ input: { startAdornment: <InputAdornment position="start">$</InputAdornment>, endAdornment: <InputAdornment position="end">kg</InputAdornment> } }} /> });
    cases.push({ id: `${k} helper text`, kind: 'text', labelled: true, shrunk: true, el: <TextField {...p} label="Label" defaultValue="Value" helperText="Helper text" /> });
    cases.push({ id: `${k} multiline`, kind: 'text', labelled: true, shrunk: true, el: <TextField {...p} label="Notes" defaultValue="One line" multiline /> });
    cases.push({ id: `${k} select (TextField)`, kind: 'select', labelled: true, shrunk: true, el: <TextField {...p} select label="Fruit" defaultValue="Apple">{options.map((o) => <MenuItem key={o} value={o}>{o}</MenuItem>)}</TextField> });
    cases.push({ id: `${k} Select empty`, kind: 'select', labelled: true, el: <FormControl variant={v} size={s} fullWidth><InputLabel>Fruit</InputLabel><Select label="Fruit" defaultValue="">{options.map((o) => <MenuItem key={o} value={o}>{o}</MenuItem>)}</Select></FormControl> });
    cases.push({ id: `${k} Autocomplete empty`, kind: 'auto', labelled: true, el: <Autocomplete size={s} options={options} renderInput={(params) => <TextField {...params} variant={v} label="Fruit" />} /> });
    cases.push({ id: `${k} Autocomplete value`, kind: 'auto', labelled: true, shrunk: true, el: <Autocomplete size={s} options={options} defaultValue="Apple" renderInput={(params) => <TextField {...params} variant={v} label="Fruit" />} /> });
    cases.push({ id: `${k} Autocomplete chips`, kind: 'auto', labelled: true, shrunk: true, el: <Autocomplete multiple size={s} options={options} defaultValue={['Apple', 'Banana']} renderInput={(params) => <TextField {...params} variant={v} label="Fruits" />} /> });
  }
}
(window as any).__cases = cases.map(({ el, ...c }) => c);

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={themes[side]}>
    <CssBaseline />
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, padding: 16 }}>
      {cases.map((c) => (
        <div key={c.id} data-case={c.id} style={{ width: 300 }}>
          <div style={{ font: '11px system-ui', color: '#888', marginBottom: 10 }}>{c.id}</div>
          {c.el}
        </div>
      ))}
    </div>
  </ThemeProvider>,
);
