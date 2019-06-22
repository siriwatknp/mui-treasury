/* eslint-disable max-len,no-script-url,jsx-a11y/anchor-is-valid */
import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const NewsCard02 = () => (
  <Card className={'MuiNewsCard--02'}>
    <CardMedia
      component={'img'}
      className={'MuiCardMedia-root'}
      src={
        'https://images.unsplash.com/photo-1519810755548-39cd217da494?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
      }
    />
    <CardContent className={'MuiCardContent-root'}>
      <Typography
        className={'MuiTypography--heading'}
        color={'inherit'}
        variant={'h3'}
        gutterBottom
      >
        Space
      </Typography>
      <Typography className={'MuiTypography--subheading'} color={'inherit'}>
        The space between the stars and galaxies is largely empty.
      </Typography>
      <Typography
        className={'MuiTypography--explore'}
        color={'inherit'}
        variant={'caption'}
      >
        <Link color={'inherit'} underline={'none'}>
          EXPLORE
        </Link>
      </Typography>
    </CardContent>
  </Card>
);

NewsCard02.getTheme = ({ spacing, palette }) => ({
  MuiCard: {
    root: {
      '&.MuiNewsCard--02': {
        maxWidth: 304,
        margin: 'auto',
        position: 'relative',
        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
        boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
        borderRadius: 0,
        '&:hover': {
          '& .MuiTypography--explore': {
            transform: 'scale(1.2)',
          },
        },
        '& button': {
          marginLeft: 0,
        },
        '& .MuiCardMedia-root': {
          height: '100%',
        },
        '& .MuiCardContent-root': {
          position: 'absolute',
          bottom: 0,
          padding: spacing(3),
          color: palette.common.white,
          textAlign: 'center',
          '& .MuiTypography--subheading': {
            lineHeight: 1.8,
            letterSpacing: 0.5,
            marginBottom: '40%',
          },
          '& .MuiTypography--explore': {
            marginBottom: 16,
            transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
            letterSpacing: 2,
          },
        },
      },
    },
  },
});

export default NewsCard02;
