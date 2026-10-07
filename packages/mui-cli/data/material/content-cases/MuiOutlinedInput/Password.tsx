import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';

export default function Password() {
  return (
    <div data-same-height="password" style={{ display: 'grid', gap: 24, width: 220 }}>
      <TextField
        variant="outlined"
        label="Password"
        type="password"
        defaultValue="correct-horse-battery-staple-forever"
        slotProps={{ input: { endAdornment: <InputAdornment position="end"><IconButton aria-label="show password" edge="end"><SvgIcon><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5" /></SvgIcon></IconButton></InputAdornment> } }}
      />
      <TextField variant="outlined" label="Username" defaultValue="ada" />
    </div>
  );
}
