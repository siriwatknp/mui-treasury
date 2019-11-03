import { makeStyles } from '@material-ui/styles';
import sidebarStyles from './sidebar.styles';
import headerStyles from './header.styles';

const useSidebarStyles = makeStyles(sidebarStyles);
const useHeaderStyles = makeStyles(headerStyles);

export { sidebarStyles, useSidebarStyles, headerStyles, useHeaderStyles };
