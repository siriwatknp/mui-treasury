import makeStyles from '@material-ui/styles/makeStyles';
import gatsbyListItemStyles from './gatsbyListItem.styles';

const useGatsbyListItemStyles = makeStyles(gatsbyListItemStyles, {
  name: 'GatsbyListItem',
});

export { gatsbyListItemStyles, useGatsbyListItemStyles };

export { default } from './gatsbyListItem.styles';
