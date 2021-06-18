import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/styles/makeStyles';
import lineNavigationMenuStyles, {
  LineNavigationMenuClassKey,
  LineNavigationMenuStyleProps,
} from './lineNavigationMenu.styles';

const useLineNavigationMenuStyles: (
  props?: LineNavigationMenuStyleProps
) => ClassNameMap<LineNavigationMenuClassKey> = makeStyles(
  lineNavigationMenuStyles,
  {
    name: 'LineNavigationMenu',
  }
);

export { lineNavigationMenuStyles, useLineNavigationMenuStyles };

export { default } from './lineNavigationMenu.styles';
