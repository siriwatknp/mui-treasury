import makeStyles from '@material-ui/styles/makeStyles';
import gatsbyCollapsibleMenuStyles from './gatsbyCollapsibleMenu.styles';

const useGatsbyCollapsibleMenuStyles = makeStyles(gatsbyCollapsibleMenuStyles, {
  name: 'GatsbyCollapsibleMenu',
});

export { gatsbyCollapsibleMenuStyles, useGatsbyCollapsibleMenuStyles };

export { default } from './gatsbyCollapsibleMenu.styles';
