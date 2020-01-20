import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextInfoCardContent from '@mui-treasury/components/cardContent/textInfo';
import { useBlogCardContentStyles } from '@mui-treasury/styles/cardContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: 'auto',
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    maxWidth: 500,
    marginLeft: 'auto',
    overflow: 'initial',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: spacing(2),
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(2),
    },
  },
  media: {
    width: '88%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: '48%',
    borderRadius: spacing(2),
    backgroundColor: '#fff',
    position: 'relative',
    [breakpoints.up('md')]: {
      width: '100%',
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: 'translateX(-8px)',
    },
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));

const BlogCard = () => {
  const styles = useStyles();
  const {
    button: buttonStyles,
    ...cardContentStyles
  } = useBlogCardContentStyles();
  const shadowStyles = useOverShadowStyles();
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={styles.media}
        image={
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png'
        }
      />
      <CardContent>
        <TextInfoCardContent
          classes={cardContentStyles}
          overline={'28 MAR 2019'}
          heading={'What is Git ?'}
          body={
            'Git is a distributed version control system. Every dev has a working copy of the code and...'
          }
        />
        <Button className={buttonStyles}>Read more</Button>
      </CardContent>
    </Card>
  );
};

// hide-start
BlogCard.metadata = {
  title: 'Blog',
  description: 'Personal Blog',
  path: 'card/blog',
  size: 'large',
  frameProps: {
    my: 3,
  },
  creators: [require('constants/creators').siriwatknp],
  files: [
    { pkg: 'mui-styles', path: 'shadow/over/overShadow.styles.js' },
    {
      pkg: 'mui-components',
      path: 'cardContent/textInfo/TextInfoCardContent.js',
    },
    {
      pkg: 'mui-styles',
      path: 'cardContent/blog/blogCardContent.styles.js',
    },
  ],
};
// hide-end

export default BlogCard;
