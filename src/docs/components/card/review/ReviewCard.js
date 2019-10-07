import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import LocationOn from '@material-ui/icons/LocationOn';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow';
import { usePushingGutter } from '@mui-treasury/styles/gutter';
import MOCK from 'constants/mock';

const useStyles = makeStyles(() => ({
  root: {
    overflow: 'initial',
    maxWidth: 304,
  },
  title: {
    marginBottom: 4,
  },
  rateValue: {
    fontWeight: 'bold',
    marginTop: 2,
  },
  content: {
    padding: 24,
    margin: '-24% 16px 0',
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  locationIcon: {
    fontSize: 18,
  },
}));

const ReviewCard = () => {
  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const shadowStyles = useFadedShadowStyles();
  const gutterStyles = usePushingGutter({ firstExcluded: true });
  return (
    <Card elevation={0} className={styles.root}>
      <CardMedia classes={mediaStyles} image={MOCK.colosseumImg} />
      <CardContent className={cx(shadowStyles.root, styles.content)}>
        <h3 className={styles.title}>Colloseo</h3>
        <Box
          className={gutterStyles.parent}
          color={'grey.500'}
          display={'flex'}
          alignItems={'center'}
          mb={1}
        >
          <LocationOn className={styles.locationIcon} />
          <span>Rome</span>
        </Box>
        <Box
          display={'flex'}
          alignItems={'center'}
          mb={1}
          className={gutterStyles.parent}
        >
          <Rating value={2} size={'small'} />
          <Typography variant={'body2'} className={styles.rateValue}>
            4.0
          </Typography>
        </Box>
        <Typography color={'textSecondary'} variant={'body2'}>
          Talking about travelling or new jobs, many people often think of
          change of environment...
        </Typography>
      </CardContent>
    </Card>
  );
};

ReviewCard.propTypes = {};
ReviewCard.defaultProps = {};

// hide-start
ReviewCard.metadata = {
  title: 'Review',
  path: 'card/review',
  files: [],
};
// hide-end

export default ReviewCard;
