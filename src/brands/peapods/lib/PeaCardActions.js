import React from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';
import CardActions from '@material-ui/core/CardActions';

const PeaCardActions = ({ left, right, centered }) => (
  <CardActions
    className={cx(
      'MuiCardActions--primary',
      centered && 'MuiCardActions--centered',
    )}
  >
    {left && <div className={'MuiCardActions-left'}>{left}</div>}
    {right && <div className={'MuiCardActions-right'}>{right}</div>}
  </CardActions>
);

PeaCardActions.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
  centered: PropTypes.bool,
};
PeaCardActions.defaultProps = {
  left: null,
  right: null,
  centered: false,
};
PeaCardActions.metadata = {
  name: 'Pea Card Actions',
  libraries: [
    {
      text: 'clsx',
      link: 'https://github.com/lukeed/clsx',
    },
  ],
};
PeaCardActions.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaCardActions;
