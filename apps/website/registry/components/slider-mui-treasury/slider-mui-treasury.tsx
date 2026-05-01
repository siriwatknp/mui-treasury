'use client';

import * as React from 'react';

import { Box, Slider, Stack, Typography } from '@mui/material';

const PRICE_MARKS = [
  { value: 0, label: '$0' },
  { value: 500, label: '$500' },
  { value: 1000, label: '$1k' },
];

export function SliderMuiTreasury() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 8,
        width: '100%',
      }}
    >
      <Stack spacing={3} sx={{ width: 280 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          Output volume
        </Typography>
        <Slider
          defaultValue={62}
          valueLabelDisplay="on"
          aria-label="Output volume"
        />
      </Stack>

      <Stack spacing={3} sx={{ width: 280 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          Price range
        </Typography>
        <Slider
          defaultValue={[200, 750]}
          min={0}
          max={1000}
          step={50}
          marks={PRICE_MARKS}
          valueLabelDisplay="on"
          valueLabelFormat={(v) => `$${v}`}
          aria-label="Price range"
        />
      </Stack>
    </Box>
  );
}
