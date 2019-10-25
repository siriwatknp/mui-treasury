import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { withStyles } from '@mui-treasury/styling';
import createStyles from '@mui-treasury/styles/indicator/dot';

const DotIndicator = withStyles(createStyles, { name: 'DotIndicator' })(
  ({ active, className, css, ...props }) => (
    <button
      type={'button'}
      tabIndex={0}
      className={cx(
        'DotIndicator-root',
        className,
        css.root,
        active && `-active ${css.active}`
      )}
      {...props}
    />
  )
);

DotIndicator.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
};
DotIndicator.defaultProps = {
  className: '',
  active: false,
};
DotIndicator.displayName = 'DotIndicator';

export default DotIndicator;
