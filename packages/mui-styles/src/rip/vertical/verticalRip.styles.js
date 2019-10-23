import { getThemeColor } from '@mui-treasury/utils';

const initialSize = 20;
const createRip = (size, bgcolor) => ({
  width: size / 2,
  position: 'relative',
  margin: `${size / 2}px 0`,
  backgroundColor: bgcolor,
});
const createPseudoElm = size => ({
  boxSizing: 'content-box',
  display: 'block',
  content: '" "',
  width: size,
  height: size,
  borderRadius: '50%',
  position: 'absolute',
  zIndex: 1,
  borderWidth: size / 4,
  borderStyle: 'solid',
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent',
});

export default ({ palette }) => {
  return {
    left: ({ size = initialSize, leftColor = '#fff' }) => ({
      ...createRip(size, getThemeColor(palette, leftColor)),
      '&:before, &:after': {
        left: size / 2,
        ...createPseudoElm(size),
      },
      '&:before': {
        top: -size / 2,
        transform: 'translate(-50%, -50%) rotate(45deg)',
        borderBottomColor: getThemeColor(palette, leftColor),
        borderTopColor: 'transparent',
      },
      '&:after': {
        bottom: -size / 2,
        transform: 'translate(-50%, 50%) rotate(-45deg)',
        borderTopColor: getThemeColor(palette, leftColor),
        borderBottomColor: 'transparent',
      },
      '& > $tear': {
        right: 0,
        transform: 'translateX(50%)',
      },
    }),
    right: ({ size = initialSize, rightColor = '#fff' }) => ({
      ...createRip(size, getThemeColor(palette, rightColor)),
      '&:before, &:after': {
        ...createPseudoElm(size),
        left: 0,
      },
      '&:before': {
        top: -size / 2,
        transform: 'translate(-50%, -50%) rotate(-45deg)',
        borderBottomColor: getThemeColor(palette, rightColor),
        borderTopColor: 'transparent',
      },
      '&:after': {
        bottom: -size / 2,
        transform: 'translate(-50%, 50%) rotate(45deg)',
        borderTopColor: getThemeColor(palette, rightColor),
        borderBottomColor: 'transparent',
      },
      '& > $tear': {
        left: 0,
        transform: 'translateX(-50%)',
      },
    }),
    tear: ({ size = initialSize, tearColor = '#000' }) => ({
      position: 'absolute',
      borderRight: `${size / 6}px dotted ${getThemeColor(palette, tearColor)}`,
      top: 0,
      height: '100%',
    }),
  };
};
