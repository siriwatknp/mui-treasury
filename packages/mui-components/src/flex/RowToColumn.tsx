import React from 'react';
import * as CSS from 'csstype';
import cx from 'clsx';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { Provider, useFlexCtx, useGutterCtx, Gutter } from './core';
import Item, { ItemProps } from './Item';
import { gutterToCss, getLowerMediaQuery } from './utils';

export type RowToColumnProps = ItemProps & {
  rowStyle?: CSS.Properties;
  columnStyle?: CSS.Properties;
  at: Breakpoint | number;
  gutter?: Gutter;
  columnReversed?: boolean;
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
      columnReversed,
    }: Pick<
      RowToColumnProps,
      'columnStyle' | 'rowStyle' | 'at' | 'gutter' | 'columnReversed'
    >) => {
      return {
        display: 'flex',
        [breakpoints.up(at)]: {
          ...columnStyle,
          flexDirection: columnReversed
            ? 'column-reverse'
            : ('column' as const),
          ...gutterToCss(theme)(gutter, (value: string) => ({
            [`& > *:not(:${columnReversed ? 'last' : 'first'}-child)`]: {
              paddingTop: value,
            },
          })),
        },
        [getLowerMediaQuery(theme, at)]: {
          alignItems: 'center',
          ...rowStyle,
          ...gutterToCss(theme)(gutter, (value: string | number) => ({
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
  gutter,
  at,
  columnReversed,
  columnStyle,
  rowStyle,
  ...props
}: RowToColumnProps) => {
  // todo refactor gutter name
  const inheritGutter = useFlexCtx() ? 'inherit' : gutter;
  const parentGutter = useGutterCtx();
  const styles = useStyles({
    at,
    columnReversed,
    columnStyle,
    rowStyle,
    gutter: gutter || (inheritGutter === 'inherit' ? parentGutter : inheritGutter),
  });
  return (
    <Item
      className={cx('FlexRowToColumn', styles.root, className)}
      {...(inheritGutter !== 'inherit' && { p: inheritGutter })}
      {...props}
    >
      <Provider flexDirection={'row-column'} gutter={inheritGutter || gutter}>
        {children}
      </Provider>
    </Item>
  );
};

export default RowToColumn;
