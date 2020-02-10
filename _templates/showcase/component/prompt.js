// function upperFirst(string = '') {
//   return string.substr(0, 1).toUpperCase() + string.substr(1);
// }

module.exports = [
  {
    type: 'input',
    name: 'category',
    required: true,
    message: 'category(camelCase) eg. button',
  },
  {
    type: 'input',
    name: 'name',
    required: true,
    message: 'variant(camelCase) of the component eg. basic',
  },
  {
    type: 'input',
    name: 'by',
    required: true,
    message: 'your name',
  }
];