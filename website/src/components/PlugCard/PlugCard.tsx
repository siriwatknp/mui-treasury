import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Column, Row, Item } from '@mui-treasury/components/flex';

const useStyles = makeStyles(() => ({
  card: {
    backgroundColor: '#E7EDF3',
    borderRadius: 16,
  },
  label: {
    color: '#BDC9D7',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 1,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
}));

export type PlugCardProps = {
  label: React.ReactNode;
};

export const PlugCard = ({
  label,
  children,
}: React.PropsWithChildren<PlugCardProps>) => {
  const styles = useStyles();
  return (
    <Column gap={2} className={styles.card}>
      <Item>
        <Typography className={styles.label}>{label}</Typography>
      </Item>
      <Row
        my={'auto'}
        alignItems={'center'}
        wrap
        justifyContent={'space-evenly'}
      >
        {React.Children.map(children, child => (
          <Item>{child}</Item>
        ))}
      </Row>
    </Column>
  );
};

export default PlugCard;
