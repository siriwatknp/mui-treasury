'use client';

import * as React from 'react';

import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Stack,
  Typography,
} from '@mui/material';

export function AlertMuiTreasury() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: 4,
        width: '100%',
      }}
    >
      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Severities
        </Typography>
        <Stack direction="column" gap={2}>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Something went wrong while saving.
          </Alert>
          <Alert severity="warning">
            <AlertTitle>Warning</AlertTitle>
            Your session will expire soon.
          </Alert>
          <Alert severity="info">
            <AlertTitle>Info</AlertTitle>A new version is available.
          </Alert>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Changes saved successfully.
          </Alert>
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Variants
        </Typography>
        <Stack direction="column" gap={2}>
          <Alert severity="info" variant="standard">
            Standard alert message.
          </Alert>
          <Alert severity="info" variant="outlined">
            Outlined alert message.
          </Alert>
          <Alert severity="info" variant="filled">
            Filled alert message.
          </Alert>
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          With action
        </Typography>
        <Stack direction="column" gap={2}>
          <Alert
            severity="success"
            action={
              <Button color="inherit" size="small">
                UNDO
              </Button>
            }
          >
            Item archived.
          </Alert>
          <Alert
            severity="warning"
            action={
              <Button color="inherit" size="small">
                RETRY
              </Button>
            }
          >
            Could not sync changes.
          </Alert>
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Dismissible
        </Typography>
        <Stack direction="column" gap={2}>
          <Alert severity="info" onClose={() => {}}>
            You can close this alert.
          </Alert>
          <Alert severity="error" onClose={() => {}}>
            <AlertTitle>Failed</AlertTitle>
            Upload could not be completed.
          </Alert>
        </Stack>
      </Box>
    </Box>
  );
}
