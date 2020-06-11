import React from 'react';
import cx from 'clsx';
import Item, { ItemProps } from './Item';
import { Provider, useGapLookup, Gap } from './core';

export type RowProps = ItemProps & {
  gap?: Gap;
  children: React.ReactNode;
};

const Row = ({ className, children, gap, ...props }: RowProps) => {
  const { calculatedGap, itemProps } = useGapLookup(gap);
  return (
    <Item
      className={cx('FlexRow', className)}
      display={'flex'}
      {...itemProps}
      {...props}
      gapDisabled
    >
      <Provider flexDirection={'row'} gap={calculatedGap}>
        {children}
      </Provider>
    </Item>
  );
};

export default Row;
