import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/styles/makeStyles';
import zoomNavigationMenuStyles, {
  ZoomNavigationMenuClassKey,
  ZoomNavigationMenuStyleProps,
} from './zoomNavigationMenu.styles';

const useZoomNavigationMenuStyles: (
  props?: ZoomNavigationMenuStyleProps
) => ClassNameMap<ZoomNavigationMenuClassKey> = makeStyles(
  zoomNavigationMenuStyles,
  {
    name: 'ZoomNavigationMenu',
  }
);

export { zoomNavigationMenuStyles, useZoomNavigationMenuStyles };

export { default } from './zoomNavigationMenu.styles';
