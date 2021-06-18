import createStyles from '@material-ui/styles/createStyles';
import makeStyles from '@material-ui/styles/makeStyles';
import * as chromeTabsStyles from './chrome/chromeTabs.styles';
import * as containedTabsStyles from './contained/containedTabs.styles';
import * as elevatedTabsStyles from './elevated/elevatedTabs.styles';
import * as firebaseTabsStyles from './firebase/firebaseTabs.styles';
import * as insideTriangleTabsStyles from './inside-triangle/insideTriangleTabs.styles';
import * as instagramTabsStyles from './instagram/instagramTabs.styles';
import * as pillTabsStyles from './pill/pillTabs.styles';
import * as serratedTabsStyles from './serrated/serratedTabs.styles';
import * as twitterIconTabsStyles from './twitterIcon/twitterIconTabs.styles';
import * as twitterTabsStyles from './twitter/twitterTabs.styles';
import * as appleTabs from './apple/appleTabs.styles';
import * as plain from './plain';

const plainTabsStylesHook = {
  useTabs: makeStyles(plain.tabsStyles),
  useTabItem: makeStyles(plain.tabItemStyles),
};

const chromeTabsStylesHook = {
  useTabs: makeStyles(chromeTabsStyles.tabsStyles),
  useTabItem: makeStyles(createStyles(chromeTabsStyles.tabItemStyles)),
};

const containedTabsStylesHook = {
  useTabs: makeStyles(containedTabsStyles.tabsStyles),
  useTabItem: makeStyles(createStyles(containedTabsStyles.tabItemStyles)),
};

const elevatedTabsStylesHook = {
  useTabs: makeStyles(elevatedTabsStyles.tabsStyles),
  useTabItem: makeStyles(createStyles(elevatedTabsStyles.tabItemStyles)),
};

const firebaseTabsStylesHook = {
  useTabs: makeStyles(firebaseTabsStyles.tabsStyles),
  useTabItem: makeStyles(createStyles(firebaseTabsStyles.tabItemStyles)),
};

const insideTriangleTabsStylesHook = {
  useTabs: makeStyles(insideTriangleTabsStyles.tabsStyles),
  useTabItem: makeStyles(createStyles(insideTriangleTabsStyles.tabItemStyles)),
};

const instagramTabsStylesHook = {
  useTabs: makeStyles(instagramTabsStyles.tabsStyles),
  useTabItem: makeStyles(createStyles(instagramTabsStyles.tabItemStyles)),
};

const pillTabsStylesHook = {
  useTabs: makeStyles(pillTabsStyles.tabsStyles),
  useTabItem: makeStyles(createStyles(pillTabsStyles.tabItemStyles)),
};

const serratedTabsStylesHook = {
  useTabs: makeStyles(serratedTabsStyles.tabsStyles),
  useTabItem: makeStyles(createStyles(serratedTabsStyles.tabItemStyles)),
};

const twitterIconTabsStylesHook = {
  useTabs: makeStyles(twitterIconTabsStyles.tabsStyles),
  useTabItem: makeStyles(createStyles(twitterIconTabsStyles.tabItemStyles)),
  useBadge: makeStyles(twitterIconTabsStyles.badgeStyles),
};

const twitterTabsStylesHook = {
  useTabs: makeStyles(twitterTabsStyles.tabsStyles),
  useTabItem: makeStyles(createStyles(twitterTabsStyles.tabItemStyles)),
};

const appleTabsStylesHook = {
  useTabs: makeStyles(createStyles(appleTabs.tabsStyles)),
  useTabItem: makeStyles(createStyles(appleTabs.tabItemStyles)),
};

export * from './gmail';

export {
  chromeTabsStylesHook,
  containedTabsStylesHook,
  elevatedTabsStylesHook,
  firebaseTabsStylesHook,
  insideTriangleTabsStylesHook,
  instagramTabsStylesHook,
  pillTabsStylesHook,
  plainTabsStylesHook,
  serratedTabsStylesHook,
  twitterIconTabsStylesHook,
  twitterTabsStylesHook,
  appleTabsStylesHook,
};
