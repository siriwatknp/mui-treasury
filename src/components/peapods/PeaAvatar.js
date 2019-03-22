import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { unstable_Box as Box } from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const PeaAvatar = ({ size, more, ...props }) =>
  more ? (
    <Box
      className={clsx(more && 'MuiAvatar--more')}
      position={'relative'}
      css={{
        '& .MuiAvatar-more': {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          color: '#ffffff',
          backgroundColor: 'rgba(30, 104, 182, 0.6)',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <Avatar
        className={clsx('MuiAvatar-root', size && `MuiAvatar--${size}`)}
        {...props}
      />
      <Typography className={'MuiAvatar-more'}>+{more}</Typography>
    </Box>
  ) : (
    <Avatar
      className={clsx('MuiAvatar-root', size && `MuiAvatar--${size}`)}
      {...props}
    />
  );

PeaAvatar.propTypes = {
  more: PropTypes.number,
  size: PropTypes.oneOf(['small', 'large', 'huge']),
};
PeaAvatar.defaultProps = {
  more: undefined,
  size: undefined,
};
PeaAvatar.metadata = {
  name: 'Pea Avatar',
};
PeaAvatar.codeSandbox = 'https://codesandbox.io/s/2vk8l2j2wn';

const Group = ({ more, images, avatarProps, ...props }) => (
  <Box
    display={'flex'}
    css={{
      '& .MuiAvatar-root:not(:first-child)': { marginLeft: -8 },
      '& .MuiAvatar-root': {
        border: '2px solid #ffffff',
        '&:first-child': { border: 'none' },
      },
      '& .MuiAvatar--more': { marginLeft: -8 },
    }}
    {...props}
  >
    {images.map((img, index) => (
      <PeaAvatar
        key={img}
        {...avatarProps}
        src={img}
        more={index === images.length - 1 ? more : undefined}
      />
    ))}
  </Box>
);
Group.propTypes = {
  more: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.string.isRequired),
  avatarProps: PropTypes.shape({}),
};
Group.defaultProps = {
  more: undefined,
  images: [],
  avatarProps: {},
};
Group.metadata = {
  name: 'Pea Avatar Group',
};
Group.codeSandbox = 'https://codesandbox.io/s/2vk8l2j2wn';

PeaAvatar.Group = Group;

export default PeaAvatar;
