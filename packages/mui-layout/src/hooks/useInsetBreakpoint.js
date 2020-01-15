import useScreenComparison from './useScreenComparison';

export default (ctx = {}) => {
  const { insetHiddenBreakpoint, insetHiddenDisabled, sidebar } = ctx;
  const values = useScreenComparison(insetHiddenBreakpoint);
  return {
    ...values,
    insetHiddenDisabled,
    displayedAboveBreakpoint:
      sidebar && sidebar.inset && values.isTargetAbove && !insetHiddenDisabled,
    displayedBelowBreakpoint:
      sidebar && sidebar.inset && values.isTargetDown && !insetHiddenDisabled,
  };
};
