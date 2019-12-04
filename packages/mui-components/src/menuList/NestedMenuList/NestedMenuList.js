import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui-treasury/styling';
import { useNestedMenuList, mapNestedPath } from '@mui-treasury/utils';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import MenuToggle from '@mui-treasury/components/menuItem/MenuToggle';
// eslint-disable-next-line max-len
import MuiSvgArrowToggle from '@mui-treasury/components/toggle/MuiSvgArrowToggle';
import createStyles from './NestedMenuList.styles';

const NestedMenuList = withStyles(createStyles, { name: 'NestedMenuList' })(
  props => {
    const {
      css,
      menus,
      selectedKey,
      openKeys,
      menuComponent,
      ListProps,
      CollapseProps,
      getItemProps,
      getConfig,
      onClick,
    } = props;
    const keyMap = useMemo(() => mapNestedPath(menus), [menus]);
    const {
      injectParentProps,
      injectItemProps,
      injectListProps,
    } = useNestedMenuList(selectedKey, openKeys);
    const renderMenus = (level, keyPath) => item => {
      const { key, label, subMenus, ...itemProps } = item;
      const params = {
        ...getConfig(level),
        ...item,
        onClick,
        classes: css,
        level,
        keyMap,
        keyPath,
      };
      const calculatedProps = injectItemProps(params);
      const nextLevel = level + 1;
      const menu = (
        <MenuToggle
          label={label}
          menuComponent={menuComponent}
          {...calculatedProps}
          {...itemProps}
          {...getItemProps(params)}
          renderToggle={toggleProps => (
            <MuiSvgArrowToggle
              {...toggleProps}
              {...MuiSvgArrowToggle.getOverrides(css, props)}
            />
          )}
          {...MenuToggle.getOverrides(css, props)}
        />
      );
      if (subMenus) {
        return (
          <li {...injectParentProps(params)}>
            {menu}
            {subMenus && (
              <Collapse {...CollapseProps} in={calculatedProps.expanded}>
                {/* eslint-disable-next-line no-use-before-define */}
                {renderList(subMenus, nextLevel, [key, ...keyPath])}
              </Collapse>
            )}
          </li>
        );
      }
      return menu;
    };
    // eslint-disable-next-line react/prop-types
    const renderList = (items, level, keyPath) => (
      <List
        {...ListProps}
        {...injectListProps({
          classes: css,
          level,
        })}
      >
        {/* eslint-disable-next-line react/prop-types */}
        {items.map(renderMenus(level, keyPath))}
      </List>
    );
    return renderList(menus, 1, []);
  }
);

NestedMenuList.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  selectedKey: PropTypes.string,
  openKeys: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  onClick: PropTypes.func,
  CollapseProps: PropTypes.shape({}),
  ListProps: PropTypes.shape({}),
  getConfig: PropTypes.func,
  getItemProps: PropTypes.func,
  menuComponent: PropTypes.elementType,
};
NestedMenuList.defaultProps = {
  menus: [],
  selectedKey: '',
  openKeys: [],
  onClick: () => {},
  CollapseProps: {},
  ListProps: {},
  config: {},
  getConfig: () => ({}),
  getItemProps: () => ({}),
  menuComponent: undefined,
};

export default NestedMenuList;
