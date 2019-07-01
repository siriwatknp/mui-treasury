/* eslint-disable no-alert */
/* eslint-disable max-len */

import React from 'react';
import PeaEventDetails from '../lib/PeaEventDetails';
import Connections from './Connections';

const renderPods = () => {};

const EventDetails = () => (
  <PeaEventDetails
    title="My event my event My event my event My event my event My event my event"
    sourceImage="https://upload.wikimedia.org/wikipedia/commons/6/6b/Meetup_Logo.png"
    sourceLink="https://meetup.com"
    profile={{
      name: 'Siriwat Knp',
      image: 'https://avatars.dicebear.com/v2/avataaars/siriwat.svg',
      link: 'https://google.com',
    }}
    timeAgo="2 days ago"
    cover={
      'https://images.unsplash.com/photo-1496450681664-3df85efbd29f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
    }
    podCount={1}
    timeString="Thursday, January 10th, 4:00am"
    location="Pivotal Labs, 875 Howard St. San Francisco USA"
    stats={{
      interested: 15,
      attending: 5,
      limit: 30,
    }}
    onCreatePodClicked={() => alert('create pod')}
    onLeavePodClicked={() => alert('leave pod')}
    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    tags={[
      { label: 'cinema' },
      { label: 'sport' },
      { label: 'nightlife' },
      { label: 'theater' },
      { label: 'culture' },
      { label: 'holy' },
    ]}
    renderConnections={Connections}
    renderPods={renderPods}
  />
);

EventDetails.metadata = {
  name: 'Pea Event Details',
};

EventDetails.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

EventDetails.code = `
  import PeaEventDetails from '../lib/PeaEventDetails';
  
  const Preview = () => (
    <PeaEventDetails
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

export default EventDetails;
