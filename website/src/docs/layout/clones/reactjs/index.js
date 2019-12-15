import { bundleJS } from 'utils/webpack';
import ReactJsDemo from './ReactJsDemo';

const reqSource = require.context('!raw-loader!./', true, /\.js$/);
const demos = bundleJS(require.context('./', true, /\.js$/), reqSource);

ReactJsDemo.raw_js = demos.ReactJsDemo.raw_js;

export default ReactJsDemo;
