import makeStyles from '@material-ui/styles/makeStyles';
import materialListItemStyles from './materialListItem.styles';

const useMaterialListItemStyles = makeStyles(materialListItemStyles, {
  name: 'MaterialListItem',
});

export { materialListItemStyles, useMaterialListItemStyles };

export { default } from './materialListItem.styles';
