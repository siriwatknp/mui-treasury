import React from 'react';
import PeaMessageInput from '../lib/PeaMessageInput';

const MessageInput = () => <PeaMessageInput />;

MessageInput.metadata = {
  name: 'Pea MessageInput',
};
MessageInput.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
MessageInput.code = `
  import PeaMessageInput from '../lib/PeaMessageInput';
  
  const Preview = () => (
    <PeaMessageInput />;
  )
`;

export default MessageInput;
