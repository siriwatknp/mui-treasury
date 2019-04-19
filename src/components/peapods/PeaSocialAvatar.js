import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { unstable_Box as Box } from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PeaIcon from './PeaIcon';
import PeaAvatar from './PeaAvatar';

const styles = () => ({
  root: {
    '& .MuiAvatar-root': {
      margin: 'auto',
    },
  },
  icon: {
    position: 'absolute',
    top: 32,
    right: 0,
    width: '1.25em',
    height: '1.25em',
    background: '#ffffff',
    borderRadius: '50%',
    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.2)',
  },
  name: {
    marginTop: 4,
    fontSize: 11,
  },
});

const ICON = {
  tag: 'fas fa-hashtag',
  group: 'fas fa-users',
  facebook: 'fab fa-facebook-f',
  twitter: 'fab fa-twitter',
  meetup: 'fab fa-meetup',
};

const PeaSocialAvatar = ({ classes, src, name, social }) => (
  <Box className={classes.root} position={'relative'}>
    <PeaAvatar src={src} size={'big'} />
    <PeaIcon className={classes.icon} size={'small'} icon={ICON[social]} />
    <Typography
      className={classes.name}
      color={'textSecondary'}
      align={'center'}
    >
      {name}
    </Typography>
  </Box>
);

PeaSocialAvatar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  social: PropTypes.string.isRequired,
};
PeaSocialAvatar.defaultProps = {};
PeaSocialAvatar.metadata = {
  name: 'Pea Avatar',
  libraries: [
    {
      text: 'clsx',
      link: 'https://github.com/lukeed/clsx',
    },
  ],
};
PeaSocialAvatar.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default withStyles(styles, { name: 'PeaSocialAvatar' })(PeaSocialAvatar);
