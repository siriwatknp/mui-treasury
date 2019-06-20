/* eslint-disable */
import React from 'react';
import PeaProfileCard from '../lib/PeaProfileCard';
import { AVATAR } from './_mock';

const ProfileCard = () => (
  <PeaProfileCard
    cover={
      'https://images.unsplash.com/photo-1470549638415-0a0755be0619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
    }
    image={AVATAR}
    name={'Sam Smith'}
    tag={'@samsmith'}
  />
);

ProfileCard.metadata = {
  name: 'Pea Profile Card',
};
ProfileCard.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
ProfileCard.code = `
  import PeaProfileCard from '../lib/PeaProfileCard';
  
  const AVATAR =
    'https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg';
  
  const Preview = () => (
    <PeaProfileCard
      cover={
        'https://images.unsplash.com/photo-1470549638415-0a0755be0619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
      }
      image={AVATAR}
      name={'Sam Smith'}
      tag={'@samsmith'}
    />
  )
`;

export default ProfileCard;
