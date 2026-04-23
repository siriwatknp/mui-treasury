'use client';

import * as React from 'react';

import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

export function RadioMuiTreasury() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: 4,
        width: '100%',
      }}
    >
      <FormControl>
        <FormLabel>Plan</FormLabel>
        <RadioGroup defaultValue="pro" name="plan">
          <FormControlLabel value="free" control={<Radio />} label="Free" />
          <FormControlLabel value="pro" control={<Radio />} label="Pro" />
          <FormControlLabel
            value="enterprise"
            control={<Radio />}
            label="Enterprise"
          />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel>Disabled</FormLabel>
        <RadioGroup defaultValue="b" name="disabled" row sx={{ gap: 2 }}>
          <FormControlLabel
            value="a"
            control={<Radio />}
            label="Off"
            disabled
          />
          <FormControlLabel value="b" control={<Radio />} label="On" disabled />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel>Size</FormLabel>
        <RadioGroup
          defaultValue="medium"
          name="size"
          row
          sx={{ gap: 2, alignItems: 'center' }}
        >
          <FormControlLabel
            value="small"
            control={<Radio size="small" />}
            label="Small"
          />
          <FormControlLabel
            value="medium"
            control={<Radio size="medium" />}
            label="Medium"
          />
          <FormControlLabel
            value="large"
            control={<Radio size="large" />}
            label="Large"
          />
        </RadioGroup>
      </FormControl>

      <FormControl error>
        <FormLabel>Required</FormLabel>
        <RadioGroup name="required" row sx={{ gap: 2 }}>
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        <FormHelperText>Please select an option.</FormHelperText>
      </FormControl>
    </Box>
  );
}
