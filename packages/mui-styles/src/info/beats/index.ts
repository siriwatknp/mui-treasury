import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import beatsInfoStyles, { BeatsThemeInfoClassKey } from './beatsInfo.styles';

const useBeatsInfoStyles: () => ClassNameMap<
  BeatsThemeInfoClassKey
> = makeStyles(beatsInfoStyles, { name: 'BeatsInfo' });

export { beatsInfoStyles, useBeatsInfoStyles };

export { default } from './beatsInfo.styles';
