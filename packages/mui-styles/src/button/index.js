import { makeStyles } from '@material-ui/styles';

import firebaseBtnStyles from './firebase';
import githubBtnStyles from './github';
import twitterBtnStyles from './twitter';
import gradientBtnStyles from './gradient';
import graphicBtnStyles from './graphic';

const useFirebaseBtnStyles = makeStyles(firebaseBtnStyles);
const useGithubBtnStyles = makeStyles(githubBtnStyles);
const useTwitterBtnStyles = makeStyles(twitterBtnStyles);
const useGradientBtnStyles = makeStyles(gradientBtnStyles);
const useGraphicBtnStyles = makeStyles(graphicBtnStyles);

export {
  firebaseBtnStyles,
  githubBtnStyles,
  useFirebaseBtnStyles,
  useGithubBtnStyles,
  twitterBtnStyles,
  useTwitterBtnStyles,
  gradientBtnStyles,
  useGradientBtnStyles,
  graphicBtnStyles,
  useGraphicBtnStyles,
};
