import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Autocomplete from '@mui/material/Autocomplete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import withCli from './sides/with-cli/theme';
import noCli from './sides/no-cli/theme';

const themes: Record<string, any> = { 'with-cli': withCli, 'no-cli': noCli, vanilla: createTheme({ focusVisible: true }) };
const side = new URLSearchParams(location.search).get('side') ?? 'vanilla';
const options = ['Apple', 'Banana', 'Cherry'];
// kind: text = a text field (mouse focus too), select = focus by keyboard only (a click opens its menu)
type Case = { id: string; el: React.ReactNode; variant?: string; kind: 'text' | 'select'; error?: boolean };
const cases: Case[] = [];
for (const v of ['outlined', 'filled', 'standard'] as const) {
  for (const s of ['medium', 'small'] as const) {
    const p = { variant: v, size: s } as const;
    const g = (name: string) => `${v}/${s} ${name}`;
    cases.push({ id: g('label'), variant: v, kind: 'text', el: <TextField {...p} label="Label" /> });
    cases.push({ id: g('value'), variant: v, kind: 'text', el: <TextField {...p} label="Label" defaultValue="Value" /> });
    cases.push({ id: g('adornments'), variant: v, kind: 'text', el: <TextField {...p} label="Amount" defaultValue="12" slotProps={{ input: { startAdornment: <InputAdornment position="start">$</InputAdornment>, endAdornment: <InputAdornment position="end">kg</InputAdornment> } }} /> });
    cases.push({ id: g('multiline'), variant: v, kind: 'text', el: <TextField {...p} label="Notes" defaultValue={'Line one\nLine two'} multiline /> });
    cases.push({ id: g('select'), variant: v, kind: 'select', el: <TextField {...p} select label="Fruit" defaultValue="Apple">{options.map((o) => <MenuItem key={o} value={o}>{o}</MenuItem>)}</TextField> });
    cases.push({ id: g('Autocomplete'), variant: v, kind: 'text', el: <Autocomplete size={s} options={options} defaultValue="Apple" renderInput={(params) => <TextField {...params} variant={v} label="Fruit" />} /> });
    cases.push({ id: g('Autocomplete chips'), variant: v, kind: 'text', el: <Autocomplete multiple size={s} options={options} defaultValue={['Apple', 'Banana']} renderInput={(params) => <TextField {...params} variant={v} label="Fruits" />} /> });
    cases.push({ id: g('error'), variant: v, kind: 'text', error: true, el: <TextField {...p} label="Label" defaultValue="Value" error helperText="Required" /> });
  }
}
cases.push({ id: 'bare InputBase', kind: 'text', el: <InputBase placeholder="Search" /> });
cases.push({ id: 'Select input={<InputBase/>}', kind: 'select', el: <Select defaultValue="Apple" input={<InputBase />}>{options.map((o) => <MenuItem key={o} value={o}>{o}</MenuItem>)}</Select> });
cases.push({ id: 'NativeSelect', variant: 'standard', kind: 'select', el: <NativeSelect defaultValue="Apple">{options.map((o) => <option key={o} value={o}>{o}</option>)}</NativeSelect> });
cases.push({ id: 'in Card', variant: 'outlined', kind: 'text', el: <Card><CardContent><TextField label="Name" fullWidth /></CardContent></Card> });
cases.push({ id: 'in Dialog', variant: 'outlined', kind: 'text', el: <Paper style={{ overflowY: 'auto', maxHeight: 300 }}><DialogTitle>Subscribe</DialogTitle><DialogContent><TextField autoFocus={false} margin="dense" label="Email" type="email" fullWidth variant="standard" /></DialogContent></Paper> });
cases.push({ id: 'in Dialog outlined', variant: 'outlined', kind: 'text', el: <Paper style={{ overflowY: 'auto', maxHeight: 300 }}><DialogTitle>Subscribe</DialogTitle><DialogContent><TextField margin="dense" label="Email" fullWidth /></DialogContent></Paper> });
(window as any).__cases = cases.map(({ el, ...c }) => c);

const sentinel = (id: string) => <button data-sentinel={id} style={{ width: 1, height: 1, opacity: 0, border: 0, padding: 0 }} />;

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={themes[side]}>
    <CssBaseline />
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, padding: 24 }}>
      <div data-case="__button">{sentinel('__button')}<Button>Reference</Button></div>
      {cases.map((c) => (
        <div key={c.id} data-case={c.id} style={{ width: 300 }}>
          {sentinel(c.id)}
          <div style={{ font: '11px system-ui', color: '#888', marginBottom: 6 }}>{c.id}</div>
          {c.el}
        </div>
      ))}
    </div>
  </ThemeProvider>,
);
