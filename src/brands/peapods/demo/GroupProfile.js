/* eslint-disable */
import React from 'react';
import PeaGroupProfile from '../lib/PeaGroupProfile';

const GroupProfile = () => (
  <PeaGroupProfile
    cover={
      'https://images.unsplash.com/photo-1496450681664-3df85efbd29f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
    }
    groupName={'Close Friends'}
    tags={[
      { label: 'cinema' },
      { label: 'sport' },
      { label: 'nightlife' },
      { label: 'theater' },
      { label: 'culture' },
      { label: 'holy' },
    ]}
    followings={[
      {
        name: 'Celebrities',
        src:
          'https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2015/01/10/Photos/selfie-kH4D--621x414@LiveMint.jpg',
      },
    ]}
    followers={[
      {
        name: 'Friends',
        src:
          'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/09/11/group-photos-need-to-die.jpg?w968h681',
      },
    ]}
  />
);

GroupProfile.metadata = {
  name: 'Pea GroupProfile',
};
GroupProfile.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
GroupProfile.code = `
  import PeaGroupProfile from '../lib/PeaGroupProfile';
  
  const Preview = () => (
    <PeaGroupProfile
      cover={
        'https://images.unsplash.com/photo-1496450681664-3df85efbd29f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
      }
      groupName={'Close Friends'}
      tags={[
        { label: 'cinema' },
        { label: 'sport' },
        { label: 'nightlife' },
        { label: 'theater' },
        { label: 'culture' },
        { label: 'holy' },
      ]}
      followings={[
        {
          name: 'Celebrities',
          src:
            'https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2015/01/10/Photos/selfie-kH4D--621x414@LiveMint.jpg',
        },
      ]}
      followers={[
        {
          name: 'Friends',
          src:
            'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/09/11/group-photos-need-to-die.jpg?w968h681',
        },
      ]}
    />
  )
`;

export default GroupProfile;
