import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import ConfigGenerator from '../ConfigGenerator';
import AddOnsGenerator from '../ConfigGenerator/AddOnsGenerator';

export type ConfigUpdater = (config: ReturnType<typeof ConfigGenerator>) => void;

export interface ScreenConfig {
  addOns: ReturnType<typeof AddOnsGenerator>;
  get: () => (
    & ReturnType<ReturnType<typeof AddOnsGenerator>['get']>
    & Record<Breakpoint, ReturnType<ReturnType<typeof ConfigGenerator>['get']> | undefined>
  );
  add(screen: Breakpoint, updater: ConfigUpdater): this;
  adjust(screen: Breakpoint, updater: ConfigUpdater): this;
  remove(screen: Breakpoint): this;
}

declare const ScreenConfigGenerator: () => ScreenConfig;

export default ScreenConfigGenerator;
