import { createStyles, Theme } from '@material-ui/core/styles';
export type ZoomSocialLinkStyleProps = {};

export type ZoomSocialLinkClassKey = keyof ReturnType<
  typeof zoomSocialLinkStyles
>;

const zoomSocialLinkStyles = ({ palette }: Theme) =>
  createStyles({
    anchor: {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: 24,
      padding: 12,
      color:
        palette.mode === 'dark' ? palette.text.hint : palette.primary.light,
      '&:not(:first-of-type)': {
        marginLeft: '0.5rem',
      },
      '&:hover, &:focus': {
        transform: 'scale(1.3)',
        color: palette.mode === 'dark' ? '#fff' : palette.primary.main,
      },
    },
    icon: {},
  });

export default zoomSocialLinkStyles;
