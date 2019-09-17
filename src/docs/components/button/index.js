import { bundleJS } from 'utils/webpack';
import { splitDefault } from 'utils/functions';

const reqSource = require.context('!raw-loader!./', true, /\.js$/);
const demos = bundleJS(require.context('./', true, /\.js$/), reqSource);
const [DefaultButton, customComponents] = splitDefault(demos);

export { DefaultButton, customComponents };

export default demos;
