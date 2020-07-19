import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { BoxProps } from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { Item, Row } from '@mui-treasury/components/flex';

const useCardHeaderStyles = makeStyles(({ palette }: Theme) => ({
  root: { paddingBottom: 0 },
  title: {
    fontSize: '1.25rem',
    color: palette.type === 'dark' ? palette.text.primary : '#122740',
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: '0.875rem',
    color: palette.type === 'dark' ? palette.text.hint : '#495869',
  },
}));

export type CardHeaderProps = {
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
} & BoxProps;

const CardHeader = ({
  title,
  description,
  action,
  ...props
}: CardHeaderProps) => {
  const styles = useCardHeaderStyles();
  // const iconBtnStyles = useSizedIconButtonStyles({ padding: 8, childSize: 20 });
  return (
    <Row {...props}>
      <Item position={'middle'}>
        <Typography className={styles.title}>{title}</Typography>
        <Typography className={styles.subheader}>{description}</Typography>
      </Item>
      <Item position={'right'} mr={-0.5}>
        {action}
      </Item>
    </Row>
  );
};

export default CardHeader
