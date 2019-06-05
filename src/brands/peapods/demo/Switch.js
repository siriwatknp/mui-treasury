import React, { useState } from 'react';
import PeaSwitch from '../lib/PeaSwitch';

const Switch = () => {
  const [value, onChange] = useState(false);
  return (
    <PeaSwitch checked={value} onChange={e => onChange(e.target.checked)} />
  );
};

Switch.metadata = {
  name: 'Pea Switch',
  api: 'https://material-ui.com/api/switch/',
};
Switch.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
Switch.code = `
  import PeaSwitch from '../lib/PeaSwitch';
  
  const Preview = () => {
    const [value, onChange] = useState(false);
    return (
      <PeaSwitch
        checked={value}
        onChange={e => onChange(e.target.checked)}
      />
    );
  }
`;

export default Switch;
