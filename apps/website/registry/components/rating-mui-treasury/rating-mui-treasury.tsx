'use client';

import * as React from 'react';

import { Box, FormControl, FormLabel, Rating, Stack } from '@mui/material';

export function RatingMuiTreasury() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: 4,
        width: '100%',
      }}
    >
      <FormControl>
        <FormLabel>Default</FormLabel>
        <Rating name="default" defaultValue={3} />
      </FormControl>

      <FormControl>
        <FormLabel>Read only</FormLabel>
        <Rating name="readonly" value={4.5} precision={0.5} readOnly />
      </FormControl>

      <FormControl disabled>
        <FormLabel>Disabled</FormLabel>
        <Rating name="disabled" defaultValue={2} disabled />
      </FormControl>

      <FormControl>
        <FormLabel>Sizes</FormLabel>
        <Stack spacing={1} alignItems="flex-start">
          <Rating name="size-sm" defaultValue={3} size="small" />
          <Rating name="size-md" defaultValue={3} size="medium" />
          <Rating name="size-lg" defaultValue={3} size="large" />
        </Stack>
      </FormControl>
    </Box>
  );
}
