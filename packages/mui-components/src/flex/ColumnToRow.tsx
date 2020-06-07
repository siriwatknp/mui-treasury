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

export type ColumnToRowProps = ItemProps & {
  columnStyle?: CSS.Properties;
  rowStyle?: CSS.Properties;
  at?: At;
  gap?: Gap;
  rowReversed?: boolean;
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
      rowReversed,
    }: Pick<
      ColumnToRowProps,
      'columnStyle' | 'rowStyle' | 'at' | 'gap' | 'rowReversed'
    >) => ({
      display: 'flex',
      [getLowerMediaQuery(theme, at)]: {
        ...columnStyle,
        flexDirection: 'column' as const,
        ...gapToCss(theme)(gap, (value: string) => ({
          '& > *:not(:first-child)': { paddingTop: value },
        })),
      },
      [breakpoints.up(at)]: {
        alignItems: 'center',
        flexDirection: rowReversed ? 'row-reverse' : ('row' as const),
        ...rowStyle,
        ...gapToCss(theme)(gap, (value: string | number) => ({
          [`& > *:not(:${rowReversed ? 'last' : 'first'}-child)`]: {
            paddingLeft: value,
          },
        })),
      },
    }),
  };
};

const useStyles = makeStyles(styles, { name: 'FlexColumnToRow' });

const ColumnToRow = ({
  className,
  children,
  gap,
  at,
  columnStyle,
  rowStyle,
  rowReversed,
  ...props
}: ColumnToRowProps) => {
  const { calculatedAt } = useBreakpointLookup(at)
  const { calculatedGap, itemProps } = useGapLookup(gap);
  const styles = useStyles({
    at: calculatedAt,
    columnStyle,
    rowStyle,
    rowReversed,
    gap: calculatedGap,
  });
  return (
    <Item
      className={cx('FlexColumnToRow', styles.root, className)}
      {...itemProps}
      {...props}
    >
      <Provider flexDirection={'column-row'} gap={calculatedGap}>
        <BreakpointProvider at={calculatedAt}>
          {children}
        </BreakpointProvider>
      </Provider>
    </Item>
  );
};

export default ColumnToRow;
