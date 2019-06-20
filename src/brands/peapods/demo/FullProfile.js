/* eslint-disable */
import React from 'react';
import PeaFullProfile from '../lib/PeaFullProfile';
import { AVATAR } from './_mock';

const FullProfile = () => (
  <PeaFullProfile
    cover={
      'https://images.unsplash.com/photo-1546707640-7ba6e4b2df2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80'
    }
    image={AVATAR}
    name={'Sam Smith'}
    tag={'@samsmith'}
    site={'https://google.com'}
    bio={
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
    location={'Washington'}
    age={35}
    gender={'Female'}
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
  />
);

FullProfile.metadata = {
  name: 'Pea FullProfile',
};
FullProfile.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
FullProfile.code = `
  import PeaFullProfile from '../lib/PeaFullProfile';
  
  export const AVATAR =
    'https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg';
  
  const Preview = () => (
    <PeaFullProfile
      cover={
        'https://images.unsplash.com/photo-1546707640-7ba6e4b2df2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80'
      }
      image={AVATAR}
      name={'Sam Smith'}
      tag={'@samsmith'}
      site={'https://google.com'}
      bio={
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      }
      location={'Washington'}
      age={35}
      gender={'Female'}
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
    />
  )
`;

export default FullProfile;
