'use client';
import React from 'react';

import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const ButtonBtn = styled(Button)(({ theme: { palette, breakpoints } }) => ({
  width: '100%',
  paddingTop: 16,
  paddingBottom: 16,
  borderRadius: 40,
  border: '1px solid',
  borderColor: palette.grey[400],

  '& > *': {
    fontWeight: 'bold',
    textTransform: 'none',
  },

  marginRight: 72,

  [breakpoints.up('sm')]: {
    marginRight: 'unset',
  },
}));

const BBig = styled('b')(() => ({
  fontSize: 16,
}));

const BoxBig = styled(Box)(() => ({
  fontSize: 16,
}));

const BoxLarge = styled(Box)(() => ({
  fontSize: 24,
}));

const GridMainGrid = styled(Grid)(({ theme: { breakpoints } }) => ({
  [breakpoints.up('sm')]: {
    flexDirection: 'row-reverse',
  },
}));

const DailySummary = () => {
  return (
    <GridMainGrid
      container
      spacing={2}
      sx={{ justifyContent: 'space-between' }}
    >
      <Grid size={{ xs: 12, sm: 5, md: 4 }}>
        <Grid container spacing={1}>
          <Grid size={5}>
            <Box sx={{ textAlign: 'right' }}>
              <BBig>Subtotal:</BBig>
            </Box>
          </Grid>
          <Grid size={7}>
            <BoxBig sx={{ px: 2, textAlign: 'right' }}>
              <span>$149.96</span>
            </BoxBig>
          </Grid>
          <Grid size={5}>
            <Box sx={{ textAlign: 'right' }}>
              <BBig>Shipping:</BBig>
            </Box>
          </Grid>
          <Grid size={7}>
            <BoxBig sx={{ px: 2, textAlign: 'right' }}>
              <span>$0</span>
            </BoxBig>
          </Grid>
        </Grid>
        <br />
        <Divider />
        <br />
        <Grid container spacing={1}>
          <Grid size={5}>
            <Box sx={{ textAlign: 'right' }}>
              <BBig>Total:</BBig>
            </Box>
          </Grid>
          <Grid size={7}>
            <BoxLarge sx={{ px: 2, textAlign: 'right' }}>
              <span>$149.96</span>
            </BoxLarge>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        size={{ xs: 12, sm: 5, md: 4 }}
        container
        sx={{
          alignItems: 'flex-end',
        }}
      >
        <ButtonBtn startIcon={<KeyboardArrowLeft />}>
          Continue Shopping
        </ButtonBtn>
      </Grid>
    </GridMainGrid>
  );
};

export default DailySummary;
