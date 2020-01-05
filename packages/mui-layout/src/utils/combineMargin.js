import isNil from 'lodash/isNil';

const toValidCssValue = value =>
  typeof value === 'number' ? `${value}px` : value;

const getCssValue = (v1, v2) => {
  if (isNil(v1)) return v2;
  if (isNil(v2)) return v1;
  return `calc(${toValidCssValue(v1)} + ${toValidCssValue(v2)})`;
};

export default (m1, m2) => {
  if (!m1) return m2;
  if (!m2) return m1;
  const marginLeft = getCssValue(m1.marginLeft, m2.marginLeft);
  const marginRight = getCssValue(m1.marginRight, m2.marginRight);
  return {
    ...(!isNil(marginLeft) && { marginLeft }),
    ...(!isNil(marginRight) && { marginRight }),
  };
};
