'use client';

import * as React from 'react';

import { Box, Divider, Paper, Stack, Switch, Typography } from '@mui/material';

const SETTINGS = [
  {
    id: 'auto-assign',
    title: 'Auto-assign to self',
    description:
      'When creating new issues, always assign them to yourself by default.',
    initial: false,
  },
  {
    id: 'branch-status',
    title: 'On git branch copy, move issue to started',
    description:
      "After copying the git branch name, issue status is moved to the team's first started workflow status.",
    initial: true,
  },
  {
    id: 'auto-claim',
    title: 'On move to started, assign to yourself',
    description:
      'When you move an unassigned issue to started, it will be automatically assigned to you.',
    initial: true,
  },
  {
    id: 'pr-ready',
    title: 'Auto-convert draft pull requests',
    description:
      'Mark draft pull requests as ready for review when a review is requested or the PR is approved.',
    initial: false,
  },
];

export function SwitchMuiTreasury() {
  const [values, setValues] = React.useState<Record<string, boolean>>(
    Object.fromEntries(SETTINGS.map((s) => [s.id, s.initial])),
  );

  return (
    <Box sx={{ width: '100%', maxWidth: 640, mx: 'auto' }}>
      <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
        Automations and workflows
      </Typography>
      <Paper variant="outlined">
        <Stack divider={<Divider />}>
          {SETTINGS.map((setting) => (
            <Stack
              key={setting.id}
              direction="row"
              spacing={2}
              sx={{
                alignItems: 'flex-start',
                p: 2,
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {setting.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                  }}
                >
                  {setting.description}
                </Typography>
              </Box>
              <Switch
                checked={values[setting.id]}
                onChange={(e) =>
                  setValues((v) => ({ ...v, [setting.id]: e.target.checked }))
                }
              />
            </Stack>
          ))}
        </Stack>
      </Paper>
    </Box>
  );
}
