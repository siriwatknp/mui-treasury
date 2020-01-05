const toValidCssValue = value =>
  typeof value === 'number' ? `${value}px` : value;

export default toValidCssValue;
