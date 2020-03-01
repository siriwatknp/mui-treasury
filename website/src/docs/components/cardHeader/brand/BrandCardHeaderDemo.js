import React from 'react';
import BrandCardHeader from '@mui-treasury/components/cardHeader/brand';

const BrandCardHeaderDemo = () => (
  <BrandCardHeader image={'https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png'} extra={'7 minutes'} />
);

// hide-start
BrandCardHeaderDemo.metadata = {
  title: 'Brand',
  path: 'component/cardHeader/brand',
  creators: [require('constants/creators').siriwatknp],
  files: [
    { pkg: 'mui-styles', path: 'cardHeader/brand/brandCardHeader.styles.js' },
  ],
};
// hide-end

export default BrandCardHeaderDemo;
