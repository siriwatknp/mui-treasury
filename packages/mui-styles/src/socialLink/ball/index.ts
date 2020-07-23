import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ballSocialLinkStyles, {
  BallSocialLinkClassKey,
  BallSocialLinkStyleProps,
} from './ballSocialLink.styles';

const useBallSocialLinkStyles: (
  props?: BallSocialLinkStyleProps
) => ClassNameMap<BallSocialLinkClassKey> = makeStyles(ballSocialLinkStyles, {
  name: 'BallSocialLink',
});

export { ballSocialLinkStyles, useBallSocialLinkStyles };

export { default } from './ballSocialLink.styles';
