import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import magCategoryMenuStyles, {
  MagCategoryMenuClassKey,
  MagCategoryMenuStyleProps,
} from './magCategoryMenu.styles';

const useMagCategoryMenuStyles: (
  props?: MagCategoryMenuStyleProps
) => ClassNameMap<MagCategoryMenuClassKey> = makeStyles(magCategoryMenuStyles, {
  name: 'MagCategoryMenu',
});

export { magCategoryMenuStyles, useMagCategoryMenuStyles };

export { default } from './magCategoryMenu.styles';
