import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

// fields in one data-same-height group must render at one height: an adornment must not grow the box
export default function LongValueAdornments() {
  return (
    <div style={{ display: 'grid', gap: 24, width: 220 }}>
      <div data-same-height="medium" style={{ display: 'grid', gap: 24 }}>
        <TextField variant="outlined" label="Weight" defaultValue="1234567890123456789012345" slotProps={{ input: { startAdornment: <InputAdornment position="start">$</InputAdornment>, endAdornment: <InputAdornment position="end">kg</InputAdornment> } }} />
        <TextField variant="outlined" label="Weight" defaultValue="12" />
      </div>
      <div data-same-height="small" style={{ display: 'grid', gap: 24 }}>
        <TextField variant="outlined" size="small" label="Weight" defaultValue="1234567890123456789012345" slotProps={{ input: { startAdornment: <InputAdornment position="start">$</InputAdornment>, endAdornment: <InputAdornment position="end">kg</InputAdornment> } }} />
        <TextField variant="outlined" size="small" label="Weight" defaultValue="12" />
      </div>
    </div>
  );
}
