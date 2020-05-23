export type GrabIconStyleProps = {
  activeColor?: string;
};

export type GrabIconClassKey = keyof ReturnType<typeof grabIconStyles>;

const grabIconStyles = () => ({
  root: ({ activeColor }: GrabIconStyleProps) => ({
    cursor: 'grab',
    '&:active': {
      cursor: 'grabbing',
      color: activeColor,
    },
  }),
});
export default grabIconStyles;
