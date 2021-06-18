import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/styles/makeStyles';
import galaxyInfoStyles, { GalaxyInfoClassKey } from './galaxyInfo.styles';

const useGalaxyInfoStyles: () => ClassNameMap<
  GalaxyInfoClassKey
> = makeStyles(galaxyInfoStyles, { name: 'GalaxyInfo' });

export { galaxyInfoStyles, useGalaxyInfoStyles };

export { default } from './galaxyInfo.styles';
