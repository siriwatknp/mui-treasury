'use client';

import * as React from 'react';

import Inbox from '@mui/icons-material/Inbox';
import Mail from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';

export function BadgeMuiTreasury() {
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
        <Typography variant="subtitle1" sx={{ mb: 3, fontWeight: 600 }}>
          Notifications
        </Typography>
        <Stack direction="row" spacing={2} sx={{
          alignItems: "center"
        }}>
          <Badge badgeContent={4} color="primary">
            <IconButton>
              <Notifications />
            </IconButton>
          </Badge>
          <Badge badgeContent={12} color="primary">
            <IconButton>
              <Mail />
            </IconButton>
          </Badge>
          <Badge badgeContent={1000} max={99} color="primary">
            <IconButton>
              <Inbox />
            </IconButton>
          </Badge>
        </Stack>
      </Box>
      <Box>
        <Typography variant="subtitle1" sx={{ mb: 3, fontWeight: 600 }}>
          Presence
        </Typography>
        <Stack direction="row" spacing={3} sx={{
          alignItems: "center"
        }}>
          <Badge
            variant="dot"
            color="success"
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          >
            <Avatar>AM</Avatar>
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
