'use client';

import * as React from 'react';

import { Close } from '@mui/icons-material';
import {
  Box,
  Button,
  IconButton,
  SnackbarContent,
  Stack,
  Typography,
} from '@mui/material';

export function SnackbarMuiTreasury() {
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
          Default
        </Typography>
        <SnackbarContent message="Note archived." />
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          With action
        </Typography>
        <SnackbarContent
          message="Message sent."
          action={
            <Button color="secondary" size="small">
              UNDO
            </Button>
          }
        />
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Dismissible
        </Typography>
        <SnackbarContent
          message="Connection lost. Reconnecting..."
          action={
            <IconButton size="small" color="inherit">
              <Close fontSize="small" />
            </IconButton>
          }
        />
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Multiline
        </Typography>
        <Stack gap={2}>
          <SnackbarContent message="Could not save your changes. Please check your connection and try again." />
          <SnackbarContent
            message="Your subscription will renew on May 12, 2026 unless you cancel before then."
            action={
              <Button color="secondary" size="small">
                MANAGE
              </Button>
            }
          />
        </Stack>
      </Box>
    </Box>
  );
}
