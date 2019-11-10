import React from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@mui-treasury/styling';
import createStyles from './HorzMenuList.styles';

const HorzMenuList = withStyles(createStyles, { name: 'HorzMenuList' })(
  ({ className, css, menus, selectedKey, getItemProps, Link }) => (
    <ul className={cx(css.navRoot, className)}>
      {menus.map((item, index) => {
        const { key, label, disabled, to } = item;
        const { ...extItemProps } = getItemProps(item, index);
        return (
          <li
            key={key}
            className={cx(
              css.navItem,
              (typeof selectedKey === 'function'
                ? selectedKey(key)
                : key === selectedKey) && css.navSelected
            )}
            {...extItemProps}
            disabled={disabled}
          >
            {to ? <Link to={to}>{label}</Link> : label}
          </li>
        );
      })}
    </ul>
  )
);

HorzMenuList.propTypes = {
  className: PropTypes.string,
  menus: PropTypes.arrayOf(PropTypes.shape({})),
  selectedKey: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  getItemProps: PropTypes.func,
};
HorzMenuList.defaultProps = {
  className: undefined,
  menus: [],
  selectedKey: '',
  getItemProps: () => ({}),
};

export default HorzMenuList;
