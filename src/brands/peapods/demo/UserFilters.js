/* eslint-disable max-len */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import PeaUserFilters from '../lib/PeaUserFilters';

const UserFilters = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open UserFilters</Button>
      <PeaUserFilters open={open} onClose={onClose} />
    </>
  );
};

UserFilters.metadata = {
  name: 'Pea User Filters',
};
UserFilters.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
UserFilters.code = `
  import React, { useState } from 'react';
  import Button from '@material-ui/core/Button';
  import PeaUserFilters from '../lib/PeaUserFilters';

  const UserFilters = () => {
    const [open, setOpen] = useState(false);
    const onClose = () => setOpen(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open UserFilters</Button>
        <PeaUserFilters open={open} onClose={onClose} />
      </>
    );
  };
`;

export default UserFilters;
