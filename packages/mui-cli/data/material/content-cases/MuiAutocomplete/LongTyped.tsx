import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export const type = 'Something much longer than the field can show at once';
export const typeInto = 'input[name="city"]';

export default function LongTyped() {
  return (
    <div style={{ width: 220 }}>
      <Autocomplete freeSolo options={['Amsterdam', 'Bangkok']} renderInput={(params) => <TextField {...params} name="city" label="City" />} />
    </div>
  );
}
