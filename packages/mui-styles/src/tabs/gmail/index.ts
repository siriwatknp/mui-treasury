import { ClassNameMap } from '@material-ui/styles';
import { makeStyles } from '@material-ui/styles';
import {
  tabsStyles,
  tabItemStyles,
  GmailTabsStyleProps,
  GmailTabsClassKey,
  GmailTabItemStyleProps,
  GmailTabItemClassKey,
} from './gmailTabs.styles';

export { tabsStyles as gmailTabsStyles, tabItemStyles as gmailTabItemStyles };

export const useGmailTabsStyles: (
  props?: GmailTabsStyleProps
) => ClassNameMap<GmailTabsClassKey> = makeStyles(tabsStyles);

export const useGmailTabItemStyles: (
  props?: GmailTabItemStyleProps
) => ClassNameMap<GmailTabItemClassKey> = makeStyles(tabItemStyles);
