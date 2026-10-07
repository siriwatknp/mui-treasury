import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

const long = 'International Business Machines Corporation (Armonk)';

export default function LongOption() {
  return (
    <div style={{ display: 'grid', gap: 24, width: 220 }}>
      {(['outlined', 'filled', 'standard'] as const).map((variant) => (
        <div key={variant} data-same-height={variant} style={{ display: 'grid', gap: 24 }}>
          <FormControl variant={variant} fullWidth>
            <InputLabel>Company</InputLabel>
            <Select label="Company" defaultValue={long}>
              <MenuItem value={long}>{long}</MenuItem>
            </Select>
          </FormControl>
          <TextField variant={variant} label="Name" defaultValue="Ada" />
        </div>
      ))}
    </div>
  );
}
