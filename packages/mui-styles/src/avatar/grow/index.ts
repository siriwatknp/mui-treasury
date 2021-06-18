import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/styles/makeStyles';
import growAvatarStyles, {
  GrowAvatarClassKey,
  GrowAvatarStyleProps,
} from './growAvatar.styles';

const useGrowAvatarStyles: (
  props?: GrowAvatarStyleProps
) => ClassNameMap<GrowAvatarClassKey> = makeStyles(growAvatarStyles, {
  name: 'GrowAvatar',
});

export { growAvatarStyles, useGrowAvatarStyles };

export { default } from './growAvatar.styles';
