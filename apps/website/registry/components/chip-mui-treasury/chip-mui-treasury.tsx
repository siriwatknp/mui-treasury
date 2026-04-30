'use client';

import * as React from 'react';

import Done from '@mui/icons-material/Done';
import Face from '@mui/icons-material/Face';
import { Avatar, Box, Chip, Stack, Typography } from '@mui/material';

export function ChipMuiTreasury() {
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
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Variants
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
          <Chip label="Filled" variant="filled" />
          <Chip label="Outlined" variant="outlined" />
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Colors
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
          <Chip label="Primary" color="primary" />
          <Chip label="Secondary" color="secondary" />
          <Chip label="Success" color="success" />
          <Chip label="Error" color="error" />
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          With avatar / icon
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
          <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
          <Chip
            avatar={<Avatar src="https://i.pravatar.cc/64?img=5" />}
            label="Image"
          />
          <Chip icon={<Face />} label="Icon" variant="outlined" />
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Deletable & disabled
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
          <Chip label="Deletable" onDelete={() => {}} />
          <Chip
            label="Custom delete"
            onDelete={() => {}}
            deleteIcon={<Done />}
            color="primary"
          />
          <Chip label="Disabled" disabled />
        </Stack>
      </Box>
    </Box>
  );
}
