import useScreenComparison from './useScreenComparison';

export default (ctx = {}) => {
  const { insetHiddenBreakpoint, insetHiddenDisabled, sidebar } = ctx;
  const values = useScreenComparison(insetHiddenBreakpoint);
  return {
    ...values,
    insetHiddenDisabled,
    displayedAboveBreakpoint:
      sidebar.inset && values.isTargetAbove && !insetHiddenDisabled,
    displayedBelowBreakpoint:
      sidebar.inset && values.isTargetDown && !insetHiddenDisabled,
  };
};
