import * as React from 'react';
import TextField from '@mui/material/TextField';

export const type = 'First line of the note\nSecond line, a little longer than the first\nThird line';
export const typeInto = 'textarea[name="notes"]';

export default function MultilineTyped() {
  return (
    <div style={{ width: 260 }}>
      <TextField variant="standard" label="Notes" name="notes" multiline />
    </div>
  );
}
