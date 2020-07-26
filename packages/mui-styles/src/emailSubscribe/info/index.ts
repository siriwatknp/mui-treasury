import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import infoEmailSubscribeStyles, {
  InfoEmailSubscribeClassKey,
  InfoEmailSubscribeStyleProps,
} from './infoEmailSubscribe.styles';

const useInfoEmailSubscribeStyles: (
  props?: InfoEmailSubscribeStyleProps
) => ClassNameMap<InfoEmailSubscribeClassKey> = makeStyles(infoEmailSubscribeStyles, {
  name: 'InfoEmailSubscribe',
});

export { infoEmailSubscribeStyles, useInfoEmailSubscribeStyles };

export { default } from './infoEmailSubscribe.styles';
