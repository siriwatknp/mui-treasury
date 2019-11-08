import partition from 'lodash/partition';
import toArray from 'lodash/toArray';
import last from 'lodash/last';

const FakeComponent = () => null;
FakeComponent.metadata = {
  title: 'Fake Component',
};

export const splitDefault = bundledObject => {
  const components = toArray(bundledObject);
  components.forEach(o => {
    if (!o.metadata) {
      throw new Error(`Please define metadata in ${o.name}.`);
    }
  });
  const [defaultComponent, customComponents] = partition(
    components,
    o => o.metadata.isDefault
  );
  return [
    !defaultComponent.length ? FakeComponent : defaultComponent[0],
    customComponents,
  ];
};

export const getPathFileName = (path = '') => {
  const array = path.split('/');
  return last(array);
};

export const isExternalLink = url => {
  return url.includes('http://') || url.includes('https://');
};
