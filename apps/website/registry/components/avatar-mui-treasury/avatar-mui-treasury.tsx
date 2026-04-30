'use client';

import * as React from 'react';

import { Avatar, AvatarGroup, Box, Stack, Typography } from '@mui/material';

export function AvatarMuiTreasury() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: 4,
        width: '100%',
      }}
    >
      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Letters
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar>A</Avatar>
          <Avatar>B</Avatar>
          <Avatar>C</Avatar>
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Images
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar alt="User 1" src="https://i.pravatar.cc/64?img=1" />
          <Avatar alt="User 2" src="https://i.pravatar.cc/64?img=2" />
          <Avatar alt="User 3" src="https://i.pravatar.cc/64?img=3" />
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Variants
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar variant="circular">C</Avatar>
          <Avatar variant="rounded">R</Avatar>
          <Avatar variant="square">S</Avatar>
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Sizes
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar sx={{ width: 24, height: 24 }}>S</Avatar>
          <Avatar sx={{ width: 40, height: 40 }}>M</Avatar>
          <Avatar sx={{ width: 64, height: 64 }}>L</Avatar>
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Group
        </Typography>
        <AvatarGroup max={4}>
          <Avatar alt="User 1" src="https://i.pravatar.cc/64?img=1" />
          <Avatar alt="User 2" src="https://i.pravatar.cc/64?img=2" />
          <Avatar alt="User 3" src="https://i.pravatar.cc/64?img=3" />
          <Avatar alt="User 4" src="https://i.pravatar.cc/64?img=4" />
          <Avatar alt="User 5" src="https://i.pravatar.cc/64?img=5" />
        </AvatarGroup>
      </Box>
    </Box>
  );
}
