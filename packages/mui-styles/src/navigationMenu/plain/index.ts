import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/styles/makeStyles';
import plainNavigationMenuStyles, {
  PlainNavigationMenuClassKey,
  PlainNavigationMenuStyleProps,
} from './plainNavigationMenu.styles';

const usePlainNavigationMenuStyles: (
  props?: PlainNavigationMenuStyleProps
) => ClassNameMap<PlainNavigationMenuClassKey> = makeStyles(
  plainNavigationMenuStyles,
  {
    name: 'PlainNavigationMenu',
  }
);

export { plainNavigationMenuStyles, usePlainNavigationMenuStyles };

export { default } from './plainNavigationMenu.styles';
