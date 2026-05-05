'use client';

import * as React from 'react';

import DeleteOutline from '@mui/icons-material/DeleteOutlined';
import Drafts from '@mui/icons-material/Drafts';
import Inbox from '@mui/icons-material/Inbox';
import MoreVert from '@mui/icons-material/MoreVert';
import Report from '@mui/icons-material/Report';
import Send from '@mui/icons-material/Send';
import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';

const MAILBOXES = [
  { key: 'inbox', label: 'Inbox', icon: <Inbox /> },
  { key: 'drafts', label: 'Drafts', icon: <Drafts /> },
  { key: 'sent', label: 'Sent', icon: <Send /> },
  { key: 'spam', label: 'Spam', icon: <Report /> },
  { key: 'trash', label: 'Trash', icon: <DeleteOutline /> },
] as const;

const ACTIVITY = [
  {
    initials: 'AL',
    primary: 'Ada commented on PR #42',
    secondary: '2h ago',
  },
  {
    initials: 'MK',
    primary: 'Marcus merged design-tokens',
    secondary: '5h ago',
  },
  {
    initials: 'SR',
    primary: 'Sofia opened issue #128',
    secondary: 'Yesterday',
  },
  {
    initials: 'JT',
    primary: 'Jun deployed v1.4.0 to staging',
    secondary: '2 days ago',
  },
];

export function ListMuiTreasury() {
  const [selected, setSelected] = React.useState<string>('drafts');

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
          Mailbox
        </Typography>
        <Paper variant="outlined" sx={{ minWidth: 280 }}>
          <List disablePadding>
            {MAILBOXES.map((box) => (
              <ListItemButton
                key={box.key}
                selected={selected === box.key}
                onClick={() => setSelected(box.key)}
              >
                <ListItemIcon>{box.icon}</ListItemIcon>
                <ListItemText primary={box.label} />
              </ListItemButton>
            ))}
          </List>
        </Paper>
      </Box>

      <Box>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Recent activity
        </Typography>
        <Paper variant="outlined" sx={{ minWidth: 280 }}>
          <List disablePadding>
            {ACTIVITY.map((item) => (
              <ListItem
                key={item.primary}
                secondaryAction={
                  <IconButton edge="end" aria-label="more actions">
                    <MoreVert />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar>{item.initials}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={item.primary}
                  secondary={item.secondary}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
    </Box>
  );
}
