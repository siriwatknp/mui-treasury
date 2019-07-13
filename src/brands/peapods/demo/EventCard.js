/* eslint-disable max-len */
import React from 'react';
import PeaEventCard from '../lib/PeaEventCard';

const avatarUrls = [
  'https://avatars.dicebear.com/v2/avataaars/example.svg',
  'https://avatars.dicebear.com/v2/avataaars/example1.svg',
  'https://avatars.dicebear.com/v2/avataaars/example2.svg',
  'https://avatars.dicebear.com/v2/avataaars/example3.svg',
  'https://avatars.dicebear.com/v2/avataaars/example4.svg',
  'https://avatars.dicebear.com/v2/avataaars/example5.svg',
  'https://avatars.dicebear.com/v2/avataaars/example6.svg',
  'https://avatars.dicebear.com/v2/avataaars/example7.svg',
  'https://avatars.dicebear.com/v2/avataaars/example8.svg',
];

function empty() {}

function getAvatarUrls(count) {
  const urls = [];

  for (let i = 0; i < count; i += 1) {
    const url = avatarUrls[Math.floor(Math.random() * avatarUrls.length)];
    urls.push(url);
  }

  return urls;
}

const PeaEventCardProps = {
  id: '123',
  profile: {
    name: 'Siriwat Knp',
    image: 'https://avatars.dicebear.com/v2/avataaars/siriwat.svg',
    link: 'https://google.com',
  },
  social: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Meetup_Logo.png',
  images: [
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1470549638415-0a0755be0619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  ],
  title: 'Deep dive into chat bot training best practice.',
  subTitle: '3 weeks ago',
  timeString: 'Thursday, January 10th, 4:00am',
  location: 'Pivotal Labs, 875 Howard St. San Francisco USA',
  interestedPeas: getAvatarUrls(15),
  attendingPeas: getAvatarUrls(5),
  stats: {
    interested: 15,
    attending: 5,
    limit: 30,
  },
  onShowDetailsClicked: empty,
  onShareEventClicked: empty,
  onCreatePodClicked: empty,
};

const EventCard = () => <PeaEventCard {...PeaEventCardProps} />;

EventCard.metadata = {
  name: 'Pea Event Card',
};
EventCard.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
EventCard.code = `
  import PeaEventCard from '../lib/PeaEventCard';
  
  const PeaEventCardProps = {
    profile: {
      name: 'Siriwat Knp',
      image: 'https://avatars.dicebear.com/v2/avataaars/siriwat.svg',
    },
    social: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Meetup_Logo.png',
    images:
    [
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1470549638415-0a0755be0619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
    ],
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
  
  const EventCard = () => <PeaEventCard {...PeaEventCardProps} />;
`;

export default EventCard;
