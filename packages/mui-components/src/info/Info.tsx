import React from 'react';
import cx from 'clsx';
import Item, { ItemProps } from '../flex/Item';

type InfoStyles = Partial<
  Record<'root' | 'title' | 'subtitle' | 'caption', string>
>;

const StyleContext = React.createContext<InfoStyles>({});

const StyleProvider = StyleContext.Provider;

export const useStyleCtx = () => React.useContext(StyleContext);

export type InfoProps = {
  useStyles?: () => InfoStyles;
} & ItemProps;

const Info = ({
  useStyles = () => ({}),
  className,
  children,
  ...props
}: InfoProps) => {
  const styles = useStyles();
  return (
    <Item className={cx('Info', styles.root, className)} {...props}>
      <StyleProvider value={styles}>{children}</StyleProvider>
    </Item>
  );
};

export default Info;
