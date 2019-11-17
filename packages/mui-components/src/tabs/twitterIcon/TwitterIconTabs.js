import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Badge from '@material-ui/core/Badge';
import { twitterIconTabsStylesHook } from '@mui-treasury/styles/tabs';

const TwitterIconTabs = ({
  tabs,
  tabProps: globalTabProps,
  badgeProps: globalBadgeProps,
  ...props
}) => {
  const tabsClasses = twitterIconTabsStylesHook.useTabs(props);
  const tabClasses = twitterIconTabsStylesHook.useTabItem(globalTabProps);
  const badgeClasses = twitterIconTabsStylesHook.useBadge(globalBadgeProps);
  return (
    <Tabs variant={'fullWidth'} {...props} classes={tabsClasses}>
      {tabs.map((tab, i) => {
        const { badgeProps, icon, ...tabProps } = tab;
        return (
          <Tab
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            className={'MuiTab--iconOnly'}
            icon={icon}
            {...(badgeProps && {
              icon: (
                <Badge
                  className={
                    badgeProps.badgeContent === ''
                      ? 'MuiBadge--dotted'
                      : 'MuiBadge--number'
                  }
                  badgeContent={''}
                  invisible={false}
                  {...globalBadgeProps}
                  {...badgeProps}
                  classes={{
                    ...badgeClasses,
                    badge: cx(badgeClasses.badge, 'MuiBadge-badge'),
                  }}
                >
                  {icon}
                </Badge>
              ),
            })}
            disableRipple
            {...globalTabProps}
            {...tabProps}
            classes={{
              ...tabClasses,
              wrapper: cx(tabClasses.wrapper, 'MuiTab-wrapper'),
            }}
          />
        );
      })}
    </Tabs>
  );
};

TwitterIconTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
    })
  ),
  tabProps: PropTypes.shape({}),
  badgeProps: PropTypes.shape({}),
};
TwitterIconTabs.defaultProps = {
  tabs: [],
  tabProps: {},
  badgeProps: {},
};

export default TwitterIconTabs;
