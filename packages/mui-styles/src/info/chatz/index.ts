import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import chatzInfoStyles, { ChatzThemeInfoClassKey } from './chatzInfo.styles';

const useChatzInfoStyles: () => ClassNameMap<
  ChatzThemeInfoClassKey
> = makeStyles(chatzInfoStyles, { name: 'ChatzInfo' });

export { chatzInfoStyles, useChatzInfoStyles };

export { default } from './chatzInfo.styles';
