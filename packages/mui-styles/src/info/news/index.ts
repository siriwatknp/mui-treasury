import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import newsInfoStyles, { NewsThemeInfoClassKey } from './newsInfo.styles';

const useNewsInfoStyles: () => ClassNameMap<
  NewsThemeInfoClassKey
> = makeStyles(newsInfoStyles, { name: 'NewsInfo' });

export { newsInfoStyles, useNewsInfoStyles };

export { default } from './newsInfo.styles';
