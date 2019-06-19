/* eslint-disable */
import React from 'react';
import PeaGroupCard from '../lib/PeaGroupCard';
import { AVATAR } from './_mock';

const GroupCard = () => (
  <PeaGroupCard
    cover={
      'https://images.unsplash.com/photo-1470549638415-0a0755be0619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
    }
    image={AVATAR}
    groupName={'1'}
    tag={'@samsmith'}
  />
);

GroupCard.metadata = {
  name: 'Pea Group Card',
};
GroupCard.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
GroupCard.code = `
  import PeaGroupCard from '../lib/PeaGroupCard';
  
  const AVATAR =
    'https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg';
  
  const Preview = () => (
    <PeaGroupCard
      cover={
        'https://images.unsplash.com/photo-1470549638415-0a0755be0619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
      }
      image={AVATAR}
      groupName={'1'}
      tag={'@samsmith'}
    />
  )
`;

export default GroupCard;
