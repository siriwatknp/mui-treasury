import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import lgThemeInfoStyles, { LgThemeInfoClassKey } from './lgThemeInfo.styles';

const useLgThemeInfoStyles: () => ClassNameMap<
  LgThemeInfoClassKey
> = makeStyles(lgThemeInfoStyles, { name: 'LgThemeInfo' });

export { lgThemeInfoStyles, useLgThemeInfoStyles };

export { default } from './lgThemeInfo.styles';
