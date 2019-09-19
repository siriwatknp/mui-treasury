import { makeStyles } from '@material-ui/styles';
import * as chromeTabsStyles from './chromeTabs.styles';

const chromeTabsStylesHook = {
  useTabs: makeStyles(chromeTabsStyles.tabsStyles),
  useTabItem: makeStyles(chromeTabsStyles.tabItemStyles),
};

export { chromeTabsStyles, chromeTabsStylesHook };
