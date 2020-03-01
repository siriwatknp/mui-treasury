import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';


const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 304,
    margin: 'auto',
    borderRadius: 0,
    position: 'relative',
  },
  content: {
    padding: 24,
  },
  cta: {
    display: 'block',
    textAlign: 'center',
    color: '#fff',
    letterSpacing: '3px',
    fontWeight: 200,
    fontSize: 12,
  },
  title: {
    color: '#fff',
    letterSpacing: '2px',
  },
}));

const NewsCard2 = () => {
  const styles = useStyles();
  const mediaStyles = useCoverCardMediaStyles();
  const shadowStyles = useLightTopShadowStyles();
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia classes={mediaStyles} image={'https://images.unsplash.com/photo-1519810755548-39cd217da494?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'} />
      <CardActionArea>
        <CardContent className={styles.content}>
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            minHeight={360}
            color={'common.white'}
            textAlign={'center'}
          >
            <h1 className={styles.title}>Space</h1>
            <p>The space between the stars and galaxies is largely empty.</p>
          </Box>
          <Typography className={styles.cta} variant={'overline'}>
            Explore
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

// hide-start
NewsCard2.metadata = {
  title: 'News II',
  description: 'Best for Blog',
  path: 'component/card/news2',
  creators: [require('constants/creators').siriwatknp],
  files: [
    // { pkg: 'mui-styles', path: 'shadow/faded/fadedShadow.styles.js' },
    // {
    //   pkg: 'mui-styles',
    //   path: 'cardMedia/wide/wideCardMedia.styles.js',
    // },
    // {
    //   pkg: 'mui-components',
    //   path: 'cardContent/textInfo/TextInfoCardContent.js',
    // },
    // {
    //   pkg: 'mui-styles',
    //   path: 'cardContent/text01/textCardContent01.styles.js',
    // },
    // {
    //   pkg: 'mui-components',
    //   path: 'cardFooter/people/PeopleCardFooter.js',
    // },
    // {
    //   pkg: 'mui-styles',
    //   path: 'cardFooter/people/peopleCardFooter.styles.js',
    // },
  ],
};
// hide-end

export default NewsCard2;
