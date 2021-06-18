import { Breakpoint } from '@material-ui/system';
import { createMultiObjBuilder } from './MultiObjects';
import { SingleObjData } from '../../shared/State';

type Props = { name?: string };
type Config = { count: number } & Props;
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
      configMapById: {
        fake: {
          xs: {
            count: 3,
          },
        },
      },
    });
  });

  it('"create" with props', () => {
    const FakeBuilder = createMultiObjBuilder<typeof FakeRegistry, Config>({
      Registry: FakeRegistry,
    });
    const builder = FakeBuilder();
    builder
      .create('fake', { name: 'siriwatknp' })
      .updateConfig('md', { count: 1 });

    const data = builder.getData();
    expect(data.ids).toEqual(['fake']);
    expect(data.configMapById).toStrictEqual({
      fake: {
        md: {
          count: 1,
          name: 'siriwatknp',
        },
      },
    });
    expect(data.propsById).toStrictEqual({
      fake: { name: 'siriwatknp' },
    });
  });

  it('can "update" configMapById', () => {
    const FakeBuilder = createMultiObjBuilder<typeof FakeRegistry, Config>({
      Registry: FakeRegistry,
    });
    const builder = FakeBuilder();
    builder
      .create('fake', {})
      .updateConfig('xs', { count: 3 })
      .updateConfig('md', { count: 10 });

    expect(builder.getData()).toMatchObject({
      configMapById: {
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
      configMapById: {
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
        fake: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
    });
  });
});
