import { bundleJS } from 'utils/webpack';

export default bundleJS(require.context('./', true, /\.js$/));
