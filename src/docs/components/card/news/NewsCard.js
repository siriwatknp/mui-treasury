import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
import { TextInfoCardContent } from '@mui-treasury/components/cardContent';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia';
import { useTextCardContent01Styles } from '@mui-treasury/styles/cardContent';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow';
import MOCK from 'constants/mock';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 304,
    margin: 'auto',
    boxShadow: 'none',
    borderRadius: 0,
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));

const NewsCard = () => {
  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const textCardContentStyles = useTextCardContent01Styles();
  const shadowStyles = useBouncyShadowStyles();
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia classes={mediaStyles} image={MOCK.oceanImg} />
      <CardContent className={styles.content}>
        <TextInfoCardContent
          classes={textCardContentStyles}
          overline={'March 20, 2019'}
          heading={'What happened in Thailand?'}
          body={
            'Kayaks crowd Three Sisters Springs, where people and manatees maintain controversial coexistence.'
          }
        />
        <Button color={'primary'} fullWidth className={styles.cta}>
          Find Out More <ChevronRightRounded />
        </Button>
      </CardContent>
    </Card>
  );
};

// hide-start
NewsCard.metadata = {
  title: 'News',
  description: 'Best for Blog',
  path: 'card/news',
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

export default NewsCard;
