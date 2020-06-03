import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import d01InfoStyles, { D01ThemeInfoClassKey } from './d01Info.styles';

const useD01InfoStyles: () => ClassNameMap<
  D01ThemeInfoClassKey
> = makeStyles(d01InfoStyles, { name: 'D01Info' });

export { d01InfoStyles, useD01InfoStyles };

export { default } from './d01Info.styles';
