import React from 'react';
import Box from 'components/atoms/Box';
import PeaAvatar from '../lib/PeaAvatar';
import { AVATAR, PEOPLE } from './_mock';

const getSrc = ({ src }) => src;
const AvatarGroup = () => (
  <Box flex={1} {...Box.alignCenter} justifyContent={'space-evenly'}>
    <PeaAvatar.Group images={[AVATAR, ...PEOPLE.map(getSrc)]} />
    <PeaAvatar.Group
      images={[AVATAR, ...PEOPLE.map(getSrc)]}
      more={2}
      avatarProps={{ size: 'small' }}
    />
  </Box>
);

AvatarGroup.metadata = {
  name: 'Pea Avatar Group',
};
AvatarGroup.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
AvatarGroup.code = `
  import PeaAvatar from '../lib/PeaAvatar';
  
  const Preview = () => (
    <>
      <PeaAvatar.Group images={[AVATAR, ...PEOPLE.map(getSrc)]} />
      <PeaAvatar.Group
        images={[AVATAR, ...PEOPLE.map(getSrc)]}
        more={2}
        avatarProps={{ size: 'small' }}
      />
    </>
  )
`;

export default AvatarGroup;
