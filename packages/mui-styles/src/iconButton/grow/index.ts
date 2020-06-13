import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import growIconButtonStyles, {
  GrowIconButtonClassKey,
  GrowIconButtonStyleProps,
} from './growIconButton.styles';

const useGrowIconButtonStyles: (
  props?: GrowIconButtonStyleProps
) => ClassNameMap<GrowIconButtonClassKey> = makeStyles(growIconButtonStyles, {
  name: 'GrowIconButton',
});

export { growIconButtonStyles, useGrowIconButtonStyles };

export { default } from './growIconButton.styles';
