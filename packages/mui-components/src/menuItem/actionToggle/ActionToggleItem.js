import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import ButtonBase from '@material-ui/core/ButtonBase';
import ListItem from '@material-ui/core/ListItem';
import MuiSvgArrowToggle from '../../toggle/MuiSvgArrowToggle';

const ActionToggleItem = ({
  children,
  className,
  classes,
  component: Component,
  selected,
  expanded,
  listItemProps,
  renderSymbol,
  symbolClassName,
  symbolProps,
  onMenuClick,
  onToggle,
  ...props
}) => (
  <Component
    className={cx(
      classes.root,
      selected && classes.selected,
      expanded && classes.expanded,
      className
    )}
    {...props}
  >
    <ListItem
      component={'div'}
      button
      {...listItemProps}
      className={cx(classes.listItem, listItemProps.className)}
      onClick={onMenuClick}
    >
      {children}
    </ListItem>
    <ButtonBase className={classes.toggleBtn} onClick={onToggle}>
      {renderSymbol({ className: symbolClassName, ...symbolProps, expanded })}
    </ButtonBase>
  </Component>
);

ActionToggleItem.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.shape({
    root: PropTypes.string,
    selected: PropTypes.string,
    expanded: PropTypes.string,
    listItem: PropTypes.string,
    toggleBtn: PropTypes.string,
  }),
  component: PropTypes.elementType,
  children: PropTypes.node,
  selected: PropTypes.bool,
  expanded: PropTypes.bool,
  onMenuClick: PropTypes.func,
  onToggle: PropTypes.func,
  listItemProps: PropTypes.shape({
    className: PropTypes.string,
  }),
  renderSymbol: PropTypes.func,
  symbolClassName: PropTypes.string,
  symbolProps: PropTypes.shape({}),
};
ActionToggleItem.defaultProps = {
  className: undefined,
  classes: {},
  component: 'div',
  children: null,
  selected: false,
  expanded: false,
  onMenuClick: undefined,
  onToggle: undefined,
  listItemProps: {},
  renderSymbol: props => <MuiSvgArrowToggle {...props} />,
  symbolClassName: '',
  symbolProps: {},
};

export default ActionToggleItem;
