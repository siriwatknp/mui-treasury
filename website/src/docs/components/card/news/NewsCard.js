import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
import TextInfoCardContent from '@mui-treasury/components/cardContent/textInfo';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useText01CardContentStyles } from '@mui-treasury/styles/cardContent/text01';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';


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
  const textCardContentStyles = useText01CardContentStyles();
  const shadowStyles = useBouncyShadowStyles();
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia classes={mediaStyles} image={'https://images.unsplash.com/photo-1468774871041-fc64dd5522f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80'} />
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
  creators: [require('constants/creators').siriwatknp],
  files: [
    { pkg: 'mui-styles', path: 'shadow/bouncy/bouncyShadow.styles.js' },
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
      path: 'cardContent/text01/text01CardContent.styles.js',
    },
  ],
};
// hide-end

export default NewsCard;
