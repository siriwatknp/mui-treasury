import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import NoSsr from '@material-ui/core/NoSsr';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from '@mui-treasury/components/info';
import { useGalaxyInfoStyles } from '@mui-treasury/styles/info/galaxy';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: '1rem',
    boxShadow: 'none',
    position: 'relative',
    minWidth: 200,
    minHeight: 360,
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '64%',
      bottom: 0,
      zIndex: 1,
      background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
    },
  },
  content: {
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    width: '100%',
  }
}));

const GalaxyCardDemo = () => {
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'top'});
  const styles = useStyles();
  return (
    <>
      <NoSsr>
        <GoogleFontLoader
          fonts={[
            { font: 'Spartan', weights: [300] },
            { font: 'Montserrat', weights: [200, 400, 700] },
          ]}
        />
      </NoSsr>
      <Card className={styles.card}>
        <CardMedia
          classes={mediaStyles}
          image={
            'https://image-us.samsung.com/SamsungUS/home/audio/galaxy-buds/MB-04-JustWhatYouWantV4.jpg?$cm-g-fb-full-bleed-img-mobile-jpg$'
          }
        />
        <Box py={3} px={2} className={styles.content}>
          <Info useStyles={useGalaxyInfoStyles}>
            <InfoSubtitle>Galaxy</InfoSubtitle>
            <InfoTitle>Buds 2019</InfoTitle>
            <InfoCaption>Perfect for everyone</InfoCaption>
          </Info>
        </Box>
      </Card>
    </>
  );
};
// hide-start
GalaxyCardDemo.metadata = {
  title: 'Galaxy',
  path: 'components/card/galaxy',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Wed Jun 03 2020',
  stylesUrl: '',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [],
};
// hide-end

export default GalaxyCardDemo;
