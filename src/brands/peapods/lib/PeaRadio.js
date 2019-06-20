import React from 'react';
import Radio from '@material-ui/core/Radio';
import Logo from './assets/peapods-logo-circle.svg';

const PeaRadio = props => (
  <Radio
    checkedIcon={<img alt="radio-selected" className={'PeaIcon'} src={Logo} />}
    {...props}
  />
);

PeaRadio.metadata = {
  name: 'Pea Radio',
};
PeaRadio.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaRadio;
