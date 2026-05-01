'use client';

import { Alert, AlertTitle, Button, Stack } from '@mui/material';

export function AlertMuiTreasury() {
  return (
    <Stack spacing={2} sx={{ width: '100%', maxWidth: 560, mx: 'auto' }}>
      <Alert
        severity="success"
        sx={{ pr: 2 }}
        action={
          <Button color="inherit" size="small" onClick={() => {}}>
            UNDO
          </Button>
        }
      >
        <AlertTitle>Deployment complete</AlertTitle>
        Build #1428 shipped to production in 42s.
      </Alert>
      <Alert severity="info" variant="outlined">
        <AlertTitle>Maintenance window scheduled</AlertTitle>
        Weekly cluster restart begins Sunday at 03:00 UTC.
      </Alert>
      <Alert severity="warning">
        <AlertTitle>Storage almost full</AlertTitle>
        92% of your 50 GB plan is used.
      </Alert>
      <Alert severity="error">
        <AlertTitle>Payment failed</AlertTitle>
        We could not charge your card ending in 4242.
      </Alert>
    </Stack>
  );
}
