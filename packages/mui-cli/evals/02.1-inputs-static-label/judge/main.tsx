import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Autocomplete from '@mui/material/Autocomplete';
import withCli from './sides/with-cli/theme';
import noCli from './sides/no-cli/theme';

const themes: Record<string, any> = { 'with-cli': withCli, 'no-cli': noCli, vanilla: createTheme() };
const side = new URLSearchParams(location.search).get('side') ?? 'vanilla';
const options = ['Apple', 'Banana', 'Cherry'];
type Case = { id: string; el: React.ReactNode; labelled: boolean; placeholder?: boolean; empty?: boolean; variant?: string; group?: string; adorned?: boolean; chips?: boolean };
const cases: Case[] = [];
for (const v of ['outlined', 'filled', 'standard'] as const) {
  for (const s of ['medium', 'small'] as const) {
    const p = { variant: v, size: s } as const;
    const k = `${v}/${s}`;
    const g = (name: string) => `${k} ${name}`;
    cases.push({ id: g('label empty'), variant: v, group: k, labelled: true, empty: true, el: <TextField {...p} label="Label" /> });
    cases.push({ id: g('label placeholder'), variant: v, group: k, labelled: true, empty: true, placeholder: true, el: <TextField {...p} label="Label" placeholder="Placeholder" /> });
    cases.push({ id: g('label value'), variant: v, group: k, labelled: true, el: <TextField {...p} label="Label" defaultValue="Value" /> });
    cases.push({ id: g('no label placeholder'), variant: v, labelled: false, empty: true, placeholder: true, el: <TextField {...p} placeholder="Placeholder" /> });
    cases.push({ id: g('adornments'), variant: v, group: k, labelled: true, adorned: true, el: <TextField {...p} label="Amount" defaultValue="12" slotProps={{ input: { startAdornment: <InputAdornment position="start">$</InputAdornment>, endAdornment: <InputAdornment position="end">kg</InputAdornment> } }} /> });
    cases.push({ id: g('helper text'), variant: v, group: k, labelled: true, el: <TextField {...p} label="Label" defaultValue="Value" helperText="Helper text" /> });
    cases.push({ id: g('multiline'), variant: v, group: k, labelled: true, el: <TextField {...p} label="Notes" defaultValue="One line" multiline /> });
    cases.push({ id: g('select (TextField)'), variant: v, group: k, labelled: true, el: <TextField {...p} select label="Fruit" defaultValue="Apple">{options.map((o) => <MenuItem key={o} value={o}>{o}</MenuItem>)}</TextField> });
    cases.push({ id: g('Select empty'), variant: v, group: k, labelled: true, empty: true, el: <FormControl variant={v} size={s} fullWidth><InputLabel>Fruit</InputLabel><Select label="Fruit" defaultValue="">{options.map((o) => <MenuItem key={o} value={o}>{o}</MenuItem>)}</Select></FormControl> });
    cases.push({ id: g('Autocomplete empty'), variant: v, group: k, labelled: true, empty: true, el: <Autocomplete size={s} options={options} renderInput={(params) => <TextField {...params} variant={v} label="Fruit" />} /> });
    cases.push({ id: g('Autocomplete value'), variant: v, group: k, labelled: true, el: <Autocomplete size={s} options={options} defaultValue="Apple" renderInput={(params) => <TextField {...params} variant={v} label="Fruit" />} /> });
    cases.push({ id: g('Autocomplete chips'), variant: v, group: k, labelled: true, chips: true, el: <Autocomplete multiple size={s} options={options} defaultValue={['Apple']} renderInput={(params) => <TextField {...params} variant={v} label="Fruits" />} /> });
  }
}
cases.push({ id: 'bare InputBase', labelled: false, empty: true, placeholder: true, el: <InputBase placeholder="Search" /> });
cases.push({ id: 'Select input={<InputBase/>}', labelled: false, el: <Select defaultValue="Apple" input={<InputBase />}>{options.map((o) => <MenuItem key={o} value={o}>{o}</MenuItem>)}</Select> });
cases.push({ id: 'NativeSelect', labelled: false, el: <NativeSelect defaultValue="Apple">{options.map((o) => <option key={o} value={o}>{o}</option>)}</NativeSelect> });
cases.push({ id: 'NativeSelect with label', labelled: true, el: <FormControl fullWidth><InputLabel variant="standard" htmlFor="ns">Fruit</InputLabel><NativeSelect defaultValue="Apple" inputProps={{ id: 'ns' }}>{options.map((o) => <option key={o} value={o}>{o}</option>)}</NativeSelect></FormControl> });
(window as any).__cases = cases.map(({ el, ...c }) => c);

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={themes[side]}>
    <CssBaseline />
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, padding: 16 }}>
      {cases.map((c) => (
        <div key={c.id} data-case={c.id} style={{ width: 300 }}>
          <div className="cap" style={{ font: '11px system-ui', color: '#888', marginBottom: 6 }}>{c.id}</div>
          {c.el}
        </div>
      ))}
    </div>
  </ThemeProvider>,
);
