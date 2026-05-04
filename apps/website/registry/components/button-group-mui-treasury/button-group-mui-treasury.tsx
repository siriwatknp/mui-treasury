'use client';

import * as React from 'react';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import {
  Box,
  Button,
  ButtonGroup,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

export function ButtonGroupMuiTreasury() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 8,
        width: '100%',
      }}
    >
      <Box>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Editor toolbar
        </Typography>
        <Paper
          variant="outlined"
          sx={{ p: 1, display: 'inline-flex', borderRadius: 1 }}
        >
          <ButtonGroup variant="outlined" aria-label="text formatting">
            <Button aria-label="bold">
              <FormatBoldIcon fontSize="small" />
            </Button>
            <Button aria-label="italic">
              <FormatItalicIcon fontSize="small" />
            </Button>
            <Button aria-label="underline">
              <FormatUnderlinedIcon fontSize="small" />
            </Button>
          </ButtonGroup>
        </Paper>
      </Box>
      <Box>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Save action
        </Typography>
        <Stack
          spacing={0.5}
          sx={{
            alignItems: 'flex-start',
          }}
        >
          <ButtonGroup
            variant="contained"
            aria-label="save changes split button"
          >
            <Button>Save changes</Button>
            <Button size="small" aria-label="more save options">
              <ArrowDropDownIcon />
            </Button>
          </ButtonGroup>
          <Typography
            variant="caption"
            sx={{
              color: 'text.secondary',
            }}
          >
            Saves and notifies your team.
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
