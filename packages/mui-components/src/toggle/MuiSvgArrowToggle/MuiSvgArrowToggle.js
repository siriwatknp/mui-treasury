import React from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@mui-treasury/styling';
import ArrowDownRounded from '@material-ui/icons/KeyboardArrowDownRounded';
import ArrowUpRounded from '@material-ui/icons/KeyboardArrowUpRounded';
import createStyles from './MuiSvgArrowToggle.styles';

const MuiSvgArrowToggle = withStyles(createStyles, {
  name: 'MuiSvgArrowToggle',
})(({ css, className, expanded }) =>
  expanded ? (
    <ArrowUpRounded
      className={cx(css.arrowRoot, css.arrowExpanded, className)}
    />
  ) : (
    <ArrowDownRounded
      className={cx(css.arrowRoot, css.arrowFolded, className)}
    />
  )
);

MuiSvgArrowToggle.propTypes = {
  expanded: PropTypes.bool,
  className: PropTypes.string,
};
MuiSvgArrowToggle.defaultProps = {
  expanded: false,
  className: '',
};

export default MuiSvgArrowToggle;
