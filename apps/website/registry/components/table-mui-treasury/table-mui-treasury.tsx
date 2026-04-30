'use client';

import * as React from 'react';

import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

interface Row {
  dessert: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

const rows: Row[] = [
  {
    dessert: 'Frozen yoghurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
  },
  {
    dessert: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
  },
  { dessert: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  { dessert: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { dessert: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
];

export function TableMuiTreasury() {
  return (
    <Box sx={{ width: '100%' }}>
      <TableContainer component={Paper} variant="outlined">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.dessert}>
                <TableCell component="th" scope="row">
                  {row.dessert}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
