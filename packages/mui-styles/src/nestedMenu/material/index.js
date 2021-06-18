import makeStyles from '@material-ui/styles/makeStyles';
import materialNestedMenuStyles from './materialNestedMenu.styles';

const useMaterialNestedMenuStyles = makeStyles(materialNestedMenuStyles, {
  name: 'MaterialNestedMenu',
});

export { materialNestedMenuStyles, useMaterialNestedMenuStyles };

export { default } from './materialNestedMenu.styles';
