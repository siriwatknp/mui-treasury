import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import ConfigGenerator from './ConfigGenerator';
import ScreenConfigGenerator from './ScreenConfigGenerator';

type Configs = ReturnType<ReturnType<typeof ScreenConfigGenerator>['get']>;
type Config = ReturnType<ReturnType<typeof ConfigGenerator>['get']>;

declare const selectConfigByScreen: (config: Configs, screen: Breakpoint) => Config;

export default selectConfigByScreen;
