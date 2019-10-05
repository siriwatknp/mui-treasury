import React from 'react';
import { BrandCardHeader } from '@mui-treasury/components/cardHeader';
import MOCK from 'constants/mock';

const BrandCardHeaderDemo = () => (
  <BrandCardHeader image={MOCK.reactLogo} extra={'7 minutes'} />
);

// hide-start
BrandCardHeaderDemo.metadata = {
  title: 'Brand',
  path: 'cardHeader/brand',
  files: [
    { pkg: 'mui-styles', path: 'cardHeader/brand/brandCardHeader.styles.js' },
  ],
};
// hide-end

export default BrandCardHeaderDemo;
