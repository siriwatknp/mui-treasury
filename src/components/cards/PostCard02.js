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

PostCard02.getTheme = ({ spacing, palette, breakpoints }) => ({
  MuiCard: {
    root: {
      '&.MuiPostCard--02': {
        borderRadius: spacing(2), // 16px
        transition: '0.3s',
        boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
        position: 'relative',
        maxWidth: 800,
        marginLeft: 'auto',
        overflow: 'initial',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${spacing(2)}px 0`,
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
        },
        [breakpoints.up('sm')]: {
          flexDirection: 'row',
          width: '95%',
        },
        '& .MuiCardMedia-root': {
          flexShrink: 0,
          position: 'relative',
          width: '80%',
          maxWidth: 256,
          marginTop: '-16%',
          paddingTop: '48%',
          boxShadow: '4px 4px 20px 1px rgba(252, 56, 56, 0.2)',
          borderRadius: spacing(2), // 16px
          backgroundSize: 'contain',
          backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
          backgroundColor: palette.common.white,
          overflow: 'hidden',
          [breakpoints.up('sm')]: {
            width: '40%',
            marginTop: 0,
            marginLeft: '-8%',
            backgroundSize: 'cover',
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
        '& .MuiCardContent-root': {
          textAlign: 'center',
          padding: spacing(2),
          [breakpoints.up('sm')]: {
            paddingLeft: spacing(3),
            textAlign: 'left',
          },
        },
        '& .MuiTypography--heading': {
          fontWeight: 'bold',
        },
        '& .MuiTypography--subheading': {
          marginBottom: spacing(2),
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

export default PostCard02;
