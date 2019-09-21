import { makeStyles } from '@material-ui/styles';
import * as chromeTabsStyles from './chromeTabs.styles';
import * as containedTabsStyles from './containedTabs.styles';
import * as elevatedTabsStyles from './elevatedTabs.styles';
import * as firebaseTabsStyles from './firebaseTabs.styles';
import * as instagramTabsStyles from './instagramTabs.styles';
import * as pillTabsStyles from './pillTabs.styles';
import * as serratedTabsStyles from './serratedTabs.styles';
import * as twitterIconTabsStyles from './twitterIconTabs.styles';
import * as twitterTabsStyles from './twitterTabs.styles';

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
  chromeTabsStyles,
  chromeTabsStylesHook,
  containedTabsStyles,
  containedTabsStylesHook,
  elevatedTabsStyles,
  elevatedTabsStylesHook,
  firebaseTabsStyles,
  firebaseTabsStylesHook,
  instagramTabsStyles,
  instagramTabsStylesHook,
  pillTabsStyles,
  pillTabsStylesHook,
  serratedTabsStyles,
  serratedTabsStylesHook,
  twitterIconTabsStyles,
  twitterIconTabsStylesHook,
  twitterTabsStyles,
  twitterTabsStylesHook,
};
