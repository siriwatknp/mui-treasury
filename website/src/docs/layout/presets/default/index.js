import { bundleJS } from 'utils/webpack';
import DefaultLayout from './DefaultLayout';

const reqSource = require.context('!raw-loader!./', true, /\.js$/);
const demos = bundleJS(require.context('./', true, /\.js$/), reqSource);

DefaultLayout.raw_js = demos.DefaultLayout.raw_js;

export default DefaultLayout;
