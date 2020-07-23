import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import poofSocialLinkStyles, {
  PoofSocialLinkClassKey,
  PoofSocialLinkStyleProps,
} from './poofSocialLink.styles';

const usePoofSocialLinkStyles: (
  props?: PoofSocialLinkStyleProps
) => ClassNameMap<PoofSocialLinkClassKey> = makeStyles(poofSocialLinkStyles, {
  name: 'PoofSocialLink',
});

export { poofSocialLinkStyles, usePoofSocialLinkStyles };

export { default } from './poofSocialLink.styles';
