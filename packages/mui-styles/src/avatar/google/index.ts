import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import googleAvatarStyles, {
  GoogleAvatarClassKey,
  GoogleAvatarStyleProps,
} from './googleAvatar.styles';

const useGoogleAvatarStyles: (
  props?: GoogleAvatarStyleProps
) => ClassNameMap<GoogleAvatarClassKey> = makeStyles(googleAvatarStyles, {
  name: 'GoogleAvatar',
});

export { googleAvatarStyles, useGoogleAvatarStyles };

export { default } from './googleAvatar.styles';
