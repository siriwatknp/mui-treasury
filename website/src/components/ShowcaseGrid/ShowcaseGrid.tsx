import React from 'react';
import cx from 'clsx';
import Box, { BoxProps } from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { IMetadata, ColSpanProp, RowSpanProp } from '../../components/Showcase';

const useStyles = makeStyles(
  ({ breakpoints }) => ({
    root: ({ rowHeight }: { rowHeight: string | number }) => ({
      padding: 8,
      [breakpoints.only('xs')]: {
        '& > div:not(:first-child)': {
          paddingTop: 8,
        },
      },
      [breakpoints.up('sm')]: {
        padding: 8,
        display: 'grid',
        gridTemplateColumns: `repeat(12, ${100 / 12}%)`,
        gridAutoFlow: 'dense',
        '& > div': {
          padding: 8,
        },
      },
      [breakpoints.up(1440)]: {
        padding: 12,
        '& > div': {
          padding: 12,
        },
      },
    }),
  }),
  { name: 'GridContainer' }
);

const userItemStyles = makeStyles(
  () => ({
    root: {
      '& > .FlexItem': {
        height: '100%',
      },
    },
  }),
  { name: 'GridItem' }
);

export const GridContainer = ({
  children,
  className,
  rowHeight = 160,
  ...props
}: React.PropsWithChildren<
  { rowHeight?: string | number } & React.HTMLProps<HTMLDivElement>
>) => {
  const styles = useStyles({ rowHeight });
  return (
    <div className={cx(styles.root, className)} {...props}>
      {children}
    </div>
  );
};

const toCssSpan = (span: ColSpanProp | RowSpanProp) => {
  if (typeof span === 'number') return `span ${span}`;
  return Object.entries(span).reduce(
    (result, [screen, value]) => ({
      ...result,
      [screen]: `span ${value}`,
    }),
    {}
  );
};

export const GridItem = ({
  children,
  className,
  colSpan,
  rowSpan,
  ...props
}: BoxProps & {
  colSpan: IMetadata['colSpan'];
  rowSpan: IMetadata['rowSpan'];
}) => {
  const styles = userItemStyles();
  return (
    <Box
      className={cx(styles.root, className)}
      display={'flex'}
      flexDirection={'column'}
      gridColumn={toCssSpan(colSpan)}
      gridRow={toCssSpan(rowSpan)}
      {...props}
    >
      {children}
    </Box>
  );
};
