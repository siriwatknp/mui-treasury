import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/styles/makeStyles';
import onlineAvatarStyles, {
  OnlineAvatarClassKey,
  OnlineAvatarStyleProps,
} from './onlineAvatar.styles';

const useOnlineAvatarStyles: (
  props?: OnlineAvatarStyleProps
) => ClassNameMap<OnlineAvatarClassKey> = makeStyles(onlineAvatarStyles, {
  name: 'OnlineAvatar',
});

export { onlineAvatarStyles, useOnlineAvatarStyles };

export { default } from './onlineAvatar.styles';
