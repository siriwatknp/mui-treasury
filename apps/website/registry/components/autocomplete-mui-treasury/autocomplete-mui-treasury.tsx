'use client';

import * as React from 'react';

import { Autocomplete, Box, FormControl, TextField } from '@mui/material';

const FRUITS = ['Apple', 'Banana', 'Cherry', 'Mango'];

export function AutocompleteMuiTreasury() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: 4,
        width: '100%',
      }}
    >
      <FormControl fullWidth>
        <Autocomplete
          options={FRUITS}
          defaultValue="Apple"
          renderInput={(params) => (
            <TextField {...params} label="Fruit" placeholder="Pick one" />
          )}
        />
      </FormControl>

      <FormControl fullWidth>
        <Autocomplete
          disabled
          options={FRUITS}
          defaultValue="Banana"
          renderInput={(params) => <TextField {...params} label="Disabled" />}
        />
      </FormControl>

      <FormControl fullWidth>
        <Autocomplete
          multiple
          options={FRUITS}
          defaultValue={['Apple', 'Cherry']}
          renderInput={(params) => (
            <TextField {...params} label="Favorites" placeholder="Add more" />
          )}
        />
      </FormControl>

      <FormControl fullWidth error>
        <Autocomplete
          options={FRUITS}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Required"
              error
              helperText="Please choose a fruit."
            />
          )}
        />
      </FormControl>
    </Box>
  );
}
