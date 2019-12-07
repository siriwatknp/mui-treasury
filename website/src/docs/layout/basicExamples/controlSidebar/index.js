import { bundleJS } from 'utils/webpack';
import ControlSidebarDemo from './ControlSidebarDemo';

const reqSource = require.context('!raw-loader!./', true, /\.js$/);
const demos = bundleJS(require.context('./', true, /\.js$/), reqSource);

ControlSidebarDemo.raw_js = demos.ControlSidebarDemo.raw_js;

export default ControlSidebarDemo;
