import React from 'react';
import PeaTextArea from '../lib/PeaTextArea';

const Tabs = () => (
  <div>
    <PeaTextArea
      label={'Label'}
      placeholder={'Username'}
      helperText={'Helper Text'}
    />
    <PeaTextArea
      error
      label={'Label'}
      placeholder={'Username'}
      helperText={'Helper Text'}
    />
  </div>
);
Tabs.metadata = {
  name: 'Pea TextArea',
  api: 'https://material-ui.com/pt/api/text-field/#textfield-api',
};
Tabs.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
Tabs.code = `
  import PeaTextArea from '../lib/PeaTextArea';
  
  const Preview = () => (
    <>
      <PeaTextArea
        label={'Label'}
        placeholder={'Username'}
        helperText={'Helper Text'}
      />
      <PeaTextArea
        error
        label={'Label'}
        placeholder={'Username'}
        helperText={'Helper Text'}
      />
    </>
  )
`;

export default Tabs;
