import makeStyles from '@material-ui/core/styles/makeStyles';
import gatsbyNestedMenuStyles from './gatsbyNestedMenu.styles';

const useGatsbyNestedMenuStyles = makeStyles(gatsbyNestedMenuStyles, {
  name: 'GatsbyNestedMenu',
});

export { gatsbyNestedMenuStyles, useGatsbyNestedMenuStyles };

export { default } from './gatsbyNestedMenu.styles';
