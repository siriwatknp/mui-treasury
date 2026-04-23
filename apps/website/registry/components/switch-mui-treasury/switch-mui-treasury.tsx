'use client';

import * as React from 'react';

import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Switch,
} from '@mui/material';

export function SwitchMuiTreasury() {
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
        <FormLabel component="legend">Features</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Dark mode"
          />
          <FormControlLabel control={<Switch />} label="Auto-save" />
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Notifications"
          />
        </FormGroup>
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel component="legend">Disabled</FormLabel>
        <FormGroup row sx={{ gap: 2 }}>
          <FormControlLabel control={<Switch disabled />} label="Off" />
          <FormControlLabel
            control={<Switch disabled defaultChecked />}
            label="On"
          />
        </FormGroup>
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel component="legend">Size</FormLabel>
        <FormGroup row sx={{ gap: 2, alignItems: 'center' }}>
          <FormControlLabel
            control={<Switch size="small" defaultChecked />}
            label="Small"
          />
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Medium"
          />
          <FormControlLabel
            control={<Switch size="large" defaultChecked />}
            label="Large"
          />
        </FormGroup>
      </FormControl>

      <FormControl error component="fieldset">
        <FormLabel component="legend">Required</FormLabel>
        <FormGroup>
          <FormControlLabel control={<Switch />} label="I accept" />
        </FormGroup>
        <FormHelperText>Enable to continue.</FormHelperText>
      </FormControl>
    </Box>
  );
}
