'use client';

import * as React from 'react';

import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

const dialogPaperSx = {
  width: 480,
  maxWidth: '100%',
  borderRadius: 2,
  boxShadow: 12,
};

export function DialogMuiTreasury() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: 4,
        width: '100%',
      }}
    >
      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Confirm
        </Typography>
        <Paper variant="outlined" sx={dialogPaperSx}>
          <DialogTitle>Discard changes?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Your edits will be lost. This action cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button>Cancel</Button>
            <Button variant="contained" color="error">
              Discard
            </Button>
          </DialogActions>
        </Paper>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Form
        </Typography>
        <Paper variant="outlined" sx={dialogPaperSx}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ mb: 2 }}>
              Enter your email to receive product updates.
            </DialogContentText>
            <TextField
              fullWidth
              label="Email address"
              type="email"
              defaultValue="hello@example.com"
            />
          </DialogContent>
          <DialogActions>
            <Button>Cancel</Button>
            <Button variant="contained">Subscribe</Button>
          </DialogActions>
        </Paper>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Action list
        </Typography>
        <Paper variant="outlined" sx={dialogPaperSx}>
          <DialogTitle>Set backup account</DialogTitle>
          <DialogContent dividers>
            <Stack gap={1}>
              <Typography variant="body2">user@gmail.com</Typography>
              <Typography variant="body2">work@company.com</Typography>
              <Typography variant="body2">backup@personal.io</Typography>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button>Cancel</Button>
            <Button variant="contained">OK</Button>
          </DialogActions>
        </Paper>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Alert
        </Typography>
        <Paper variant="outlined" sx={dialogPaperSx}>
          <DialogTitle>Use Google&apos;s location service?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button>Disagree</Button>
            <Button variant="contained" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Paper>
      </Box>
    </Box>
  );
}
