import { makeStyles } from '@material-ui/styles';
import sidebarStyles from './sidebar.styles';
import headerStyles from './header.styles';
import transitionStyles from './transition.styles';

const useSidebarStyles = makeStyles(sidebarStyles);
const useHeaderStyles = makeStyles(headerStyles);
const useTransitionStyles = makeStyles(transitionStyles);

export {
  sidebarStyles,
  useSidebarStyles,
  headerStyles,
  useHeaderStyles,
  transitionStyles,
  useTransitionStyles,
};
