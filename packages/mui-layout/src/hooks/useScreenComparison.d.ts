import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

declare const useScreenComparison: (targetScreen: Breakpoint) => {
  isTargetDown: boolean;
  isTargetAbove: boolean;
};

export default useScreenComparison;
