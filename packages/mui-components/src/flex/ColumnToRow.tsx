import React from 'react';
import * as CSS from 'csstype';
import cx from 'clsx';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core';
import {
  At,
  Gutter,
  Provider,
  useGutterLookup,
  BreakpointProvider,
  useBreakpointLookup,
} from './core';
import Item, { ItemProps } from './Item';
import { gutterToCss, getLowerMediaQuery } from './utils';

export type ColumnToRowProps = ItemProps & {
  columnStyle?: CSS.Properties;
  rowStyle?: CSS.Properties;
  at?: At;
  gutter?: Gutter;
  rowReversed?: boolean;
  children: React.ReactNode | React.ReactElement | React.ReactElement[];
};

const styles = (theme: Theme) => {
  const { breakpoints } = theme;
  return {
    root: ({
      at,
      gutter,
      columnStyle,
      rowStyle,
      rowReversed,
    }: Pick<
      ColumnToRowProps,
      'columnStyle' | 'rowStyle' | 'at' | 'gutter' | 'rowReversed'
    >) => {
      return {
        display: 'flex',
        [getLowerMediaQuery(theme, at)]: {
          ...columnStyle,
          flexDirection: 'column' as const,
          ...gutterToCss(theme)(gutter, (value: string) => ({
            '& > *:not(:first-child)': { paddingTop: value },
          })),
        },
        [breakpoints.up(at)]: {
          alignItems: 'center',
          flexDirection: rowReversed ? 'row-reverse' : ('row' as const),
          ...rowStyle,
          ...gutterToCss(theme)(gutter, (value: string | number) => ({
            [`& > *:not(:${rowReversed ? 'last' : 'first'}-child)`]: {
              paddingLeft: value,
            },
          })),
        },
      };
    },
  };
};

const useStyles = makeStyles(styles, { name: 'FlexColumnToRow' });

const ColumnToRow = ({
  className,
  children,
  gutter,
  at,
  columnStyle,
  rowStyle,
  rowReversed,
  ...props
}: ColumnToRowProps) => {
  const { calculatedAt } = useBreakpointLookup(at)
  const { calculatedGutter, itemProps } = useGutterLookup(gutter);
  const styles = useStyles({
    at: calculatedAt,
    columnStyle,
    rowStyle,
    rowReversed,
    gutter: calculatedGutter,
  });
  return (
    <Item
      className={cx('FlexColumnToRow', styles.root, className)}
      {...itemProps}
      {...props}
    >
      <Provider flexDirection={'column-row'} gutter={calculatedGutter}>
        <BreakpointProvider at={calculatedAt}>
          {children}
        </BreakpointProvider>
      </Provider>
    </Item>
  );
};

export default ColumnToRow;
