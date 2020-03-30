import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { Config } from './ConfigGenerator/ConfigGenerator';
import { ScreenConfig } from './ScreenConfigGenerator/ScreenConfigGenerator';

declare const selectConfigByScreen: (
  config: ReturnType<ScreenConfig['get']>,
  screen: Breakpoint
) => ReturnType<Config['get']>;

export default selectConfigByScreen;
