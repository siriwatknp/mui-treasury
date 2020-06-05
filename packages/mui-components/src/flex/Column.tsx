import React from 'react';
import cx from 'clsx';
import Item, { ItemProps } from './Item';
import { Provider, useFlexCtx, Gutter } from './core';

export type ColumnProps = ItemProps & {
  gutter?: Gutter;
  children: React.ReactNode | React.ReactElement | React.ReactElement[];
};

const Column = ({ className, children, gutter, ...props }: ColumnProps) => {
  const inheritGutter = useFlexCtx() ? 'inherit' : gutter;
  return (
    <Item
      className={cx('FlexColumn', className)}
      display={'flex'}
      flexDirection={'column'}
      {...(inheritGutter !== 'inherit' && { p: inheritGutter })}
      {...props}
    >
      <Provider flexDirection={'column'} gutter={gutter || inheritGutter}>
        {children}
      </Provider>
    </Item>
  );
};

export default Column;
