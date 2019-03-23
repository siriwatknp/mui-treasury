/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const PeaTabs = () => {
  const [index, onChange] = useState(0);
  return (
    <Tabs
      variant={'fullWidth'}
      centered
      value={index}
      onChange={(e, val) => onChange(val)}
    >
      <Tab classes={{ label: 'MuiTab-label' }} label="Tweet" disableRipple />
      <Tab
        classes={{ label: 'MuiTab-label' }}
        label="Responses"
        disableRipple
      />
      <Tab classes={{ label: 'MuiTab-label' }} label="Media" disableRipple />
      <Tab classes={{ label: 'MuiTab-label' }} label="liking" disableRipple />
    </Tabs>
  );
};

PeaTabs.metadata = {
  name: 'Pea Tabs',
};
PeaTabs.codeSandbox = '';

export default PeaTabs;
