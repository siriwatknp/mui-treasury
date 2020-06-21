import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { createMultiObjBuilder } from './MultiObjects';
import { SingleObjData } from '../../shared/State';

type Config = { count: number };
interface IFakeRegistry {
  updateConfig: (breakpoint: Breakpoint, config: Config) => IFakeRegistry;
}
const FakeRegistry = (state: SingleObjData<Config>): IFakeRegistry => {
  return {
    updateConfig(breakpoint, config) {
      state.rpsConfig[breakpoint] = config;
      return this;
    },
  };
};

describe('createMultiObjBuilder', () => {
  it('has "create" method that save correct state', () => {
    const FakeBuilder = createMultiObjBuilder<typeof FakeRegistry, Config>({
      Registry: FakeRegistry,
    });
    const builder = FakeBuilder();
    builder.create('fake', {}).updateConfig('xs', { count: 3 });
    expect(builder.getData()).toMatchObject({
      ids: ['fake'],
      rpsConfigById: {
        fake: {
          xs: {
            count: 3,
          },
        },
      },
    });
  });

  it('can "update" rpsConfigById', () => {
    const FakeBuilder = createMultiObjBuilder<typeof FakeRegistry, Config>({
      Registry: FakeRegistry,
    });
    const builder = FakeBuilder();
    builder
      .create('fake', {})
      .updateConfig('xs', { count: 3 })
      .updateConfig('md', { count: 10 });

    expect(builder.getData()).toMatchObject({
      rpsConfigById: {
        fake: {
          md: {
            count: 10,
          },
        },
      },
    });

    builder.update('fake', c => {
      c.md.count = 20;
    });

    expect(builder.getData()).toMatchObject({
      rpsConfigById: {
        fake: {
          md: {
            count: 20,
          },
        },
      },
    });
  });

  it('can "hide" an object', () => {
    const FakeBuilder = createMultiObjBuilder<typeof FakeRegistry, Config>({
      Registry: FakeRegistry,
    });
    const builder = FakeBuilder();
    builder.create('fake', {});

    builder.hide('fake', true);

    expect(builder.getData()).toMatchObject({
      ids: ['fake'],
      hiddenById: {
        fake: ['xs', 'sm', 'md', 'lg', 'xl']
      },
    });
  });
});
