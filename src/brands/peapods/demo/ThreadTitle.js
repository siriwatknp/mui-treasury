/* eslint-disable */
import React from 'react';
import PeaThreadTitle from '../lib/PeaThreadTitle';
import { AVATAR } from './_mock';

const ThreadTitle = () => (
  <PeaThreadTitle title="Foo bar" subtitle="Online" avatar={AVATAR} />
);

ThreadTitle.metadata = {
  name: 'Pea ThreadTitle',
};
ThreadTitle.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
ThreadTitle.code = `
  import PeaThreadTitle from '../lib/PeaThreadTitle';
  
  export const AVATAR =
    'https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg';
  
  const Preview = () => (
    <PeaThreadTitle title="Foo bar" subtitle="Online" avatar={AVATAR} />
  )
`;

export default ThreadTitle;
