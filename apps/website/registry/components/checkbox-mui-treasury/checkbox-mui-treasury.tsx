'use client';

import * as React from 'react';

import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Typography,
} from '@mui/material';

const PERMISSIONS = ['Read', 'Write', 'Deploy'] as const;
type Permission = (typeof PERMISSIONS)[number];

export function CheckboxMuiTreasury() {
  const [permissions, setPermissions] = React.useState<
    Record<Permission, boolean>
  >({
    Read: true,
    Write: true,
    Deploy: false,
  });
  const [subscribe, setSubscribe] = React.useState(true);
  const [analytics, setAnalytics] = React.useState(false);
  const [agreed, setAgreed] = React.useState(false);

  const checkedCount = Object.values(permissions).filter(Boolean).length + 1;
  const total = PERMISSIONS.length + 1;
  const allChecked = checkedCount === total;
  const someChecked = checkedCount > 0 && !allChecked;

  const handleSelectAll = () => {
    const next = !allChecked;
    setPermissions(
      Object.fromEntries(PERMISSIONS.map((p) => [p, next])) as Record<
        Permission,
        boolean
      >,
    );
  };

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
          Workspace permissions
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={allChecked}
              indeterminate={someChecked}
              onChange={handleSelectAll}
            />
          }
          label="All permissions"
        />
        <FormGroup sx={{ pl: 4 }}>
          {PERMISSIONS.map((name) => (
            <FormControlLabel
              key={name}
              control={
                <Checkbox
                  checked={permissions[name]}
                  onChange={(e) =>
                    setPermissions((prev) => ({
                      ...prev,
                      [name]: e.target.checked,
                    }))
                  }
                />
              }
              label={name}
            />
          ))}
          <FormControlLabel
            control={<Checkbox checked disabled />}
            label="Billing"
          />
        </FormGroup>
      </Box>

      <Box>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Finish sign-up
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={subscribe}
                onChange={(e) => setSubscribe(e.target.checked)}
              />
            }
            label="Subscribe to product updates"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
              />
            }
            label="Allow analytics cookies"
          />
        </FormGroup>
        <FormControl error={!agreed}>
          <FormControlLabel
            control={
              <Checkbox
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
            }
            label="I agree to the Terms and Privacy Policy"
          />
          {!agreed && (
            <FormHelperText>
              Please accept the terms to continue.
            </FormHelperText>
          )}
        </FormControl>
      </Box>
    </Box>
  );
}
