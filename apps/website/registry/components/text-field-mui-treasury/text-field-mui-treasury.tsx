'use client';

import * as React from 'react';

import { Box, Stack, TextField, Typography } from '@mui/material';

export function TextFieldMuiTreasury() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: 4,
        width: '100%',
      }}
    >
      <Stack spacing={1.5}>
        <Typography variant="subtitle2" color="text.secondary">
          Default
        </Typography>
        <TextField label="Name" defaultValue="Jane Doe" fullWidth />
        <TextField
          label="Email"
          defaultValue="jane@example.com"
          helperText="We'll never share your email."
          fullWidth
        />
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="subtitle2" color="text.secondary">
          Disabled
        </Typography>
        <TextField label="Username" defaultValue="janedoe" disabled fullWidth />
        <TextField
          label="Bio"
          defaultValue="Designer based in Lisbon."
          disabled
          multiline
          rows={2}
          fullWidth
        />
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="subtitle2" color="text.secondary">
          Error
        </Typography>
        <TextField
          label="Password"
          defaultValue="abc"
          error
          helperText="Must be at least 8 characters."
          type="password"
          fullWidth
        />
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="subtitle2" color="text.secondary">
          Sizes
        </Typography>
        <TextField label="Small" size="small" defaultValue="Small" fullWidth />
        <TextField label="Medium" defaultValue="Medium" fullWidth />
      </Stack>
    </Box>
  );
}
