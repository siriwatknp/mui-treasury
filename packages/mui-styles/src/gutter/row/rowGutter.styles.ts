export type RowGutterStyleProps = {
  before?: string | number;
  after?: string | number;
  size?: string | number;
};

export type RowGutterClassKey = keyof ReturnType<typeof rowGutterStyles>

const rowGutterStyles = () => {
  return {
    parent: ({ before, after, size = '0.5rem' }: RowGutterStyleProps) => ({
      '& > *:not(:first-child)': {
        marginLeft: size,
      },
      '& > *:first-child': {
        marginLeft: before,
      },
      '& > *:last-child': {
        marginRight: after,
      },
    }),
    adjacent: ({ before, after, size = '0.5rem' }: RowGutterStyleProps) => ({
      marginLeft: before,
      marginRight: after,
      '& + *': {
        marginLeft: size,
      },
    }),
  };
};

export default rowGutterStyles
