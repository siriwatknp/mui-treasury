import { iterateRpsById } from './iterateRpsById';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

type Dictionary<T> = {
  [key: string]: T;
};

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
    const result = {} as Dictionary<(Config & { breakpoint: Breakpoint })[]>;
    iterateRpsById<Config>(rpsById, (id, breakpoint, value) => {
      if(!result[id]) {
        result[id] = [];
      }
      result[id].push({
        ...value,
        breakpoint,
      });
    });
    expect(result).toEqual({
      id1: [
        {
          position: 'temporary',
          width: 'auto',
          collapsible: false,
          breakpoint: 'sm',
        },
        {
          position: 'relative',
          width: 256,
          collapsible: true,
          breakpoint: 'md',
        },
      ],
      id2: [
        {
          position: 'fixed',
          collapsible: false,
          width: 200,
          breakpoint: 'lg',
        },
      ],
    });
  });
});
