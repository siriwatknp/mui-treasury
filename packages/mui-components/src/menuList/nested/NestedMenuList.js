import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { mapNestedPath, useStateBinding } from '@mui-treasury/utils';

import List from '@material-ui/core/List';
import CollapsibleMenuList from '@mui-treasury/components/menuList/collapsible';
import ActionToggleItem from '../../menuItem/actionToggle';
import InfoMenuItem from '../../menuItem/info';

const getKey = (menu, idx) => menu.key || menu.id || idx;

const NestedMenuList = ({
  classes,
  menus,
  selectedKey,
  initialOpenKeys,
  renderParent,
  getParentProps,
  renderChild,
  getChildProps,
}) => {
  const keyMap = React.useMemo(() => mapNestedPath(menus), [menus]);
  const [iSelectedKey, setSelectedKey] = useStateBinding(selectedKey, '');
  const getState = key => {
    const selected = iSelectedKey === key;
    const active = keyMap[key].includes(iSelectedKey) || selected;
    return { selected, active };
  };
  const renderNestedList = level => (menu, idx, array) => {
    const { subMenus } = menu;
    const key = getKey(menu, idx);
    const { active, selected } = getState(key);
    const nextLevel = level + 1;
    if (subMenus) {
      return (
        <CollapsibleMenuList
          key={key}
          initialExpanded={initialOpenKeys.includes(key)}
          listProps={{
            className: cx(classes.list, classes[`lv${nextLevel}List`]),
          }}
          renderWrapper={({ expanded, children }) => (
            <li
              className={cx(
                classes.wrapper,
                classes[`lv${level}Wrapper`],
                expanded && classes[`lv${level}WrapperExpanded`],
                active && classes[`lv${level}WrapperActive`]
              )}
            >
              {children}
            </li>
          )}
          renderParent={({ expanded, onToggle }) => {
            const parentProps =
              getParentProps({ expanded, data: menu, idx, array, level }) || {};
            return renderParent({
              ...parentProps,
              className: cx(
                classes[`lv${level}Item`],
                active && classes[`lv${level}ItemActive`],
                selected &&
                  cx(
                    classes.menuItemSelected,
                    classes[`lv${level}ItemSelected`]
                  ),
                expanded && classes[`lv${level}ItemExpanded`],
                parentProps.className
              ),
              expanded,
              selected,
              onToggle,
              onMenuClick: () => setSelectedKey(key),
            });
          }}
          subMenus={subMenus}
          getChildProps={({ data }) => data}
          renderChild={renderNestedList(level + 1)}
        />
      );
    }
    const childProps =
      getChildProps({ data: menu, idx, array, level, selected }) || {};
    return renderChild({
      key,
      button: true,
      component: 'li',
      ...childProps,
      selected,
      className: cx(
        classes.menuItem,
        classes[`lv${level}Item`],
        selected &&
          cx(classes.menuItemSelected, classes[`lv${level}ItemSelected`]),
        childProps.className
      ),
      onClick: () => setSelectedKey(key),
    });
  };
  return (
    <List className={cx(classes.list, classes.lv1List)}>
      {menus.map(renderNestedList(1))}
    </List>
  );
};

NestedMenuList.propTypes = {
  selectedKey: PropTypes.string,
  initialOpenKeys: PropTypes.arrayOf(PropTypes.string),
  classes: PropTypes.shape({
    list: PropTypes.string,
    lv1List: PropTypes.string,
    wrapper: PropTypes.string,
    menuItem: PropTypes.string,
    menuItemSelected: PropTypes.string,
  }),
  menus: PropTypes.arrayOf(PropTypes.shape({})),
  renderParent: PropTypes.func,
  getParentProps: PropTypes.func,
  renderChild: PropTypes.func,
  getChildProps: PropTypes.func,
};
NestedMenuList.defaultProps = {
  selectedKey: undefined,
  initialOpenKeys: [],
  classes: {},
  menus: [],
  getParentProps: () => {},
  renderParent: props => <ActionToggleItem {...props} />,
  getChildProps: () => {},
  renderChild: props => <InfoMenuItem {...props} />,
};

export default NestedMenuList;
