import React, { useState } from 'react';
import PeaCounter from '../lib/PeaCounter';

const Counter = () => {
  const [value, onChange] = useState(0);
  return <PeaCounter value={value} onChange={e => onChange(e.target.value)} />;
};

Counter.metadata = {
  name: 'Pea Counter',
};
Counter.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
Counter.code = `
  import PeaCounter from '../lib/PeaCounter';
  
  const Preview = () => {
    const [value, onChange] = useState(0);
    return (
      <PeaCounter
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    );
  }
`;

export default Counter;
