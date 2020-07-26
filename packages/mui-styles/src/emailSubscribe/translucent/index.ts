import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import translucentEmailSubscribeStyles, {
  TranslucentEmailSubscribeClassKey,
  TranslucentEmailSubscribeStyleProps,
} from './translucentEmailSubscribe.styles';

const useTranslucentEmailSubscribeStyles: (
  props?: TranslucentEmailSubscribeStyleProps
) => ClassNameMap<TranslucentEmailSubscribeClassKey> = makeStyles(translucentEmailSubscribeStyles, {
  name: 'TranslucentEmailSubscribe',
});

export { translucentEmailSubscribeStyles, useTranslucentEmailSubscribeStyles };

export { default } from './translucentEmailSubscribe.styles';
