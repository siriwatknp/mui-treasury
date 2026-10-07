import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const options = ['Apple', 'Banana', 'Cherry', 'Dragon fruit', 'Elderberry', 'Fig'];

export const type = 'Gr';
export const typeInto = 'input[name="fruits"]';

export default function Chips() {
  return (
    <div style={{ display: 'grid', gap: 24, width: 260 }}>
      <div data-same-height="one row" style={{ display: 'grid', gap: 24 }}>
        <Autocomplete multiple options={options} defaultValue={['Apple']} renderInput={(params) => <TextField {...params} label="Fruits" />} />
        <TextField label="Name" defaultValue="Ada" />
      </div>
      <Autocomplete multiple size="small" options={options} defaultValue={['Apple', 'Banana', 'Cherry']} renderInput={(params) => <TextField {...params} variant="filled" label="Fruits" />} />
      <Autocomplete multiple options={options} defaultValue={['Apple', 'Banana', 'Cherry', 'Dragon fruit']} renderInput={(params) => <TextField {...params} name="fruits" label="Fruits" />} />
    </div>
  );
}
