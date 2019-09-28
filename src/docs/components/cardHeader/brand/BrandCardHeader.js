import React from 'react';
import { withStyles } from '@mui-treasury/styling';
import brandCardHeaderStyles from '@mui-treasury/styles/cardHeader/brand';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const BrandCardHeader = withStyles(brandCardHeaderStyles)(({ css }) => (
  <div className={css.root}>
    <div className={css.header}>
      <Avatar
        className={css.avatar}
        src={
          'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
        }
      />
      <Typography className={css.extra}>7 Minutes</Typography>
    </div>
    <hr className={css.divider} />
  </div>
));

// hide-start
BrandCardHeader.metadata = {
  title: 'Brand',
  path: 'cardHeader/brand',
  files: [
    { pkg: 'mui-styles', path: 'cardHeader/brand/brandCardHeader.styles.js' },
  ],
};
// hide-end

export default BrandCardHeader;
