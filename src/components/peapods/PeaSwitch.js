import React from 'react';
import Switch from '@material-ui/core/Switch';
import { ReactComponent as Logo } from './assets/peapods-logo-circle.svg';

const PeaSwitch = props => (
  <Switch
    checkedIcon={
      <div className={'PeaIcon'}>
        <Logo />
      </div>
    }
    {...props}
  />
);

PeaSwitch.metadata = {
  name: 'Pea Switch',
};
PeaSwitch.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaSwitch;
