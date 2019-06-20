import React from 'react';
import PeaConnections from '../lib/PeaConnections';
import { SOCIAL1, SOCIAL2, SOCIAL3 } from './_mock';

const Connections = () => (
  <PeaConnections
    followers={SOCIAL1}
    followings={SOCIAL1}
    tags={SOCIAL2}
    groups={SOCIAL3}
    onClose={() => alert('close!')}
  />
);

Connections.metadata = {
  name: 'Pea Connections',
};
Connections.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
Connections.code = `
  import PeaConnections from '../lib/PeaConnections';
  
  const SOCIAL1 = [
    {
      src: 'https://avatars.dicebear.com/v2/avataaars/example.svg',
      name: 'Yeoman',
      social: 'twitter',
    },
    {
      src: 'https://avatars.dicebear.com/v2/avataaars/example2.svg',
      name: 'GGWP',
      social: 'meetup',
    },
    {
      src: 'https://avatars.dicebear.com/v2/avataaars/example3.svg',
      name: 'Sawasdee',
      social: 'facebook',
    },
  ];
  const SOCIAL2 = [
    {
      src: 'https://avatars.dicebear.com/v2/avataaars/example4.svg',
      name: 'Yeoman',
      social: 'tag',
    },
    {
      src: 'https://avatars.dicebear.com/v2/avataaars/example5.svg',
      name: 'GGWP',
      social: 'tag',
    },
  ];
  const SOCIAL3 = [
    {
      src: 'https://avatars.dicebear.com/v2/avataaars/example7.svg',
      name: 'Yeoman',
      social: 'group',
    },
    {
      src: 'https://avatars.dicebear.com/v2/avataaars/example8.svg',
      name: 'GGWP',
      social: 'group',
    },
    {
      src: 'https://avatars.dicebear.com/v2/avataaars/example9.svg',
      name: 'Sawasdee',
      social: 'group',
    },
    {
      src: 'https://avatars.dicebear.com/v2/avataaars/example10.svg',
      name: 'Test',
      social: 'group',
    },
  ];
  
  const Preview = () => (
    <PeaConnections
      followers={SOCIAL1}
      followings={SOCIAL1}
      tags={SOCIAL2}
      groups={SOCIAL3}
      onClose={() => alert('close!')}
    />
  )
`;

export default Connections;
