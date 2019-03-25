import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import peaIcon from 'assets/peapods/peapods-logo-circle.svg';

const PeaSwitch = props => {
  const [value, onChange] = useState(false);
  return (
    <Switch
      classes={
        {
          // switchBase: classes.iOSSwitchBase,
          // bar: classes.iOSBar,
          // icon: classes.iOSIcon,
          // iconChecked: classes.iOSIconChecked,
          // checked: classes.iOSChecked,
        }
      }
      checkedIcon={
        <div className={'PeaIcon'}>
          <img alt={'pea'} src={peaIcon} />
        </div>
      }
      checked={value}
      onChange={e => onChange(e.target.checked)}
      {...props}
    />
  );
};

PeaSwitch.metadata = {
  name: 'Pea Switch',
};
PeaSwitch.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaSwitch;
