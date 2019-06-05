import React from 'react';
import Box from 'components/atoms/Box';
import PeaTag from '../lib/PeaTag';
import { AVATAR } from './_mock';

const Tag = () => (
  <Box>
    <Box mb={2} width={'100%'}>
      <PeaTag src={AVATAR} label={'Invited by @Markz'} />
    </Box>
    <PeaTag src={AVATAR} label={'Invited by @Markz'} color={'primary'} />
  </Box>
);

Tag.metadata = {
  name: 'Pea Tag',
};
Tag.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
Tag.code = `
  import PeaTag from '../lib/PeaTag';
  
  const Preview = () => (
    <>
      <PeaTag src={AVATAR} label={'Invited by @Markz'} />
      <PeaTag src={AVATAR} label={'Invited by @Markz'} color={'primary'} />
    </>
  )
`;

export default Tag;
