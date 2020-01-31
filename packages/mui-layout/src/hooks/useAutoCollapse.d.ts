import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

declare const useAutoCollapse: (options: {
  screen: Breakpoint;
  autoCollapseDisabled?: boolean;
  collapsedBreakpoint: Breakpoint;
  setCollapsed: (value: boolean) => void;
}) => void;

export default useAutoCollapse;
