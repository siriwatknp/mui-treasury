import { bundleJS } from 'utils/webpack';
import CozyLayout from './CozyLayout';

const reqSource = require.context('!raw-loader!./', true, /\.js$/);
const demos = bundleJS(require.context('./', true, /\.js$/), reqSource);

CozyLayout.raw_js = demos.CozyLayout.raw_js;

export default CozyLayout;
