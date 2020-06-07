import React from 'react';
import cx from 'clsx';
import Box, { BoxProps } from '@material-ui/core/Box';
import { Position, useFlexStyles, useGapProps } from './core';

export type ItemProps = {
  position?: Position;
  'data-flexindex'?: number;
  grow?: boolean | number;
  shrink?: number;
  cssPosition?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
} & BoxProps;

const Item = ({
  className,
  position,
  cssPosition,
  grow,
  shrink,
  'data-flexindex': itemIndex,
  ...props
}: ItemProps) => {
  const gutterProps = useGapProps(itemIndex);
  const flexStyles = useFlexStyles(position);
  return (
    <Box
      className={cx('FlexItem', className)}
      {...flexStyles}
      {...gutterProps}
      flexGrow={typeof grow === 'boolean' ? 1 : grow}
      flexShrink={shrink}
      {...props}
      position={cssPosition}
    />
  );
};

export default Item;
