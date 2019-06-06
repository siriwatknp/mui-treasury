import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import PeaAvatar from './PeaAvatar';
import PeaText from './PeaTypography';

const useStyles = makeStyles(() => ({
  flex: {
    flex: 1,
  },
  avatar: {
    width: 56,
    height: 56,
  },
}));

const noop = () => false;

const PeaThreadHeader = ({ avatar, title, subtitle, timestamp, onClick }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} onClick={onClick} alignItems="center">
      <Grid item>
        <PeaAvatar src={avatar} className={classes.avatar} />
      </Grid>
      <Grid item classes={{ item: classes.flex }}>
        <PeaText align={'left'} variant="subtitle2" weight={600}>
          {title}
        </PeaText>
        <PeaText align={'left'} variant="body2">
          {subtitle}
        </PeaText>
      </Grid>
      <Grid item>
        <PeaText align="right" variant="body2">
          {timestamp}
        </PeaText>
      </Grid>
    </Grid>
  );
};

PeaThreadHeader.propTypes = {
  avatar: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
PeaThreadHeader.defaultProps = {
  onClick: noop,
};
PeaThreadHeader.metadata = {
  name: 'Pea thread header',
};
PeaThreadHeader.getTheme = () => ({
  'Mui{Component}': {
    // this object will be injected to 'overrides' section
    root: {},
    // ...
  },
});

export default PeaThreadHeader;
