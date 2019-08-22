import React from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@mui-treasury/styling';
import createStyles from './HorzMenuList.styles';

const HorzMenuList = withStyles(createStyles, { name: 'HorzMenuList' })(
  ({ css, menus, selectedKey, itemComponent: Item, getItemProps }) => (
    <div className={css.navRoot}>
      {menus.map((item, index) => {
        const { key, label } = item;
        return (
          <Item
            key={key}
            className={cx(
              css.navItem,
              (typeof selectedKey === 'function'
                ? selectedKey(key)
                : key === selectedKey) && css.navSelected
            )}
            {...getItemProps(item, index)}
          >
            {label}
          </Item>
        );
      })}
    </div>
  )
);

HorzMenuList.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.shape({})),
  selectedKey: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  itemComponent: PropTypes.elementType,
  getItemProps: PropTypes.func,
};
HorzMenuList.defaultProps = {
  menus: [],
  selectedKey: '',
  itemComponent: 'span',
  getItemProps: () => {},
};

export default HorzMenuList;
