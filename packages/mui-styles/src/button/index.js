import { makeStyles } from '@material-ui/styles';

import firebaseBtnStyles from './firebaseBtn.styles';
import githubBtnStyles from './githubBtn.styles';
import twitterBtnStyles from './twitterBtn.styles';

const useFirebaseBtnStyles = makeStyles(firebaseBtnStyles);
const useGithubBtnStyles = makeStyles(githubBtnStyles);
const useTwitterBtnStyles = makeStyles(twitterBtnStyles);

export {
  firebaseBtnStyles,
  githubBtnStyles,
  useFirebaseBtnStyles,
  useGithubBtnStyles,
  twitterBtnStyles,
  useTwitterBtnStyles,
};
