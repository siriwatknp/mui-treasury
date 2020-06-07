import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import gradientAvatarStyles, {
  GradientAvatarClassKey,
  GradientAvatarStyleProps,
} from './gradientAvatar.styles';

const useGradientAvatarStyles: (
  props?: GradientAvatarStyleProps
) => ClassNameMap<GradientAvatarClassKey> = makeStyles(gradientAvatarStyles, {
  name: 'GradientAvatar',
});

export { gradientAvatarStyles, useGradientAvatarStyles };

export { default } from './gradientAvatar.styles';
