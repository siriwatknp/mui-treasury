import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/styles/makeStyles';
import chatzInfoStyles, { ChatzInfoClassKey } from './chatzInfo.styles';

const useChatzInfoStyles: () => ClassNameMap<
  ChatzInfoClassKey
> = makeStyles(chatzInfoStyles, { name: 'ChatzInfo' });

export { chatzInfoStyles, useChatzInfoStyles };

export { default } from './chatzInfo.styles';
