import { createMultiObjData } from './State';

describe('State', () => {
  it('createMultiObjData with initial', () => {
    const multiObj = createMultiObjData<
      { name: string },
      { gender: 'male' | 'female' }
    >({
      test: {
        sm: {
          name: 'siriwat',
        },
        lg: {
          name: 'hello',
        },
      },
    });

    expect(multiObj).toStrictEqual({
      dataById: {
        test: {
          hidden: [],
          id: 'test',
          props: {},
          rpsConfig: {
            lg: {
              name: 'hello',
            },
            sm: {
              name: 'siriwat',
            },
          },
        },
      },
      ids: ['test'],
    });
  });
});
