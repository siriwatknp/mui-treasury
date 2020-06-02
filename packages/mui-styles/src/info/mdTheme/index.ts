import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import mdThemeInfoStyles, { MdThemeInfoClassKey } from './mdThemeInfo.styles';

const useMdThemeInfoStyles: () => ClassNameMap<
  MdThemeInfoClassKey
> = makeStyles(mdThemeInfoStyles, { name: 'MdThemeInfo' });

export { mdThemeInfoStyles, useMdThemeInfoStyles };

export { default } from './mdThemeInfo.styles';
