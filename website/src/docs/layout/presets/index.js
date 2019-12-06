import { bundleJS } from 'utils/webpack';
import { toComponents } from 'utils/functions';

const reqSource = require.context('!raw-loader!./', true, /\.js$/);
const demos = bundleJS(require.context('./', true, /\.js$/), reqSource);
const components = toComponents(demos);

export default components;
