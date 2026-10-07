import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function LongLabel() {
  return (
    <div style={{ display: 'grid', gap: 24, width: 220 }}>
      <TextField variant="standard" label="Primary contact email address for invoices" defaultValue="Ada Lovelace-Byron, Countess of Lovelace and first programmer" />
      <TextField variant="standard" label="Primary contact email address for invoices" />
    </div>
  );
}
