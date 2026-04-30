'use client';

import * as React from 'react';

import { Box, Button, ButtonGroup, Stack, Typography } from '@mui/material';

export function ButtonGroupMuiTreasury() {
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
          Variants
        </Typography>
        <Stack spacing={1.5}>
          <ButtonGroup variant="contained">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          <ButtonGroup variant="outlined">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          <ButtonGroup variant="text">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Stack>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="subtitle2" color="text.secondary">
          Sizes
        </Typography>
        <Stack spacing={1.5} alignItems="flex-start">
          <ButtonGroup size="small" variant="outlined">
            <Button>Small</Button>
            <Button>Small</Button>
            <Button>Small</Button>
          </ButtonGroup>
          <ButtonGroup size="medium" variant="outlined">
            <Button>Medium</Button>
            <Button>Medium</Button>
            <Button>Medium</Button>
          </ButtonGroup>
          <ButtonGroup size="large" variant="outlined">
            <Button>Large</Button>
            <Button>Large</Button>
            <Button>Large</Button>
          </ButtonGroup>
        </Stack>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="subtitle2" color="text.secondary">
          Vertical
        </Typography>
        <ButtonGroup orientation="vertical" variant="outlined">
          <Button>Top</Button>
          <Button>Middle</Button>
          <Button>Bottom</Button>
        </ButtonGroup>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="subtitle2" color="text.secondary">
          Disabled
        </Typography>
        <Stack spacing={1.5}>
          <ButtonGroup variant="contained" disabled>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          <ButtonGroup variant="outlined" disabled>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Stack>
      </Stack>
    </Box>
  );
}
