import React from 'react';
import cx from 'clsx';
import Item, { ItemProps } from './Item';
import { Provider } from './core';

export type ColumnProps = ItemProps & {
  gutter: number | string | 'inherit';
  children: React.ReactElement | React.ReactElement[];
};

const Column = ({ className, children, gutter, ...props }: ColumnProps) => {
  return (
    <Item
      className={cx('FlexColumn', className)}
      display={'flex'}
      flexDirection={'column'}
      p={gutter !== 'inherit' ? gutter : ''}
      {...props}
    >
      <Provider flexDirection={'column'} gutter={gutter}>
        {children}
      </Provider>
    </Item>
  );
};

export default Column;
