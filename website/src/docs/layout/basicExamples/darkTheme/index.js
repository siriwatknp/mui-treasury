import { bundleJS } from 'utils/webpack';
import DarkThemeDemo from './DarkThemeDemo';

const reqSource = require.context('!raw-loader!./', true, /\.js$/);
const demos = bundleJS(require.context('./', true, /\.js$/), reqSource);

DarkThemeDemo.raw_js = demos.DarkThemeDemo.raw_js;

export default DarkThemeDemo;
