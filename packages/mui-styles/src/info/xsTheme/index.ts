import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import xsThemeInfoStyles, { XsThemeInfoClassKey } from './xsThemeInfo.styles';

const useXsThemeInfoStyles: () => ClassNameMap<
  XsThemeInfoClassKey
> = makeStyles(xsThemeInfoStyles, { name: 'XsThemeInfo' });

export { xsThemeInfoStyles, useXsThemeInfoStyles };

export { default } from './xsThemeInfo.styles';
