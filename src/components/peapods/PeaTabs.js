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
      <Tab label="Tweet" disableRipple />
      <Tab label="Responses" disableRipple />
      <Tab label="Media" disableRipple />
      <Tab label="liking" disableRipple />
    </Tabs>
  );
};

PeaTabs.metadata = {
  name: 'Pea Tabs',
};
PeaTabs.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaTabs;
