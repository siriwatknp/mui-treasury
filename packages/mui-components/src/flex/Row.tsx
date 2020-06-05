import React from 'react';
import cx from 'clsx';
import Item, { ItemProps } from './Item';
import { Provider, useGutterLookup, Gutter } from './core';

export type RowProps = ItemProps & {
  gutter?: Gutter;
  children: React.ReactNode | React.ReactElement | React.ReactElement[];
};

const Row = ({ className, children, gutter, ...props }: RowProps) => {
  const { calculatedGutter, itemProps } = useGutterLookup(gutter);
  return (
    <Item
      className={cx('FlexRow', className)}
      display={'flex'}
      {...itemProps}
      {...props}
    >
      <Provider flexDirection={'row'} gutter={calculatedGutter}>
        {children}
      </Provider>
    </Item>
  );
};

export default Row;
