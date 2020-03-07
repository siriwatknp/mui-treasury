import makeStyles from '@material-ui/core/styles/makeStyles';
import blogCardContentStyles from './blogCardContent.styles';

const useBlogCardContentStyles = makeStyles(blogCardContentStyles, {
  name: 'BlogCardContent',
});

export { blogCardContentStyles, useBlogCardContentStyles };

export { default } from './blogCardContent.styles';
