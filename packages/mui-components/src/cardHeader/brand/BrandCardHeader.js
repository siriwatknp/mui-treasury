import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui-treasury/styling';
import brandCardHeaderStyles from '@mui-treasury/styles/cardHeader/brand';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const BrandCardHeader = withStyles(brandCardHeaderStyles)(
  ({ css, image, extra }) => (
    <div className={css.root}>
      <div className={css.header}>
        <Avatar alt={'brand logo'} className={css.avatar} src={image} />
        <Typography className={css.extra}>{extra}</Typography>
      </div>
      <hr className={css.divider} />
    </div>
  )
);

BrandCardHeader.propTypes = {
  image: PropTypes.string,
  extra: PropTypes.string,
};
BrandCardHeader.defaultProps = {
  image: '',
  extra: '',
};

export default BrandCardHeader;
