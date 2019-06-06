/* eslint-disable max-len */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import PeaInvitationDialog from '../lib/PeaInvitationDialog';

const InvitationDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Invitation</Button>
      <PeaInvitationDialog
        person={'@JohnD'}
        pods={[
          {
            primary: 'Music Festival',
            secondary: 'Peas: 2',
            src:
              'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          },
          {
            primary: 'Marketing Conference',
            secondary: 'Peas: 1',
            src:
              'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
          },
          {
            primary: 'Talk Show',
            secondary: 'Peas: 3',
            full: true,
            src:
              'https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          },
        ]}
        onInvite={({ primary }) => alert(`Invited to ${primary}`)}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

InvitationDialog.metadata = {
  name: 'Pea InvitationDialog',
};
InvitationDialog.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
InvitationDialog.code = `
  import Button from '@material-ui/core/Button';
  import PeaInvitationDialog from '../lib/PeaInvitationDialog';
  
  const Preview = () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Invitation</Button>
        <PeaInvitationDialog
          person={'@JohnD'}
          pods={[
            {
              primary: 'Music Festival',
              secondary: 'Peas: 2',
              src:
                'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            },
            {
              primary: 'Marketing Conference',
              secondary: 'Peas: 1',
              src:
                'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
            },
            {
              primary: 'Talk Show',
              secondary: 'Peas: 3',
              full: true,
              src:
                'https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            },
          ]}
          onInvite={({ primary }) => alert(Invited to )}
          open={open}
          onClose={() => setOpen(false)}
        />
      </>
    );
  }
`;

export default InvitationDialog;
