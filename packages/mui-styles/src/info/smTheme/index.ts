import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import smThemeInfoStyles, { SmThemeInfoClassKey } from './smThemeInfo.styles';

const useSmThemeInfoStyles: () => ClassNameMap<
  SmThemeInfoClassKey
> = makeStyles(smThemeInfoStyles, {
  name: 'SmThemeInfo',
});

export { smThemeInfoStyles, useSmThemeInfoStyles };

export { default } from './smThemeInfo.styles';
