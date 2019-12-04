export default (str = '') =>
  `${str.substr(0, 1).toUpperCase()}${str.substr(1).toLowerCase()}`;
