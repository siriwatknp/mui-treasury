import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';

import MuiSvgArrowToggle from '../../toggle/MuiSvgArrowToggle';

const ToggleMenuItem = ({
  children,
  expanded,
  renderSymbol,
  symbolClassName,
  symbolProps,
  onToggle,
  ...props
}) => (
  <ListItem button {...props} onClick={onToggle}>
    {children}
    {renderSymbol({ className: symbolClassName, ...symbolProps, expanded })}
  </ListItem>
);

ToggleMenuItem.propTypes = {
  children: PropTypes.node,
  expanded: PropTypes.bool,
  renderSymbol: PropTypes.func,
  symbolClassName: PropTypes.string,
  symbolProps: PropTypes.shape({}),
  onToggle: PropTypes.func,
};
ToggleMenuItem.defaultProps = {
  children: null,
  expanded: false,
  renderSymbol: props => <MuiSvgArrowToggle {...props} />,
  symbolClassName: '',
  symbolProps: {},
  onToggle: undefined,
};

export default ToggleMenuItem;
