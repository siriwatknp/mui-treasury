import * as React from 'react';
import TextField from '@mui/material/TextField';

export const components = ['MuiInput', 'MuiFilledInput', 'MuiOutlinedInput', 'MuiInputLabel'];

// fields in one data-same-gap group whose label sits above the box must keep one label-to-box gap across variants
export default function LabelGap() {
  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <div data-same-gap="medium" style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
        <TextField variant="outlined" label="Outlined" defaultValue="Value" />
        <TextField variant="filled" label="Filled" defaultValue="Value" />
        <TextField variant="standard" label="Standard" defaultValue="Value" />
      </div>
      <div data-same-gap="small" style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
        <TextField variant="outlined" size="small" label="Outlined" defaultValue="Value" />
        <TextField variant="filled" size="small" label="Filled" defaultValue="Value" />
        <TextField variant="standard" size="small" label="Standard" defaultValue="Value" />
      </div>
    </div>
  );
}
