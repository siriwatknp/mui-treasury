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
    initContainer() {
      config.persistentBehavior = 'fit';
      config.secondaryPersistentBehavior = 'none';
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
    setPrimaryInsetToFit() {
      config.insetBehavior = 'fit';
      return this;
    },
    setSecondaryInsetToFit() {
      config.secondaryInsetBehavior = 'fit';
      return this;
    },
    setAllInsetToFit() {
      this.setPrimaryInsetToFit();
      this.setSecondaryInsetToFit();
      return this;
    },
    setPrimaryInsetToNonFit() {
      config.insetBehavior = 'none';
      return this;
    },
    setSecondaryInsetToNonFit() {
      config.secondaryInsetBehavior = 'none';
      return this;
    },
    setAllInsetToNonFit() {
      this.setPrimaryInsetToNonFit();
      this.setSecondaryInsetToNonFit();
      return this;
    },
    set(value) {
      Object.assign(config, value);
      return this;
    },
  };
};
