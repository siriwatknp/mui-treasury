import createSet from '../createSet';

export default () => {
  const config = {
    anchor: 'left',
    variant: 'temporary',
    width: 256,
    collapsible: false,
    collapsedWidth: 64,
    hidden: false,
    inset: false,
    insetProps: {
      position: 'fixed',
      top: 0,
    },
  };

  const secondaryConfig = {
    anchor: 'right',
    variant: 'persistent',
    width: 244,
    collapsible: true,
    collapsedWidth: 64,
    hidden: false,
    inset: false,
    insetProps: {
      position: 'sticky',
      top: 0,
    },
  };

  return {
    get: () => config,
    initSecondary() {
      Object.assign(config, secondaryConfig);
      return this;
    },
    setAnchor: createSet(config, 'anchor'),
    setWidth: createSet(config, 'width'),
    setVariant: createSet(config, 'variant'),
    setCollapsible: createSet(config, 'collapsible'),
    setCollapsedWidth: createSet(config, 'collapsedWidth'),
    setHidden: createSet(config, 'hidden'),
    setInset: createSet(config, 'inset'),
    setInsetProps: createSet(config, 'insetProps'),
    set(value) {
      Object.assign(config, value);
      return this;
    },
  };
};
