'use client';
import * as React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// Shared chrome for fixture pages so every component fixture reads the same.

export function Fixture({
  title,
  maxWidth = 1100,
  children,
}: {
  title: string;
  maxWidth?: number;
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ p: 4, maxWidth, mx: 'auto' }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="subtitle2" sx={{ mb: 1.5, color: 'text.secondary' }}>
        {title}
      </Typography>
      <Stack
        direction="row"
        useFlexGap
        sx={{ alignItems: 'flex-start', flexWrap: 'wrap', gap: 3 }}
      >
        {children}
      </Stack>
    </Box>
  );
}
