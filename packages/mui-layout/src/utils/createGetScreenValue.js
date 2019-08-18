import isPlainObject from './isPlainObject';

const createGetScreenValue = (keys, currentScreen) => (value, defaultValue) => {
  if (value !== null && value !== undefined) {
    if (!isPlainObject(value)) {
      return value;
    }
    let index = keys.indexOf(currentScreen);
    while (index >= 0) {
      if (value[keys[index]] !== undefined) {
        return value[keys[index]];
      }
      index -= 1;
    }
  }
  if (!defaultValue) return value;
  return createGetScreenValue(keys, currentScreen)(defaultValue);
};

export default createGetScreenValue;
