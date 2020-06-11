import each from 'jest-each';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import createSpacing from '@material-ui/core/styles/createSpacing';
import { gapToCss, getLowerMediaQuery, getThemeCssValue } from './utils';

describe('flex utils', () => {
  describe('getThemeCssValue', () => {
    expect(getThemeCssValue(2)).toEqual('calc(16px / 2)')
    expect(getThemeCssValue('1rem')).toEqual('calc(1rem / 2)')
  })

  describe('gutterToCss', () => {
    const theme = {
      breakpoints: createBreakpoints({}),
      spacing: createSpacing(8),
    };
    each([
      ['string', '12px', 'calc(12px / 2)'],
      ['number', 2, 'calc(16px / 2)'],
      [
        'object',
        { sm: 2, lg: '24px' },
        {
          sm: 'calc(16px / 2)',
          lg: 'calc(24px / 2)',
        },
      ],
      ['undefined', undefined, undefined],
      ['null', null, undefined],
    ]).it(
      'return correct result given gutter is type %s',
      (_, gutter, expected) => {
        expect(gapToCss(theme, getThemeCssValue)(gutter)).toEqual(expected);
      }
    );

    it('accept number for breakpoint.down', () => {
      const breakpoints = createBreakpoints({});
      expect(breakpoints.down(1000)).toEqual('@media (max-width:999.95px)');
    });
  });

  describe('getUpperMediaQuery', function() {
    each([
      ['xs', '@media (max-width:NaNpx)'],
      ['sm', '@media (max-width:599.95px)'],
      ['md', '@media (max-width:959.95px)'],
      ['lg', '@media (max-width:1279.95px)'],
      ['xl', '@media (max-width:1919.95px)'],
    ]).it('%s return expected media query', (value, expected) => {
      const breakpoints = createBreakpoints({});
      expect(getLowerMediaQuery({ breakpoints }, value)).toEqual(expected);
    });
  });
});
