import { toValidCssValue } from './index';
import isNotNilOrEmpty from './isNotNilOrEmpty';

export const subtractCalc = (...args: (string | number)[]): string =>
  `calc(${args
    .filter(isNotNilOrEmpty)
    .map(toValidCssValue)
    .join(' - ')})`;

export const plusCalc = (...args: (string | number)[]): string =>
  `calc(${args
    .filter(isNotNilOrEmpty)
    .map(toValidCssValue)
    .join(' + ')})`;
