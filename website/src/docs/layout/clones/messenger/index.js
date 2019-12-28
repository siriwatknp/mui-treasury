import { bundleJS } from 'utils/webpack';
import MessengerDemo from './MessengerDemo';

const reqSource = require.context('!raw-loader!./', true, /\.js$/);
const demos = bundleJS(require.context('./', true, /\.js$/), reqSource);

MessengerDemo.raw_js = demos.MessengerDemo.raw_js;

export default MessengerDemo;
