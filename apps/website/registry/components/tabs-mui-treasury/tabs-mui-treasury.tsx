'use client';

import * as React from 'react';

import { Dashboard, Group, Settings, Timeline } from '@mui/icons-material';
import { Badge, Box, Paper, Stack, Tab, Tabs, Typography } from '@mui/material';

export function TabsMuiTreasury() {
  const [overview, setOverview] = React.useState(1);
  const [mail, setMail] = React.useState(0);

  return (
    <Stack spacing={4} sx={{ width: '100%', maxWidth: 720, mx: 'auto' }}>
      <Box>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Project workspace
        </Typography>
        <Paper variant="outlined">
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={overview}
              onChange={(_, v) => setOverview(v)}
              aria-label="workspace tabs"
            >
              <Tab
                icon={<Dashboard fontSize="small" />}
                iconPosition="start"
                label="Overview"
              />
              <Tab
                icon={<Timeline fontSize="small" />}
                iconPosition="start"
                label="Activity"
              />
              <Tab
                icon={<Settings fontSize="small" />}
                iconPosition="start"
                label="Settings"
              />
              <Tab
                icon={<Group fontSize="small" />}
                iconPosition="start"
                label="Members"
              />
            </Tabs>
          </Box>
        </Paper>
      </Box>

      <Box>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Mailbox
        </Typography>
        <Paper variant="outlined">
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={mail}
              onChange={(_, v) => setMail(v)}
              centered
              aria-label="mailbox tabs"
            >
              <Tab
                label={
                  <Badge badgeContent={4} color="primary" sx={{ pr: 1.5 }}>
                    Inbox
                  </Badge>
                }
              />
              <Tab
                label={
                  <Badge badgeContent={2} color="default" sx={{ pr: 1.5 }}>
                    Drafts
                  </Badge>
                }
              />
              <Tab label="Archive" />
            </Tabs>
          </Box>
        </Paper>
      </Box>
    </Stack>
  );
}
