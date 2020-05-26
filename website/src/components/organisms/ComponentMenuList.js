import React from 'react';
import PropTypes from 'prop-types';
import last from 'lodash/last';
import dropRight from 'lodash/dropRight';
import cx from 'clsx';
import Color from 'color';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import { makeStyles } from '@material-ui/core/styles';
import { useLayoutCtx } from '@mui-treasury/layout';
import Menu from '@mui-treasury/components/menu/nested';
import { useMaterialNestedMenuStyles } from '@mui-treasury/styles/nestedMenu/material';

const useStyles = makeStyles(({ palette }) => {
  const lightPrimaryBg = Color(palette.primary.main)
    .rotate(-6)
    .lighten(0.2)
    .fade(0.9)
    .toString();
  return {
    lv2Item: {
      paddingLeft: '1.925rem',
    },
    lv3Item: {
      paddingLeft: '2.875rem',
      '&:after': {
        left: '1.925rem',
        backgroundColor: palette.primary.main,
      },
    },
    lv3List: {
      '&:before': {
        left: '1.925rem',
      },
    },
    listItemSelected: {
      color: `${palette.primary.main} !important`,
      backgroundColor: `${lightPrimaryBg} !important`,
    },
    label: {
      marginLeft: -4,
      marginRight: '0.5rem',
      lineHeight: 1,
      padding: '4px 6px',
      borderRadius: 4,
      backgroundColor: 'rgba(0,0,0,0.04)',
      fontSize: 12,
    },
    labelSelected: {
      backgroundColor: lightPrimaryBg,
    },
  };
});

const ComponentMenuList = ({ menus, getOpenKeys }) => {
  const { setOpen: setSidebarOpen } = useLayoutCtx();
  const styles = useStyles();
  return (
    <Location>
      {({ location }) => {
        const paths = location.pathname.split('/');
        const lastPath = last(paths) || last(dropRight(paths));
        return (
          <Menu
            menus={menus}
            selectedKey={lastPath}
            openKeys={getOpenKeys({
              menus,
              pathname: location.pathname,
              lastPath,
            })}
            useStyles={useMaterialNestedMenuStyles}
            getItemProps={({ to }, { onClick, level, selected }) => ({
              ...(to && {
                component: Link,
                to,
                onClick: () => {
                  onClick();
                  setSidebarOpen('primarySidebar', false);
                },
              }),
              className: cx(
                styles[`lv${level}Item`],
                selected && styles.listItemSelected
              ),
            })}
            getListProps={(_, { level }) => ({
              className: cx(styles[`lv${level}List`], 'test'),
            })}
            renderItem={(item, { children, ...itemProps }) => (
              <Menu.ListItem
                {...(item.to && { 'data-testid': 'app-sidebar-link' })}
                {...itemProps}
              >
                {item.total >= 0 && (
                  <span
                    className={cx(
                      styles.label,
                      itemProps.selected && styles.labelSelected
                    )}
                  >
                    {item.total}
                  </span>
                )}
                {item.label}
                {children}
              </Menu.ListItem>
            )}
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
