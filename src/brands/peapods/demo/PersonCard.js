/* eslint-disable max-len */
import React from 'react';
import PeaPersonCard from '../lib/PeaPersonCard';

const PersonCard = () => (
  <PeaPersonCard
    image={
      'https://images.unsplash.com/photo-1456379771252-03388b5adf1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    }
    name={'Maria Garcia'}
    tag={'@MaryMary'}
    location={'Houston'}
    bio={'A senior year student, passionate in web design.'}
  />
);

PersonCard.metadata = {
  name: 'Pea PersonCard',
};
PersonCard.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
PersonCard.code = `
  import PeaPersonCard from '../lib/PeaPersonCard';
  
  const Preview = () => (
    <PeaPersonCard
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

export default PersonCard;
