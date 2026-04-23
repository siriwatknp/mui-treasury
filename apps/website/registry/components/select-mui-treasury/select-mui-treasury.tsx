'use client';

import * as React from 'react';

import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from '@mui/material';

export function SelectMuiTreasury() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: 4,
        width: '100%',
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="plan-label">Plan</InputLabel>
        <Select labelId="plan-label" label="Plan" defaultValue="pro">
          <MenuItem value="free">Free</MenuItem>
          <MenuItem value="pro">Pro</MenuItem>
          <MenuItem value="enterprise">Enterprise</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth disabled>
        <InputLabel id="region-label">Region</InputLabel>
        <Select labelId="region-label" label="Region" defaultValue="us">
          <MenuItem value="us">United States</MenuItem>
          <MenuItem value="eu">Europe</MenuItem>
        </Select>
      </FormControl>

      <Stack spacing={1.5}>
        <FormControl fullWidth size="small">
          <InputLabel id="size-sm-label">Small</InputLabel>
          <Select labelId="size-sm-label" label="Small" defaultValue="a">
            <MenuItem value="a">Option A</MenuItem>
            <MenuItem value="b">Option B</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="size-md-label">Medium</InputLabel>
          <Select labelId="size-md-label" label="Medium" defaultValue="a">
            <MenuItem value="a">Option A</MenuItem>
            <MenuItem value="b">Option B</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <FormControl fullWidth error>
        <InputLabel id="required-label">Required</InputLabel>
        <Select labelId="required-label" label="Required" defaultValue="">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="yes">Yes</MenuItem>
          <MenuItem value="no">No</MenuItem>
        </Select>
        <FormHelperText>Please choose an option.</FormHelperText>
      </FormControl>
    </Box>
  );
}
