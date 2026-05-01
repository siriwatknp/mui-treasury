'use client';

import * as React from 'react';

import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';

export function SelectMuiTreasury() {
  const [country, setCountry] = React.useState('');

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
      <Box sx={{ width: 260 }}>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Choose a plan
        </Typography>
        <FormControl fullWidth>
          <InputLabel id="plan-label">Plan</InputLabel>
          <Select labelId="plan-label" label="Plan" defaultValue="pro">
            <MenuItem value="free">Free</MenuItem>
            <MenuItem value="pro">Pro</MenuItem>
            <MenuItem value="team">Team</MenuItem>
            <MenuItem value="enterprise">Enterprise</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ width: 260 }}>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Billing country
        </Typography>
        <FormControl fullWidth error={!country}>
          <InputLabel id="country-label">Country</InputLabel>
          <Select
            labelId="country-label"
            label="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <MenuItem value="au">Australia</MenuItem>
            <MenuItem value="ca">Canada</MenuItem>
            <MenuItem value="de">Germany</MenuItem>
            <MenuItem value="jp">Japan</MenuItem>
            <MenuItem value="us">United States</MenuItem>
          </Select>
          {!country && (
            <FormHelperText>Required for tax invoicing.</FormHelperText>
          )}
        </FormControl>
      </Box>
    </Box>
  );
}
