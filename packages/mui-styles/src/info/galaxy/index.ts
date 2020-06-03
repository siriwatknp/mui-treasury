import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import galaxyInfoStyles, { GalaxyThemeInfoClassKey } from './galaxyInfo.styles';

const useGalaxyInfoStyles: () => ClassNameMap<
  GalaxyThemeInfoClassKey
> = makeStyles(galaxyInfoStyles, { name: 'GalaxyInfo' });

export { galaxyInfoStyles, useGalaxyInfoStyles };

export { default } from './galaxyInfo.styles';
