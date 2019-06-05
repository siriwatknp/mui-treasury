/* eslint-disable max-len */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import PeaToast from '../lib/PeaToast';

const Toast = () => {
  const [opened, setOpened] = useState(false);
  const [currentVariant, setCurrentVariant] = useState(0);
  const variants = ['success', 'warning', 'error', 'info'];
  return (
    <>
      <Button
        onClick={() => {
          setOpened(true);
          setCurrentVariant(currentVariant + 1);
        }}
      >
        Keep opening Toast to switch variant
      </Button>
      <PeaToast
        message={'Hello from Thailand!'}
        open={opened}
        onClose={() => setOpened(false)}
        variant={variants[currentVariant % 4]}
      />
    </>
  );
};

Toast.metadata = {
  name: 'Pea Toast',
};
Toast.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
Toast.code = `
  import React, { useState } from 'react';
  import Button from '@material-ui/core/Button';
  import PeaToast from '../lib/PeaToast';
  
  const Preview = () => {
    const [opened, setOpened] = useState(false);
    const [currentVariant, setCurrentVariant] = useState(0);
    const variants = ['success', 'warning', 'error', 'info'];
    return (
      <>
        <Button
          onClick={() => {
            setOpened(true);
            setCurrentVariant(currentVariant + 1);
          }}
        >
          Keep opening Toast to switch variant
        </Button>
        <PeaToast
          message={'Hello from Thailand!'}
          open={opened}
          onClose={() => setOpened(false)}
          variant={variants[currentVariant % 4]}
        />
      </>
    );
  }
`;

export default Toast;
