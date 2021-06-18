import { ClassNameMap } from '@material-ui/styles';
import createStyles from '@material-ui/styles/createStyles';
import makeStyles from '@material-ui/styles/makeStyles';
import { Theme } from '@material-ui/core/styles';

type StyleProps = { gutter?: string | number };
type ClassKey = keyof ReturnType<typeof defaultStyles>;

export const useDefaultStyles: (
  props?: StyleProps
) => ClassNameMap<ClassKey> = makeStyles(defaultStyles, {
  name: 'SocialLink',
});

export default function defaultStyles({ palette, spacing }: Theme) {
  return createStyles({
    anchor: {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: 24,
      padding: 12,
      color: palette.text.secondary,
      '&:not(:first-of-type)': {
        marginLeft: '0.5rem',
      },
      '&:hover, &:focus': {
        color: palette.text.primary,
      },
    },
    icon: {},
  });
}
