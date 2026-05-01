'use client';

import * as React from 'react';

import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Eye, EyeOff } from 'lucide-react';

export function TextFieldMuiTreasury() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 8,
        width: '100%',
      }}
    >
      <Box sx={{ width: 280 }}>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Sign in
        </Typography>
        <Stack spacing={2}>
          <TextField
            label="Email"
            defaultValue="ada@acme.com"
            helperText="We'll never share your email."
            fullWidth
          />
          <TextField
            label="Password"
            type={showPassword ? 'text' : 'password'}
            defaultValue="hunter2hunter2"
            helperText="Use at least 12 characters."
            autoFocus
            fullWidth
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword ? 'Hide password' : 'Show password'
                      }
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                      size="small"
                    >
                      {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
        </Stack>
      </Box>

      <Box sx={{ width: 280 }}>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Update profile
        </Typography>
        <Stack spacing={2}>
          <TextField
            label="Display name"
            defaultValue="Ada Lovelace"
            fullWidth
          />
          <TextField
            label="Username"
            defaultValue="ada"
            error
            helperText="That username is already taken."
            fullWidth
          />
          <TextField
            label="Bio"
            defaultValue="Mathematician. First programmer."
            multiline
            rows={2}
            fullWidth
          />
        </Stack>
      </Box>
    </Box>
  );
}
