import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { mapNestedPath } from '@mui-treasury/utils';
import usePreserveState from '@mui-treasury/utils/usePreserveState';
import { StylesProvider } from './StylesContext';
import List from './submodules/List';
import ListItem from './submodules/ListItem';
import Parent from './submodules/Parent';
import Collapse from './submodules/Collapse';
import styles from './nestedMenu.styles';

const useDefaultStyles = makeStyles(styles, { name: 'NestedMenu' });

const NestedMenu = ({
  useStyles = useDefaultStyles,
  children,
  menus = [],
  openKeys = [],
  selectedKey: extSelectedKey = '',
  onSelectedKeyChange,
  onOpenKeysChange = () => {},
  getRowProps = () => {},
  getListProps = () => {},
  getActionProps = () => {},
  getItemProps = () => {},
  renderItem,
}) => {
  const keyMap = mapNestedPath(menus);
  const [selectedKey, setSelectedKey] = usePreserveState(
    extSelectedKey,
    onSelectedKeyChange
  );
  const openKeysCallback = key => toggled => {
    if (toggled) return onOpenKeysChange(openKeys.concat(key));
    return onOpenKeysChange(openKeys.filter(k => k !== key));
  };
  const renderChildren = (items, level) => {
    return items.map(item => {
      const { key, label, subMenus, isToggleOutside } = item;
      const selected = selectedKey === key;
      const active = keyMap[key].includes(selectedKey) || selected;
      if (Array.isArray(subMenus) && subMenus.length) {
        return (
          <Collapse
            key={key}
            level={level}
            collapsed={openKeys.includes(key)}
            onCollapse={openKeysCallback(key)}
            renderWrapper={({ children, collapsed }) => (
              <Parent active={active} level={level} collapsed={collapsed}>
                {children}
              </Parent>
            )}
            renderToggle={({ onClick, collapsed }) => {
              const toToggleProps = fn =>
                fn(item, { selected, active, collapsed, level, onClick });
              const rowProps = { selected, ...toToggleProps(getRowProps) };
              const itemProps = {
                button: true,
                selected,
                onClick,
                ...toToggleProps(getItemProps),
              };
              if (!isToggleOutside) {
                const action = (
                  <Collapse.Action
                    button={false}
                    toggled={collapsed}
                    {...toToggleProps(getActionProps)}
                  />
                );
                return (
                  <Collapse.Row {...rowProps}>
                    {renderItem ? (
                      renderItem(item, { ...itemProps, children: action })
                    ) : (
                      <Collapse.RowItem {...itemProps}>
                        {label}
                        {action}
                      </Collapse.RowItem>
                    )}
                  </Collapse.Row>
                );
              }
              return (
                <Collapse.Row {...rowProps}>
                  {renderItem ? (
                    renderItem(item, { ...itemProps, children: null })
                  ) : (
                    <Collapse.RowItem {...itemProps}>{label}</Collapse.RowItem>
                  )}
                  <Collapse.Action
                    toggled={collapsed}
                    onClick={onClick}
                    {...toToggleProps(getActionProps)}
                  />
                </Collapse.Row>
              );
            }}
          >
            <Collapse.List
              {...getListProps(item, { active, selected, level: level + 1 })}
            >
              {renderChildren(subMenus, level + 1)}
            </Collapse.List>
          </Collapse>
        );
      }
      const onClick = () => setSelectedKey(key);
      const itemProps = {
        key,
        button: true,
        level,
        selected,
        onClick,
        ...getItemProps(item, { active, selected, level, onClick }),
      };
      return renderItem ? (
        renderItem(item, itemProps)
      ) : (
        <ListItem {...itemProps}>{label}</ListItem>
      );
    });
  };
  return (
    <StylesProvider useStyles={useStyles}>
      {children || <List level={1}>{renderChildren(menus, 1)}</List>}
    </StylesProvider>
  );
};

NestedMenu.List = List;
NestedMenu.ListItem = ListItem;
NestedMenu.Parent = Parent;
NestedMenu.Collapse = Collapse;
NestedMenu.propTypes = {
  useStyles: PropTypes.func,
  children: PropTypes.node,
  menus: PropTypes.arrayOf(PropTypes.shape({})),
  openKeys: PropTypes.arrayOf(PropTypes.string),
  selectedKey: PropTypes.string,
  onSelectedKeyChange: PropTypes.func,
  onOpenKeysChange: PropTypes.func,
  getRowProps: PropTypes.func,
  getListProps: PropTypes.func,
  getItemProps: PropTypes.func,
  getActionProps: PropTypes.func,
  renderItem: PropTypes.func,
};

export default NestedMenu;
