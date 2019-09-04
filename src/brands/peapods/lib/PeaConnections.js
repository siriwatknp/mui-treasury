import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import PeaSocialAvatar from './PeaSocialAvatar';

const styles = ({ palette }) => ({
  categoryHeading: {
    margin: '12px 0 8px',
    color: palette.secondary.main,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'left',
  },
});

const PeaConnections = ({ classes, followers, followings, tags, groups }) => {
  const rows = [
    {
      title: 'Followers',
      data: followers,
    },
    {
      title: 'Following',
      data: followings,
    },
    {
      title: 'Tags',
      data: tags,
    },
    {
      title: 'Groups',
      data: groups,
    },
  ];

  return (
    <Grid container>
      {rows.map(({ title, data }) =>
        data.length ? (
          <Grid container direction="column">
            <Grid item>
              <Typography className={classes.categoryHeading}>
                {title}
              </Typography>
            </Grid>

            <Grid container spacing={2}>
              {data.map(item => (
                <Grid key={item.name} item>
                  <PeaSocialAvatar {...item} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        ) : null,
      )}
    </Grid>
  );
};

PeaConnections.propTypes = {
  classes: PropTypes.shape({
    categoryHeading: PropTypes.string,
  }).isRequired,
  followers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      id: PropTypes.string,
    }).isRequired,
  ),
  followings: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      id: PropTypes.string,
    }).isRequired,
  ),
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      id: PropTypes.string,
    }).isRequired,
  ),
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      id: PropTypes.string,
    }).isRequired,
  ),
};

PeaConnections.defaultProps = {
  followers: [],
  followings: [],
  tags: [],
  groups: [],
};

PeaConnections.metadata = {
  name: 'Pea Connections',
};

PeaConnections.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default withStyles(styles, { name: 'PeaConnections' })(PeaConnections);
