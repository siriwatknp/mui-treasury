import { getStyleAttrs, mergeStyleCreators } from './styling';

const styles = ({ breakpoints, palette }) => ({
  first: {
    [breakpoints.up('sm')]: {
      color: palette.primary.main,
    },
  },
  second: {},
  last: {},
});

describe('styles utils', () => {
  it('should return correct style traits', () => {
    expect(getStyleAttrs(styles)).toEqual(['first', 'second', 'last']);
  });

  it('should merge styles', () => {
    const createStyles1 = () => ({
      test1: '',
      test2: '',
    });
    const createStyles2 = {
      test3: '',
      test4: '',
    };
    const createStyles3 = () => ({
      test5: '',
      test6: '',
    });
    expect(
      mergeStyleCreators(createStyles1, createStyles2, createStyles3)(),
    ).toEqual({
      test1: '',
      test2: '',
      test3: '',
      test4: '',
      test5: '',
      test6: '',
    });
  });
});
