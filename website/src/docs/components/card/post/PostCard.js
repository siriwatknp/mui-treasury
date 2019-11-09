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
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia';
import { useTextCardContent01Styles } from '@mui-treasury/styles/cardContent';
import { TextInfoCardContent } from '@mui-treasury/components/cardContent';
import MOCK from 'constants/mock';

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
  const textCardContentStyles = useTextCardContent01Styles();
  return (
    <Card className={cx(cardStyles.root, shadowStyles.root)}>
      <CardMedia classes={mediaStyles} image={MOCK.snowImg} />
      <Avatar className={cardStyles.avatar} src={MOCK.face} />
      <CardContent className={cardStyles.content}>
        <TextInfoCardContent
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
  path: 'card/post',
  files: [],
};
// hide-end

export default PostCard;
