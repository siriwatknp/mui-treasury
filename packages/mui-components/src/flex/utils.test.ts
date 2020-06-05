import each from 'jest-each';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import createSpacing from '@material-ui/core/styles/createSpacing';
import { gutterToCss, getLowerMediaQuery } from './utils';

describe('flex utils', () => {
  describe('gutterToCss', () => {
    const theme = {
      breakpoints: createBreakpoints({}),
      spacing: createSpacing(8),
    };
    const callback = val => ({ paddingLeft: val });
    each([
      ['string', '12px', { paddingLeft: '12px' }],
      ['number', 2, { paddingLeft: 16 }],
      [
        'object',
        { sm: 2, lg: '24px' },
        { '@media (min-width:600px)': 16, '@media (min-width:1280px)': '24px' },
      ],
      ['undefined', undefined, undefined],
      ['null', null, undefined],
    ]).it(
      'return correct result given gutter is type %s',
      (_, gutter, expected) => {
        expect(gutterToCss(theme)(gutter, callback)).toEqual(expected);
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
    ]).it(
      '%s return expected media query',
      (value, expected) => {
        const breakpoints = createBreakpoints({});
        expect(getLowerMediaQuery({ breakpoints }, value)).toEqual(expected);
      }
    );
  });
});
