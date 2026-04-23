'use client';

import * as React from 'react';

import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from '@mui/material';

export function CheckboxMuiTreasury() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: 4,
        width: '100%',
      }}
    >
      <FormControl component="fieldset">
        <FormLabel component="legend">Notifications</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Email"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Push"
          />
          <FormControlLabel control={<Checkbox />} label="SMS" />
        </FormGroup>
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel component="legend">Disabled</FormLabel>
        <FormGroup row sx={{ gap: 2 }}>
          <FormControlLabel control={<Checkbox disabled />} label="Off" />
          <FormControlLabel
            control={<Checkbox disabled defaultChecked />}
            label="On"
          />
        </FormGroup>
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel component="legend">Size</FormLabel>
        <FormGroup row sx={{ gap: 2, alignItems: 'center' }}>
          <FormControlLabel
            control={<Checkbox size="small" defaultChecked />}
            label="Small"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Medium"
          />
          <FormControlLabel
            control={<Checkbox size="large" defaultChecked />}
            label="Large"
          />
        </FormGroup>
      </FormControl>

      <FormControl error component="fieldset">
        <FormLabel component="legend">Required</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="I agree to the terms"
          />
        </FormGroup>
        <FormHelperText>Please accept the terms to continue.</FormHelperText>
      </FormControl>
    </Box>
  );
}
