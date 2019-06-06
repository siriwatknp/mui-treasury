import React from 'react';
import Radio from '@material-ui/core/Radio';
import { ReactComponent as Logo } from './assets/peapods-logo-circle.svg';

const PeaRadio = props => (
  <Radio
    checkedIcon={
      <div className={'PeaIcon'}>
        <Logo />
      </div>
    }
    {...props}
  />
);

PeaRadio.metadata = {
  name: 'Pea Radio',
};
PeaRadio.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaRadio;
