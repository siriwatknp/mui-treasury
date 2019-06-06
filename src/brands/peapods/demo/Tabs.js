import React, { useState } from 'react';
import MuiTabs from '@material-ui/core/Tabs';
import MuiTab from '@material-ui/core/Tab';

const Tabs = () => {
  const [index, onChange] = useState(0);
  return (
    <MuiTabs
      variant={'fullWidth'}
      centered
      value={index}
      onChange={(e, val) => onChange(val)}
    >
      <MuiTab label="Tweet" disableRipple />
      <MuiTab label="Responses" disableRipple />
      <MuiTab label="Media" disableRipple />
      <MuiTab label="liking" disableRipple />
    </MuiTabs>
  );
};
Tabs.metadata = {
  name: 'Tabs',
  api: [
    { url: 'https://material-ui.com/pt/api/tabs/#tabs-api', label: 'Tabs' },
    { url: 'https://material-ui.com/pt/api/tab/#tab-api', label: 'a Tab' },
  ],
};
Tabs.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
Tabs.code = `
  import React, { useState } from 'react';
  import Tabs from '@material-ui/core/Tabs';
  import Tab from '@material-ui/core/Tab';
  
  const Preview = () => {
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
  }
`;

export default Tabs;
