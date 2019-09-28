import { makeStyles } from '@material-ui/styles';

import firebaseBtnStyles from './firebase';
import githubBtnStyles from './githubBtn.styles';
import twitterBtnStyles from './twitterBtn.styles';
import gradientBtnStyles from './gradientBtn.styles';
import graphicBtnStyles from './graphicBtn.styles';

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
