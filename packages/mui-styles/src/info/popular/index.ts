import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import popularInfoStyles, {
  PopularThemeInfoClassKey,
} from './popularInfo.styles';

const usePopularInfoStyles: () => ClassNameMap<
  PopularThemeInfoClassKey
> = makeStyles(popularInfoStyles, { name: 'PopularInfo' });

export { popularInfoStyles, usePopularInfoStyles };

export { default } from './popularInfo.styles';
