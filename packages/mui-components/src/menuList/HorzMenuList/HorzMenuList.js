import React from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@mui-treasury/styling';
import createStyles from './HorzMenuList.styles';

const HorzMenuList = withStyles(createStyles, { name: 'HorzMenuList' })(
  ({ css, menus, selectedKey, itemComponent: Item }) => (
    <div className={css.navRoot}>
      {menus.map(({ key, label }) => (
        <Item
          key={key}
          className={cx(
            css.navItem,
            (typeof selectedKey === 'function'
              ? selectedKey(key)
              : key === selectedKey) && css.navSelected
          )}
        >
          {label}
        </Item>
      ))}
    </div>
  )
);

HorzMenuList.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.shape({})),
  selectedKey: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  itemComponent: PropTypes.elementType,
};
HorzMenuList.defaultProps = {
  menus: [],
  selectedKey: '',
  itemComponent: 'span',
};

export default HorzMenuList;
