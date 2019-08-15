import React from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from 'mui-styling/src';
import MenuItem from '@material-ui/core/MenuItem';
import ButtonBase from '@material-ui/core/ButtonBase';
import createStyles from './MenuToggle.styles';

const MenuToggle = withStyles(createStyles, { name: 'MenuToggle' })(
  ({
    css,
    label,
    selected,
    expanded,
    separated,
    toggle = separated,
    renderToggle,
    onMenuClick,
    onToggle,
    MenuItemProps,
    ...props
  }) => {
    return (
      <div
        className={cx(
          css.header,
          selected && css.headerSelected,
          expanded && css.headerExpanded,
        )}
        {...props}
      >
        {separated ? (
          <>
            <MenuItem
              className={css.item}
              {...MenuItemProps}
              onClick={onMenuClick}
            >
              {label}
            </MenuItem>
            {toggle && (
              <ButtonBase className={css.toggle} onClick={onToggle}>
                {renderToggle({ expanded })}
              </ButtonBase>
            )}
          </>
        ) : (
          <MenuItem
            className={css.item}
            {...MenuItemProps}
            onClick={e => {
              onToggle(e);
              onMenuClick(e);
            }}
          >
            {label}{' '}
            {toggle && renderToggle({ expanded, className: css.itemArrow })}
          </MenuItem>
        )}
      </div>
    );
  },
);

MenuToggle.propTypes = {
  label: PropTypes.string,
  selected: PropTypes.bool,
  expanded: PropTypes.bool,
  separated: PropTypes.bool,
  toggle: PropTypes.bool,
  onMenuClick: PropTypes.func,
  onToggle: PropTypes.func,
  renderToggle: PropTypes.func,
};
MenuToggle.defaultProps = {
  label: '',
  selected: false,
  expanded: false,
  separated: false,
  toggle: undefined, // depend on initial separated,
  onMenuClick: () => {},
  onToggle: () => {},
  renderToggle: () => null,
};

export default MenuToggle;
