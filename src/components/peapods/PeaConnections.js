import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PeaSocialAvatar from './PeaSocialAvatar';
import PeaIcon from './PeaIcon';

const styles = ({ palette }) => ({
  root: {
    minWidth: 272,
  },
  closeIconButton: {
    padding: 4,
    background: palette.text.hint,
    color: palette.common.white,
    '& .material-icons': {
      fontSize: 20,
    },
    '&:hover': {
      background: palette.text.secondary,
    },
  },
  categoryHeading: {
    margin: '12px 0 8px',
    color: palette.secondary.main,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'left',
  },
});

const PeaConnections = ({
  classes,
  followers,
  followings,
  tags,
  groups,
  onClose,
}) => (
  <Card className={classes.root}>
    <CardContent>
      <Grid container>
        <Grid item xs>
          <Typography variant={'h6'} align={'left'}>
            Connections
          </Typography>
        </Grid>
        <Grid item>
          <IconButton className={classes.closeIconButton} onClick={onClose}>
            <PeaIcon icon={'close'} />
          </IconButton>
        </Grid>
      </Grid>
      <Typography className={classes.categoryHeading}>Followers</Typography>
      <Grid container spacing={16}>
        {followers.map(item => (
          <Grid item>
            <PeaSocialAvatar {...item} />
          </Grid>
        ))}
      </Grid>
      <Typography className={classes.categoryHeading}>Followings</Typography>
      <Grid container spacing={16}>
        {followings.map(item => (
          <Grid item>
            <PeaSocialAvatar {...item} />
          </Grid>
        ))}
      </Grid>
      <Typography className={classes.categoryHeading}>Tags</Typography>
      <Grid container spacing={16}>
        {tags.map(item => (
          <Grid item>
            <PeaSocialAvatar {...item} />
          </Grid>
        ))}
      </Grid>
      <Typography className={classes.categoryHeading}>Groups</Typography>
      <Grid container spacing={16}>
        {groups.map(item => (
          <Grid item>
            <PeaSocialAvatar {...item} />
          </Grid>
        ))}
      </Grid>
    </CardContent>
  </Card>
);

PeaConnections.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  onClose: PropTypes.func.isRequired,
  followers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  followings: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
PeaConnections.defaultProps = {};
PeaConnections.metadata = {
  name: 'Pea Connections',
};
PeaConnections.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default withStyles(styles, { name: 'PeaConnections' })(PeaConnections);
