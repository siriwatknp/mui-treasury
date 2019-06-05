/* eslint-disable max-len */
import React, { useState } from 'react';
import Box from 'components/atoms/Box';
import PeaCategoryToggle from '../lib/PeaCategoryToggle';

const MenuItem = () => {
  const [checked, onChange] = useState(false);
  return (
    <Box flex={1} {...Box.alignCenter} justifyContent={'space-evenly'}>
      <PeaCategoryToggle
        label={'Space'}
        src={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7duEshbQ9Iple2a1jvGuUtRUGxJjKW7_lIwxlbEx_OthMBUiF'
        }
        checked={checked}
        onChange={e => onChange(e.target.checked)}
      />
      <PeaCategoryToggle
        label={'Beach'}
        src={
          'https://freedesignfile.com/upload/2017/05/Sunrise-tropical-island-beach-view-HD-picture-01.jpg'
        }
        checked={checked}
        onChange={e => onChange(e.target.checked)}
      />
    </Box>
  );
};

MenuItem.metadata = {
  name: 'Pea Category Toggle',
};
MenuItem.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
MenuItem.code = `
  import PeaCategoryToggle from '../lib/PeaCategoryToggle';
  
  const Preview = () => {
    const [checked, onChange] = useState(false);
    return (
      <Box flex={1} {...Box.alignCenter} justifyContent={'space-evenly'}>
        <PeaCategoryToggle
          label={'Space'}
          src={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7duEshbQ9Iple2a1jvGuUtRUGxJjKW7_lIwxlbEx_OthMBUiF'
          }
          checked={checked}
          onChange={e => onChange(e.target.checked)}
        />
        <PeaCategoryToggle
          label={'Beach'}
          src={
            'https://freedesignfile.com/upload/2017/05/Sunrise-tropical-island-beach-view-HD-picture-01.jpg'
          }
          checked={checked}
          onChange={e => onChange(e.target.checked)}
        />
      </Box>
    );
  }
`;

export default MenuItem;
