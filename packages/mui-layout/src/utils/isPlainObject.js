const isPlainObject = obj =>
  Object.prototype.toString.call(obj) === '[object Object]';

export default isPlainObject;
