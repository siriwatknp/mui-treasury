/* eslint-disable */
import React from 'react';
import ChatMessages from 'components/chats/ChatMessages';

ChatMessages.Demo = () => {
  const AVATAR =
    'https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg';
  return (
    <div>
      <ChatMessages
        avatar={AVATAR}
        messages={[
          'Hi Jenny, How r u today?',
          'Did you train yesterday',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
        ]}
      />
      <ChatMessages
        side={'right'}
        messages={[
          "Great! What's about you?",
          'Of course I did. Speaking of which check this out',
        ]}
      />
      <ChatMessages avatar={AVATAR} messages={['Im good.', 'See u later.']} />
    </div>
  );
};

const demoCode = `
  import React from 'react';
  import ChatMessages from 'components/chats/ChatMessages';
  
  const Demo = () => {
    const AVATAR =
      'https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg';
    return (
      <div>
        <ChatMessages
          avatar={AVATAR}
          messages={[
            'Hi Jenny, How r u today?',
            'Did you train yesterday',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
          ]}
        />
        <ChatMessages
          side={'right'}
          messages={[
            "Great! What's about you?",
            'Of course I did. Speaking of which check this out',
          ]}
        />
        <ChatMessages avatar={AVATAR} messages={['Im good.', 'See u later.']} />
      </div>
    );
  };
  
  export default Demo;
`;

const coreCode = `
  import React from 'react';
  import PropTypes from 'prop-types';
  import { makeStyles } from '@material-ui/styles';
  import Avatar from '@material-ui/core/Avatar';
  import Grid from '@material-ui/core/Grid';
  import Typography from '@material-ui/core/Typography';
  
  const useStyles = makeStyles(({ palette, spacing }) => {
    const radius = spacing(2.5);
    const size = spacing(4);
    const rightBgColor = palette.primary.main;
    // if you want the same as facebook messenger, use this color '#09f'
    return {
      avatar: {
        width: size,
        height: size,
      },
      msg: {
        padding: spacing(1, 2),
        borderRadius: 4,
        marginBottom: 4,
        display: 'inline-block',
        wordBreak: 'break-word',
        fontFamily:
          // eslint-disable-next-line max-len
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
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
        backgroundColor: rightBgColor,
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
  
  const ChatMessages = ({ avatar, messages, side }) => {
    const classes = useStyles();
    const attachClass = index => {
      if (index === 0) {
        return classes[\`\${side}First\`];
      }
      if (index === messages.length - 1) {
        return classes[\`\${side}Last\`];
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
            <Avatar className={classes.avatar} src={avatar} />
          </Grid>
        )}
        <Grid item xs={8}>
          {messages.map((msg, i) => (
            <div className={classes[\`\${side}Row\`]}>
              <Typography
                align={'left'}
                className={\`\${classes.msg} \${classes[side]} \${attachClass(i)}\`}
              >
                {msg}
              </Typography>
            </div>
          ))}
        </Grid>
      </Grid>
    );
  };
  
  ChatMessages.propTypes = {
    avatar: PropTypes.string,
    messages: PropTypes.arrayOf(PropTypes.string),
    side: PropTypes.oneOf(['left', 'right']),
  };
  ChatMessages.defaultProps = {
    avatar: '',
    messages: [],
    side: 'left',
  };
  
  export default ChatMessages;

`;

ChatMessages.codeSandbox = 'https://codesandbox.io/s/chatmessages-kjq2g';
ChatMessages.info = {
  name: 'ChatMessages',
  description: '',
  links: [],
  files: [
    {
      label: 'Demo.js',
      code: demoCode,
    },
    {
      label: 'ChatMessages.js',
      code: coreCode,
    },
  ],
  libraries: [],
  dependencies: [],
};

export default ChatMessages;
