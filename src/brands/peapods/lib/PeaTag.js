import React from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

const PeaTag = ({ className, src, ...props }) => (
  <Chip
    className={cx('PeaTag-root', className)}
    classes={{
      label: 'MuiChip-label',
      deleteIcon: 'MuiChip-deleteIcon',
    }}
    avatar={src ? <Avatar alt={'person'} src={src} /> : null}
    {...props}
  />
);

PeaTag.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
};
PeaTag.defaultProps = {
  className: '',
  src: '',
};
PeaTag.metadata = {
  name: 'Pea Tag',
  libraries: [
    {
      text: 'clsx',
      link: 'https://github.com/lukeed/clsx',
    },
  ],
};
PeaTag.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaTag;
