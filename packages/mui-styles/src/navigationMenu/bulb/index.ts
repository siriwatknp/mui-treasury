import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import bulbNavigationMenuStyles, {
  BulbNavigationMenuClassKey,
  BulbNavigationMenuStyleProps,
} from './bulbNavigationMenu.styles';

const useBulbNavigationMenuStyles: (
  props?: BulbNavigationMenuStyleProps
) => ClassNameMap<BulbNavigationMenuClassKey> = makeStyles(bulbNavigationMenuStyles, {
  name: 'BulbNavigationMenu',
});

export { bulbNavigationMenuStyles, useBulbNavigationMenuStyles };

export { default } from './bulbNavigationMenu.styles';
