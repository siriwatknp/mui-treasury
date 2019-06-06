/* eslint-disable */
import React from 'react';
import PeaAccountProfile from '../lib/PeaAccountProfile';
import { peapodCardProps } from './_mock';

const AccountProfile = () => (
  <PeaAccountProfile
    cover={
      'https://beinglol.com/media/facebook-cover/Iron-Man-3-Facebook-Covers-1598.jpeg'
    }
    image={
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZYEi7-MP_fJqbD6yYkrykoIOo-65rj95h2lyI2dPQ8sDtgj9cpA'
    }
    name={'Iron Mann'}
    tag={'@ironmann'}
    site={'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man'}
    bio={
      'Anthony Edward "Tony" Stark was a billionaire industrialist, a founding member of the Avengers, and the former CEO of Stark Industries, a company originally started by his father, Howard Stark.'
    }
    location={'California'}
    age={35}
    gender={'Male'}
    groups={[
      {
        name: 'Celebrities',
        src:
          'https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2015/01/10/Photos/selfie-kH4D--621x414@LiveMint.jpg',
      },
      {
        name: 'Friends',
        src:
          'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/09/11/group-photos-need-to-die.jpg?w968h681',
      },
    ]}
    tags={[
      { label: 'cinema' },
      { label: 'sport' },
      { label: 'nightlife' },
      { label: 'theater' },
      { label: 'culture' },
      { label: 'holy' },
    ]}
    reputation={500}
    pods={[peapodCardProps]}
  />
);

AccountProfile.metadata = {
  name: 'Pea AccountProfile',
};
AccountProfile.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
AccountProfile.code = `
  import PeaAccountProfile from '../lib/PeaAccountProfile';
  
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
  
  const Preview = () => (
    <PeaAccountProfile
      cover={
        'https://beinglol.com/media/facebook-cover/Iron-Man-3-Facebook-Covers-1598.jpeg'
      }
      image={
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZYEi7-MP_fJqbD6yYkrykoIOo-65rj95h2lyI2dPQ8sDtgj9cpA'
      }
      name={'Iron Mann'}
      tag={'@ironmann'}
      site={'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man'}
      bio={
        'Anthony Edward "Tony" Stark was a billionaire industrialist, a founding member of the Avengers, and the former CEO of Stark Industries, a company originally started by his father, Howard Stark.'
      }
      location={'California'}
      age={35}
      gender={'Male'}
      groups={[
        {
          name: 'Celebrities',
          src:
            'https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2015/01/10/Photos/selfie-kH4D--621x414@LiveMint.jpg',
        },
        {
          name: 'Friends',
          src:
            'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/09/11/group-photos-need-to-die.jpg?w968h681',
        },
      ]}
      tags={[
        { label: 'cinema' },
        { label: 'sport' },
        { label: 'nightlife' },
        { label: 'theater' },
        { label: 'culture' },
        { label: 'holy' },
      ]}
      reputation={500}
      pods={[peapodCardProps]}
    />
  )
`;

export default AccountProfile;
