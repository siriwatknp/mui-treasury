import { mapRpsById } from './mapRpsById';

describe('Utils', () => {
  it('mapRpsById give result as expected', () => {
    type Config = {
      position: string;
      width: string | number;
      collapsible?: boolean;
    };
    const rpsById = {
      id1: {
        sm: {
          position: 'temporary',
          width: 'auto',
          collapsible: false,
        },
        md: {
          position: 'relative',
          width: 256,
          collapsible: true,
        },
      },
      id2: {
        lg: {
          position: 'fixed',
          collapsible: false,
          width: 200,
        },
      },
    };
    const propsById = {
      id1: {
        anchor: 'left',
      },
      id2: {
        anchor: 'right',
      },
    };
    const result = mapRpsById<
      Config,
      Config & { anchor: 'left' | 'right' }
    >(rpsById, key => propsById[key]);
    expect(result).toEqual({
      id1: {
        sm: {
          position: 'temporary',
          width: 'auto',
          collapsible: false,
          anchor: 'left',
        },
        md: {
          position: 'relative',
          width: 256,
          collapsible: true,
          anchor: 'left',
        },
      },
      id2: {
        lg: {
          position: 'fixed',
          collapsible: false,
          width: 200,
          anchor: 'right',
        },
      },
    })
  });
});
