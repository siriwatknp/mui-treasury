'use client';

import * as React from 'react';

import {
  Favorite,
  PersonOutline,
  PhoneOutlined,
  Settings,
} from '@mui/icons-material';
import { Box, Stack, Tab, Tabs, Typography } from '@mui/material';

const noop = () => {};

export function TabsMuiTreasury() {
  return (
    <Stack spacing={3} sx={{ width: '100%' }}>
      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Basic
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={0} onChange={noop} aria-label="basic tabs">
            <Tab label="Overview" />
            <Tab label="Activity" />
            <Tab label="Settings" />
          </Tabs>
        </Box>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          With icons
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={1} onChange={noop} aria-label="icon tabs">
            <Tab icon={<PersonOutline />} iconPosition="start" label="Profile" />
            <Tab icon={<Favorite />} iconPosition="start" label="Favorites" />
            <Tab icon={<PhoneOutlined />} iconPosition="start" label="Contact" />
            <Tab icon={<Settings />} iconPosition="start" label="Settings" />
          </Tabs>
        </Box>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Full width
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={0}
            onChange={noop}
            variant="fullWidth"
            aria-label="full width tabs"
          >
            <Tab label="Daily" />
            <Tab label="Weekly" />
            <Tab label="Monthly" />
          </Tabs>
        </Box>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Scrollable
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={2}
            onChange={noop}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable tabs"
          >
            <Tab label="Inbox" />
            <Tab label="Starred" />
            <Tab label="Sent" />
            <Tab label="Drafts" />
            <Tab label="Spam" />
            <Tab label="Trash" />
            <Tab label="Archive" />
            <Tab label="All mail" />
          </Tabs>
        </Box>
      </Box>
    </Stack>
  );
}
