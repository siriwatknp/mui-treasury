'use client';

import * as React from 'react';

import {
  Box,
  Button,
  Stack,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';

const steps = [
  'Account details',
  'Workspace setup',
  'Invite teammates',
  'Confirmation',
];

const verticalSteps = [
  {
    label: 'Account details',
    description: 'Provide your name, email and a strong password.',
  },
  {
    label: 'Workspace setup',
    description: 'Choose a workspace name and pick a default theme.',
  },
  {
    label: 'Invite teammates',
    description: 'Send invitations or skip and add members later.',
  },
];

export function StepperMuiTreasury() {
  return (
    <Stack spacing={4} sx={{ width: '100%' }}>
      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1.5 }}>
          Horizontal
        </Typography>
        <Stepper activeStep={1}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1.5 }}>
          Alternative label
        </Typography>
        <Stepper activeStep={2} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1.5 }}>
          Vertical
        </Typography>
        <Stepper activeStep={1} orientation="vertical">
          {verticalSteps.map((step) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
              <StepContent>
                <Typography variant="body2" color="text.secondary">
                  {step.description}
                </Typography>
                <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                  <Button variant="contained" size="small">
                    Continue
                  </Button>
                  <Button size="small">Back</Button>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Stack>
  );
}
