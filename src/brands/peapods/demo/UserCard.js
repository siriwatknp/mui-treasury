/* eslint-disable */
import React from 'react';
import PeaUserCard from '../lib/PeaUserCard';

const UserCard = () => (
  <PeaUserCard
    cover={
      'https://images.unsplash.com/photo-1470549638415-0a0755be0619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
    }
    image={
      'https://images.unsplash.com/photo-1456379771252-03388b5adf1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    }
    name={'Maria Garcia'}
    tag={'@MaryMary'}
    location={'Houston'}
    bio={'A senior year student, passionate in web design.'}
  />
);

UserCard.metadata = {
  name: 'Pea UserCard',
};
UserCard.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
UserCard.code = `
  import PeaUserCard from '../lib/PeaUserCard';
  
  const Preview = () => (
    <PeaUserCard
      cover={
        'https://images.unsplash.com/photo-1470549638415-0a0755be0619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
      }
      image={
        'https://images.unsplash.com/photo-1456379771252-03388b5adf1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
      }
      name={'Maria Garcia'}
      tag={'@MaryMary'}
      location={'Houston'}
      bio={'A senior year student, passionate in web design.'}
    />
  )
`;

export default UserCard;
