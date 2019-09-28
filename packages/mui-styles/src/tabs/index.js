import { makeStyles } from '@material-ui/styles';
import * as chromeTabsStyles from './chrome/chromeTabs.styles';
import * as containedTabsStyles from './contained/containedTabs.styles';
import * as elevatedTabsStyles from './elevated/elevatedTabs.styles';
import * as firebaseTabsStyles from './firebase/firebaseTabs.styles';
import * as instagramTabsStyles from './instagram/instagramTabs.styles';
import * as pillTabsStyles from './pill/pillTabs.styles';
import * as serratedTabsStyles from './serrated/serratedTabs.styles';
import * as twitterIconTabsStyles from './twitterIcon/twitterIconTabs.styles';
import * as twitterTabsStyles from './twitter/twitterTabs.styles';

const chromeTabsStylesHook = {
  useTabs: makeStyles(chromeTabsStyles.tabsStyles),
  useTabItem: makeStyles(chromeTabsStyles.tabItemStyles),
};

const containedTabsStylesHook = {
  useTabs: makeStyles(containedTabsStyles.tabsStyles),
  useTabItem: makeStyles(containedTabsStyles.tabItemStyles),
};

const elevatedTabsStylesHook = {
  useTabs: makeStyles(elevatedTabsStyles.tabsStyles),
  useTabItem: makeStyles(elevatedTabsStyles.tabItemStyles),
};

const firebaseTabsStylesHook = {
  useTabs: makeStyles(firebaseTabsStyles.tabsStyles),
  useTabItem: makeStyles(firebaseTabsStyles.tabItemStyles),
};

const instagramTabsStylesHook = {
  useTabs: makeStyles(instagramTabsStyles.tabsStyles),
  useTabItem: makeStyles(instagramTabsStyles.tabItemStyles),
};

const pillTabsStylesHook = {
  useTabs: makeStyles(pillTabsStyles.tabsStyles),
  useTabItem: makeStyles(pillTabsStyles.tabItemStyles),
};

const serratedTabsStylesHook = {
  useTabs: makeStyles(serratedTabsStyles.tabsStyles),
  useTabItem: makeStyles(serratedTabsStyles.tabItemStyles),
};

const twitterIconTabsStylesHook = {
  useTabs: makeStyles(twitterIconTabsStyles.tabsStyles),
  useTabItem: makeStyles(twitterIconTabsStyles.tabItemStyles),
  useBadge: makeStyles(twitterIconTabsStyles.badgeStyles),
};

const twitterTabsStylesHook = {
  useTabs: makeStyles(twitterTabsStyles.tabsStyles),
  useTabItem: makeStyles(twitterTabsStyles.tabItemStyles),
};

export {
  chromeTabsStylesHook,
  containedTabsStylesHook,
  elevatedTabsStylesHook,
  firebaseTabsStylesHook,
  instagramTabsStylesHook,
  pillTabsStylesHook,
  serratedTabsStylesHook,
  twitterIconTabsStylesHook,
  twitterTabsStylesHook,
};
