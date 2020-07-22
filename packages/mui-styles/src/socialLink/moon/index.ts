import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import moonSocialLinkStyles, {
  MoonSocialLinkClassKey,
  MoonSocialLinkStyleProps,
} from './moonSocialLink.styles';

const useMoonSocialLinkStyles: (
  props?: MoonSocialLinkStyleProps
) => ClassNameMap<MoonSocialLinkClassKey> = makeStyles(moonSocialLinkStyles, {
  name: 'MoonSocialLink',
});

export { moonSocialLinkStyles, useMoonSocialLinkStyles };

export { default } from './moonSocialLink.styles';
