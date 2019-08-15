import cx from 'clsx';
import useToggleItems from './useToggleItems';
import useSelectItem from './useSelectItem';

export default (initialSelectedKey, initialOpenKeys) => {
  const { selectedKey, setSelectedKey } = useSelectItem(
    initialSelectedKey || '',
  );
  const { openKeys, onToggle } = useToggleItems(initialOpenKeys || []);
  const injectHeaderProps = ({ key, subMenus, separated }) => {
    const isCurrentKey = selectedKey === key;
    return {
      ...(subMenus && {
        toggle: true,
        onToggle: () => onToggle(key),
      }),
      onMenuClick: () => {
        if (!subMenus || separated) {
          setSelectedKey(key);
        }
        if (subMenus && !openKeys.includes(key)) {
          onToggle(key);
        }
      },
      expanded: openKeys.includes(key),
      separated,
      selected: subMenus ? separated && isCurrentKey : isCurrentKey,
    };
  };
  const injectSubmenuProps = ({ classes, level, key, subMenus }) => {
    return {
      className: cx(
        classes[`sub${level}`],
        selectedKey === key && classes[`sub${level}Selected`],
        openKeys.includes(key) && classes[`sub${level}Expanded`],
      ),
      onClick: () => (subMenus ? onToggle(key) : setSelectedKey(key)),
    };
  };
  return {
    setSelectedKey,
    openKeys,
    injectHeaderProps,
    injectSubmenuProps,
  };
};
