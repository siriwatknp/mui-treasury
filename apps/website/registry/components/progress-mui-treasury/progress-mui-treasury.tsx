'use client';

import * as React from 'react';

import {
  Box,
  CircularProgress,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';

export function ProgressMuiTreasury() {
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
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
          Circular
        </Typography>
        <Stack direction="row" gap={3} alignItems="center">
          <CircularProgress />
          <CircularProgress variant="determinate" value={60} />
          <CircularProgress color="success" variant="determinate" value={100} />
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
          Linear
        </Typography>
        <Stack gap={2}>
          <LinearProgress />
          <LinearProgress variant="determinate" value={60} />
          <LinearProgress color="success" variant="determinate" value={100} />
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
          With label
        </Typography>
        <Stack direction="row" gap={3} alignItems="center">
          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" value={75} />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="caption" color="text.secondary">
                75%
              </Typography>
            </Box>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Stack direction="row" alignItems="center" gap={1}>
              <Box sx={{ flex: 1 }}>
                <LinearProgress variant="determinate" value={45} />
              </Box>
              <Typography variant="caption" color="text.secondary">
                45%
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
          Buffer
        </Typography>
        <LinearProgress variant="buffer" value={60} valueBuffer={80} />
      </Box>
    </Box>
  );
}
