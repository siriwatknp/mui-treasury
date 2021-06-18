import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/styles/makeStyles';
import popularInfoStyles, { PopularInfoClassKey } from './popularInfo.styles';

const usePopularInfoStyles: () => ClassNameMap<
  PopularInfoClassKey
> = makeStyles(popularInfoStyles, { name: 'PopularInfo' });

export { popularInfoStyles, usePopularInfoStyles };

export { default } from './popularInfo.styles';
