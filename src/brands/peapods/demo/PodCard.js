/* eslint-disable max-len */
import React from 'react';
import PeaPodCard from '../lib/PeaPodCard';

const peapodCardProps = {
  profile: {
    name: 'Siriwat Knp',
    image: 'https://avatars.dicebear.com/v2/avataaars/siriwat.svg',
  },
  social: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Meetup_Logo.png',
  image:
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
  title: 'Deep dive into chat bot training best practice.',
  time: 'Thursday, January 10th, 4:00am',
  location: 'Pivotal Labs, 875 Howard St. San Francisco USA',
  podCount: 3,
  peopleGoing: {
    images: [
      'https://avatars.dicebear.com/v2/avataaars/example.svg',
      'https://avatars.dicebear.com/v2/avataaars/example1.svg',
      'https://avatars.dicebear.com/v2/avataaars/example2.svg',
      'https://avatars.dicebear.com/v2/avataaars/example3.svg',
    ],
    more: 12,
  },
  peopleInterested: {
    images: [
      'https://avatars.dicebear.com/v2/avataaars/example4.svg',
      'https://avatars.dicebear.com/v2/avataaars/example5.svg',
      'https://avatars.dicebear.com/v2/avataaars/example6.svg',
      'https://avatars.dicebear.com/v2/avataaars/example7.svg',
      'https://avatars.dicebear.com/v2/avataaars/example8.svg',
    ],
    more: 4,
  },
};

const PodCard = () => <PeaPodCard {...peapodCardProps} />;

PodCard.metadata = {
  name: 'Pea Pod Card',
};
PodCard.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
PodCard.code = `
  import PeaPodCard from '../lib/PeaPodCard';
  
  const peapodCardProps = {
    profile: {
      name: 'Siriwat Knp',
      image: 'https://avatars.dicebear.com/v2/avataaars/siriwat.svg',
    },
    social: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Meetup_Logo.png',
    image:
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
    title: 'Deep dive into chat bot training best practice.',
    time: 'Thursday, January 10th, 4:00am',
    location: 'Pivotal Labs, 875 Howard St. San Francisco USA',
    podCount: 3,
    peopleGoing: {
      images: [
        'https://avatars.dicebear.com/v2/avataaars/example.svg',
        'https://avatars.dicebear.com/v2/avataaars/example1.svg',
        'https://avatars.dicebear.com/v2/avataaars/example2.svg',
        'https://avatars.dicebear.com/v2/avataaars/example3.svg',
      ],
      more: 12,
    },
    peopleInterested: {
      images: [
        'https://avatars.dicebear.com/v2/avataaars/example4.svg',
        'https://avatars.dicebear.com/v2/avataaars/example5.svg',
        'https://avatars.dicebear.com/v2/avataaars/example6.svg',
        'https://avatars.dicebear.com/v2/avataaars/example7.svg',
        'https://avatars.dicebear.com/v2/avataaars/example8.svg',
      ],
      more: 4,
    },
  };
  
  const PodCard = () => <PeaPodCard {...peapodCardProps} />;
`;

export default PodCard;
