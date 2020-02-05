import partition from 'lodash/partition';
import toArray from 'lodash/toArray';
import last from 'lodash/last';

const FakeComponent = () => null;
FakeComponent.metadata = {
  title: 'Fake Component',
};

export const toComponents = bundledObject => {
  const components = toArray(bundledObject);
  components.forEach(o => {
    if (!o.metadata) {
      throw new Error(`Please define metadata in ${o.name}.`);
    }
  });
  return components;
};

const orderByDate = items => {
  return items.sort((a, b) => {
    const dateB = new Date(b.metadata?.createdAt || '1/1/1970');
    const dateA = new Date(a.metadata?.createdAt || '1/1/1970');
    return dateB.getTime() - dateA.getTime();
  });
};

export const splitDefault = bundledObject => {
  const components = toComponents(bundledObject);
  const [defaultComponent, customComponents] = partition(
    components,
    o => o.metadata.isDefault
  );
  const [datedComponent, undatedComponents] = partition(
    customComponents,
    o => !!o.metadata.createdAt
  );
  return [
    !defaultComponent.length ? FakeComponent : defaultComponent[0],
    [...orderByDate(datedComponent), ...undatedComponents],
  ];
};

export const getPathFileName = (path = '') => {
  const array = path.split('/');
  return last(array);
};

export const isExternalLink = url => {
  return url.includes('http://') || url.includes('https://');
};
