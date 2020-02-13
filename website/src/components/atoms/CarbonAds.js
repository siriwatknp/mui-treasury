import React from 'react';
import useCarbonAds from 'logics/useCarbonAds';
import './CarbonAds.css';

const id = '_carbonads_js';

const CarbonAds = () => {
  useCarbonAds();
  return <div id={id} />;
};

export default CarbonAds;
