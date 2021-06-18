import makeStyles from '@material-ui/styles/makeStyles';
import jupiterListItemStyles from './jupiterListItem.styles';

const useJupiterListItemStyles = makeStyles(jupiterListItemStyles, {
  name: 'JupiterListItem',
});

export { jupiterListItemStyles, useJupiterListItemStyles };

export { default } from './jupiterListItem.styles';
