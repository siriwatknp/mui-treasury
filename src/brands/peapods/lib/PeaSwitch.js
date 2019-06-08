import React from 'react';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
import Logo from './assets/peapods-logo-circle.svg';

const PeaSwitch = ({ className, ...props }) => (
  <Switch
    className={`PeaSwitch-root ${className}`}
    checkedIcon={<img src={Logo} alt="toggle-input" className={'PeaIcon'} />}
    {...props}
  />
);

PeaSwitch.propTypes = {
  className: PropTypes.string,
};
PeaSwitch.defaultProps = {
  className: '',
};
PeaSwitch.metadata = {
  name: 'Pea Switch',
};
PeaSwitch.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaSwitch;
