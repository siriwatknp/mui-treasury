'use client';

import * as React from 'react';

import { Avatar, AvatarGroup, Box, Stack, Typography } from '@mui/material';
import { Bot } from 'lucide-react';

export function AvatarMuiTreasury() {
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
      <Box>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Project collaborators
        </Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Ada Lovelace">AL</Avatar>
          <Avatar alt="Linus Torvalds">LT</Avatar>
          <Avatar alt="Grace Hopper">GH</Avatar>
          <Avatar alt="Tim Berners-Lee">TB</Avatar>
          <Avatar alt="Margaret Hamilton">MH</Avatar>
          <Avatar alt="Alan Turing">AT</Avatar>
        </AvatarGroup>
      </Box>
      <Box>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Avatar variants
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: 'center',
          }}
        >
          <Avatar
            alt="Grace Hopper"
            sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}
          >
            GH
          </Avatar>
          <Avatar alt="Ada Lovelace">AL</Avatar>
          <Avatar alt="Assistant">
            <Bot size={20} />
          </Avatar>
          <Avatar variant="rounded" alt="Workspace">
            WS
          </Avatar>
        </Stack>
      </Box>
    </Box>
  );
}
