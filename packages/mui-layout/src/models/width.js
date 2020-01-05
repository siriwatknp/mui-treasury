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

const InvalidUnit = () => ({
  combine: other => other || 0,
});
const StringUnit = val => ({
  combine: other => {
    if (!other) return val;
    if (other === 'auto') return val;
    if (typeof other === 'number') return `${val} + ${other}px`;
    return `${val} + ${other}`;
  },
});
const NumberUnit = val => ({
  combine: other => {
    if (!other) return val;
    if (other === 'auto') return val;
    if (typeof other === 'string') return `${val}px + ${other}`;
    return val + other;
  },
});
const AutoUnit = () => ({
  combine: other => other,
});
const UnitFactory = val => {
  if (val === 'auto') return AutoUnit();
  if (typeof val === 'string') return StringUnit(val);
  if (typeof val === 'number') return NumberUnit(val);
  return InvalidUnit();
};

export const reduceWidths = widths => {
  if (!widths || !widths.length) return createWidth();
  return widths.reduce((result, curr) =>
    createWidth(UnitFactory(result.gap).combine(curr.gap))
  );
};

export default createWidth;
