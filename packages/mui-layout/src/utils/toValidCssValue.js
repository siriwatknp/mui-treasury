const toValidCssValue = value =>
  typeof value === 'number' && value !== 0 ? `${value}px` : value;

export default toValidCssValue;
