import { makeStyles } from '@material-ui/styles';

import firebaseBtnStyles from './firebaseBtn.styles';
import githubBtnStyles from './githubBtn.styles';
import twitterBtnStyles from './twitterBtn.styles';
import gradientBtnStyles from './gradientBtn.styles';

const useFirebaseBtnStyles = makeStyles(firebaseBtnStyles);
const useGithubBtnStyles = makeStyles(githubBtnStyles);
const useTwitterBtnStyles = makeStyles(twitterBtnStyles);
const useGradientBtnStyles = makeStyles(gradientBtnStyles);

export {
  firebaseBtnStyles,
  githubBtnStyles,
  useFirebaseBtnStyles,
  useGithubBtnStyles,
  twitterBtnStyles,
  useTwitterBtnStyles,
  gradientBtnStyles,
  useGradientBtnStyles,
};
