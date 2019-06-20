/* eslint-disable max-len,no-script-url,jsx-a11y/anchor-is-valid */
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

const PostCard01 = () => (
  <Card className={'MuiPostCard--01'}>
    <CardMedia
      className={'MuiCardMedia-root'}
      image={
        'https://images.unsplash.com/photo-1517147177326-b37599372b73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2229&q=80'
      }
    >
      <div className={'MuiTag--ribbon'}>
        <Typography color={'inherit'} className={'MuiTypography-root'}>
          Norway
        </Typography>
      </div>
      <Avatar
        className={'MuiAvatar-root'}
        src={'http://i.pravatar.cc/300?img=5'}
      />
    </CardMedia>
    <CardContent className={'MuiCardContent-root'}>
      <Typography
        className={'MuiTypography--heading'}
        variant={'h6'}
        gutterBottom
      >
        First Snow Storm
      </Typography>
      <Typography className={'MuiTypography--subheading'} variant={'caption'}>
        Snow storm coming in Sommaroy island, Arctic Norway. This is something
        that you definitely wanna see in your life.
      </Typography>
    </CardContent>
    <CardActions className={'MuiCardActions-root'}>
      <Typography variant={'caption'}>
        <Link block href={'javascript:;'} underline={'none'}>
          March 8, 2016
        </Link>
      </Typography>
      <div>
        <IconButton>
          <Icon>share</Icon>
        </IconButton>
        <IconButton>
          <Icon>favorite_border_rounded</Icon>
        </IconButton>
      </div>
    </CardActions>
  </Card>
);

PostCard01.getTheme = muiBaseTheme => ({
  MuiCard: {
    root: {
      '&.MuiPostCard--01': {
        transition: '0.3s',
        maxWidth: 304,
        margin: 'auto',
        boxShadow: '0 0 20px 0 rgba(0,0,0,0.12)',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
        },
        '& .MuiCardMedia-root': {
          paddingTop: '56.25%',
          position: 'relative',
          '& .MuiTag--ribbon': {
            position: 'absolute',
            top: muiBaseTheme.spacing(2),
            left: muiBaseTheme.spacing(2),
            backgroundColor: muiBaseTheme.palette.secondary.main,
            color: '#ffffff !important',
            padding: '2px 8px',
            boxShadow: '0 2px 12px 2px rgba(0,0,0,0.5)',
            borderTopLeftRadius: 2,
            borderBottomLeftRadius: 2,
            '&:before, &:after': {
              position: 'absolute',
              right: -16,
              content: '" "',
              borderLeft: `16px solid ${muiBaseTheme.palette.secondary.main}`,
            },
            '&:before': {
              top: 0,
              borderBottom: '12px solid transparent',
            },
            '&:after': {
              bottom: 0,
              borderTop: '12px solid transparent',
            },
            '& .MuiTypography-root': {
              fontWeight: 'bold',
            },
          },
          '& .MuiAvatar-root': {
            position: 'absolute',
            right: '12%',
            bottom: 0,
            transform: 'translateY(20%)',
            width: 48,
            height: 48,
            zIndex: 1,
          },
          '&:after': {
            content: '" "',
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100%',
            borderBottom: '32px solid #ffffff',
            borderLeft: '400px solid transparent',
          },
        },
        '& .MuiCardContent-root': {
          textAlign: 'left',
          padding: muiBaseTheme.spacing(3),
        },
        '& .MuiTypography--heading': {
          fontWeight: 'bold',
        },
        '& .MuiTypography--subheading': {
          lineHeight: 1.8,
        },
        '& .MuiCardActions-root': {
          padding: muiBaseTheme.spacing(0, 3, 3),
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
      },
    },
  },
});
PostCard01.displayName = 'Card';
PostCard01.metadata = {
  name: 'Post Card',
  description: 'Personal Post',
};
PostCard01.codeSandbox = 'https://codesandbox.io/s/01m058n220';

export default PostCard01;
