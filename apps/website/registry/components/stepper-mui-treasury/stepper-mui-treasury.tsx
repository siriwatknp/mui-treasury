import {
  Box,
  Stack,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';

const horizontalSteps = ['Account', 'Plan', 'Payment', 'Review', 'Done'];

const verticalSteps = [
  { label: 'Connect repository' },
  {
    label: 'Configure build',
    description: 'Set the build command and output directory.',
  },
  { label: 'Add environment variables' },
  { label: 'Deploy' },
];

export function StepperMuiTreasury() {
  return (
    <Stack spacing={5} sx={{ width: '100%', maxWidth: 720, mx: 'auto' }}>
      <Box>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Onboarding
        </Typography>
        <Stepper activeStep={2}>
          {horizontalSteps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <Box>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Project setup
        </Typography>
        <Stepper activeStep={1} orientation="vertical">
          {verticalSteps.map((step) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
              {step.description && (
                <StepContent>
                  <Typography variant="body2" color="text.secondary">
                    {step.description}
                  </Typography>
                </StepContent>
              )}
            </Step>
          ))}
        </Stepper>
      </Box>
    </Stack>
  );
}
