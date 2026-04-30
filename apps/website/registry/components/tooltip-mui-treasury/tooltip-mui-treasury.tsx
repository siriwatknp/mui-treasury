'use client';

import * as React from 'react';

import Delete from '@mui/icons-material/Delete';
import Info from '@mui/icons-material/Info';
import { Box, IconButton, Stack, Tooltip, Typography } from '@mui/material';

export function TooltipMuiTreasury() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: 4,
        width: '100%',
      }}
    >
      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Placement
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
          <Tooltip title="Top" placement="top">
            <IconButton>
              <Delete />
            </IconButton>
          </Tooltip>
          <Tooltip title="Right" placement="right">
            <IconButton>
              <Delete />
            </IconButton>
          </Tooltip>
          <Tooltip title="Bottom" placement="bottom">
            <IconButton>
              <Delete />
            </IconButton>
          </Tooltip>
          <Tooltip title="Left" placement="left">
            <IconButton>
              <Delete />
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Arrow
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Tooltip title="Delete item" arrow>
            <IconButton>
              <Delete />
            </IconButton>
          </Tooltip>
          <Tooltip title="More info" arrow placement="top">
            <IconButton>
              <Info />
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Rich content
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Tooltip
            title={
              <React.Fragment>
                <Typography variant="subtitle2">Tooltip with HTML</Typography>
                <em>{'And this'}</em> <b>{'is bold'}</b>.
              </React.Fragment>
            }
          >
            <IconButton>
              <Info />
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Disabled trigger
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Tooltip title="You can't delete">
            <span>
              <IconButton disabled>
                <Delete />
              </IconButton>
            </span>
          </Tooltip>
        </Stack>
      </Box>
    </Box>
  );
}
