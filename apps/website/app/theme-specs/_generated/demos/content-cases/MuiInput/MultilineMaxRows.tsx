import * as React from 'react';
import TextField from '@mui/material/TextField';

export const type = 'One\nTwo\nThree\nFour\nFive';
export const typeInto = 'textarea[name="notes"]';

export default function MultilineMaxRows() {
  return (
    <div style={{ width: 260 }}>
      <TextField variant="standard" label="Notes" name="notes" multiline maxRows={2} />
    </div>
  );
}
