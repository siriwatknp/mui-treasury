/* eslint-disable max-len,no-script-url,jsx-a11y/anchor-is-valid */
import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const PostCard02 = () => (
  <Card className={'MuiPostCard--02'}>
    <CardMedia
      className={'MuiCardMedia-root'}
      image={
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png'
      }
    />
    <CardContent className={'MuiCardContent-root'}>
      <Typography className={'MuiTypography--date'} variant={'overline'}>
        28 Mar 2019
      </Typography>
      <Typography
        className={'MuiTypography--heading'}
        variant={'h6'}
        gutterBottom
      >
        What is Git ?
      </Typography>
      <Typography className={'MuiTypography--subheading'}>
        Git is a distributed version control system. Every dev has a working
        copy of the code and...
      </Typography>
      <Button className={'MuiButton--readMore'}>Read More</Button>
    </CardContent>
  </Card>
);

PostCard02.getTheme = muiBaseTheme => ({
  MuiCard: {
    root: {
      '&.MuiPostCard--02': {
        borderRadius: muiBaseTheme.spacing(2), // 16px
        transition: '0.3s',
        boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
        width: '95%',
        position: 'relative',
        maxWidth: 800,
        marginLeft: 'auto',
        overflow: 'initial',
        background: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        padding: `${muiBaseTheme.spacing(2)}px 0`,
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
        },
        '& .MuiCardMedia-root': {
          flexShrink: 0,
          width: '40%',
          paddingTop: '48%',
          transform: 'translateX(-24%)',
          boxShadow: '4px 4px 20px 1px rgba(252, 56, 56, 0.2)',
          borderRadius: muiBaseTheme.spacing(2), // 16
          backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
          backgroundColor: muiBaseTheme.palette.common.white,
          overflow: 'hidden',
          '&:after': {
            content: '" "',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
            borderRadius: muiBaseTheme.spacing(2), // 16
            opacity: 0.5,
          },
        },
        '& .MuiCardContent-root': {
          textAlign: 'left',
          paddingLeft: 0,
          padding: muiBaseTheme.spacing(2),
        },
        '& .MuiTypography--heading': {
          fontWeight: 'bold',
        },
        '& .MuiTypography--subheading': {
          marginBottom: muiBaseTheme.spacing(2),
        },
        '& .MuiButton--readMore': {
          backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
          boxShadow: '0px 4px 32px rgba(252, 56, 56, 0.4)',
          borderRadius: 100,
          paddingLeft: 24,
          paddingRight: 24,
          color: '#ffffff',
        },
      },
    },
  },
});
PostCard02.metadata = {
  name: 'Post Card II',
  description: 'Personal Post',
  credit: 'https://codemyui.com/gradient-card-ui-image-info-slider/',
};
PostCard02.codeSandbox = 'https://codesandbox.io/s/94v9y3kwor';

export default PostCard02;
