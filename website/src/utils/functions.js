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

export const orderComponents = components => {
  const [datedComponent, undatedComponents] = partition(
    components,
    o => !!o.metadata.createdAt
  );
  return [...orderByDate(datedComponent), ...undatedComponents];
};

export const splitDefault = bundledObject => {
  const components = toComponents(bundledObject);
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

export const removeTextAt = (text = '', options = {}) => {
  const { start, end } = options;
  const startIndex = text.search(start);
  const endIndex = text.search(end);
  return `${text.substr(0, startIndex)}${text
    .substr(endIndex)
    .replace(end, '')}`;
};

export const removeRepLinkBreaks = text =>
  text.replace(/\n+(?=\n{2})/g, '');

export const prettifySource = text =>
  removeRepLinkBreaks(
    removeTextAt(text, { start: /\/\/.*hide-start/, end: /\/\/.*hide-end/ })
  );

export const getStatusByDate = createdAt => {
  const d = new Date(createdAt);
  const aMonth = 30 * 24 * 60 * 60 * 1000;
  if (Date.now() - d.getTime() <= aMonth) {
    return 'new';
  }
  return '';
};
