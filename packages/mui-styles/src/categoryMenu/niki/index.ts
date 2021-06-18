import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/styles/makeStyles';
import nikiCategoryMenuStyles, {
  NikiCategoryMenuClassKey,
  NikiCategoryMenuStyleProps,
} from './nikiCategoryMenu.styles';

const useNikiCategoryMenuStyles: (
  props?: NikiCategoryMenuStyleProps
) => ClassNameMap<NikiCategoryMenuClassKey> = makeStyles(
  nikiCategoryMenuStyles,
  {
    name: 'NikiCategoryMenu',
  }
);

export { nikiCategoryMenuStyles, useNikiCategoryMenuStyles };

export { default } from './nikiCategoryMenu.styles';
