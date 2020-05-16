import { bundleStyles } from 'utils/webpack';
import { getPathFileName } from './functions';

const reqSourceStyles = bundleStyles(
  require.context('!raw-loader!../../../packages/mui-styles/src', true, /\.js|\.ts$/)
);
const reqSourceComponents = bundleStyles(
  require.context(
    '!raw-loader!../../../packages/mui-components/src',
    true,
    /\.js|\.ts|\.tsx$/
  )
);

const createConfig = path => ({
  getSource: reqSource => {
    const name = getPathFileName(path);
    const source = reqSource[path];
    if (!source) {
      throw new Error(`Path "${path}" not found!`);
    }
    return {
      name,
      source,
    };
  },
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
