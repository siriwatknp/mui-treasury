import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/styles/makeStyles';
import themeSmInfoStyles, { ThemeSmInfoClassKey } from './themeSmInfo.styles';

const useThemeSmInfoStyles: () => ClassNameMap<
  ThemeSmInfoClassKey
> = makeStyles(themeSmInfoStyles, {
  name: 'ThemeSmInfo',
});

export { themeSmInfoStyles, useThemeSmInfoStyles };

export { default } from './themeSmInfo.styles';
