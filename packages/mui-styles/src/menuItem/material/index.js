import { makeStyles } from '@material-ui/core/styles';
import materialActionToggleItemStyles from './actionToggleItem.styles';
import materialToggleMenuItemStyles from './toggleMenuItem.styles';
import materialInfoMenuItemStyles from './infoMenuItem.styles';

const useMaterialActionToggleItemStyles = makeStyles(
  materialActionToggleItemStyles
);
const useMaterialToggleMenuItemStyles = makeStyles(
  materialToggleMenuItemStyles
);
const useMaterialInfoMenuItemStyles = makeStyles(materialInfoMenuItemStyles);

export {
  materialActionToggleItemStyles,
  useMaterialActionToggleItemStyles,
  materialToggleMenuItemStyles,
  useMaterialToggleMenuItemStyles,
  materialInfoMenuItemStyles,
  useMaterialInfoMenuItemStyles,
};
