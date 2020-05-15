import { makeStyles } from '@material-ui/styles';
import { tabsStyles, tabItemStyles } from './gmailTabs.styles';

export { tabsStyles as gmailTabsStyles, tabItemStyles as gmailTabItemStyles }

export const useGmailTabsStyles = makeStyles(tabsStyles)

export const useGmailTabItemStyles = makeStyles(tabItemStyles)
