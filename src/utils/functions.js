import partition from 'lodash/partition';
import toArray from 'lodash/toArray';
import last from 'lodash/last';

export const splitDefault = bundledObject => {
  const [defaultComponent, customComponents] = partition(
    toArray(bundledObject),
    o => o.metadata.isDefault
  );
  return [defaultComponent[0], customComponents];
};

export const getPathFileName = (path = '') => {
  const array = path.split('/');
  return last(array);
};

export const isExternalLink = url => {
  return url.includes('http://') || url.includes('https://');
};
