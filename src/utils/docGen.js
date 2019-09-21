import { bundleStyles } from 'utils/webpack';
import { getPathFileName } from './functions';

const reqSourceStyles = bundleStyles(
  require.context('!raw-loader!../../packages/mui-styles/src', true, /\.js$/)
);
const reqSourceComponents = bundleStyles(
  require.context(
    '!raw-loader!../../packages/mui-components/src',
    true,
    /\.js$/
  )
);

const createConfig = path => ({
  getSource: reqSource => ({
    name: getPathFileName(path),
    source: reqSource[path],
  }),
});

export default () => {
  const mapSource = ({ pkg, path }) => {
    const config = createConfig(path);
    switch (pkg) {
      case 'mui-styles':
        return config.getSource(reqSourceStyles);
      case 'mui-components':
        return config.getSource(reqSourceComponents);
      default:
        return {};
    }
  };

  const mapAllFiles = files => files.map(mapSource);

  return {
    mapSource,
    mapAllFiles,
  };
};
