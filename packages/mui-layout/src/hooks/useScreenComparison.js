import get from 'lodash.get';
import { useTheme } from '@material-ui/core/styles';
import useLayoutCtx from './useLayoutCtx';

export default targetScreen => {
  const theme = useTheme();
  const { keys = [] } = get(theme, 'breakpoints', {});
  const { screen } = useLayoutCtx();
  const screenIndex = keys.indexOf(screen);
  const targetIndex = keys.indexOf(targetScreen);
  console.log('screenIndex', screenIndex);
  console.log('targetIndex', targetIndex);
  return {
    isTargetDown: screenIndex <= targetIndex,
    isTargetAbove: screenIndex > targetIndex,
  };
};
