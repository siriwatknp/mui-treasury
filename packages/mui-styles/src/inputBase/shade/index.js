import makeStyles from '@material-ui/styles/makeStyles';
import shadeInputBaseStyles from './shadeInputBase.styles';

const useShadeInputBaseStyles = makeStyles(shadeInputBaseStyles, {
  name: 'ShadeInputBase',
});

export { shadeInputBaseStyles, useShadeInputBaseStyles };

export { default } from './shadeInputBase.styles';
