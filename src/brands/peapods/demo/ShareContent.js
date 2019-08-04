/* eslint-disable no-alert */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import PeaShareContent from '../lib/PeaShareContent';

const ShareContent = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Share Content</Button>
      <PeaShareContent
        open={open}
        onClose={() => setOpen(false)}
        onShare={name => alert(`${name} clicked`)}
      />
    </>
  );
};

ShareContent.metadata = {
  name: 'Pea Share Content',
  api: 'https://material-ui.com/pt/api/input-base/#inputbase-api',
};
ShareContent.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
ShareContent.code = `
  import React, { useState } from 'react';
  import Button from '@material-ui/core/Button';
  import PeaShareContent from '../lib/PeaShareContent';

  const ShareContent = () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Share</Button>
        <PeaShareContent
          open={open}
          onClose={() => setOpen(false)}
          onShare={name => alert(\`$\{name} clicked\`)}
        />
      </>
    );
  };
`;

export default ShareContent;
