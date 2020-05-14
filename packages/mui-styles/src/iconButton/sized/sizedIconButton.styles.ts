const toCss = val => typeof val === 'number' ? `${val}px` : val;

export default () => ({
  root: ({ buttonSize = 48, fontSize = 24, color }) => ({
    color,
    fontSize,
    padding: `calc((${toCss(buttonSize)} - ${toCss(fontSize)}) / 2)`,
  }),
  label: ({ fontSize }) => ({
    '& > *': {
      fontSize,
    },
  }),
});
