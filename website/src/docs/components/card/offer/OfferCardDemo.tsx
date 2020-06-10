import React from 'react';
import cx from 'clsx';
import NoSsr from '@material-ui/core/NoSsr';
import GoogleFontLoader from 'react-google-font-loader';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { Column, Item } from '@mui-treasury/components/flex';
import { Info, InfoTitle, InfoSubtitle } from '@mui-treasury/components/info';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise'

const family = 'Rubik';

const useStyles = makeStyles(() => ({
  card: {
    position: 'relative',
    borderRadius: 16,
    padding: 24,
    backgroundColor: '#e5fcfb',
    minWidth: 300,
  },
  learnMore: {
    backgroundColor: '#fff !important',
    color: '#fb703c',
    boxShadow: '0 2px 6px #d0efef',
    borderRadius: 12,
    minWidth: 120,
    minHeight: 42,
    fontFamily: family,
    textTransform: 'initial',
    fontSize: '0.875rem',
    fontWeight: 700,
    letterSpacing: 0,
  },
  img: {
    position: 'absolute',
    width: '40%',
    bottom: 0,
    right: 0,
    display: 'block',
  },
  shell: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    transform: 'translate(70%, 50%)',
    borderRadius: '50%',
    backgroundColor: 'rgba(71, 167, 162, 0.12)',
    padding: '40%',
    '&:before': {
      position: 'absolute',
      borderRadius: '50%',
      content: '""',
      display: 'block',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: '-16%',
      backgroundColor: 'rgba(71, 167, 162, 0.08)',
    }
  },
}));

const useOfferInfoStyles = makeStyles(() => {
  return {
    title: {
      color: '#fb703c',
      fontFamily: family,
      fontSize: '1.125rem',
      fontWeight: 700,
    },
    subtitle: {
      color: '#48bbb5',
      fontFamily: family,
      fontSize: '0.875rem',
      fontWeight: 500,
    },
  };
});

export const OfferCardDemo = React.memo(function OfferCard() {
  const styles = useStyles();
  const shadowStyles = useSoftRiseShadowStyles();
  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: family, weights: [500, 700] }]} />
      </NoSsr>
      <Card className={cx(styles.card, shadowStyles.root)}>
        <Column gap={2} mr={2}>
          <Info position={'middle'} useStyles={useOfferInfoStyles}>
            <InfoTitle>50 Days of Premium!</InfoTitle>
            <InfoSubtitle>Get it before 01.01.2020</InfoSubtitle>
          </Info>
          <Item mt={2}>
            <Button className={styles.learnMore}>Learn more</Button>
          </Item>
        </Column>
        <img
          className={styles.img}
          alt={''}
          src={
            'https://pathwaychurch.life/wp-content/uploads/2018/09/bow-transparent-background-1.png'
          }
        />
        <div className={styles.shell} />
      </Card>
    </>
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
    title={'Offer'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
  >
    <OfferCardDemo />
  </Showcase>
);
const metadata: IMetadata = {
  path: 'components/card/offer',
  colSpan: 5,
  rowSpan: 2,
  createdAt: 'Tue Jun 09 2020',
  frameProps: { bgcolor: '#fff' },
  files: [],
};
// @ts-ignore
OfferCardDemo.Showcase = AttachedShowcase;
// @ts-ignore
OfferCardDemo.metadata = metadata;
// hide-end
