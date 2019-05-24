import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import PeaAvatar from './PeaAvatar';
import PeaText from './PeaTypography';

const useStyles = makeStyles(({ palette, spacing }) => {
  const radius = spacing(2.5);
  return {
    msg: {
      padding: spacing(1, 2, 1.25),
      borderRadius: 4,
      marginBottom: 4,
      display: 'inline-block',
      wordBreak: 'break-word',
    },
    leftRow: {
      textAlign: 'left',
    },
    left: {
      borderTopRightRadius: radius,
      borderBottomRightRadius: radius,
      backgroundColor: palette.grey[100],
    },
    leftFirst: {
      borderTopLeftRadius: radius,
    },
    leftLast: {
      borderBottomLeftRadius: radius,
    },
    rightRow: {
      textAlign: 'right',
    },
    right: {
      borderTopLeftRadius: radius,
      borderBottomLeftRadius: radius,
      backgroundColor: '#09f',
      color: palette.common.white,
    },
    rightFirst: {
      borderTopRightRadius: radius,
    },
    rightLast: {
      borderBottomRightRadius: radius,
    },
  };
});

const PeaChat = ({ avatar, messages, side }) => {
  const classes = useStyles();
  const attachClass = index => {
    if (index === 0) {
      return classes[`${side}First`];
    }
    if (index === messages.length - 1) {
      return classes[`${side}Last`];
    }
    return '';
  };
  return (
    <Grid
      container
      spacing={2}
      justify={side === 'right' ? 'flex-end' : 'flex-start'}
    >
      {side === 'left' && (
        <Grid item>
          <PeaAvatar src={avatar} size={'small'} />
        </Grid>
      )}
      <Grid item xs={8}>
        {messages.map((msg, i) => (
          <div className={classes[`${side}Row`]}>
            <PeaText
              align={'left'}
              variant={'body2'}
              className={`${classes.msg} ${classes[side]} ${attachClass(i)}`}
            >
              {msg}
            </PeaText>
          </div>
        ))}
      </Grid>
    </Grid>
  );
};

PeaChat.propTypes = {
  avatar: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.string),
  side: PropTypes.oneOf(['left', 'right']),
};
PeaChat.defaultProps = {
  avatar: '',
  messages: [],
  side: 'left',
};
PeaChat.metadata = {
  name: 'Pea Chat',
};
PeaChat.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaChat;
