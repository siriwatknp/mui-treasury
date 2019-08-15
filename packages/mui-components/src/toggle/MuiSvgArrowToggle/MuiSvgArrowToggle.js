import React from 'react';
import PropTypes from 'prop-types';
import ArrowDownRounded from '@material-ui/icons/KeyboardArrowDownRounded';
import ArrowUpRounded from '@material-ui/icons/KeyboardArrowUpRounded';

const MuiSvgArrowToggle = ({ expanded, ...props }) =>
  expanded ? <ArrowUpRounded {...props} /> : <ArrowDownRounded {...props} />;

MuiSvgArrowToggle.propTypes = {
  expanded: PropTypes.bool,
};
MuiSvgArrowToggle.defaultProps = {
  expanded: false,
};

export default MuiSvgArrowToggle;
