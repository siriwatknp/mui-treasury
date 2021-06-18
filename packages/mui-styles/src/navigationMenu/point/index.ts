import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/styles/makeStyles';
import pointNavigationMenuStyles, {
  PointNavigationMenuClassKey,
  PointNavigationMenuStyleProps,
} from './pointNavigationMenu.styles';

const usePointNavigationMenuStyles: (
  props?: PointNavigationMenuStyleProps
) => ClassNameMap<PointNavigationMenuClassKey> = makeStyles(
  pointNavigationMenuStyles,
  {
    name: 'PointNavigationMenu',
  }
);

export { pointNavigationMenuStyles, usePointNavigationMenuStyles };

export { default } from './pointNavigationMenu.styles';
