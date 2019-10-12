import { makeStyles } from '@material-ui/styles';

import text01 from './text01';
import text02 from './text02';
import text03 from './text03';
import blog from './blog';

const useTextCardContent01Styles = makeStyles(text01);
const useTextCardContent02Styles = makeStyles(text02);
const useTextCardContent03Styles = makeStyles(text03);
const useBlogCardContentStyles = makeStyles(blog);

export {
  useTextCardContent01Styles,
  useTextCardContent02Styles,
  useTextCardContent03Styles,
  useBlogCardContentStyles,
};
