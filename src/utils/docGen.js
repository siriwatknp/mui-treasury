import styleSources from 'docs/styles';
import { getPathFileName } from './functions';

export default () => {
  const mapSource = ({ pkg, path }) => {
    switch (pkg) {
      case 'mui-styles':
        return { name: getPathFileName(path), source: styleSources[path] };
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
