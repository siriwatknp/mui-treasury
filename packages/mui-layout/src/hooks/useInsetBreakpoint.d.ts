import { ILayoutContext } from '../core/layoutContext';
import useScreenComparison from './useScreenComparison';

declare const useInsetBreakpoint: (ctx?: ILayoutContext) => ReturnType<typeof useScreenComparison> & {
  insetHiddenDisabled: ILayoutContext['insetHiddenDisabled'];
  displayedAboveBreakpoint: boolean;
  displayedBelowBreakpoint: boolean;
};

export default useInsetBreakpoint;
