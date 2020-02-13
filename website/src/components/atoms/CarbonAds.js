import React from 'react';
import useCarbonAds from 'logics/useCarbonAds';
import './CarbonAds.css';

const CarbonAds = () => {
  const { id } = useCarbonAds();
  return <div id={id} />;
};

export default CarbonAds;
