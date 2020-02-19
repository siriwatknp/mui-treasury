import { DEFAULT_VAR, treeChartStyles } from '../tree';

const defaultAvatarSize = 48;
const defaultPersonHeight = 72;

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
      left: ({ avatarSize = defaultAvatarSize, gutter = DEFAULT_VAR.gutter }) =>
        `calc(50% - ${avatarSize / 2}px - ${gutter}px)`,
    },
    '&:last-child:not(:first-child):before': {
      right: ({
        avatarSize = defaultAvatarSize,
        gutter = DEFAULT_VAR.gutter,
      }) => `calc(50% + ${avatarSize / 2}px + ${gutter}px)`,
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
    color: palette.primary.main,
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    whiteSpace: 'pre-wrap',
    lineHeight: 1.2,
    margin: 0,
    width: 72,
    wordBreak: 'break-word',
  },
  personAvatar: {
    width: ({ avatarSize = defaultAvatarSize }) => avatarSize,
    height: ({ avatarSize = defaultAvatarSize }) => avatarSize,
    boxShadow: '0 2px 8px 0 rgba(0,0,0,0.1)',
  },
});
