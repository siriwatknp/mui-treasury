import makeStyles from '@material-ui/styles/makeStyles';
import jupiterCollapsibleMenuStyles from './jupiterCollapsibleMenu.styles';

const useJupiterCollapsibleMenuStyles = makeStyles(
  jupiterCollapsibleMenuStyles,
  { name: 'JupiterCollapsibleMenu' }
);

export { jupiterCollapsibleMenuStyles, useJupiterCollapsibleMenuStyles };

export { default } from './jupiterCollapsibleMenu.styles';
