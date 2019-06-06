import React from 'react';
import Box from 'components/atoms/Box';
import PeaRadio from '../lib/PeaRadio';

const Radio = () => (
  <Box flex={1} {...Box.alignCenter} justifyContent={'space-evenly'}>
    <PeaRadio checked={false} />
    <PeaRadio checked />
  </Box>
);

Radio.metadata = {
  name: 'Pea Radio',
  api: 'https://material-ui.com/pt/api/radio/#radio-api',
};
Radio.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
Radio.code = `
  import PeaRadio from '../lib/PeaRadio';
  
  const Preview = () => (
    <>
      <PeaRadio checked={false} />
      <PeaRadio checked />
    </>
  )
`;

export default Radio;
