/* eslint-disable max-len */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PeaDialog from '../lib/PeaDialog';
import PeaButton from '../lib/PeaButton';
import PeaRadioGroup from '../lib/PeaRadioGroup';
import PeaTextArea from '../lib/PeaTextArea';

const GroupDialog = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Create Group</Button>
      <PeaDialog
        open={open}
        className={'PeaGroupDialog'}
        title={'Create group'}
        content={
          <>
            <TextField
              fullWidth
              margin={'normal'}
              label={'Name'}
              placeholder={'name of your group'}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <PeaRadioGroup />
            <PeaTextArea
              label={'Invited User'}
              placeholder={'Type the name or username of the person in group'}
            />
          </>
        }
        actions={[
          <PeaButton onClick={onClose}>Cancel</PeaButton>,
          <PeaButton color={'primary'} variant={'contained'} onClick={onClose}>
            Create
          </PeaButton>,
        ]}
        onClose={onClose}
      />
    </>
  );
};

GroupDialog.metadata = {
  name: 'Pea GroupDialog',
};
GroupDialog.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
GroupDialog.code = `
  import Button from '@material-ui/core/Button';
  import PeaGroupDialog from '../lib/PeaGroupDialog';
  
  const Preview = () => {
    const [open, setOpen] = useState(false);
    const onClose = () => setOpen(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Create Group</Button>
        <PeaDialog
          open={open}
          className={'PeaGroupDialog'}
          title={'Create group'}
          content={
            <>
              <TextField
                fullWidth
                margin={'normal'}
                label={'Name'}
                placeholder={'name of your group'}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <PeaRadioGroup />
              <PeaTextArea
                label={'Invited User'}
                placeholder={'Type the name or username of the person in group'}
              />
            </>
          }
          actions={[
            <PeaButton onClick={onClose}>Cancel</PeaButton>,
            <PeaButton color={'primary'} variant={'contained'} onClick={onClose}>
              Create
            </PeaButton>,
          ]}
          onClose={onClose}
        />
      </>
    );
  }
`;

export default GroupDialog;
