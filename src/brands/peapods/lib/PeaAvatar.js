/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const PeaAvatar = ({
  externalLink,
  className,
  size,
  more,
  isClickable,
  ...props
}) =>
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
          isClickable && 'MuiAvatar--clickable',
          className,
        )}
        {...props}
      />
      <Typography className={'MuiAvatar-more'}>+{more}</Typography>
    </Box>
  ) : (
    <>
      {externalLink ? (
        <Link href={externalLink} target="_blank" rel="noopener">
          <Avatar
            className={clsx(
              'MuiAvatar-root',
              size && `MuiAvatar--${size}`,
              isClickable && 'MuiAvatar--clickable',
              className,
            )}
            {...props}
          />
        </Link>
      ) : (
        <Avatar
          className={clsx(
            'MuiAvatar-root',
            size && `MuiAvatar--${size}`,
            isClickable && 'MuiAvatar--clickable',
            className,
          )}
          {...props}
        />
      )}
    </>
  );

PeaAvatar.propTypes = {
  externalLink: PropTypes.string,
  isClickable: PropTypes.bool,
  className: PropTypes.string,
  more: PropTypes.number,
  size: PropTypes.oneOf(['small', 'big', 'large', 'huge']),
};
PeaAvatar.defaultProps = {
  externalLink: undefined,
  isClickable: false,
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

const Group = ({ more, images, avatarProps, overlap, ...props }) => (
  <Box
    display={'flex'}
    css={{
      '& .MuiAvatar-root:not(:first-child)': { marginLeft: overlap },
      '& .MuiAvatar-root': {
        border: '2px solid #ffffff',
      },
      '& .MuiAvatar--more': { marginLeft: overlap },
    }}
    {...props}
  >
    {images.map((img, index) => (
      <PeaAvatar
        key={`group-${img}-${index}`}
        {...avatarProps}
        src={img}
        more={index === images.length - 1 ? more : undefined}
      />
    ))}
  </Box>
);
Group.propTypes = {
  more: PropTypes.number,
  overlap: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.string.isRequired),
  avatarProps: PropTypes.shape({}),
};
Group.defaultProps = {
  more: undefined,
  overlap: -8,
  images: [],
  avatarProps: {},
};
Group.metadata = {
  name: 'Pea Avatar Group',
};
Group.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

PeaAvatar.Group = Group;

export default PeaAvatar;
