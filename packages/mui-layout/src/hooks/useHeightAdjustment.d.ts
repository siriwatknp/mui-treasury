import { ILayoutContext } from '../core/layoutContext';

declare const useHeightAdjustment: (options: {
  sidebar?: ILayoutContext['sidebar'];
  clipped?: boolean;
  header?: ILayoutContext['header'];
  heightAdjustmentSpeed?: number;
  heightAdjustmentDisabled?: boolean;
}) => number;

export default useHeightAdjustment;
