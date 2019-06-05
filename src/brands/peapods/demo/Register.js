/* eslint-disable max-len */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import PeaRegister from '../lib/PeaRegister';

const Register = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Register</Button>
      <PeaRegister
        open={open}
        onClose={() => setOpen(false)}
        onClickFacebook={() => alert('facebook clicked')}
        onClickGoogle={() => alert('google clicked')}
        onLogin={() => alert('login button clicked')}
        onRegisterEmail={() => alert('email register clicked')}
      />
    </>
  );
};

Register.metadata = {
  name: 'Pea Register',
};
Register.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
Register.code = `
  import Button from '@material-ui/core/Button';
  import PeaRegister from '../lib/PeaRegister';
  
  const Preview = () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Register</Button>
        <PeaRegister
          open={open}
          onClose={() => setOpen(false)}
          onClickFacebook={() => alert('facebook clicked')}
          onClickGoogle={() => alert('google clicked')}
          onLogin={() => alert('login button clicked')}
          onRegisterEmail={() => alert('email register clicked')}
        />
      </>
    );
  }
`;

export default Register;
