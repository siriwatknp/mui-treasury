'use client';

import * as React from 'react';

import { Close } from '@mui/icons-material';
import { Button, IconButton, SnackbarContent, Stack } from '@mui/material';

const snackSx = { px: 2.5, py: 1 };

export function SnackbarMuiTreasury() {
  return (
    <Stack spacing={2} sx={{ width: '100%', maxWidth: 480, mx: 'auto' }}>
      <SnackbarContent
        sx={snackSx}
        message="Archive moved to trash."
        action={
          <Button color="inherit" size="small" onClick={() => {}}>
            UNDO
          </Button>
        }
      />
      <SnackbarContent
        sx={snackSx}
        message="New version available."
        action={
          <Stack direction="row" spacing={1} sx={{
            alignItems: "center"
          }}>
            <Button color="inherit" size="small" onClick={() => {}}>
              VIEW
            </Button>
            <IconButton
              size="small"
              color="inherit"
              aria-label="dismiss"
              onClick={() => {}}
            >
              <Close fontSize="small" />
            </IconButton>
          </Stack>
        }
      />
      <SnackbarContent
        sx={snackSx}
        message="Your invoice for May was sent to billing@acme.com."
      />
    </Stack>
  );
}
