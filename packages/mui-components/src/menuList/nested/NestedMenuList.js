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
  initialSelectedKey,
  renderParent,
  getParentProps,
  renderChild,
  getChildProps,
}) => {
  const keyMap = React.useMemo(() => mapNestedPath(menus), [menus]);
  const [selectedKey, setSelectedKey] = useStateBinding(initialSelectedKey, '');
  const getState = key => {
    const selected = selectedKey === key;
    const active = keyMap[key].includes(selectedKey) || selected;
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
          listProps={{
            className: cx(classes.list, classes[`lv${nextLevel}List`]),
          }}
          renderWrapper={({ expanded, children }) => (
            <li
              className={cx(
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
                selectedKey === key &&
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
    const childProps = getChildProps({ data: menu, idx, array, level }) || {};
    return renderChild({
      key,
      button: true,
      component: 'li',
      ...childProps,
      className: cx(
        classes.menuItem,
        classes[`lv${level}Item`],
        selectedKey === key &&
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
  initialSelectedKey: PropTypes.string,
  classes: PropTypes.shape({}),
  menus: PropTypes.arrayOf(PropTypes.shape({})),
  renderParent: PropTypes.func,
  getParentProps: PropTypes.func,
  renderChild: PropTypes.func,
  getChildProps: PropTypes.func,
};
NestedMenuList.defaultProps = {
  initialSelectedKey: undefined,
  classes: {},
  menus: [],
  getParentProps: () => {},
  renderParent: props => <ActionToggleItem {...props} />,
  getChildProps: () => {},
  renderChild: props => <InfoMenuItem {...props} />,
};

export default NestedMenuList;
