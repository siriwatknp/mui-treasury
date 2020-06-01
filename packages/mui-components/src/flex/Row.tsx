import React from 'react';
import cx from 'clsx';
import Item, { ItemProps } from './Item';
import { Provider, useFlexCtx, Gutter } from './core';

export type RowProps = ItemProps & {
  gutter?: Gutter;
  children: React.ReactNode | React.ReactElement | React.ReactElement[];
};

const Row = ({ className, children, gutter, ...props }: RowProps) => {
  const inheritGutter = useFlexCtx() ? gutter || 'inherit' : gutter;
  return (
    <Item
      className={cx('FlexRow', className)}
      display={'flex'}
      {...inheritGutter !== 'inherit' && { p: inheritGutter }}
      {...props}
    >
      <Provider flexDirection={'row'} gutter={inheritGutter}>
        {children}
      </Provider>
    </Item>
  );
};

export default Row;
