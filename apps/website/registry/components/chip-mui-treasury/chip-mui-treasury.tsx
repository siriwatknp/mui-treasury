'use client';

import * as React from 'react';

import Cancel from '@mui/icons-material/Cancel';
import CheckCircle from '@mui/icons-material/CheckCircle';
import LocalShipping from '@mui/icons-material/LocalShipping';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import { Box, Chip, Stack, Typography } from '@mui/material';

export function ChipMuiTreasury() {
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
          Filter by tag
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            alignItems: "center",
            flexWrap: "wrap"
          }}>
          <Chip label="React" variant="filled" onDelete={() => {}} />
          <Chip label="TypeScript" variant="filled" onDelete={() => {}} />
          <Chip label="GraphQL" variant="filled" />
          <Chip label="Postgres" variant="outlined" />
          <Chip label="Docker" variant="outlined" />
          <Chip label="Kubernetes" variant="outlined" />
        </Stack>
      </Box>
      <Box>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Order status
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            alignItems: "center",
            flexWrap: "wrap"
          }}>
          <Chip icon={<CheckCircle />} label="Delivered" color="success" />
          <Chip icon={<LocalShipping />} label="In transit" color="warning" />
          <Chip icon={<Cancel />} label="Cancelled" color="error" />
          <Chip icon={<MoreHoriz />} label="Draft" color="default" />
        </Stack>
      </Box>
    </Box>
  );
}
