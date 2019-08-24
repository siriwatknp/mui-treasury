const getSpacing = (fn, space) =>
  Array.isArray(space) ? fn(...space) : fn(space);

const createTargetStyle = (
  {
    selector,
    target,
    cssProp,
    space,
    firstExcluded = false,
    lastExcluded = false,
  },
  spacing
) => ({
  [`& ${selector} ${target}`]: {
    [cssProp]: getSpacing(spacing, space),
  },
  ...(firstExcluded && {
    [`& ${selector} ${target}:first-child`]: {
      [cssProp]: 'unset',
    },
  }),
  ...(lastExcluded && {
    [`& ${selector} ${target}:last-child`]: {
      [cssProp]: 'unset',
    },
  }),
});

const reduceTargets = ({ targets, ...props }, spacing) =>
  targets
    ? targets.reduce(
        (result, curr) => ({
          ...result,
          ...createTargetStyle({ ...props, target: curr }, spacing),
        }),
        {}
      )
    : {};

export default ({ spacing }) => ({
  parent: props => {
    const {
      target = '*',
      selector = '>',
      space = 1,
      cssProp = 'marginLeft',
    } = props;
    const parsedProps = { ...props, selector, target, cssProp, space };
    return {
      ...createTargetStyle(parsedProps, spacing),
      ...reduceTargets(parsedProps, spacing),
    };
  },
  child: props => {
    const {
      target = '*',
      selector = '~',
      space = 1,
      cssProp = 'marginLeft',
    } = props;
    const parsedProps = { ...props, selector, target, cssProp, space };
    return {
      ...createTargetStyle(parsedProps, spacing),
      ...reduceTargets(parsedProps, spacing),
    };
  },
});
