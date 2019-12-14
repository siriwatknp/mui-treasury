import createSet from '../createSet';

export default () => {
  const config = {
    persistentBehavior: 'fit',
    secondaryPersistentBehavior: 'none',
  };

  const setInsetBehavior = createSet(config, 'insetBehavior');
  const setSecondaryInsetBehavior = createSet(config, 'secondaryInsetBehavior');

  return {
    get: () => config,
    initHeader() {
      config.persistentBehavior = 'fit';
      config.secondaryPersistentBehavior = 'fit';
      return this;
    },
    initContent() {
      config.persistentBehavior = 'fit';
      config.secondaryPersistentBehavior = 'none';
      return this;
    },
    initFooter() {
      config.persistentBehavior = 'fit';
      config.secondaryPersistentBehavior = 'none';
      config.insetBehavior = 'fit';
      config.secondaryInsetBehavior = 'none';
      return this;
    },
    setPersistentBehavior: createSet(config, 'persistentBehavior'),
    setSecondaryPersistentBehavior: createSet(
      config,
      'secondaryPersistentBehavior'
    ),
    setInsetBehavior,
    setSecondaryInsetBehavior,
    set(value) {
      Object.assign(config, value);
      return this;
    },
  };
};
