import { DEFAULT_VAR, treeChartStyles } from '../tree';

const defaultAvatarSize = 40;
const defaultPersonHeight = 64;

const getStretchLength = ({
  personHeight = defaultPersonHeight,
  length = DEFAULT_VAR.length,
}) => personHeight + 3 * length;

export default ({ palette }) => ({
  ...treeChartStyles(),
  spouse: {
    display: 'inline-flex',
    position: 'relative',
    marginLeft: ({ gutter = DEFAULT_VAR.gutter }) => gutter * 2,
    '&:before': {
      content: '""',
      position: 'absolute',
      width: ({ gutter = DEFAULT_VAR.gutter }) => gutter * 2,
      outline: DEFAULT_VAR.outline,
      top: '50%',
      left: ({ gutter = DEFAULT_VAR.gutter }) => -gutter * 2,
    },
  },
  spouseWithChildren: {
    '&:after': {
      content: '""',
      position: 'absolute',
      height: '50%',
      outline: ({ outline = DEFAULT_VAR.outline }) => outline,
      top: '50%',
      left: ({ gutter = DEFAULT_VAR.gutter }) => -gutter,
    },
  },
  hasOneSpouse: {
    '&:first-child:before': {
      left: `calc(50% - ${defaultAvatarSize / 2}px - ${DEFAULT_VAR.gutter}px)`,
    },
    '&:last-child:not(:first-child):before': {
      right: `calc(50% + ${defaultAvatarSize / 2}px + ${DEFAULT_VAR.gutter}px)`,
    },
  },
  stretch: {
    marginTop: getStretchLength,
    '&:before': {
      height: getStretchLength,
      top: props => -getStretchLength(props),
    },
  },
  personName: {
    fontSize: 12,
    marginTop: 4,
    marginBottom: 8,
    display: 'inline-block',
    color: palette.primary.main,
  },
  personAvatar: {
    boxShadow: '0 2px 8px 0 rgba(0,0,0,0.1)',
  },
});
