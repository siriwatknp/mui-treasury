import React from 'react';
import cx from 'clsx';
import Item, { ItemProps } from './Item';
import { Provider } from './core';

export type RowProps = ItemProps & {
  gutter: number | string | 'inherit';
  children: React.ReactElement | React.ReactElement[];
};

const Row = ({ className, children, gutter, ...props }: RowProps) => {
  return (
    <Item
      className={cx('FlexRow', className)}
      display={'flex'}
      p={gutter !== 'inherit' ? gutter : ''}
      {...props}
    >
      <Provider flexDirection={'row'} gutter={gutter}>
        {children}
      </Provider>
    </Item>
  );
};

export default Row;
