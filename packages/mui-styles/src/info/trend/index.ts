import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import trendInfoStyles, { TrendThemeInfoClassKey } from './trendInfo.styles';

const useTrendInfoStyles: () => ClassNameMap<
  TrendThemeInfoClassKey
> = makeStyles(trendInfoStyles, { name: 'TrendInfo' });

export { trendInfoStyles, useTrendInfoStyles };

export { default } from './trendInfo.styles';
