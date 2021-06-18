import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/styles/makeStyles';
import Box from '@material-ui/core/Box';
import CarbonAds from '../atoms/CarbonAds';

const useStyles = makeStyles(theme => {
  const { palette } = theme;
  return {
    root: {},
    topic: {
      fontSize: 'calc(16px + 1.4vw)',
    },
    secondaryText: {
      color: palette.text.secondary,
    },
  };
});

const TopicSection = ({ title, subtitle, children, adsDisplayed }) => {
  const classes = useStyles();
  return (
    <Box
      bgcolor={'#f6fafc'}
      border={'1px solid #e6f1f4'}
      py={{ xs: '2rem', sm: '3.5rem' }}
    >
      {adsDisplayed && <CarbonAds pb={{ xs: 4, sm: 6 }} />}
      <Box textAlign={'center'}>
        <h2 className={classes.topic}>
          <b>{title}</b>
        </h2>
        <p className={classes.secondaryText}>{subtitle}</p>
        {children}
      </Box>
    </Box>
  );
};

TopicSection.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  children: PropTypes.node,
  adsDisplayed: PropTypes.bool,
};
TopicSection.defaultProps = {
  subtitle: null,
  children: null,
  adsDisplayed: false,
};

export default TopicSection;
