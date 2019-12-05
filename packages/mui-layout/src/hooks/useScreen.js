import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from './useMediaQuery';

function useScreen(initialValue, options) {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.up('xs'), options);
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), options);
  const isMd = useMediaQuery(theme.breakpoints.up('md'), options);
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), options);
  const isXl = useMediaQuery(theme.breakpoints.up('xl'), options);
  if (isXl) return 'xl';
  if (isLg) return 'lg';
  if (isMd) return 'md';
  if (isSm) return 'sm';
  if (isXs) return 'xs';
  return initialValue;
}

export default useScreen;
