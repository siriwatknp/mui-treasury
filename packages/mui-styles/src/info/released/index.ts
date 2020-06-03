import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import releasedInfoStyles, {
  ReleasedInfoClassKey,
} from './releasedInfo.styles';

const useReleasedInfoStyles: () => ClassNameMap<
  ReleasedInfoClassKey
> = makeStyles(releasedInfoStyles, { name: 'ReleasedInfo' });

export { releasedInfoStyles, useReleasedInfoStyles };

export { default } from './releasedInfo.styles';
