import makeStyles from '@material-ui/core/styles/makeStyles';
import grabIconStyles, {
  GrabIconClassKey,
  GrabIconStyleProps,
} from './grabIcon.styles';
import { ClassNameMap } from '@material-ui/styles';

const useGrabIconStyles: (
  props?: GrabIconStyleProps
) => ClassNameMap<GrabIconClassKey> = makeStyles(grabIconStyles, {
  name: 'GrabIcon',
});

export { grabIconStyles, useGrabIconStyles };
export * from './grabIcon.styles';

export { default } from './grabIcon.styles';
