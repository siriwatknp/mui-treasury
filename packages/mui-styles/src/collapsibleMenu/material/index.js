import makeStyles from '@material-ui/styles/makeStyles';
import materialCollapsibleMenuStyles from './materialCollapsibleMenu.styles';

const useMaterialCollapsibleMenuStyles = makeStyles(
  materialCollapsibleMenuStyles,
  { name: 'MaterialCollapsibleMenu' }
);

export { materialCollapsibleMenuStyles, useMaterialCollapsibleMenuStyles };

export { default } from './materialCollapsibleMenu.styles';
