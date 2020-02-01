import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { AddOns } from '../ConfigGenerator/AddOnsGenerator';
import { Config } from '../ConfigGenerator/ConfigGenerator';

export interface ScreenConfig {
  addOns: AddOns;
  get: () => (
    & ReturnType<AddOns['get']>
    & Record<Breakpoint, ReturnType<Config['get']> | undefined>
  );
  add(screen: Breakpoint, updater?: (config: Config) => void): this;
  adjust(screen: Breakpoint, updater?: (config: Config) => void): this;
  remove(screen: Breakpoint): this;
}

declare const ScreenConfigGenerator: () => ScreenConfig;

export default ScreenConfigGenerator;
