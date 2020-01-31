import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { ConfigSetter } from '../createSet';

export interface AddOnsConfig {
  autoCollapseDisabled: boolean;
  collapsedBreakpoint: Breakpoint;
  secondaryAutoCollapseDisabled: boolean;
  secondaryCollapseBreakpoint: Breakpoint;
  heightAdjustmentDisabled: boolean;
  insetHiddenBreakpoint?: Breakpoint;
  insetHiddenDisabled?: boolean;
  secondaryInsetHiddenBreakpoint?: Breakpoint;
  secondaryInsetHiddenDisabled?: boolean;
}

export interface AddOns {
  get: () => AddOnsConfig;
  setAutoCollapsedDisabled: ConfigSetter<AddOnsConfig, 'autoCollapseDisabled', this>;
  setCollapsedBreakpoint: ConfigSetter<AddOnsConfig, 'collapsedBreakpoint', this>;
  setSecondaryAutoCollapseDisabled: ConfigSetter<AddOnsConfig, 'secondaryAutoCollapseDisabled', this>;
  setSecondaryCollapseBreakpoint: ConfigSetter<AddOnsConfig, 'secondaryCollapseBreakpoint', this>;
  setHeightAdjustmentDisabled: ConfigSetter<AddOnsConfig, 'heightAdjustmentDisabled', this>;
  setInsetHiddenBreakpoint: ConfigSetter<AddOnsConfig, 'insetHiddenBreakpoint', this>;
  setInsetHiddenDisabled: ConfigSetter<AddOnsConfig, 'insetHiddenDisabled', this>;
  setSecondaryInsetHiddenBreakpoint: ConfigSetter<AddOnsConfig, 'secondaryInsetHiddenBreakpoint'>;
  setSecondaryInsetHiddenDisabled: ConfigSetter<AddOnsConfig, 'secondaryInsetHiddenDisabled'>;
}

declare const AddOnsGenerator: () => AddOns;

export default AddOnsGenerator;
