import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import bootstrapEmailSubscribeStyles, {
  BootstrapEmailSubscribeClassKey,
  BootstrapEmailSubscribeStyleProps,
} from './bootstrapEmailSubscribe.styles';

const useBootstrapEmailSubscribeStyles: (
  props?: BootstrapEmailSubscribeStyleProps
) => ClassNameMap<BootstrapEmailSubscribeClassKey> = makeStyles(bootstrapEmailSubscribeStyles, {
  name: 'BootstrapEmailSubscribe',
});

export { bootstrapEmailSubscribeStyles, useBootstrapEmailSubscribeStyles };

export { default } from './bootstrapEmailSubscribe.styles';
