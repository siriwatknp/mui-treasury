import partition from 'lodash/partition';

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
    o => !!o?.metadata?.createdAt
  );
  return [...orderByDate(datedComponent), ...undatedComponents];
};

export const orderIndex = components => {
  const list = Object.entries(components).map(([, Component]) => Component)
  return orderComponents(list)
}

export const getStatusByDate = createdAt => {
  const d = new Date(createdAt);
  const aMonth = 30 * 24 * 60 * 60 * 1000;
  if (Date.now() - d.getTime() <= aMonth) {
    return 'new';
  }
  return '';
};

const getMdColSpan = lgSpan => {
  if (lgSpan >= 8) return lgSpan
  if (lgSpan >= 6) return lgSpan + 1
  return lgSpan + 2
}

const getSmColSpan = lgSpan => {
  if (lgSpan >= 8) return 12
  if (lgSpan >= 6) return lgSpan + 2
  return 6
}

export const getResponsiveColSpan = (colSpan) => {
  if (typeof colSpan === 'object') return colSpan
  return { sm: getSmColSpan(colSpan), md: getMdColSpan(colSpan), lg: colSpan }
}
