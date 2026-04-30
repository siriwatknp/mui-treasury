'use client';

import * as React from 'react';

import Comment from '@mui/icons-material/Comment';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import Drafts from '@mui/icons-material/Drafts';
import Folder from '@mui/icons-material/Folder';
import ImageIcon from '@mui/icons-material/Image';
import Inbox from '@mui/icons-material/Inbox';
import Send from '@mui/icons-material/Send';
import Work from '@mui/icons-material/Work';
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

export function ListMuiTreasury() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 4,
        width: '100%',
      }}
    >
      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Basic
        </Typography>
        <Paper variant="outlined">
          <List>
            <ListItemButton>
              <ListItemText primary="Inbox" />
            </ListItemButton>
            <ListItemButton selected>
              <ListItemText primary="Drafts" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Sent" />
            </ListItemButton>
          </List>
        </Paper>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          With icons
        </Typography>
        <Paper variant="outlined">
          <List>
            <ListItemButton>
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Drafts />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Send />
              </ListItemIcon>
              <ListItemText primary="Sent" />
            </ListItemButton>
          </List>
        </Paper>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          With avatars
        </Typography>
        <Paper variant="outlined">
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <Work />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Work" secondary="Jan 7, 2014" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <Folder />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Vacation" secondary="Jul 20, 2014" />
            </ListItem>
          </List>
        </Paper>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          With secondary action
        </Typography>
        <Paper variant="outlined">
          <List>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                  <Comment />
                </IconButton>
              }
            >
              <ListItemText primary="Line item one" />
            </ListItem>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteOutline />
                </IconButton>
              }
            >
              <ListItemText primary="Line item two" />
            </ListItem>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                  <Comment />
                </IconButton>
              }
            >
              <ListItemText primary="Line item three" />
            </ListItem>
          </List>
        </Paper>
      </Box>
    </Box>
  );
}
