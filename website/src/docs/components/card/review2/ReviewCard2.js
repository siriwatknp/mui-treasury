import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Rating from '@material-ui/lab/Rating';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import ModeComment from '@material-ui/icons/ModeComment';
import Favorite from '@material-ui/icons/Favorite';
import { usePushingGutter } from '@mui-treasury/styles/gutter';
import { useLabelIconStyles } from '@mui-treasury/styles/icon/label';
import { useRowFlexStyles } from '@mui-treasury/styles/flex/row';
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
    letterSpacing: '0.5px',
    marginBottom: 0,
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
  },
  icon: {
    fontSize: '1.2rem',
    verticalAlign: 'bottom',
  },
}));

const ReviewCard2 = () => {
  const styles = useStyles();
  const gutterStyles = usePushingGutter({ space: 1.5 });
  const labelStyles = useLabelIconStyles({ linked: true });
  const flexStyles = useRowFlexStyles();
  return (
    <Card className={styles.card} elevation={0}>
      <CardContent className={styles.content}>
        <Box mb={1}>
          <h3 className={styles.heading}>Aegen magazines </h3>
          <Rating
            name={'rating'}
            value={2}
            className={styles.rating}
            size={'small'}
          />
        </Box>
        <p className={styles.body}>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
          credit (www.brighttv.co.th)
        </p>
        <Divider className={styles.divider} light />
        <div className={flexStyles.parent}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link
            className={cx(labelStyles.primaryLink, styles.textFooter)}
            component={'button'}
          >
            Read more <ArrowForwardIos className={labelStyles.icon} />
          </Link>
          <div
            className={cx(
              flexStyles.rightChild,
              flexStyles.parent,
              gutterStyles.parent
            )}
          >
            <button type={'button'} className={labelStyles.link}>
              <ModeComment className={labelStyles.icon} /> 135
            </button>
            <button type={'button'} className={labelStyles.link}>
              <Favorite className={labelStyles.icon} /> 12
            </button>
          </div>
        </div>
      </CardContent>
      <CardMedia className={styles.media} image={MOCK.prangImg} />
    </Card>
  );
};

// hide-start
ReviewCard2.metadata = {
  title: 'Review II',
  path: 'card/review2',
  size: 'large',
  frameProps: {
    bgcolor: 'rgb(245, 248, 250)',
  },
  files: [
    { pkg: 'mui-styles', path: 'gutter/pushingGutter/pushingGutter.styles.js' },
    { pkg: 'mui-styles', path: 'icon/label/labelIcon.styles.js' },
    { pkg: 'mui-styles', path: 'flex/row/rowFlex.styles.js' },
  ],
};
// hide-end

export default ReviewCard2;
