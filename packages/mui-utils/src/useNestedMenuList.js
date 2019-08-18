import cx from 'clsx';
import useToggleItems from './useToggleItems';
import useSelectItem from './useSelectItem';

export default (initialSelectedKey, initialOpenKeys) => {
  const { selectedKey, setSelectedKey } = useSelectItem(
    initialSelectedKey || ''
  );
  const { openKeys, onToggle } = useToggleItems(initialOpenKeys || []);
  const injectItemProps = ({
    classes,
    level,
    key,
    subMenus,
    toggleSeparated,
    keyMap,
  }) => {
    const isCurrentKey = selectedKey === key;
    return {
      key,
      className: cx(
        classes[`lv${level}Item`],
        (keyMap[key].includes(selectedKey) || isCurrentKey) &&
          classes[`lv${level}ItemActive`],
        selectedKey === key && classes[`lv${level}ItemSelected`],
        openKeys.includes(key) && classes[`lv${level}ItemExpanded`]
      ),
      component: subMenus ? 'div' : undefined,
      toggle: !!subMenus || undefined,
      onToggle: () => (subMenus ? onToggle(key) : {}),
      onMenuClick: () => {
        if (!subMenus || toggleSeparated) {
          return setSelectedKey(key);
        }
        if (subMenus) {
          return onToggle(key);
        }
        return {};
      },
      expanded: openKeys.includes(key),
      toggleSeparated,
      selected: subMenus ? toggleSeparated && isCurrentKey : isCurrentKey,
    };
  };
  const injectParentProps = ({ classes, level, key, keyMap }) => {
    const isCurrentKey = selectedKey === key;
    return {
      key,
      className: cx(
        classes[`lv${level}Parent`],
        openKeys.includes(key) && classes[`lv${level}ParentExpanded`],
        (keyMap[key].includes(selectedKey) || isCurrentKey) &&
          classes[`lv${level}ParentActive`]
      ),
    };
  };
  const injectListProps = ({ classes, level }) => ({
    className: cx(classes.list, classes[`lv${level}List`]),
  });
  return {
    injectParentProps,
    injectItemProps,
    injectListProps,
  };
};
