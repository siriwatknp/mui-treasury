import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import IconButton from '@material-ui/core/IconButton';
import LocationOn from '@material-ui/icons/LocationOn';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import Favorite from '@material-ui/icons/Favorite';
import FaceGroup from '@mui-treasury/components/group/face';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';

const useStyles = makeStyles(() => ({
  root: {
    overflow: 'initial',
    maxWidth: 304,
  },
  title: {
    marginBottom: 0,
  },
  rateValue: {
    fontWeight: 'bold',
    marginTop: 2,
  },
  content: {
    position: 'relative',
    padding: 24,
    margin: '-24% 16px 0',
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  favorite: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  locationIcon: {
    marginRight: 4,
    fontSize: 18,
  },
}));

const ReviewCard = () => {
  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const shadowStyles = useFadedShadowStyles();
  const gutterStyles = usePushingGutterStyles({ firstExcluded: true });
  return (
    <Card elevation={0} className={styles.root}>
      <CardMedia
        classes={mediaStyles}
        image={
          'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
        }
      />
      <CardContent className={cx(shadowStyles.root, styles.content)}>
        <IconButton className={styles.favorite}>
          <Favorite />
        </IconButton>
        <h3 className={styles.title}>Colloseo</h3>
        <Box color={'grey.500'} display={'flex'} alignItems={'center'} mb={1}>
          <LocationOn className={styles.locationIcon} />
          <span>Rome</span>
        </Box>
        <Box
          display={'flex'}
          alignItems={'center'}
          mb={1}
          className={gutterStyles.parent}
        >
          <Rating name={'rating'} value={2} size={'small'} />
          <Typography variant={'body2'} className={styles.rateValue}>
            4.0
          </Typography>
        </Box>
        <Typography color={'textSecondary'} variant={'body2'}>
          Talking about travelling or new jobs, many people often think of
          change of environment...
        </Typography>
        <Box
          mt={2}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Box
            display={'flex'}
            alignItems={'center'}
            className={gutterStyles.parent}
          >
            <FaceGroup
              faces={[
                'https://i.pravatar.cc/300?img=1',
                'https://i.pravatar.cc/300?img=2',
                'https://i.pravatar.cc/300?img=3',
                'https://i.pravatar.cc/300?img=4',
              ]}
              size={32}
              offset={-12}
            />
            <Typography
              component={'span'}
              variant={'body2'}
              color={'textSecondary'}
            >
              +420
            </Typography>
          </Box>
          <IconButton size={'small'}>
            <MoreHoriz />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

// hide-start
ReviewCard.metadata = {
  title: 'Review',
  path: 'card/review',
  files: [
    { pkg: 'mui-styles', path: 'cardMedia/wide/wideCardMedia.styles.js' },
    { pkg: 'mui-styles', path: 'shadow/faded/fadedShadow.styles.js' },
    { pkg: 'mui-styles', path: 'gutter/pushingGutter/pushingGutter.styles.js' },
  ],
};
// hide-end

export default ReviewCard;
