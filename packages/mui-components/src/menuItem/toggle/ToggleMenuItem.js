import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';

import MuiSvgArrowToggle from '../../toggle/MuiSvgArrowToggle';

const ToggleMenuItem = ({
  children,
  expanded,
  renderSymbol: Symbol,
  symbolClassName,
  symbolProps,
  ...props
}) => (
  <ListItem button {...props}>
    {children}
    <Symbol className={symbolClassName} {...symbolProps} expanded={expanded} />
  </ListItem>
);

ToggleMenuItem.propTypes = {
  children: PropTypes.node,
  expanded: PropTypes.bool,
  renderSymbol: PropTypes.elementType,
  symbolClassName: PropTypes.string,
  symbolProps: PropTypes.shape({}),
};
ToggleMenuItem.defaultProps = {
  children: null,
  expanded: false,
  renderSymbol: MuiSvgArrowToggle,
  symbolClassName: '',
  symbolProps: {},
};

export default ToggleMenuItem;
