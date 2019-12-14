import { bundleJS } from 'utils/webpack';
import InsetSidebarDemo from './InsetSidebarDemo';

const reqSource = require.context('!raw-loader!./', true, /\.js$/);
const demos = bundleJS(require.context('./', true, /\.js$/), reqSource);

InsetSidebarDemo.raw_js = demos.InsetSidebarDemo.raw_js;

export default InsetSidebarDemo;
