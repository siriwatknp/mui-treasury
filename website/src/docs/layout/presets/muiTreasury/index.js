import { bundleJS } from 'utils/webpack';
import MuiTreasuryLayout from './MuiTreasuryLayout';

const reqSource = require.context('!raw-loader!./', true, /\.js$/);
const demos = bundleJS(require.context('./', true, /\.js$/), reqSource);

MuiTreasuryLayout.raw_js = demos.MuiTreasuryLayout.raw_js;

export default MuiTreasuryLayout;
