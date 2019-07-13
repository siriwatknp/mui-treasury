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
            profile: {
              name: 'Music Festival',
              image:
                'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            },
            podCount: 2,
          },
          {
            profile: {
              name: 'Marketing Conference',
              image:
                'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
            },
            podCount: 1,
          },
          {
            profile: {
              name: 'Talk Show',
              image:
                'https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            },
            podCount: 3,
            full: true,
          },
        ]}
        onInvite={({ profile }) => alert(`Invited to ${profile.name}`)}
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
              profile: {
                name: 'Music Festival',
                image:
                  'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
              },
              podCount: 2,
            },
            {
              profile: {
                name: 'Marketing Conference',
                image:
                  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
              },
              podCount: 1,
            },
            {
              profile: {
                name: 'Talk Show',
                image:
                  'https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
              },
              podCount: 3,
              full: true,
            },
          ]}
          onInvite={({ profile }) => alert(\`Invited to \${profile.name}\`)}
          open={open}
          onClose={() => setOpen(false)}
        />
      </>
    );
  };
`;

export default InvitationDialog;
