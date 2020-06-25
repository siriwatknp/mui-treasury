import { bundleJS } from 'utils/webpack';
import SubheadersDemo from './SubheadersDemo';

const reqSource = require.context('!raw-loader!./', true, /\.js$/);
const demos = bundleJS(require.context('./', true, /\.js$/), reqSource);

SubheadersDemo.raw_js = demos.SubheadersDemo.raw_js;

export default SubheadersDemo;
