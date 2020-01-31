import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import useMediaQuery from './useMediaQuery';

declare function useScreen(initialValue: Breakpoint, options: Parameters<typeof useMediaQuery>[1]): Breakpoint;

export default useScreen;
