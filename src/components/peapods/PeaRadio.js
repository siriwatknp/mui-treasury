import React from 'react';
import Radio from '@material-ui/core/Radio';
import peaIcon from 'assets/peapods/peapods-logo-circle.svg';

const PeaRadio = props => (
  <Radio
    checkedIcon={
      <div className={'PeaIcon'}>
        <img alt={'pea'} src={peaIcon} />
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
