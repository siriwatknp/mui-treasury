const createWidth = gap => {
  return {
    gap,
    getStyle: defaultValue => {
      if (gap === undefined) return defaultValue;
      if (gap === 'auto') return { width: 'auto' };
      if (typeof gap === 'string') return { width: `calc(100% - (${gap}))` };
      if (gap === 0) return { width: '100%' };
      return { width: `calc(100% - ${gap}px)` };
    },
  };
};

export const reduceWidths = widths => {
  if (!widths || !widths.length) return createWidth();
  return widths.reduce((result, curr) =>
    createWidth(
      (() => {
        if (result.gap === 'auto' && curr.gap === 'auto') {
          return 'auto';
        }
        if (result.gap === 'auto' && curr.gap !== 'auto') {
          return curr.gap;
        }
        if (curr.gap === 'auto' && result.gap !== 'auto') {
          return result.gap;
        }
        if (typeof curr.gap === 'string' || typeof result.gap === 'string') {
          if (typeof curr.gap === 'number') {
            return `${result.gap} + ${curr.gap}px`;
          }
          if (typeof result.gap === 'number') {
            return `${result.gap}px + ${curr.gap}`;
          }
          return `${result.gap} + ${curr.gap}`;
        }
        return (result.gap || 0) + (curr.gap || 0);
      })()
    )
  );
};

export default createWidth;
