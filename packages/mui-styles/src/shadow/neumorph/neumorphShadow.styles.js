import Color from 'color';

export default () => ({
  root: ({ bgColor }) => {
    const lightColor = Color(bgColor)
      .rotate(-10)
      .lighten(0.1)
      .hex();
    const lightBlurColor = Color(lightColor)
      .alpha(0.3)
      .hex();
    const contrastColor = Color(bgColor)
      .rotate(4)
      .desaturate(0.1)
      .darken(0.3)
      .hex();
    return {
      boxShadow: `-10px -10px 24px 0 ${lightColor}, 10px 10px 24px 0 ${contrastColor}, inset 2px 2px 4px 0 ${lightBlurColor}, inset -2px -2px 4px 0 rgba(0,0,0,0.1)`,
      backgroundColor: bgColor,
    };
  },
});
