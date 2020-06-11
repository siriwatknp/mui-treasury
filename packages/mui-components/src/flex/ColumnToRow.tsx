import React from 'react';
import * as CSS from 'csstype';
import cx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core/styles';
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
import { getLowerMediaQuery } from './utils';

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
  return createStyles({
    root: ({
      at,
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
      },
      [breakpoints.up(at)]: {
        alignItems: 'center',
        flexDirection: rowReversed ? 'row-reverse' : ('row' as const),
        ...rowStyle,
      },
    }),
  });
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
      gapDisabled
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
