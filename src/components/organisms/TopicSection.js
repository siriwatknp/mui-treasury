import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => {
  const { palette } = theme;
  return {
    root: {},
    topic: {
      fontSize: 'calc(12px + 1.5vw)',
    },
    secondaryText: {
      color: palette.text.secondary,
    },
  };
});

const TopicSection = ({ title, subtitle, children }) => {
  const classes = useStyles();
  return (
    <Box
      bgcolor={'#f6fafc'}
      border={'1px solid #e6f1f4'}
      py={{ xs: '2rem', sm: '3.5rem' }}
    >
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
};
TopicSection.defaultProps = {
  subtitle: null,
  children: null,
};

export default TopicSection;
