import * as React from 'react';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';

export default function LongLabel() {
  return (
    <div style={{ display: 'grid', gap: 16, width: 180, justifyItems: 'start' }}>
      <Chip label="A label far too long to fit in the chip" onDelete={() => {}} />
      <Chip size="small" label="A label far too long to fit in the chip" onDelete={() => {}} avatar={<Avatar>A</Avatar>} />
      <Chip variant="outlined" label="A label far too long to fit in the chip" onClick={() => {}} />
    </div>
  );
}
