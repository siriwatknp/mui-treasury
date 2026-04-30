'use client';

import * as React from 'react';

import { Box, Stack, Typography } from '@mui/material';

export function TypographyMuiTreasury() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 4,
        width: '100%',
      }}
    >
      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Headings
        </Typography>
        <Stack spacing={1}>
          <Typography variant="h1">h1. Heading</Typography>
          <Typography variant="h2">h2. Heading</Typography>
          <Typography variant="h3">h3. Heading</Typography>
          <Typography variant="h4">h4. Heading</Typography>
          <Typography variant="h5">h5. Heading</Typography>
          <Typography variant="h6">h6. Heading</Typography>
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Body
        </Typography>
        <Stack spacing={1}>
          <Typography variant="subtitle1">
            subtitle1. Lorem ipsum dolor sit amet.
          </Typography>
          <Typography variant="subtitle2">
            subtitle2. Lorem ipsum dolor sit amet.
          </Typography>
          <Typography variant="body1">
            body1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Typography variant="body2">
            body2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Small text
        </Typography>
        <Stack spacing={1}>
          <Typography variant="caption" display="block">
            caption text
          </Typography>
          <Typography variant="overline" display="block">
            overline text
          </Typography>
          <Typography variant="button" display="block">
            button text
          </Typography>
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Colors
        </Typography>
        <Stack spacing={1}>
          <Typography color="text.primary">text.primary</Typography>
          <Typography color="text.secondary">text.secondary</Typography>
          <Typography color="primary.main">primary.main</Typography>
          <Typography color="error.main">error.main</Typography>
          <Typography color="success.main">success.main</Typography>
          <Typography color="warning.main">warning.main</Typography>
        </Stack>
      </Box>
    </Box>
  );
}
