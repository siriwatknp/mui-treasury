import { bundleJS } from 'utils/webpack';
import GmailDemo from './GmailDemo';

const reqSource = require.context('!raw-loader!./', true, /\.js$/);
const demos = bundleJS(require.context('./', true, /\.js$/), reqSource);

GmailDemo.raw_js = demos.GmailDemo.raw_js;

export default GmailDemo;
