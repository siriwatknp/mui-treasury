import partition from 'lodash/partition';
import toArray from 'lodash/toArray';

export const splitDefault = bundledObject => {
  const [defaultComponent, customComponents] = partition(
    toArray(bundledObject),
    o => o.metadata.isDefault
  );
  return [defaultComponent[0], customComponents];
};
