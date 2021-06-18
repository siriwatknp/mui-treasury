import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'gatsby';
import makeStyles from '@material-ui/styles/makeStyles';
import Box from '@material-ui/core/Box';
import CarbonAds from '../atoms/CarbonAds';
// import Button from '@material-ui/core/Button';
// import { usePushingGutter } from '@mui-treasury/styles';

const useStyles = makeStyles(theme => {
  const { palette } = theme;
  return {
    descr: {
      fontSize: 20,
      color: palette.text.secondary,
    },
  };
});

const ComponentHeading = ({ title, description }) => {
  const styles = useStyles();
  // const gutterStyles = usePushingGutter({
  //   firstExcluded: true,
  // });
  // const commonButtonProps = {
  //   variant: 'contained',
  //   component: Link,
  //   to: '/',
  // };
  return (
    <Box
      textAlign={'center'}
      px={{ xs: 2, sm: 0 }}
      py={{ xs: '2rem', sm: '3rem', md: '4rem' }}
    >
      <h1>{title}</h1>
      <p className={styles.descr}>{description}</p>
      {/* <div className={gutterStyles.parent}> */}
      {/*  <Button {...commonButtonProps}>Instruction</Button> */}
      {/*  <Button {...commonButtonProps}>Customization</Button> */}
      {/*  <Button {...commonButtonProps}>Playground</Button> */}
      {/* </div> */}
      <CarbonAds />
    </Box>
  );
};

ComponentHeading.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
ComponentHeading.defaultProps = {
  title: '',
  description: '',
};

export default ComponentHeading;
