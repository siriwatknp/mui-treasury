'use client';

import * as React from 'react';

import { Box, Button, Stack, Typography } from '@mui/material';

export function ButtonMuiTreasury() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 4,
        width: '100%',
      }}
    >
      <Stack spacing={1.5}>
        <Typography variant="subtitle2" color="text.secondary">
          Variants
        </Typography>
        <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="text">Text</Button>
        </Stack>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="subtitle2" color="text.secondary">
          Colors
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
        </Stack>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="subtitle2" color="text.secondary">
          Sizes
        </Typography>
        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
          flexWrap="wrap"
          useFlexGap
        >
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium">
            Medium
          </Button>
          <Button variant="contained" size="large">
            Large
          </Button>
        </Stack>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="subtitle2" color="text.secondary">
          Disabled
        </Typography>
        <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
          <Button variant="contained" disabled>
            Contained
          </Button>
          <Button variant="outlined" disabled>
            Outlined
          </Button>
          <Button variant="text" disabled>
            Text
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
