import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { mapNestedPath, useStateBinding } from '@mui-treasury/utils';

import List from '@material-ui/core/List';
import CollapsibleMenuList from '@mui-treasury/components/menuList/collapsible';
import ActionToggleItem from '../../menuItem/actionToggle';
import InfoMenuItem from '../../menuItem/info';

const getKey = (menu, idx) => menu.key || menu.id || idx;

const RecursiveList = ({ menu, level, idx, sharedProps }) => {
  const {
    classes,
    getState,
    selectedKey,
    setSelectedKey,
    Parent,
    Child,
    getParentProps,
    getChildProps,
  } = sharedProps;
  const { subMenus } = menu;
  const key = getKey(menu, idx);
  const { active, selected } = getState(key);
  if (subMenus) {
    return (
      <CollapsibleMenuList
        key={key}
        renderWrapper={({ expanded, children }) => (
          <li
            className={cx(
              classes[`lv${level}Parent`],
              expanded && classes[`lv${level}ParentExpanded`],
              active && classes[`lv${level}ParentActive`]
            )}
          >
            {children}
          </li>
        )}
        renderParent={({ expanded, onToggle, ...parentProps }) => (
          <Parent
            {...getParentProps(menu, idx)}
            {...parentProps}
            className={cx(
              classes[`lv${level}Item`],
              active && classes[`lv${level}ItemActive`],
              selectedKey === key && classes[`lv${level}ItemSelected`],
              expanded && classes[`lv${level}ItemExpanded`]
            )}
            expanded={expanded}
            selected={selected}
            onToggle={onToggle}
            onMenuClick={() => {
              return setSelectedKey(key);
            }}
          />
        )}
        subMenus={subMenus}
        renderChild={(childMenu, childIdx) => (
          <RecursiveList
            menu={childMenu}
            idx={childIdx}
            level={level + 1}
            sharedProps={sharedProps}
          />
        )}
        // getChildProps={(childMenu, childIdx) => ({
        //   childMenu,
        //   childIdx,
        //   level: level + 1,
        //   sharedProps,
        // })}
      />
    );
  }
  const childProps = getChildProps(menu, idx);
  return (
    <Child
      key={key}
      button
      component={'li'}
      {...childProps}
      className={cx(
        childProps.className,
        classes[`lv${level}Item`],
        selectedKey === key && classes[`lv${level}ItemSelected`]
      )}
      onClick={() => {
        setSelectedKey(key);
      }}
    />
  );
};

const NestedMenuList = ({
  classes,
  menus,
  initialSelectedKey,
  renderParent: Parent,
  getParentProps,
  renderChild: Child,
  getChildProps,
}) => {
  const keyMap = React.useMemo(() => mapNestedPath(menus), [menus]);
  const [selectedKey, setSelectedKey] = useStateBinding(initialSelectedKey, '');
  console.log('selectedKey', selectedKey);
  const getState = key => {
    const selected = selectedKey === key;
    const active = keyMap[key].includes(selectedKey) || selected;
    return { selected, active };
  };
  const sharedProps = {
    classes,
    getState,
    selectedKey,
    setSelectedKey,
    Parent,
    Child,
    getParentProps,
    getChildProps,
  };
  return (
    <List className={cx(classes.list, classes.lv1List)}>
      {menus.map((menu, idx) => (
        <RecursiveList
          key={getKey(menu, idx)}
          menu={menu}
          idx={idx}
          level={1}
          sharedProps={sharedProps}
        />
      ))}
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
  renderParent: ActionToggleItem,
  getParentProps: menu => menu,
  renderChild: InfoMenuItem,
  getChildProps: menu => menu,
};

export default NestedMenuList;
