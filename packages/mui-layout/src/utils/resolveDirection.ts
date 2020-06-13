import { Direction } from '@material-ui/core/styles/createMuiTheme';
import { Dictionary } from '../types';

export const switchDirection = (word: string) => {
  if (typeof word !== 'string') return word;
  if (word.includes('Left')) return word.replace('Left', 'Right');
  if (word.includes('left')) return word.replace('left', 'right');
  if (word.includes('Right')) return word.replace('Right', 'Left');
  if (word.includes('right')) return word.replace('right', 'left');
  return word
};

export default (direction: Direction, style: Dictionary<any>) => {
  if (direction !== 'rtl') return style;
  return Object.keys(style).reduce(
    (result, key) => ({
      ...result,
      [switchDirection(key)]: style[key],
    }),
    {}
  );
};
