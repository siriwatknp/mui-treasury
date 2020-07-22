import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import zoomSocialLinkStyles, {
  ZoomSocialLinkClassKey,
  ZoomSocialLinkStyleProps,
} from './zoomSocialLink.styles';

const useZoomSocialLinkStyles: (
  props?: ZoomSocialLinkStyleProps
) => ClassNameMap<ZoomSocialLinkClassKey> = makeStyles(zoomSocialLinkStyles, {
  name: 'ZoomSocialLink',
});

export { zoomSocialLinkStyles, useZoomSocialLinkStyles };

export { default } from './zoomSocialLink.styles';
