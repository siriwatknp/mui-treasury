import { createStyles, Theme } from '@material-ui/core/styles';
import Color from 'color';
export type RoundSocialLinkStyleProps = {}

export type RoundSocialLinkClassKey = keyof ReturnType<typeof roundSocialLinkStyles>

const roundSocialLinkStyles = ({ palette }: Theme) => {
  const extraLightPrimary = Color(palette.primary.main)
    .rotate(-12)
    .lighten(0.6)
    .fade(0.6)
    .toString();
  return createStyles({
    anchor: {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: 24,
      padding: 8,
      borderRadius: 8,
      border: '2px solid',
      borderColor: extraLightPrimary,
      color: palette.type === 'dark' ? palette.text.secondary : palette.primary.light,
      transition: '0.3s ease-out',
      '&:not(:first-of-type)': {
        marginLeft: '0.5rem',
      },
      '&:hover, &:focus': {
        boxShadow: `0 0 12px 0 ${palette.divider}`,
        borderColor: palette.text.secondary,
        color: palette.type === 'dark' ? '#fff' : palette.text.primary,
      },
      '&:active': {
        '& $icon': {
          transform: 'scale(0.8)',
        }
      }
    },
    icon: {
      transition: '0.2s cubic-bezier(.47,1.64,.41,.8), color 0s',
    },
  });
}

export default roundSocialLinkStyles
