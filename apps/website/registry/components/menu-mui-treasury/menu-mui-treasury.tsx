'use client';

import * as React from 'react';

import {
  Archive,
  ContentCopy,
  ContentCut,
  ContentPaste,
  Logout,
  PersonOutline,
  Settings,
} from '@mui/icons-material';
import {
  Box,
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from '@mui/material';

const menuPaperSx = {
  borderRadius: 2,
  boxShadow: 8,
  minWidth: 220,
};

const menuListSx = {
  p: '6px',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
};

export function MenuMuiTreasury() {
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
          Account menu
        </Typography>
        <Paper variant="outlined" sx={menuPaperSx}>
          <MenuList sx={menuListSx}>
            <MenuItem>
              <ListItemIcon>
                <PersonOutline fontSize="small" />
              </ListItemIcon>
              <ListItemText>Profile</ListItemText>
            </MenuItem>
            <MenuItem selected>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              <ListItemText>Settings</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              <ListItemText>Sign out</ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>
      </Box>

      <Box>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Edit actions
        </Typography>
        <Paper variant="outlined" sx={menuPaperSx}>
          <MenuList sx={menuListSx}>
            <MenuItem>
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText>Paste</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem disabled>
              <ListItemIcon>
                <Archive fontSize="small" />
              </ListItemIcon>
              <ListItemText>Archive</ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>
      </Box>
    </Box>
  );
}
