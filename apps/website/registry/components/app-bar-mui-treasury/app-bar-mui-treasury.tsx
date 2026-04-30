'use client';

import * as React from 'react';

import {
  Menu as MenuIcon,
  NotificationsNone,
  Search as SearchIcon,
  Settings,
} from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  InputBase,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';

export function AppBarMuiTreasury() {
  return (
    <Stack spacing={3} sx={{ width: '100%' }}>
      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Primary
        </Typography>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Treasury
            </Typography>
            <IconButton color="inherit" aria-label="notifications">
              <NotificationsNone />
            </IconButton>
            <IconButton color="inherit" aria-label="settings">
              <Settings />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          With search
        </Typography>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ mr: 2, display: { xs: 'none', sm: 'block' } }}
            >
              Treasury
            </Typography>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                bgcolor: 'action.hover',
                borderRadius: 2,
                px: 1.5,
                flexGrow: 1,
                maxWidth: 360,
              }}
            >
              <SearchIcon fontSize="small" sx={{ mr: 1, opacity: 0.6 }} />
              <InputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                sx={{ flex: 1 }}
              />
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Avatar sx={{ width: 32, height: 32 }}>S</Avatar>
          </Toolbar>
        </AppBar>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Outlined (elevation 0)
        </Typography>
        <AppBar
          position="static"
          color="transparent"
          elevation={0}
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
            <IconButton aria-label="notifications">
              <NotificationsNone />
            </IconButton>
            <IconButton aria-label="settings">
              <Settings />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Transparent
        </Typography>
        <AppBar position="static" color="transparent" elevation={1}>
          <Toolbar>
            <IconButton edge="start" aria-label="menu" sx={{ mr: 1 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Workspace
            </Typography>
            <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
          </Toolbar>
        </AppBar>
      </Box>
    </Stack>
  );
}
