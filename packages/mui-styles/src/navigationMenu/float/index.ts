import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import floatNavigationMenuStyles, {
  FloatNavigationMenuClassKey,
  FloatNavigationMenuStyleProps,
} from './floatNavigationMenu.styles';

const useFloatNavigationMenuStyles: (
  props?: FloatNavigationMenuStyleProps
) => ClassNameMap<FloatNavigationMenuClassKey> = makeStyles(floatNavigationMenuStyles, {
  name: 'FloatNavigationMenu',
});

export { floatNavigationMenuStyles, useFloatNavigationMenuStyles };

export { default } from './floatNavigationMenu.styles';
