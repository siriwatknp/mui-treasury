import { bundleJS } from 'utils/webpack';
import CustomThemeDemo from './CustomThemeDemo';

const reqSource = require.context('!raw-loader!./', true, /\.js$/);
const demos = bundleJS(require.context('./', true, /\.js$/), reqSource);

CustomThemeDemo.raw_js = demos.CustomThemeDemo.raw_js;

export default CustomThemeDemo;
