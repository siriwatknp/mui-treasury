import React from 'react';
import Color from 'color';
import GoogleFont from 'react-google-font-loader';
import { makeStyles } from '@material-ui/core/styles';
import NoSsr from '@material-ui/core/NoSsr';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';

const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  card: ({ color }) => ({
    minWidth: 256,
    borderRadius: 16,
    boxShadow: 'none',
    '&:hover': {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: '1rem 1.5rem 1.5rem',
    };
  },
  title: {
    fontFamily: 'Keania One',
    fontSize: '2rem',
    color: '#fff',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontFamily: 'Montserrat',
    color: '#fff',
    opacity: 0.87,
    marginTop: '2rem',
    fontWeight: 500,
    fontSize: 14,
  },
}));

const CustomCard = ({ classes, image, title, subtitle }) => {
  const mediaStyles = useFourThreeCardMediaStyles();
  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        <CardMedia classes={mediaStyles} image={image} />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={'h2'}>
            {title}
          </Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

const SolidGameCardDemo = () => {
  const styles = useStyles({ color: '#203f52' });
  const styles2 = useStyles({ color: '#4d137f' });
  const styles3 = useStyles({ color: '#ff9900' });
  const styles4 = useStyles({ color: '#34241e' });
  return (
    <div>
      {/*// hide-start*/}
      <NoSsr>
        <GoogleFont
          fonts={[
            {
              font: 'Keania One',
              weights: [400],
            },
            {
              font: 'Montserrat',
              weights: [500],
            },
          ]}
        />
      </NoSsr>
      {/*// hide-end*/}
      <Box maxWidth={'calc(100vw - 32px)'} m={-5} p={5} overflow={'scroll'}>
        <Grid container justify={'center'} spacing={4} wrap={'nowrap'}>
          <Grid item>
            <CustomCard
              classes={styles}
              title={'Dota 2'}
              subtitle={'Be a Legend!'}
              image={
                'https://steamcdn-a.akamaihd.net/apps/dota2/images/blog/play/dota_heroes.png'
              }
            />
          </Grid>
          <Grid item>
            <CustomCard
              classes={styles2}
              title={'Fortnite'}
              subtitle={'Time to choose side!'}
              image={
                'https://allyourgames.com/wp-content/uploads/2019/09/10.40.png'
              }
            />
          </Grid>
          <Grid item>
            <CustomCard
              classes={styles3}
              title={'Overwatch'}
              subtitle={'What are you waiting?'}
              image={
                'https://images5.alphacoders.com/690/thumb-1920-690653.png'
              }
            />
          </Grid><Grid item>
            <CustomCard
              classes={styles4}
              title={'PUBG'}
              subtitle={'Are you ready?'}
              image={
                'https://www.itp.net/public/styles/full_img_sml/public/images/2019/05/27/44485-pubg_base1.jpg?itok=EF911Xan'
              }
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
// hide-start
SolidGameCardDemo.metadata = {
  title: 'Solid Game',
  path: 'components/card/solidGame',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Tue Jun 02 2020',
  stylesUrl: '',
  frameProps: {
    bgcolor: '#f7f7fe',
  }, // props that applied to Box in grid view
  size: 'huge', // can be 'large' | 'huge' for grid size
  files: [],
};
// hide-end

export default SolidGameCardDemo;
