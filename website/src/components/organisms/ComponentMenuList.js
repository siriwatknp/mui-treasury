import React from 'react';
import PropTypes from 'prop-types';
import last from 'lodash/last';
import dropRight from 'lodash/dropRight';
import cx from 'clsx';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import { useLayoutCtx } from '@mui-treasury/layout';
import NestedMenuList from '@mui-treasury/components/menuList/nested';
import ToggleMenuItem from '@mui-treasury/components/menuItem/toggle';
import { useMaterialInfoMenuItemStyles } from '@mui-treasury/styles/menuItem/info/material';
import { useMaterialToggleMenuItemStyles } from '@mui-treasury/styles/menuItem/toggle/material';
import { useJupiterNestedMenuListStyles } from '@mui-treasury/styles/menuList/nested/jupiter';

const showTotalChildren = ({ subMenus }) => {
  if (!subMenus) return '';
  return `(${subMenus.length})`;
};

const ComponentMenuList = ({ menus, getOpenKeys }) => {
  const nestedStyles = useJupiterNestedMenuListStyles();
  const infoStyles = useMaterialInfoMenuItemStyles();
  const toggleStyles = useMaterialToggleMenuItemStyles();
  const { setOpened: setSidebarOpened } = useLayoutCtx();
  return (
    <Location>
      {({ location }) => {
        const paths = location.pathname.split('/');
        const lastPath = last(paths) || last(dropRight(paths));
        return (
          <NestedMenuList
            // you can set initial state with these props
            // selectedKey={'awsS3'}
            // initialOpenKeys={['refGuides', 'deployHosting']}
            // ------------------------------------------------
            menus={menus}
            selectedKey={lastPath}
            initialOpenKeys={getOpenKeys({
              menus,
              pathname: location.pathname,
              lastPath,
            })}
            classes={nestedStyles}
            getParentProps={({ data, expanded }) => ({
              children: `${data.label} ${showTotalChildren(data)}`,
              className: cx(
                toggleStyles.root,
                expanded && toggleStyles.expanded,
                nestedStyles.menuItem
              ),
              symbolClassName: cx(
                toggleStyles.toggleBtn,
                nestedStyles.menuItemToggle
              ),
            })}
            renderParent={({
              children,
              onToggle,
              className,
              symbolClassName,
            }) => (
              <ToggleMenuItem
                classes={{
                  focusVisible: nestedStyles.menuItemFocus,
                }}
                className={className}
                symbolClassName={symbolClassName}
                onToggle={onToggle}
              >
                {children}
              </ToggleMenuItem>
            )}
            getChildProps={({ data, selected }) => ({
              children: data.label,
              to: data.to,
              info: data.total,
              component: Link,
              onClick: () => {
                setSidebarOpened(false);
              },
              disableRipple: true,
              classes: {
                selected: nestedStyles.menuItemSelected,
                focusVisible: nestedStyles.menuItemFocus,
              },
              className: cx(infoStyles.root, infoStyles.button),
              infoClassName: cx(
                infoStyles.info,
                selected && nestedStyles.infoSelected
              ),
            })}
          />
        );
      }}
    </Location>
  );
};

ComponentMenuList.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.shape({})),
  getOpenKeys: PropTypes.func,
};
ComponentMenuList.defaultProps = {
  menus: [],
  getOpenKeys: () => [],
};

export default ComponentMenuList;
