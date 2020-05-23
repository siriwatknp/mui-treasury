import makeStyles from '@material-ui/core/styles/makeStyles';
import sizedIconButtonStyles, {
  SizedIconButtonStyleProps,
  SizedIconButtonClassKey,
} from './sizedIconButton.styles';
import { ClassNameMap } from '@material-ui/styles';

const useSizedIconButtonStyles: (
  props?: SizedIconButtonStyleProps
) => ClassNameMap<SizedIconButtonClassKey> = makeStyles(sizedIconButtonStyles, {
  name: 'SizedIconButton',
});

export { sizedIconButtonStyles, useSizedIconButtonStyles };
export * from './sizedIconButton.styles' // export types

export { default } from './sizedIconButton.styles';
