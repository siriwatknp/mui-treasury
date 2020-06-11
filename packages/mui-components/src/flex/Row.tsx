import React from 'react';
import cx from 'clsx';
import Item, { ItemProps } from './Item';
import { Provider, useGapLookup, Gap } from './core';

export type RowProps = ItemProps & {
  gap?: Gap;
  wrap?: boolean;
  children: React.ReactNode;
};

const Row = ({ className, children, gap, wrap, ...props }: RowProps) => {
  const { calculatedGap, itemProps } = useGapLookup(gap);
  return (
    <Item
      className={cx('FlexRow', className)}
      display={'flex'}
      {...wrap && { flexWrap: 'wrap' }}
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
