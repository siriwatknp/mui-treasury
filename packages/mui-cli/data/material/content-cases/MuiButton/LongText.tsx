import * as React from 'react';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';

const icon = <SvgIcon><path d="M12 2 2 22h20L12 2z" /></SvgIcon>;

export default function LongText() {
  return (
    <div style={{ display: 'grid', gap: 16, width: 160, justifyItems: 'start' }}>
      <Button variant="contained" startIcon={icon}>Download the quarterly report</Button>
      <Button variant="outlined" endIcon={icon} size="small">Download the quarterly report</Button>
      <Button variant="text" startIcon={icon} fullWidth>Download the quarterly report</Button>
    </div>
  );
}
