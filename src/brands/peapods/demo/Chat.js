/* eslint-disable */
import React from 'react';
import PeaChat from '../lib/PeaChat';
import { AVATAR } from './_mock';

const Chat = () => (
  <div>
    <PeaChat
      side={'left'}
      avatar={AVATAR}
      messages={[
        'Hi, I am jobs',
        'How r u?',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
      ]}
    />
    <PeaChat side={'right'} messages={['Hello', 'etiam posuere magnis']} />
    <PeaChat side={'left'} avatar={AVATAR} messages={['Neh mind', 'Bye']} />
  </div>
);

Chat.metadata = {
  name: 'Pea Chat',
};
Chat.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
Chat.code = `
  import PeaChat from '../lib/PeaChat';
  
  const Preview = () => (
    <div>
      <PeaChat
        side={'left'}
        avatar={AVATAR}
        messages={[
          'Hi, I am jobs',
          'How r u?',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
        ]}
      />
      <PeaChat side={'right'} messages={['Hello', 'etiam posuere magnis']} />
      <PeaChat side={'left'} avatar={AVATAR} messages={['Neh mind', 'Bye']} />
    </div>
  )
`;

export default Chat;
