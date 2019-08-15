import lodashPick from 'lodash/pick';

export const getRepeatedItems = items => {
  if (!items) return items;
  const list = [];
  items.forEach((item, index) => {
    const filteredSelf = [...items];
    filteredSelf.splice(index, 1);
    if (filteredSelf.indexOf(item) !== -1 && list.indexOf(item) === -1) {
      // is repeated
      list.push(item);
    }
  });
  return list;
};

export const pick = (object, ...args) =>
  object ? lodashPick(object, ...args) : object;
