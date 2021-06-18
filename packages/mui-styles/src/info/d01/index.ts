import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/styles/makeStyles';
import d01InfoStyles, { D01InfoClassKey } from './d01Info.styles';

const useD01InfoStyles: () => ClassNameMap<
  D01InfoClassKey
> = makeStyles(d01InfoStyles, { name: 'D01Info' });

export { d01InfoStyles, useD01InfoStyles };

export { default } from './d01Info.styles';
