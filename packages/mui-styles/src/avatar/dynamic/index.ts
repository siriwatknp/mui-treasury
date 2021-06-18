import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/styles/makeStyles';
import dynamicAvatarStyles, {
  DynamicAvatarClassKey,
  DynamicAvatarStyleProps,
} from './dynamicAvatar.styles';

const useDynamicAvatarStyles: (
  props?: DynamicAvatarStyleProps
) => ClassNameMap<DynamicAvatarClassKey> = makeStyles(dynamicAvatarStyles, {
  name: 'DynamicAvatar',
});

export { dynamicAvatarStyles, useDynamicAvatarStyles };

export { default } from './dynamicAvatar.styles';
