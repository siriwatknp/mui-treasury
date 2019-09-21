import { bundleJS } from 'utils/webpack';
import { splitDefault } from 'utils/functions';

const reqSource = require.context('!raw-loader!./', true, /\.js$/);
const demos = bundleJS(require.context('./', true, /\.js$/), reqSource);
const [DefaultComponent, customComponents] = splitDefault(demos);

console.log('customComponents', customComponents);

export { DefaultComponent, customComponents };

export default demos;
