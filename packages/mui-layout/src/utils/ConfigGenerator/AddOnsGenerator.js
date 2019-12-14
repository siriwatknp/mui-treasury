import createSet from '../createSet';

export default () => {
  const config = {
    autoCollapseDisabled: false,
    collapsedBreakpoint: 'md',
    secondaryAutoCollapseDisabled: false,
    secondaryCollapseBreakpoint: 'md',
    heightAdjustmentDisabled: false,
    insetHiddenBreakpoint: 'sm',
    insetHiddenDisabled: false,
    secondaryInsetHiddenBreakpoint: 'md',
    secondaryInsetHiddenDisabled: false,
  };

  return {
    get: () => config,
    setAutoCollapsedDisabled: createSet(config, 'autoCollapseDisabled'),
    setCollapsedBreakpoint: createSet(config, 'collapsedBreakpoint'),
    setSecondaryAutoCollapseDisabled: createSet(
      config,
      'secondaryAutoCollapseDisabled'
    ),
    setSecondaryCollapseBreakpoint: createSet(
      config,
      'secondaryCollapseBreakpoint'
    ),
    setHeightAdjustmentDisabled: createSet(config, 'heightAdjustmentDisabled'),
    setInsetHiddenBreakpoint: createSet(config, 'insetHiddenBreakpoint'),
    setInsetHiddenDisabled: createSet(config, 'insetHiddenDisabled'),
    setSecondaryInsetHiddenBreakpoint: createSet(
      config,
      'secondaryInsetHiddenBreakpoint'
    ),
    setSecondaryInsetHiddenDisabled: createSet(
      config,
      'secondaryInsetHiddenDisabled'
    ),
  };
};
