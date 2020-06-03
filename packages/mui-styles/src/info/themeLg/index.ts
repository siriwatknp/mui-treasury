import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import themeLgInfoStyles, { ThemeLgInfoClassKey } from './themeLgInfo.styles';

const useThemeLgInfoStyles: () => ClassNameMap<
  ThemeLgInfoClassKey
> = makeStyles(themeLgInfoStyles, { name: 'ThemeLgInfo' });

export { themeLgInfoStyles, useThemeLgInfoStyles };

export { default } from './themeLgInfo.styles';
