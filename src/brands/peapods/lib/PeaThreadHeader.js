import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import PeaAvatar from './PeaAvatar';
import PeaText from './PeaTypography';

const useStyles = makeStyles(({ spacing, palette }) => ({
  root: {
    padding: `${spacing(1)}px ${spacing(2)}px`,
    backgroundColor: ({ selected }) => selected && palette.primary.main,
    cursor: 'pointer',
  },
  flex: {
    flex: 1,
    marginLeft: spacing(2),
  },
  avatar: {
    width: 56,
    height: 56,
  },
}));

const noop = () => false;

const PeaThreadHeader = ({
  avatar,
  title,
  subtitle,
  timestamp,
  selected,
  onClick,
}) => {
  const classes = useStyles({ selected });
  return (
    <Grid
      container
      alignItems="center"
      className={classes.root}
      onClick={onClick}
    >
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
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};
PeaThreadHeader.defaultProps = {
  selected: false,
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
