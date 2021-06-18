import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/styles/makeStyles';
import themeMdInfoStyles, { ThemeMdInfoClassKey } from './themeMdInfo.styles';

const useThemeMdInfoStyles: () => ClassNameMap<
  ThemeMdInfoClassKey
> = makeStyles(themeMdInfoStyles, { name: 'ThemeMdInfo' });

export { themeMdInfoStyles, useThemeMdInfoStyles };

export { default } from './themeMdInfo.styles';
