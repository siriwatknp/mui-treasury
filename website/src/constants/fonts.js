const fonts = [
  {
    name: 'Playfair Display',
    styles: ['700', '900'],
  },
  {
    name: 'Fira Sans',
    styles: ['300', '400', '400i', '700', '700i'],
  },
];

module.exports = {
  theme: fonts,
  config: fonts.map(aFont => ({
    ...aFont,
    family: aFont.name,
    variants: aFont.styles,
  })),
};
