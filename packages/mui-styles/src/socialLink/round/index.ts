import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import roundSocialLinkStyles, {
  RoundSocialLinkClassKey,
  RoundSocialLinkStyleProps,
} from './roundSocialLink.styles';

const useRoundSocialLinkStyles: (
  props?: RoundSocialLinkStyleProps
) => ClassNameMap<RoundSocialLinkClassKey> = makeStyles(roundSocialLinkStyles, {
  name: 'RoundSocialLink',
});

export { roundSocialLinkStyles, useRoundSocialLinkStyles };

export { default } from './roundSocialLink.styles';
