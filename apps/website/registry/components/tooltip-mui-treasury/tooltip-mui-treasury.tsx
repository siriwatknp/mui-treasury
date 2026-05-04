'use client';

import * as React from 'react';

import BookmarkBorder from '@mui/icons-material/BookmarkBorder';
import ContentCopy from '@mui/icons-material/ContentCopy';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import HelpOutline from '@mui/icons-material/HelpOutline';
import Share from '@mui/icons-material/Share';
import {
  Box,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';

export function TooltipMuiTreasury() {
  return (
    <Stack spacing={6} sx={{ width: '100%', maxWidth: 480, mx: 'auto', pb: 6 }}>
      <Box>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Editor toolbar
        </Typography>
        <Paper
          variant="outlined"
          sx={{ display: 'inline-flex', p: 0.5, borderRadius: 2 }}
        >
          <Stack direction="row" spacing={0.5} sx={{
            alignItems: "center"
          }}>
            <Tooltip title="Save to bookmarks" placement="bottom" arrow open>
              <IconButton size="small">
                <BookmarkBorder fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Share" placement="bottom" arrow>
              <IconButton size="small">
                <Share fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Duplicate" placement="bottom" arrow>
              <IconButton size="small">
                <ContentCopy fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete" placement="bottom" arrow>
              <IconButton size="small">
                <DeleteOutline fontSize="small" />
              </IconButton>
            </Tooltip>
          </Stack>
        </Paper>
      </Box>
      <Box>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Inline help
        </Typography>
        <Tooltip
          placement="bottom"
          arrow
          open
          title={
            <Box sx={{ p: 0.5 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                API token
              </Typography>
              <Typography variant="caption">
                Used to authenticate requests. Keep it secret.
              </Typography>
            </Box>
          }
        >
          <IconButton size="small">
            <HelpOutline fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
    </Stack>
  );
}
