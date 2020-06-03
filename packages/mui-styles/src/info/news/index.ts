import { ClassNameMap } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import newsInfoStyles, { NewsInfoClassKey } from './newsInfo.styles';

const useNewsInfoStyles: () => ClassNameMap<
  NewsInfoClassKey
> = makeStyles(newsInfoStyles, { name: 'NewsInfo' });

export { newsInfoStyles, useNewsInfoStyles };

export { default } from './newsInfo.styles';
