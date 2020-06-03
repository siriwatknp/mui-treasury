import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import musicInfoStyles, { MusicThemeInfoClassKey } from './musicInfo.styles';

const useMusicInfoStyles: () => ClassNameMap<
  MusicThemeInfoClassKey
> = makeStyles(musicInfoStyles, { name: 'MusicInfo' });

export { musicInfoStyles, useMusicInfoStyles };

export { default } from './musicInfo.styles';
