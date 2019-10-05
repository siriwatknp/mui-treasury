/* eslint-disable max-len */
import React from 'react';
import Box from 'components/atoms/Box';
import PeaIcon from '../lib/PeaIcon';

const Icon = () => (
  <Box flex={1} {...Box.alignCenter} justifyContent={'space-evenly'}>
    <PeaIcon icon={'fas fa-home'} />
    <PeaIcon icon={'add'} />
    <PeaIcon icon={'remove_circle'} size={'small'} />
    <PeaIcon icon={'remove_circle'} size={'big'} />
    <PeaIcon icon={'fab fa-facebook-f'} color={'secondary'} bgColor={'white'} />
    <PeaIcon icon={'add'} bgColor={'lightPrimary'} inverted />
  </Box>
);

Icon.metadata = {
  name: 'Pea Icon',
};
Icon.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
Icon.code = `
  import PeaIcon from '../lib/PeaIcon';
  
  const Preview = () => (
    <>
      <PeaIcon icon={'fas fa-home'} />
      <PeaIcon icon={'add'} />
      <PeaIcon icon={'remove_circle'} size={'small'} />
      <PeaIcon icon={'remove_circle'} size={'big'} />
      <PeaIcon icon={'fab fa-facebook-f'} color={'secondary'} bgColor={'white'} />
      <PeaIcon icon={'add'} bgColor={'lightPrimary'} inverted />
    </>
  )
`;

export default Icon;
