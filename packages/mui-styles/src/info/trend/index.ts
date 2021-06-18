import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/styles/makeStyles';
import trendInfoStyles, { TrendInfoClassKey } from './trendInfo.styles';

const useTrendInfoStyles: () => ClassNameMap<
  TrendInfoClassKey
> = makeStyles(trendInfoStyles, { name: 'TrendInfo' });

export { trendInfoStyles, useTrendInfoStyles };

export { default } from './trendInfo.styles';
