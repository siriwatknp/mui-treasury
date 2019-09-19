import { bundleStyles } from 'utils/webpack';

const reqSourceStyles = require.context(
  '!raw-loader!../../../packages/mui-styles/src',
  true,
  /\.js$/
);

export default bundleStyles(reqSourceStyles);
