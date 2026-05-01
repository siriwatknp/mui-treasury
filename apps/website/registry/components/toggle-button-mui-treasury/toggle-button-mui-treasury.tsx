'use client';

import * as React from 'react';

import {
  FormatAlignCenter,
  FormatAlignJustify,
  FormatAlignLeft,
  FormatAlignRight,
  ViewKanban,
  ViewList,
  ViewModule,
} from '@mui/icons-material';
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';

export function ToggleButtonMuiTreasury() {
  const [alignment, setAlignment] = React.useState<string | null>('left');
  const [view, setView] = React.useState<string | null>('grid');

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 8,
      }}
    >
      <Box>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Text alignment
        </Typography>
        <ToggleButtonGroup
          exclusive
          value={alignment}
          onChange={(_, next) => setAlignment(next)}
          aria-label="Text alignment"
        >
          <ToggleButton value="left" aria-label="Align left">
            <FormatAlignLeft fontSize="small" />
          </ToggleButton>
          <ToggleButton value="center" aria-label="Align center">
            <FormatAlignCenter fontSize="small" />
          </ToggleButton>
          <ToggleButton value="right" aria-label="Align right">
            <FormatAlignRight fontSize="small" />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="Align justify">
            <FormatAlignJustify fontSize="small" />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          View mode
        </Typography>
        <ToggleButtonGroup
          exclusive
          value={view}
          onChange={(_, next) => setView(next)}
          aria-label="View mode"
        >
          <ToggleButton value="list">
            <ViewList sx={{ mr: 1 }} fontSize="small" />
            List
          </ToggleButton>
          <ToggleButton value="grid">
            <ViewModule sx={{ mr: 1 }} fontSize="small" />
            Grid
          </ToggleButton>
          <ToggleButton value="board">
            <ViewKanban sx={{ mr: 1 }} fontSize="small" />
            Board
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
}
