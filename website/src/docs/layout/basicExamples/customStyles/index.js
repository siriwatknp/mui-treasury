import { bundleJS } from 'utils/webpack';
import CustomStylesDemo from './CustomStylesDemo';

const reqSource = require.context('!raw-loader!./', true, /\.js$/);
const demos = bundleJS(require.context('./', true, /\.js$/), reqSource);

CustomStylesDemo.raw_js = demos.CustomStylesDemo.raw_js;

export default CustomStylesDemo;
