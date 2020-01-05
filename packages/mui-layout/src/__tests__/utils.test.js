import combineMargin from '../utils/combineMargin';
import toValidCssValue from '../utils/toValidCssValue';

test('combineMargin', () => {
  expect(combineMargin(undefined, undefined)).toBeUndefined();
  expect(combineMargin({ marginLeft: 256 })).toEqual({
    marginLeft: 256,
  });
  expect(combineMargin({ marginLeft: '30%' })).toEqual({
    marginLeft: '30%',
  });
  expect(combineMargin({ marginLeft: '30%' }, { marginRight: 0 })).toEqual({
    marginLeft: '30%',
    marginRight: 0,
  });
  expect(combineMargin({ marginLeft: '30%' }, { marginRight: 256 })).toEqual({
    marginLeft: '30%',
    marginRight: 256,
  });
  expect(combineMargin({ marginLeft: 20 }, { marginLeft: -12 })).toEqual({
    marginLeft: 'calc(20px + -12px)',
  });
  expect(combineMargin({ marginLeft: '-30%' }, { marginLeft: 100 })).toEqual({
    marginLeft: 'calc(-30% + 100px)',
  });
  expect(
    combineMargin(
      { marginLeft: '-20rem', marginRight: 256 },
      { marginLeft: '20%', marginRight: '-256px' }
    )
  ).toEqual({
    marginLeft: 'calc(-20rem + 20%)',
    marginRight: 'calc(256px + -256px)',
  });
});

test('toValidCssValue', () => {
  expect(toValidCssValue(undefined)).toBe(undefined);
  expect(toValidCssValue(0)).toBe(0);
  expect(toValidCssValue(200)).toBe('200px');
  expect(toValidCssValue('30%')).toBe('30%');
});
