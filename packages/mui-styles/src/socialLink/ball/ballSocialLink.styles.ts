import { createStyles, Theme } from '@material-ui/core/styles';
export type BallSocialLinkStyleProps = {};

export type BallSocialLinkClassKey = keyof ReturnType<
  typeof ballSocialLinkStyles
>;

const ballSocialLinkStyles = ({ palette }: Theme) =>
  createStyles({
    anchor: {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: 24,
      padding: 12,
      borderRadius: 40,
      backgroundColor:
        palette.mode === 'dark'
          ? palette.background.default
          : palette.action.selected,
      color: palette.text.secondary,
      '&:not(:first-of-type)': {
        marginLeft: '0.5rem',
      },
      '&:hover, &:focus': {
        backgroundColor:
          palette.mode === 'dark'
            ? palette.action.focus
            : palette.action.disabled,
        color: palette.mode === 'dark' ? '#fff' : palette.text.primary,
      },
    },
    icon: {},
  });

export default ballSocialLinkStyles;
