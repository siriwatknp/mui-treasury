import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  card: {
    width: '100%',
    maxWidth: 500,
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    overflow: 'initial',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    background:
      'linear-gradient(34deg, rgba(55,16,83,1) 0%, rgba(162,73,190,1) 29%, rgba(33,16,83,1) 92%)',
    [breakpoints.up('sm')]: {
      textAlign: 'left',
      flexDirection: 'row-reverse',
    },
  },
  media: {
    flexShrink: 0,
    width: '30%',
    paddingTop: '30%',
    marginLeft: 'auto',
    marginRight: 'auto',
    [breakpoints.up('sm')]: {
      marginRight: 'initial',
    },
  },
  overline: {
    lineHeight: 2,
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '0.625rem',
    opacity: 0.7,
  },
  heading: {
    fontWeight: 900,
    color: '#ffffff',
    letterSpacing: 0.5,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 100,
    paddingLeft: 32,
    paddingRight: 32,
    color: '#ffffff',
    textTransform: 'none',
    width: '100%',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.32)',
    },
    [breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
}));

export const RewardCardDemo = React.memo(function RewardCard() {
  const styles = useStyles();
  return (
    <Card className={styles.card}>
      <CardMedia
        className={styles.media}
        image={'https://jkkm.info/ui/images/awards/victory.png'}
      />
      <CardContent>
        <Typography className={styles.overline} variant={'overline'}>
          Songkran Festival Contest
        </Typography>
        <Typography className={styles.heading} variant={'h6'} gutterBottom>
          Result Announced
        </Typography>
        <Button className={styles.button}>View Winners</Button>
      </CardContent>
    </Card>
  );
});

// hide-start
// eslint-disable-next-line import/first
import Showcase, {
  IMetadata,
  ShowcaseProps,
} from '../../../../components/Showcase';

const AttachedShowcase = (props: ShowcaseProps) => (
  <Showcase
    {...props}
    title={'Reward'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
  >
    <RewardCardDemo />
  </Showcase>
);
const metadata: IMetadata = {
  path: 'components/card/reward',
  colSpan: 5,
  rowSpan: 1,
  frameProps: { p: 1 },
  files: [],
};
// @ts-ignore
RewardCardDemo.Showcase = AttachedShowcase;
// @ts-ignore
RewardCardDemo.metadata = metadata;
// hide-end
export default RewardCardDemo
