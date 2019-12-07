import { bundleJS } from 'utils/webpack';
import SecondarySidebarDemo from './SecondarySidebarDemo';

const reqSource = require.context('!raw-loader!./', true, /\.js$/);
const demos = bundleJS(require.context('./', true, /\.js$/), reqSource);

SecondarySidebarDemo.raw_js = demos.SecondarySidebarDemo.raw_js;

export default SecondarySidebarDemo;
