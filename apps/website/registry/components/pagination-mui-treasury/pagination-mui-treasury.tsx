'use client';

import * as React from 'react';

import {
  Box,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

const ORDERS = [
  {
    id: 'ORD-1042',
    customer: 'Ada Lovelace',
    total: '$248.00',
    status: 'Paid',
  },
  {
    id: 'ORD-1041',
    customer: 'Linus Torvalds',
    total: '$94.50',
    status: 'Refunded',
  },
  {
    id: 'ORD-1040',
    customer: 'Grace Hopper',
    total: '$612.00',
    status: 'Paid',
  },
  {
    id: 'ORD-1039',
    customer: 'Tim Berners-Lee',
    total: '$56.20',
    status: 'Pending',
  },
];

export function PaginationMuiTreasury() {
  return (
    <Stack spacing={6} sx={{ width: '100%', maxWidth: 720, mx: 'auto' }}>
      <Box>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Recent orders
        </Typography>
        <Paper variant="outlined">
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Order</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ORDERS.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.customer}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell align="right">{row.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Stack
            direction="row"
            sx={{
              alignItems: 'center',
              justifyContent: 'space-between',
              px: 2,
              py: 1.5,
              borderTop: 1,
              borderColor: 'divider',
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: 'text.secondary',
              }}
            >
              Showing 21–24 of 248
            </Typography>
            <Pagination
              count={62}
              page={3}
              size="small"
              shape="rounded"
              siblingCount={1}
              boundaryCount={1}
            />
          </Stack>
        </Paper>
      </Box>
      <Box>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Compact
        </Typography>
        <Pagination count={10} page={5} shape="rounded" siblingCount={0} />
      </Box>
    </Stack>
  );
}
