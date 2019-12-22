import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import RestaurantMenuRounded from '@material-ui/icons/RestaurantMenuRounded';
import TripOrigin from '@material-ui/icons/TripOrigin';
import { useTagCardStyles } from '@mui-treasury/styles/cardContent/tag';
import React from 'react';

const TagCard = () => {
  const tagStyles = useTagCardStyles();
  return (
    <Card className={tagStyles.card} elevation={0}>
      <CardContent>
        <TripOrigin className={tagStyles.hole} />
        <RestaurantMenuRounded
          fontSize="inherit"
          style={{ fontSize: '83px', margin: 'auto', width: '100%' }}
        ></RestaurantMenuRounded>
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

TagCard.metadata = {
  title: 'Tag Card',
  path: 'card/tag', // reference to markdown file
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
};

export default TagCard;
