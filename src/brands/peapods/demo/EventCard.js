import React from 'react';
import PeaEventCard from '../lib/PeaEventCard';
import { PEOPLE, AVATAR } from './_mock';

/* eslint-disable max-len */
const EventCard = () => (
  <PeaEventCard
    name={'Carnival Night Festival'}
    people={PEOPLE}
    image={
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
    }
    range={'4.6 miles'}
    time={'Thu, Jan 10th, 4:00am'}
    images={[AVATAR, AVATAR, AVATAR, AVATAR, AVATAR]}
  />
);

EventCard.metadata = {
  name: 'Pea Event Card',
};
EventCard.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
EventCard.code = `
  import PeaEventCard from '../lib/PeaEventCard';
  
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
    <PeaEventCard
      name={'Carnival Night Festival'}
      people={PEOPLE}
      image={
        'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
      }
      range={'4.6 miles'}
      time={'Thu, Jan 10th, 4:00am'}
      images={[AVATAR, AVATAR, AVATAR, AVATAR, AVATAR]}
    />
  )
`;

export default EventCard;
