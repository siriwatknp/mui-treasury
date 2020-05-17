export type RowGutterStyleProps = {
  before: string | number;
  after: string | number;
  size: string | number;
};

export default () => {
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
    child: ({ size = '0.5rem' }: RowGutterStyleProps) => ({
      '& ~ *': {
        marginLeft: size,
      },
    })
  };
};
