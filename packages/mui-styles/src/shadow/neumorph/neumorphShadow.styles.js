import Color from 'color';

export default () => ({
  root: ({
    bgColor = '#efefef',
    darken = 0.2,
    blurLength = 16,
    spread = 10,
  }) => {
    const lightColor = Color(bgColor)
      .rotate(-6)
      .lighten(0.05)
      .hex();
    const lightBlurColor = Color(lightColor)
      .alpha(0.3)
      .hex();
    const contrastColor = Color(bgColor)
      .rotate(4)
      .desaturate(0.1)
      .darken(darken)
      .hex();
    return {
      boxShadow: `-${spread}px -${spread}px ${blurLength}px 0 ${lightColor}, ${spread}px ${spread}px ${blurLength}px 0 ${contrastColor}, inset 2px 2px 4px 0 ${lightBlurColor}, inset -2px -2px 4px 0 ${contrastColor}`,
      backgroundColor: bgColor,
    };
  },
});
