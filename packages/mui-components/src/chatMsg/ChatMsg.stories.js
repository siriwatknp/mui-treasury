import React from 'react';
import { storiesOf } from '@storybook/react';
import Container from '@material-ui/core/Container';
import ChatMsg from './ChatMsg';

storiesOf('mui-components|Chat Message', module).add('ChatMsg', () => {
  return (
    <Container maxWidth={'xs'}>
      <ChatMsg
        avatar={''}
        messages={[
          'Hi Jenny, How r u today?',
          'Did you train yesterday',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
        ]}
      />
      <ChatMsg
        side={'right'}
        messages={[
          "Great! What's about you?",
          'Of course I did. Speaking of which check this out',
        ]}
      />
      <ChatMsg avatar={''} messages={['Im good.', 'See u later.']} />
    </Container>
  );
});
