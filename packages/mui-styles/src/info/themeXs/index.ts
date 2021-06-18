import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/styles/makeStyles';
import themeXsInfoStyles, { ThemeXsInfoClassKey } from './themeXsInfo.styles';

const useThemeXsInfoStyles: () => ClassNameMap<
  ThemeXsInfoClassKey
> = makeStyles(themeXsInfoStyles, { name: 'ThemeXsInfo' });

export { themeXsInfoStyles, useThemeXsInfoStyles };

export { default } from './themeXsInfo.styles';
