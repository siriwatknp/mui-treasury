import React from 'react';
import cx from 'clsx';
import Box, { BoxProps } from '@material-ui/core/Box';
import { Position, useFlexStyles, useGapItem } from './core';

export type ItemProps = {
  position?: Position;
  grow?: boolean | number;
  shrink?: number;
  gapDisabled?: boolean;
  cssPosition?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
} & BoxProps;

const Item = ({
  className,
  position,
  cssPosition,
  grow,
  shrink,
  gapDisabled,
  ...props
}: ItemProps) => {
  const flexStyles = useFlexStyles(position);
  const itemProps = useGapItem();
  return (
    <Box
      className={cx('FlexItem', className)}
      {...flexStyles}
      {...!gapDisabled && itemProps}
      flexGrow={typeof grow === 'boolean' ? 1 : grow}
      flexShrink={shrink}
      {...props}
      position={cssPosition}
    />
  );
};

export default Item;
