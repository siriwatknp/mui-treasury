import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@mui-treasury/styling';
import defaultChatMsgStyles from '@mui-treasury/styles/chatMsg/default';

const ChatMsg = withStyles(defaultChatMsgStyles, { name: 'ChatMsg' })(props => {
  const {
    css,
    avatar,
    messages,
    side,
    GridContainerProps,
    GridItemProps,
    AvatarProps,
    getTypographyProps,
  } = props;
  const attachClass = index => {
    if (index === 0) {
      return css[`${side}First`];
    }
    if (index === messages.length - 1) {
      return css[`${side}Last`];
    }
    return '';
  };
  return (
    <Grid
      container
      spacing={2}
      justify={side === 'right' ? 'flex-end' : 'flex-start'}
      {...GridContainerProps}
    >
      {side === 'left' && (
        <Grid item {...GridItemProps}>
          <Avatar
            src={avatar}
            {...AvatarProps}
            className={cx(css.avatar, AvatarProps.className)}
          />
        </Grid>
      )}
      <Grid item xs={8}>
        {messages.map((msg, i) => {
          const TypographyProps = getTypographyProps(msg, i, props);
          return (
            // eslint-disable-next-line react/no-array-index-key
            <div key={msg.id || i} className={css[`${side}Row`]}>
              <Typography
                align={'left'}
                {...TypographyProps}
                className={cx(
                  css.msg,
                  css[side],
                  attachClass(i),
                  TypographyProps.className
                )}
              >
                {msg}
              </Typography>
            </div>
          );
        })}
      </Grid>
    </Grid>
  );
});

ChatMsg.propTypes = {
  avatar: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.string),
  side: PropTypes.oneOf(['left', 'right']),
  GridContainerProps: PropTypes.shape({}),
  GridItemProps: PropTypes.shape({}),
  AvatarProps: PropTypes.shape({}),
  getTypographyProps: PropTypes.func,
};
ChatMsg.defaultProps = {
  avatar: '',
  messages: [],
  side: 'left',
  GridContainerProps: {},
  GridItemProps: {},
  AvatarProps: {},
  getTypographyProps: () => ({}),
};

export default ChatMsg;
