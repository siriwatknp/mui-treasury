'use client';

import * as React from 'react';

import { Box, Slider, Stack, Typography } from '@mui/material';

const MARKS = [
  { value: 0, label: '0' },
  { value: 25, label: '25' },
  { value: 50, label: '50' },
  { value: 75, label: '75' },
  { value: 100, label: '100' },
];

export function SliderMuiTreasury() {
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
          Default
        </Typography>
        <Slider defaultValue={30} aria-label="Default" />
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="subtitle2" color="text.secondary">
          With marks
        </Typography>
        <Slider
          defaultValue={50}
          step={25}
          marks={MARKS}
          min={0}
          max={100}
          aria-label="With marks"
        />
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="subtitle2" color="text.secondary">
          Range
        </Typography>
        <Slider
          defaultValue={[20, 80]}
          valueLabelDisplay="auto"
          aria-label="Range"
        />
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="subtitle2" color="text.secondary">
          Disabled
        </Typography>
        <Slider defaultValue={40} disabled aria-label="Disabled" />
      </Stack>
    </Box>
  );
}
