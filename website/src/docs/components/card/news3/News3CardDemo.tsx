import React from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import GoogleFontLoader from 'react-google-font-loader';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Row } from '@mui-treasury/components/flex';
import { Info, InfoSubtitle, InfoTitle } from '@mui-treasury/components/info';
import { useNewsInfoStyles } from '@mui-treasury/styles/info/news';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';

const useStyles = makeStyles(() => ({
  card: {
    minWidth: 320,
    position: 'relative',
    boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
    overflow: 'visible',
    borderRadius: '1.5rem',
    transition: '0.4s',
    '&:hover': {
      transform: 'translateY(-2px)',
      '& $shadow': {
        bottom: '-1.5rem',
      },
      '& $shadow2': {
        bottom: '-2.5rem',
      },
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      zIndex: 0,
      display: 'block',
      width: '100%',
      bottom: -1,
      height: '100%',
      borderRadius: '1.5rem',
      backgroundColor: 'rgba(0,0,0,0.08)',
    },
  },
  main: {
    overflow: 'hidden',
    borderTopLeftRadius: '1.5rem',
    borderTopRightRadius: '1.5rem',
    zIndex: 1,
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      display: 'block',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(to top, #014a7d, rgba(0,0,0,0))',
    },
  },
  content: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 1,
    padding: '1.5rem 1.5rem 1rem',
  },
  avatar: {
    width: 48,
    height: 48,
  },
  tag: {
    display: 'inline-block',
    fontFamily: "'Sen', sans-serif",
    backgroundColor: '#ff5dac',
    borderRadius: '0.5rem',
    padding: '2px 0.5rem',
    color: '#fff',
    marginBottom: '0.5rem',
  },
  title: {
    fontFamily: "'Sen', sans-serif",
    fontSize: '2rem',
    fontWeight: 800,
    color: '#fff',
  },
  author: {
    zIndex: 1,
    position: 'relative',
    borderBottomLeftRadius: '1.5rem',
    borderBottomRightRadius: '1.5rem',
  },
  shadow: {
    transition: '0.2s',
    position: 'absolute',
    zIndex: 0,
    width: '88%',
    height: '100%',
    bottom: 0,
    borderRadius: '1.5rem',
    backgroundColor: 'rgba(0,0,0,0.06)',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  shadow2: {
    bottom: 0,
    width: '72%',
    backgroundColor: 'rgba(0,0,0,0.04)',
  },
}));

export const News3CardDemo = React.memo(function News3Card() {
  const styles = useStyles();
  const mediaStyles = useCoverCardMediaStyles();
  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: 'Sen', weights: [400, 800] }]} />
      </NoSsr>
      <Card className={styles.card}>
        <Box className={styles.main} minHeight={300} position={'relative'}>
          <CardMedia
            classes={mediaStyles}
            image={
              'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
            }
          />
          <div className={styles.content}>
            <div className={styles.tag}>Fashion</div>
            <Typography variant={'h2'} className={styles.title}>
              Diana Marvel Has a City Take on the Cowboy Boot
            </Typography>
          </div>
        </Box>
        <Row
          className={styles.author}
          p={3}
          pt={2}
          gap={2}
          bgcolor={'common.white'}
        >
          <Avatar
            className={styles.avatar}
            src={'https://i.pravatar.cc/300?img=13'}
          />
          <Info position={'middle'} useStyles={useNewsInfoStyles}>
            <InfoTitle>Nadine Petrolli</InfoTitle>
            <InfoSubtitle>Jul 20 | 2 Min Read</InfoSubtitle>
          </Info>
        </Row>
        <div className={styles.shadow} />
        <div className={`${styles.shadow} ${styles.shadow2}`} />
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
    title={'News3'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
  >
    <News3CardDemo />
  </Showcase>
);
const metadata: IMetadata = {
  path: 'components/card/news3',
  createdAt: 'Wed Jun 03 2020',
  colSpan: 4,
  frameProps: { py: 6 },
  files: [],
};
// @ts-ignore
News3CardDemo.Showcase = AttachedShowcase;
// @ts-ignore
News3CardDemo.metadata = metadata;
// hide-end
export default News3CardDemo
