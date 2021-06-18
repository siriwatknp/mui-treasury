import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import RestaurantMenuRounded from '@material-ui/icons/RestaurantMenuRounded';
import TripOrigin from '@material-ui/icons/TripOrigin';

const useTagCardDemoStyles = makeStyles(({ palette }) => ({
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

export const TagCardDemo = React.memo(function TagCard() {
  const tagStyles = useTagCardDemoStyles();
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
    title={'Tag Card'}
    description={''}
    creators={[require('constants/creators').renamoo]}
  >
    <TagCardDemo />
  </Showcase>
);
const metadata: IMetadata = {
  path: 'components/card/tag',
  colSpan: 3,
  rowSpan: 2,
  frameProps: { bgcolor: '#fff' },
  files: [],
};
// @ts-ignore
TagCardDemo.Showcase = AttachedShowcase;
// @ts-ignore
TagCardDemo.metadata = metadata;
// hide-end
export default TagCardDemo;
