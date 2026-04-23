'use client';

import * as React from 'react';

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
import {
  Archive,
  ContentCopy,
  ContentCut,
  ContentPaste,
  Logout,
  PersonOutline,
  Settings,
} from '@mui/icons-material';

const menuPaperSx = {
  borderRadius: 2,
  boxShadow: 8,
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
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: 4,
        width: '100%',
      }}
    >
      <Box>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{ mb: 1 }}
        >
          Basic
        </Typography>
        <Paper variant="outlined" sx={menuPaperSx}>
          <MenuList sx={menuListSx}>
            <MenuItem>Profile</MenuItem>
            <MenuItem selected>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Paper>
      </Box>

      <Box>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{ mb: 1 }}
        >
          With icons
        </Typography>
        <Paper variant="outlined" sx={menuPaperSx}>
          <MenuList sx={menuListSx}>
            <MenuItem>
              <ListItemIcon>
                <PersonOutline fontSize="small" />
              </ListItemIcon>
              <ListItemText>Profile</ListItemText>
            </MenuItem>
            <MenuItem>
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
              <ListItemText>Logout</ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>
      </Box>

      <Box>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{ mb: 1 }}
        >
          Dense
        </Typography>
        <Paper variant="outlined" sx={menuPaperSx}>
          <MenuList dense sx={menuListSx}>
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
          </MenuList>
        </Paper>
      </Box>

      <Box>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{ mb: 1 }}
        >
          Disabled item
        </Typography>
        <Paper variant="outlined" sx={menuPaperSx}>
          <MenuList sx={menuListSx}>
            <MenuItem>
              <ListItemIcon>
                <Archive fontSize="small" />
              </ListItemIcon>
              <ListItemText>Archive</ListItemText>
            </MenuItem>
            <MenuItem disabled>
              <ListItemText inset>Move</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemText inset>Rename</ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>
      </Box>
    </Box>
  );
}
