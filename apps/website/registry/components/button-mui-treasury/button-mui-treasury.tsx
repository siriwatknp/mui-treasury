import * as React from 'react';

import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutlined';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';

export function ButtonMuiTreasury() {
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
      <Box>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Action buttons
        </Typography>
        <Stack spacing={2}>
          <Stack direction="row" spacing={1.5} useFlexGap sx={{
            flexWrap: "wrap"
          }}>
            <Button variant="contained">Save changes</Button>
            <Button variant="outlined">Cancel</Button>
            <Button variant="text">Learn more</Button>
          </Stack>
          <Stack direction="row" spacing={1.5} useFlexGap sx={{
            flexWrap: "wrap"
          }}>
            <Button variant="contained" startIcon={<AddIcon />}>
              New project
            </Button>
            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteOutlineIcon />}
            >
              Delete
            </Button>
          </Stack>
        </Stack>
      </Box>
      <Paper variant="outlined" sx={{ p: 3, width: 300 }}>
        <Stack spacing={2}>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Pro
            </Typography>
            <Typography variant="body2" sx={{
              color: "text.secondary"
            }}>
              Best for growing teams
            </Typography>
          </Box>
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            $24{' '}
            <Typography component="span" variant="body2" sx={{
              color: "text.secondary"
            }}>
              / month
            </Typography>
          </Typography>
          <Stack spacing={1}>
            <Button variant="contained" fullWidth>
              Start free trial
            </Button>
            <Button variant="text" fullWidth>
              Compare plans
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}
