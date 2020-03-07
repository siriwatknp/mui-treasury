import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import RestaurantMenuRounded from '@material-ui/icons/RestaurantMenuRounded';
import TripOrigin from '@material-ui/icons/TripOrigin';

const useTagCardStyles = makeStyles(({ palette }) => ({
  card: {
    width: '180px',
    height: '230px',
    margin: '20px 0 0 0',
    display: 'flex',
    background: palette.background.default,
    position: 'relative',
    overflow: 'visible',
    '&::before': {
      content: "' '",
      width: '100%',
      'border-bottom': `30px solid ${palette.background.default}`,
      'border-left': ' 20px solid transparent',
      'border-right': '20px solid transparent',
      position: 'absolute',
      top: '-30px',
    },
  },
  hole: {
    position: 'absolute',
    top: '-20px',
    margin: 'auto',
    width: '100%',
    left: 0,
  },
}));

const TagCard = () => {
  const tagStyles = useTagCardStyles();
  return (
    <Card className={tagStyles.card} elevation={0}>
      <CardContent>
        <TripOrigin className={tagStyles.hole} />
        <RestaurantMenuRounded
          fontSize="inherit"
          style={{ fontSize: '83px', margin: 'auto', width: '100%' }}
        />
        <Typography align="center" gutterBottom>
          BreakFast
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
          align="center"
          component="p"
        >
          eggs benedict <br />
          BLT sandwich <br />
          french omelette
        </Typography>
      </CardContent>
    </Card>
  );
};

// hide-start
TagCard.metadata = {
  title: 'Tag Card',
  path: 'component/card/tag',
  files: [
    {
      pkg: 'mui-styles',
      path: 'cardContent/tag/tagCard.styles.js',
    },
  ],
  relates: [],
  frameProps: {
    bgcolor: '#e9e9e9',
  },
  creators: [require('constants/creators').renamoo],
};
// hide-end

export default TagCard;
