import React from 'react';
import cx from 'clsx';
import Box, { BoxProps } from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { IMetadata } from 'website/src/components/Showcase';

const useStyles = makeStyles(
  ({ breakpoints }) => ({
    root: {
      padding: 8,
      [breakpoints.only('xs')]: {
        '& > div:not(:first-child)': {
          paddingTop: 8,
        },
      },
      [breakpoints.up('sm')]: {
        padding: 16,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridAutoRows: 160,
        gridAutoFlow: 'dense',
        gridGap: 16,
      },
      [breakpoints.up(1440)]: {
        padding: 24,
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridGap: 24,
      },
    },
  }),
  { name: 'GridContainer' }
);

const userItemStyles = makeStyles(() => ({
  root: {
    '& > .FlexItem': {
      height: '100%',
    },
  },
}), { name: 'GridItem' })

export const GridContainer = ({
  children,
  className,
  ...props
}: React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) => {
  const styles = useStyles();
  return (
    <div className={cx(styles.root, className)} {...props}>
      {children}
    </div>
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
  const styles = userItemStyles()
  return (
    <Box
      className={cx(styles.root, className)}
      display={'flex'}
      flexDirection={'column'}
      gridColumn={`span ${colSpan}`}
      gridRow={`span ${rowSpan}`}
      {...props}
    >
      {children}
    </Box>
  );
};
