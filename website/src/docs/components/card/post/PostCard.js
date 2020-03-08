import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderRounded from '@material-ui/icons/FavoriteBorderRounded';
import Share from '@material-ui/icons/Share';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import TextInfoContent from '@mui-treasury/components/content/textInfo';


const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 304,
    margin: 'auto',
  },
  content: {
    padding: 24,
  },
  avatar: {
    width: 50,
    height: 50,
    border: '2px solid #fff',
    margin: '-48px 32px 0 auto',
    '& > img': {
      margin: 0,
    },
  },
}));

const PostCard = () => {
  const cardStyles = useStyles();
  const mediaStyles = useSlopeCardMediaStyles();
  const shadowStyles = useSoftRiseShadowStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  return (
    <Card className={cx(cardStyles.root, shadowStyles.root)}>
      <CardMedia classes={mediaStyles} image={'https://images.unsplash.com/photo-1517147177326-b37599372b73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2229&q=80'} />
      <Avatar className={cardStyles.avatar} src={'https://i.pravatar.cc/300'} />
      <CardContent className={cardStyles.content}>
        <TextInfoContent
          classes={textCardContentStyles}
          heading={'First Snow Storm'}
          body={
            'Snow storm coming in Sommaroy island, Arctic Norway. This is something that you definitely wanna see in your life.'
          }
        />
      </CardContent>
      <Box px={2} pb={2} mt={-1}>
        <IconButton>
          <Share />
        </IconButton>
        <IconButton>
          <FavoriteBorderRounded />
        </IconButton>
      </Box>
    </Card>
  );
};

// hide-start
PostCard.metadata = {
  title: 'Post',
  path: 'component/card/post',
  creators: [require('constants/creators').siriwatknp],
  files: [
    { pkg: 'mui-styles', path: 'shadow/softRise/softRiseShadow.styles.js' },
    { pkg: 'mui-styles', path: 'cardMedia/slope/slopeCardMedia.styles.js' },
    { pkg: 'mui-components', path: 'content/textInfo/TextInfoContent.js' },
    { pkg: 'mui-styles', path: 'textInfoContent/n01/n01TextInfoContent.styles.js' },
  ],
};
// hide-end

export default PostCard;
