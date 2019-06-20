/* eslint-disable */
import React from 'react';
import PeaThreadHeader from '../lib/PeaThreadHeader';
import { AVATAR } from './_mock';

const ThreadHeader = () => (
  <PeaThreadHeader
    avatar={AVATAR}
    title="Pea Panda"
    subtitle="Hey! What's up"
    timestamp="Dec 13"
    onClick={() => alert('Clicked')}
  />
);

ThreadHeader.metadata = {
  name: 'Pea ThreadHeader',
};
ThreadHeader.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
ThreadHeader.code = `
  import PeaThreadHeader from '../lib/PeaThreadHeader';
  
  export const AVATAR =
    'https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg';
  
  const Preview = () => (
    <PeaThreadHeader
      avatar={AVATAR}
      title="Pea Panda"
      subtitle="Hey! What's up"
      timestamp="Dec 13"
      onClick={() => alert('Clicked')}
    />
  )
`;

export default ThreadHeader;
