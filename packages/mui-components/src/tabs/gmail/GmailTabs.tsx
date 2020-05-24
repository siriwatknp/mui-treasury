import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Tab, { TabProps } from '@material-ui/core/Tab';
import Tabs, { TabsTypeMap } from '@material-ui/core/Tabs';
import {
  useGmailTabsStyles,
  useGmailTabItemStyles,
  // @ts-ignore
} from '@mui-treasury/styles/tabs/gmail';
import { OverridableComponent } from '../../_types';

export interface GmailTabItemProps extends TabProps {
  color?: string;
  label: React.ReactNode;
  subLabel?: React.ReactNode;
  tag?: React.ReactNode;
}

export const GmailTabItem = ({
  color,
  label,
  subLabel,
  tag,
  ...props
}: GmailTabItemProps) => {
  const tabItemStyles = useGmailTabItemStyles({ ...props, color });
  return (
    <Tab
      disableTouchRipple
      {...props}
      classes={tabItemStyles}
      label={
        <div className={'MuiTabItem-labelGroup'}>
          <div className={'MuiTabItem-label'}>
            {label} {tag && <span className={'MuiTabItem-tag'}>{tag}</span>}
          </div>
          {subLabel && <div className={'MuiTabItem-subLabel'}>{subLabel}</div>}
        </div>
      }
    />
  );
};

export type GmailTabsTypeMap<
  P = {},
  D extends React.ElementType = typeof ButtonBase
> = TabsTypeMap<
  {
    indicatorColors?: Array<string>;
    children: React.ReactElement | React.ReactElement[];
  },
  D
>;

export const GmailTabs: OverridableComponent<GmailTabsTypeMap> = ({
  indicatorColors = ['#d93025', '#1a73e8', '#188038', '#e37400'],
  ...props
}) => {
  const tabsStyles = useGmailTabsStyles({ ...props, indicatorColors });
  return (
    // @ts-ignore
    <Tabs
      {...props}
      children={React.Children.map(props.children, (child, index) =>
        React.cloneElement(child, {
          color: indicatorColors[index],
        })
      )}
      classes={tabsStyles}
      TabIndicatorProps={{
        ...props.TabIndicatorProps,
        children: <div className={`MuiIndicator-${props.value}`} />,
      }}
    />
  );
};

export default {
  Tabs: GmailTabs,
  Tab: GmailTabItem,
};
