'use client';

import * as React from 'react';

import { Autocomplete, Box, TextField, Typography } from '@mui/material';

const TAGS = [
  'Frontend',
  'Backend',
  'Design',
  'DevOps',
  'Mobile',
  'Data',
  'Security',
];

const COUNTRIES = [
  'Australia',
  'Canada',
  'Germany',
  'Japan',
  'Thailand',
  'United Kingdom',
  'United States',
];

export function AutocompleteMuiTreasury() {
  const [country, setCountry] = React.useState<string | null>(null);

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
      <Box sx={{ width: 320 }}>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Project tags
        </Typography>
        <Autocomplete
          multiple
          options={TAGS}
          defaultValue={['Frontend', 'Design', 'DevOps']}
          renderInput={(params) => (
            <TextField {...params} placeholder="Add tag" />
          )}
        />
      </Box>

      <Box sx={{ width: 320 }}>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Billing country
        </Typography>
        <Autocomplete
          options={COUNTRIES}
          value={country}
          onChange={(_, value) => setCountry(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Select a country"
              error={!country}
              helperText={!country ? 'Required for tax invoicing.' : undefined}
            />
          )}
        />
      </Box>
    </Box>
  );
}
