export type RowGutterStyleProps = {
  before?: string | number;
  after?: string | number;
  size?: string | number;
};

export type RowGutterClassKey = keyof ReturnType<typeof rowGutterStyles>

const rowGutterStyles = () => {
  return {
    parent: ({ before, after, size = '0.5rem' }: RowGutterStyleProps) => ({
      marginLeft: before,
      marginRight: after,
      '& > *:not(:first-child)': {
        marginLeft: size,
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
