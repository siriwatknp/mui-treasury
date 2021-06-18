import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/styles/makeStyles';
import readyEmailSubscribeStyles, {
  ReadyEmailSubscribeClassKey,
  ReadyEmailSubscribeStyleProps,
} from './readyEmailSubscribe.styles';

const useReadyEmailSubscribeStyles: (
  props?: ReadyEmailSubscribeStyleProps
) => ClassNameMap<ReadyEmailSubscribeClassKey> = makeStyles(
  readyEmailSubscribeStyles,
  {
    name: 'ReadyEmailSubscribe',
  }
);

export { readyEmailSubscribeStyles, useReadyEmailSubscribeStyles };

export { default } from './readyEmailSubscribe.styles';
