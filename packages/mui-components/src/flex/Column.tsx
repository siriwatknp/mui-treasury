import React from 'react';
import cx from 'clsx';
import Item, { ItemProps } from './Item';
import { Provider, useGapLookup, Gap } from './core';

export type ColumnProps = ItemProps & {
  gap?: Gap;
  children: React.ReactNode | React.ReactElement | React.ReactElement[];
};

const Column = ({ className, children, gap, ...props }: ColumnProps) => {
  const { calculatedGap, itemProps } = useGapLookup(gap);
  return (
    <Item
      className={cx('FlexColumn', className)}
      display={'flex'}
      flexDirection={'column'}
      {...itemProps}
      {...props}
    >
      <Provider flexDirection={'column'} gap={calculatedGap}>
        {children}
      </Provider>
    </Item>
  );
};

export default Column;
