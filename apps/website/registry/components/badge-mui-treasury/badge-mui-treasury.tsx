'use client';

import * as React from 'react';

import Mail from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import { Badge, Box, IconButton, Stack, Typography } from '@mui/material';

export function BadgeMuiTreasury() {
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
          Number
        </Typography>
        <Stack direction="row" spacing={3} alignItems="center">
          <Badge badgeContent={4} color="primary">
            <IconButton>
              <Mail />
            </IconButton>
          </Badge>
          <Badge badgeContent={12} color="error">
            <IconButton>
              <Notifications />
            </IconButton>
          </Badge>
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Dot
        </Typography>
        <Stack direction="row" spacing={3} alignItems="center">
          <Badge variant="dot" color="error">
            <IconButton>
              <Mail />
            </IconButton>
          </Badge>
          <Badge variant="dot" color="success">
            <IconButton>
              <Notifications />
            </IconButton>
          </Badge>
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Colors
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
          <Badge badgeContent={1} color="primary">
            <IconButton>
              <Mail />
            </IconButton>
          </Badge>
          <Badge badgeContent={2} color="secondary">
            <IconButton>
              <Mail />
            </IconButton>
          </Badge>
          <Badge badgeContent={3} color="success">
            <IconButton>
              <Mail />
            </IconButton>
          </Badge>
          <Badge badgeContent={4} color="warning">
            <IconButton>
              <Mail />
            </IconButton>
          </Badge>
          <Badge badgeContent={5} color="info">
            <IconButton>
              <Mail />
            </IconButton>
          </Badge>
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Max & showZero
        </Typography>
        <Stack direction="row" spacing={3} alignItems="center">
          <Badge badgeContent={1000} max={99} color="primary">
            <IconButton>
              <Notifications />
            </IconButton>
          </Badge>
          <Badge badgeContent={0} showZero color="primary">
            <IconButton>
              <Mail />
            </IconButton>
          </Badge>
        </Stack>
      </Box>
    </Box>
  );
}
