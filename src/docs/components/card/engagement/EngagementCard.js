import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { PeopleCardFooter } from '@mui-treasury/components/cardFooter';
import { TextInfoCardContent } from '@mui-treasury/components/cardContent';
import { useTextCardContent01Styles } from '@mui-treasury/styles/cardContent';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow';
import MOCK from 'constants/mock';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 304,
    margin: 'auto',
  },
  content: {
    padding: 24,
  },
}));

const EngagementCard = () => {
  const cardStyles = useStyles();
  const wideCardMediaStyles = useWideCardMediaStyles();
  const fadeShadowStyles = useFadedShadowStyles();
  const textCardContentStyles = useTextCardContent01Styles();
  return (
    <Card className={cx(cardStyles.root, fadeShadowStyles.root)}>
      <CardMedia
        // component={'img'} // add this line to use <img />
        classes={wideCardMediaStyles}
        image={MOCK.img}
      />
      <CardContent className={cardStyles.content}>
        <TextInfoCardContent
          classes={textCardContentStyles}
          overline={'March 20, 2019'}
          heading={'Nature Around Us'}
          body={
            'We are going to learn different kinds of species in nature that live together to form amazing environment.'
          }
        />
        <PeopleCardFooter faces={MOCK.facesX4} />
      </CardContent>
    </Card>
  );
};

EngagementCard.propTypes = {};
EngagementCard.defaultProps = {};

// hide-start
EngagementCard.metadata = {
  title: 'Engagement',
  description: "Show people's engagement",
  path: 'card/engagement',
  files: [
    { pkg: 'mui-styles', path: 'shadow/faded/fadedShadow.styles.js' },
    {
      pkg: 'mui-styles',
      path: 'cardMedia/wide/wideCardMedia.styles.js',
    },
    {
      pkg: 'mui-components',
      path: 'cardContent/textInfo/TextInfoCardContent.js',
    },
    {
      pkg: 'mui-styles',
      path: 'cardContent/text01/textCardContent01.styles.js',
    },
    {
      pkg: 'mui-components',
      path: 'cardFooter/people/PeopleCardFooter.js',
    },
    {
      pkg: 'mui-styles',
      path: 'cardFooter/people/peopleCardFooter.styles.js',
    },
  ],
};
// hide-end

export default EngagementCard;
