/* eslint-disable max-len */
import React from 'react';
import createSimpleShowcase from 'containers/createSimpleShowcase';
import { ChatMessages } from 'docs/components/chats';

const components = [
  {
    component: ChatMessages,
    render: () => <ChatMessages.Demo />,
  },
];

const ChatPage = createSimpleShowcase(components);

export default ChatPage;
