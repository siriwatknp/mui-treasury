import React from 'react';
import PodCard from '../lib/PodCard';
import { PEOPLE, AVATAR } from './_mock';

/* eslint-disable max-len */
const PodPodCard = () => (
  <PodCard
    name={'Celebration Event'}
    people={PEOPLE}
    image={
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
    }
    price={49}
    range={'2.4 miles'}
    time={'Mon, Jun 31st, 5.00pm'}
    images={[AVATAR, AVATAR, AVATAR]}
  />
);

PodPodCard.metadata = {
  name: 'Pod Card',
};
PodPodCard.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
PodPodCard.code = `
  import PodCard from '../lib/PodCard';
  
  const AVATAR = 'https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg';
  const PEOPLE = [
    {
      src: 'https://avatars.dicebear.com/v2/avataaars/example.svg',
      name: 'Yeoman',
      tag: '@whatsup yeo',
      onClick: () => alert('Followed Yeoman!'),
    },
    {
      src: 'https://avatars.dicebear.com/v2/avataaars/example2.svg',
      name: 'GGWP',
      tag: '@goodgamewellplay',
      onClick: () => alert('Followed GGWP!'),
    },
    {
      src: 'https://avatars.dicebear.com/v2/avataaars/example3.svg',
      name: 'Sawasdee',
      tag: '@helloTH',
      onClick: () => alert('Followed Sawasdee!'),
    },
  ];
  
  const Preview = () => (
    <PodCard
      name={'Celebration Event'}
      people={PEOPLE}
      image={
        'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
      }
      price={49}
      range={'2.4 miles'}
      time={'Mon, Jun 31st, 5.00pm'}
      images={[AVATAR, AVATAR, AVATAR]}
    />
  )
`;

export default PodPodCard;
