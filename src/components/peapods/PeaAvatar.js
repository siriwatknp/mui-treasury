/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { unstable_Box as Box } from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const PeaAvatar = ({ className, size, more, ...props }) =>
  more ? (
    <Box
      display={'flex'}
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
        className={clsx(
          'MuiAvatar-root',
          size && `MuiAvatar--${size}`,
          className
        )}
        {...props}
      />
      <Typography className={'MuiAvatar-more'}>+{more}</Typography>
    </Box>
  ) : (
    <Avatar
      className={clsx(
        'MuiAvatar-root',
        size && `MuiAvatar--${size}`,
        className,
      )}
      {...props}
    />
  );

PeaAvatar.propTypes = {
  className: PropTypes.string,
  more: PropTypes.number,
  size: PropTypes.oneOf(['small', 'big', 'large', 'huge']),
};
PeaAvatar.defaultProps = {
  className: '',
  more: undefined,
  size: undefined,
};
PeaAvatar.metadata = {
  name: 'Pea Avatar',
  libraries: [
    {
      text: 'clsx',
      link: 'https://github.com/lukeed/clsx',
    },
  ],
};
PeaAvatar.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

const Group = ({ more, images, avatarProps, ...props }) => (
  <Box
    display={'flex'}
    css={{
      '& .MuiAvatar-root:not(:first-child)': { marginLeft: -8 },
      '& .MuiAvatar-root': {
        border: '2px solid #ffffff',
      },
      '& .MuiAvatar--more': { marginLeft: -8 },
    }}
    {...props}
  >
    {images.map((img, index) => (
      <PeaAvatar
        key={`${img}-${index}`}
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
Group.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

PeaAvatar.Group = Group;

export default PeaAvatar;
