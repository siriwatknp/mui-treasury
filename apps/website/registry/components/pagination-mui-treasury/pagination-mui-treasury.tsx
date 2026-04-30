'use client';

import * as React from 'react';

import { Box, Pagination, Stack, Typography } from '@mui/material';

export function PaginationMuiTreasury() {
  return (
    <Stack spacing={3} sx={{ width: '100%' }}>
      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Basic
        </Typography>
        <Pagination count={10} defaultPage={3} />
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Variants
        </Typography>
        <Stack spacing={1.5}>
          <Pagination count={10} defaultPage={3} variant="text" />
          <Pagination count={10} defaultPage={3} variant="outlined" />
          <Pagination
            count={10}
            defaultPage={3}
            variant="outlined"
            color="primary"
          />
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Shapes
        </Typography>
        <Stack spacing={1.5}>
          <Pagination count={10} defaultPage={3} shape="circular" />
          <Pagination count={10} defaultPage={3} shape="rounded" />
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Sizes and disabled
        </Typography>
        <Stack spacing={1.5}>
          <Pagination count={10} defaultPage={3} size="small" />
          <Pagination count={10} defaultPage={3} size="medium" />
          <Pagination count={10} defaultPage={3} size="large" />
          <Pagination count={10} defaultPage={3} disabled />
        </Stack>
      </Box>
    </Stack>
  );
}
