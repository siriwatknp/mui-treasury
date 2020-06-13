import { bundleJS } from 'utils/webpack';
import RtlSupportDemo from './RtlSupportDemo';

const reqSource = require.context('!raw-loader!./', true, /\.js$/);
const demos = bundleJS(require.context('./', true, /\.js$/), reqSource);

RtlSupportDemo.raw_js = demos.RtlSupportDemo.raw_js;

export default RtlSupportDemo;
