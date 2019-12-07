import { bundleJS } from 'utils/webpack';
import StandardLayout from './StandardLayout';

const reqSource = require.context('!raw-loader!./', true, /\.js$/);
const demos = bundleJS(require.context('./', true, /\.js$/), reqSource);

StandardLayout.raw_js = demos.StandardLayout.raw_js;

export default StandardLayout;
