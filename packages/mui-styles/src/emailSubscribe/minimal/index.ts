import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import minimalEmailSubscribeStyles, {
  MinimalEmailSubscribeClassKey,
  MinimalEmailSubscribeStyleProps,
} from './minimalEmailSubscribe.styles';

const useMinimalEmailSubscribeStyles: (
  props?: MinimalEmailSubscribeStyleProps
) => ClassNameMap<MinimalEmailSubscribeClassKey> = makeStyles(minimalEmailSubscribeStyles, {
  name: 'MinimalEmailSubscribe',
});

export { minimalEmailSubscribeStyles, useMinimalEmailSubscribeStyles };

export { default } from './minimalEmailSubscribe.styles';
