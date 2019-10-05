import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import PeaAvatar from './PeaAvatar';
import PeaText from './PeaTypography';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    position: 'relative',
    textAlign: 'center',
  },
  avatar: {
    width: 62,
    height: 62,
    position: 'absolute',
    right: 20,
    top: 20,
  },
  status: {
    color: '#A4A4A4',
  },
  textContainer: {
    paddingTop: spacing(3),
    paddingBottom: spacing(3),
  },
  title: {
    lineHeight: 1,
  },
}));

const PeaThreadTitle = ({ title, subtitle, avatar }) => {
  const classes = useStyles();
  return (
    <Grid container classes={{ container: classes.root }}>
      <Grid item xs={12}>
        <div className={classes.textContainer}>
          <PeaText
            variant="h6"
            className={classes.title}
            color="secondary"
            weight="bold"
          >
            {title}
          </PeaText>
          <PeaText variant="caption" className={classes.status}>
            {subtitle}
          </PeaText>
        </div>
      </Grid>
      <PeaAvatar className={classes.avatar} src={avatar} />
    </Grid>
  );
};

PeaThreadTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  avatar: PropTypes.string,
};
PeaThreadTitle.defaultProps = {
  title: 'Unknown',
  subtitle: 'unknown',
  avatar: '',
};
PeaThreadTitle.metadata = {
  name: 'Thread title',
  description: '', // optional
};

PeaThreadTitle.getTheme = () => ({
  'Mui{Component}': {
    // this object will be injected to 'overrides' section
    root: {},
    // ...
  },
});

export default PeaThreadTitle;
