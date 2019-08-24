import React from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@mui-treasury/styling';
import createStyles from './HorzMenuList.styles';

const HorzMenuList = withStyles(createStyles, { name: 'HorzMenuList' })(
  ({ css, menus, selectedKey, getItemProps }) => (
    <ul className={css.navRoot}>
      {menus.map((item, index) => {
        const { key, label } = item;
        const { component: Component = 'li', ...extItemProps } = getItemProps(
          item,
          index
        );
        return (
          <Component
            key={key}
            className={cx(
              css.navItem,
              (typeof selectedKey === 'function'
                ? selectedKey(key)
                : key === selectedKey) && css.navSelected
            )}
            {...extItemProps}
          >
            {label}
          </Component>
        );
      })}
    </ul>
  )
);

HorzMenuList.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.shape({})),
  selectedKey: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  getItemProps: PropTypes.func,
};
HorzMenuList.defaultProps = {
  menus: [],
  selectedKey: '',
  getItemProps: () => ({}),
};

export default HorzMenuList;
