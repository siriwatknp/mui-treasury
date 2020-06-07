import React from 'react';
import * as CSS from 'csstype';
import cx from 'clsx';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core';
import {
  At,
  Gap,
  Provider,
  useGapLookup,
  BreakpointProvider,
  useBreakpointLookup,
} from './core';
import Item, { ItemProps } from './Item';
import { gapToCss, getLowerMediaQuery } from './utils';

export type RowToColumnProps = ItemProps & {
  rowStyle?: CSS.Properties;
  columnStyle?: CSS.Properties;
  at?: At;
  gap?: Gap;
  columnReversed?: boolean;
  children: React.ReactNode | React.ReactElement | React.ReactElement[];
};

const styles = (theme: Theme) => {
  const { breakpoints } = theme;
  return {
    root: ({
      at,
      gap,
      columnStyle,
      rowStyle,
      columnReversed,
    }: Pick<
      RowToColumnProps,
      'columnStyle' | 'rowStyle' | 'at' | 'gap' | 'columnReversed'
    >) => {
      return {
        display: 'flex',
        [breakpoints.up(at)]: {
          ...columnStyle,
          flexDirection: columnReversed
            ? 'column-reverse'
            : ('column' as const),
          ...gapToCss(theme)(gap, (value: string) => ({
            [`& > *:not(:${columnReversed ? 'last' : 'first'}-child)`]: {
              paddingTop: value,
            },
          })),
        },
        [getLowerMediaQuery(theme, at)]: {
          alignItems: 'center',
          ...rowStyle,
          ...gapToCss(theme)(gap, (value: string | number) => ({
            '& > *:not(:first-child)': { paddingLeft: value },
          })),
        },
      };
    },
  };
};

const useStyles = makeStyles(styles, { name: 'FlexRowToColumn' });

const RowToColumn = ({
  className,
  children,
  gap,
  at,
  columnReversed,
  columnStyle,
  rowStyle,
  ...props
}: RowToColumnProps) => {
  const { calculatedAt } = useBreakpointLookup(at);
  const { calculatedGap, itemProps } = useGapLookup(gap);
  const styles = useStyles({
    at: calculatedAt,
    columnReversed,
    columnStyle,
    rowStyle,
    gap: calculatedGap,
  });
  return (
    <Item
      className={cx('FlexRowToColumn', styles.root, className)}
      {...itemProps}
      {...props}
    >
      <Provider flexDirection={'row-column'} gap={calculatedGap}>
        <BreakpointProvider at={calculatedAt}>{children}</BreakpointProvider>
      </Provider>
    </Item>
  );
};

export default RowToColumn;
