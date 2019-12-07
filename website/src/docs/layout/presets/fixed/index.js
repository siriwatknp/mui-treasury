import { bundleJS } from 'utils/webpack';
import FixedLayout from './FixedLayout';

const reqSource = require.context('!raw-loader!./', true, /\.js$/);
const demos = bundleJS(require.context('./', true, /\.js$/), reqSource);

FixedLayout.raw_js = demos.FixedLayout.raw_js;

export default FixedLayout;
