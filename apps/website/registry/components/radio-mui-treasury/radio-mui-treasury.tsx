'use client';

import * as React from 'react';

import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';

export function RadioMuiTreasury() {
  const [plan, setPlan] = React.useState('pro');
  const [accountType, setAccountType] = React.useState('');

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
          Choose a plan
        </Typography>
        <RadioGroup
          name="plan"
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
        >
          <FormControlLabel value="free" control={<Radio />} label="Free" />
          <FormControlLabel value="pro" control={<Radio />} label="Pro" />
          <FormControlLabel
            value="enterprise"
            control={<Radio />}
            label="Enterprise"
          />
          <FormControlLabel
            value="custom"
            control={<Radio />}
            label="Custom (contact sales)"
            disabled
          />
        </RadioGroup>
      </Box>

      <Box>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Account type
        </Typography>
        <FormControl error={!accountType}>
          <RadioGroup
            name="account-type"
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
          >
            <FormControlLabel
              value="personal"
              control={<Radio />}
              label="Personal"
            />
            <FormControlLabel
              value="business"
              control={<Radio />}
              label="Business"
            />
            <FormControlLabel
              value="education"
              control={<Radio />}
              label="Education"
            />
          </RadioGroup>
          {!accountType && (
            <FormHelperText>Please select an account type.</FormHelperText>
          )}
        </FormControl>
      </Box>
    </Box>
  );
}
