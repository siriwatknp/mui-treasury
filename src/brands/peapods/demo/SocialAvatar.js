/* eslint-disable */
import React from 'react';
import PeaSocialAvatar from '../lib/PeaSocialAvatar';
import { AVATAR } from './_mock';

const SocialAvatar = () => (
  <PeaSocialAvatar src={AVATAR} name={'username'} social={'meetup'} />
);

SocialAvatar.metadata = {
  name: 'Pea SocialAvatar',
};
SocialAvatar.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
SocialAvatar.code = `
  import PeaSocialAvatar from '../lib/PeaSocialAvatar';
  
  const AVATAR =
    'https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg';
  
  const Preview = () => (
    <PeaSocialAvatar src={AVATAR} name={'username'} social={'meetup'} />
  )
`;

export default SocialAvatar;
