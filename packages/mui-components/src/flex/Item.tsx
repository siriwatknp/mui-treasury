import React from 'react';
import cx from 'clsx';
import Box, { BoxProps } from '@material-ui/core/Box';
import { Position, useFlexStyles, useGapItem } from './core';

export type ItemProps = {
  position?: Position;
  grow?: boolean | number;
  shrink?: number;
  stretched?: boolean;
  gapDisabled?: boolean;
  cssPosition?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
} & BoxProps;

const Item = ({
  className,
  position,
  cssPosition,
  grow,
  shrink,
  stretched,
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
      {...stretched && { flexGrow: 100000 }}
      flexShrink={shrink}
      {...props}
      position={cssPosition}
    />
  );
};

export default Item;
