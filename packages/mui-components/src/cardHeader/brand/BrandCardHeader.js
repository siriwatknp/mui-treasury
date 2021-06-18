import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/styles/withStyles';
import brandCardHeaderStyles from '@mui-treasury/styles/cardHeader/brand';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const BrandCardHeader = withStyles(brandCardHeaderStyles, {
  name: 'BrandCardHeader',
})(({ classes, image, extra }) => (
  <div className={classes.root}>
    <div className={classes.header}>
      <Avatar alt={'brand logo'} className={classes.avatar} src={image} />
      <Typography className={classes.extra}>{extra}</Typography>
    </div>
    <hr className={classes.divider} />
  </div>
));

BrandCardHeader.propTypes = {
  image: PropTypes.string,
  extra: PropTypes.string,
};
BrandCardHeader.defaultProps = {
  image: '',
  extra: '',
};

export default BrandCardHeader;
