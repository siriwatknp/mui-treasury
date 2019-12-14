import createSet from '../createSet';
import BehaviorGenerator from './BehaviorGenerator';

export default () => {
  const behavior = BehaviorGenerator().initHeader();
  const config = {
    position: 'fixed',
    offsetHeight: 64,
    clipped: true,
    secondaryClipped: false,
  };

  return {
    ...behavior,
    get: () => ({
      ...config,
      ...behavior.get(),
    }),
    setPosition: createSet(config, 'position'),
    setOffsetHeight: createSet(config, 'offsetHeight'),
    setClipped: createSet(config, 'clipped'),
    setSecondaryClipped: createSet(config, 'secondaryClipped'),
    unclipPrimary() {
      this.setClipped(false);
      return this;
    },
    unclipSecondary() {
      this.setSecondaryClipped(false);
      return this;
    },
    set(value) {
      Object.assign(config, value);
      return this;
    },
  };
};
