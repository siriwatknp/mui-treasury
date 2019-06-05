/* eslint-disable max-len */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import PeaConfirmation from '../lib/PeaConfirmation';

const Confirmation = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <PeaConfirmation
        title={'Block @JohnD'}
        content={
          "@JohnD won't be able to see your profile information, invite you on the events and send you messages"
        }
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={() => alert('submitted!')}
      />
    </>
  );
};

Confirmation.metadata = {
  name: 'Pea Confirmation',
};
Confirmation.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
Confirmation.code = `
  import Button from '@material-ui/core/Button';
  import PeaConfirmation from '../lib/PeaConfirmation';
  
  const Preview = () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <PeaConfirmation
          title={'Block @JohnD'}
          content={
            "@JohnD won't be able to see your profile information, invite you on the events and send you messages"
          }
          open={open}
          onClose={() => setOpen(false)}
          onSubmit={() => alert('submitted!')}
        />
      </>
    );
  }
`;

export default Confirmation;
