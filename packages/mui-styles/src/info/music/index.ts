import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import musicInfoStyles, { MusicInfoClassKey } from './musicInfo.styles';

const useMusicInfoStyles: () => ClassNameMap<
  MusicInfoClassKey
> = makeStyles(musicInfoStyles, { name: 'MusicInfo' });

export { musicInfoStyles, useMusicInfoStyles };

export { default } from './musicInfo.styles';
