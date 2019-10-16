import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Rating from '@material-ui/lab/Rating';
import KeyboardArrowRightRounded from '@material-ui/icons/KeyboardArrowRightRounded';
import ModeComment from '@material-ui/icons/ModeComment';
import Favorite from '@material-ui/icons/Favorite';
import { usePushingGutter } from '@mui-treasury/styles/gutter';
import MOCK from 'constants/mock';

const useStyles = makeStyles(({ spacing, palette }) => ({
  card: {
    display: 'flex',
    padding: spacing(2),
    borderRadius: 16,
  },
  media: {
    minWidth: '25%',
    maxWidth: '25%',
    flexShrink: 0,
    backgroundColor: palette.grey[200],
    borderRadius: 12,
    boxShadow: '0 2px 8px 0 #c1c9d7, 0 -2px 8px 0 #cce1e9',
  },
  rating: {
    verticalAlign: 'text-top',
  },
  content: {
    padding: spacing(0, 2, 0, 0),
  },
  heading: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'rbga(0,0,0,0.7)',
    letterSpacing: '0.5px',
    marginRight: spacing(1.5),
    display: 'inline-block',
  },
  body: {
    fontSize: 14,
    color: palette.grey[500],
  },
  divider: {
    margin: spacing(1, 0),
  },
  textFooter: {
    fontSize: 14,
    opacity: 0.6,
    '&:hover': {
      opacity: 1,
    },
  },
  icon: {
    fontSize: '1.2rem',
    verticalAlign: 'bottom',
  },
  smallIcon: {
    fontSize: '1rem',
    verticalAlign: 'middle',
    color: palette.grey[500],
  },
}));

const ReviewCard2 = () => {
  const styles = useStyles();
  const gutterStyles = usePushingGutter({ space: 1.5 });
  return (
    <Card className={styles.card} elevation={0}>
      <CardContent className={styles.content}>
        <Box mb={1}>
          <h3 className={styles.heading}>Aegen magazines </h3>
          <Rating value={2} className={styles.rating} size={'small'} />
        </Box>
        <p className={styles.body}>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
          credit (www.brighttv.co.th)
        </p>
        <Divider className={styles.divider} light />
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link className={styles.textFooter} component={'button'}>
            Read more <KeyboardArrowRightRounded className={styles.icon} />
          </Link>
          <Box className={gutterStyles.parent}>
            <span className={styles.textFooter}>
              <ModeComment className={styles.smallIcon} /> 135
            </span>
            <span className={styles.textFooter}>
              <Favorite className={styles.smallIcon} /> 12
            </span>
          </Box>
        </Box>
      </CardContent>
      <CardMedia className={styles.media} image={MOCK.prangImg} />
    </Card>
  );
};

// hide-start
ReviewCard2.metadata = {
  title: 'Review II',
  path: 'card/review2',
  longFrame: true,
  frameProps: {
    bgcolor: 'rgb(245, 248, 250)',
  },
  files: [
    { pkg: 'mui-styles', path: 'gutter/pushingGutter/pushingGutter.styles.js' },
  ],
};
// hide-end

export default ReviewCard2;
