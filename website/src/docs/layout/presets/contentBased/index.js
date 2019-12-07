import { bundleJS } from 'utils/webpack';
import ContentBasedLayout from './ContentBasedLayout';

const reqSource = require.context('!raw-loader!./', true, /\.js$/);
const demos = bundleJS(require.context('./', true, /\.js$/), reqSource);

ContentBasedLayout.raw_js = demos.ContentBasedLayout.raw_js;

export default ContentBasedLayout;
