import React from 'react';
import cx from 'clsx';
import Item, { ItemProps } from './Item';
import { Provider, useGutterLookup, Gutter } from './core';

export type ColumnProps = ItemProps & {
  gutter?: Gutter;
  children: React.ReactNode | React.ReactElement | React.ReactElement[];
};

const Column = ({ className, children, gutter, ...props }: ColumnProps) => {
  const { calculatedGutter, itemProps } = useGutterLookup(gutter);
  return (
    <Item
      className={cx('FlexColumn', className)}
      display={'flex'}
      flexDirection={'column'}
      {...itemProps}
      {...props}
    >
      <Provider flexDirection={'column'} gutter={calculatedGutter}>
        {children}
      </Provider>
    </Item>
  );
};

export default Column;
