import React from 'react';
import Box from 'components/atoms/Box';
import PeaAvatar from '../lib/PeaAvatar';
import { AVATAR } from './_mock';

const Avatar = () => (
  <Box flex={1} {...Box.alignCenter} justifyContent={'space-evenly'}>
    <PeaAvatar src={AVATAR} size={'small'} />
    <PeaAvatar src={AVATAR} />
    <PeaAvatar src={AVATAR} size={'big'} />
    <PeaAvatar src={AVATAR} size={'large'} />
    <PeaAvatar src={AVATAR} size={'huge'} />
  </Box>
);

Avatar.metadata = {
  name: 'Pea Avatar',
};
Avatar.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
Avatar.code = `
  import PeaAvatar from '../lib/PeaAvatar';
  
  const Preview = () => (
    <>
      <PeaAvatar src={AVATAR} size={'small'} />
      <PeaAvatar src={AVATAR} />
      <PeaAvatar src={AVATAR} size={'big'} />
      <PeaAvatar src={AVATAR} size={'large'} />
      <PeaAvatar src={AVATAR} size={'huge'} />
    </>
  )
`;

export default Avatar;
