import { bundleJS } from 'utils/webpack';
import ShoppingCartDemo from './ShoppingCartDemo';

const reqSource = require.context('!raw-loader!./', true, /\.js$/);
const demos = bundleJS(require.context('./', true, /\.js$/), reqSource);

ShoppingCartDemo.raw_js = demos.ShoppingCartDemo.raw_js;

export default ShoppingCartDemo;
