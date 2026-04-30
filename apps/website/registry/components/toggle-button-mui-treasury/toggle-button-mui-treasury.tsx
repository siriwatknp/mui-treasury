'use client';

import * as React from 'react';

import {
  FormatAlignCenter,
  FormatAlignLeft,
  FormatAlignRight,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from '@mui/icons-material';
import {
  Box,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';

export function ToggleButtonMuiTreasury() {
  const [alignment, setAlignment] = React.useState<string | null>('left');
  const [formats, setFormats] = React.useState<string[]>(['bold', 'italic']);
  const [size, setSize] = React.useState<string | null>('medium');

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 4,
        width: '100%',
      }}
    >
      <Stack spacing={1.5}>
        <Typography variant="subtitle2" color="text.secondary">
          Single select
        </Typography>
        <ToggleButtonGroup
          exclusive
          value={alignment}
          onChange={(_, next) => setAlignment(next)}
          aria-label="Text alignment"
        >
          <ToggleButton value="left" aria-label="Left">
            <FormatAlignLeft fontSize="small" />
          </ToggleButton>
          <ToggleButton value="center" aria-label="Center">
            <FormatAlignCenter fontSize="small" />
          </ToggleButton>
          <ToggleButton value="right" aria-label="Right">
            <FormatAlignRight fontSize="small" />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="subtitle2" color="text.secondary">
          Multiple select
        </Typography>
        <ToggleButtonGroup
          value={formats}
          onChange={(_, next) => setFormats(next)}
          aria-label="Text formatting"
        >
          <ToggleButton value="bold" aria-label="Bold">
            <FormatBold fontSize="small" />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="Italic">
            <FormatItalic fontSize="small" />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="Underlined">
            <FormatUnderlined fontSize="small" />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="subtitle2" color="text.secondary">
          Sizes
        </Typography>
        <Stack spacing={1} alignItems="flex-start">
          <ToggleButtonGroup
            size="small"
            exclusive
            value={size}
            onChange={(_, next) => setSize(next)}
            aria-label="Size small"
          >
            <ToggleButton value="small">Small</ToggleButton>
            <ToggleButton value="medium">Medium</ToggleButton>
            <ToggleButton value="large">Large</ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup
            exclusive
            value={size}
            onChange={(_, next) => setSize(next)}
            aria-label="Size medium"
          >
            <ToggleButton value="small">Small</ToggleButton>
            <ToggleButton value="medium">Medium</ToggleButton>
            <ToggleButton value="large">Large</ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup
            size="large"
            exclusive
            value={size}
            onChange={(_, next) => setSize(next)}
            aria-label="Size large"
          >
            <ToggleButton value="small">Small</ToggleButton>
            <ToggleButton value="medium">Medium</ToggleButton>
            <ToggleButton value="large">Large</ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="subtitle2" color="text.secondary">
          Disabled
        </Typography>
        <ToggleButtonGroup
          exclusive
          value="left"
          disabled
          aria-label="Disabled"
        >
          <ToggleButton value="left" aria-label="Left">
            <FormatAlignLeft fontSize="small" />
          </ToggleButton>
          <ToggleButton value="center" aria-label="Center">
            <FormatAlignCenter fontSize="small" />
          </ToggleButton>
          <ToggleButton value="right" aria-label="Right">
            <FormatAlignRight fontSize="small" />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Box>
  );
}
