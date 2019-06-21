/* eslint-disable */
import React from 'react';
import ReviewCard01 from 'components/cards/ReviewCard01';
import CONSTANT from 'constant';

const demoCode = `
  import React from "react";
  import { createMuiTheme } from "@material-ui/core";
  import { ThemeProvider } from "@material-ui/styles";
  import ReviewCard01 from './ReviewCard01';
  import createOverrides from './theme';
  
  const baseTheme = createMuiTheme();
  
  const Demo = () => (
    // Normally, you need just one <ThemeProvider /> at root component
    <ThemeProvider
      theme={{
        ...baseTheme,
        overrides: createOverrides(baseTheme)
      }}
    >
      <ReviewCard01 />
    </ThemeProvider>
  )
  
  export default Demo
`;

const theme = `
  export default ({ spacing, palette }) => ({
    MuiCard: {
      root: {
        '&.MuiReviewCard--01': {
          marginBottom: 200,
          maxWidth: 304,
          margin: 'auto',
          overflow: 'initial',
          position: 'relative',
          transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
          boxShadow: 'none',
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
            boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
            borderRadius: spacing(0.5),
            margin: \`0 \${spacing(2)}px\`,
            backgroundColor: '#ffffff',
            position: 'absolute',
            top: '60%',
            padding: spacing(3),
            textAlign: 'left',
            '& .ContentHead': {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            },
            '& .MuiIcon--text': {
              fontSize: 14,
              color: palette.grey[500],
            },
            '& .ContentRating': {
              marginBottom: spacing(0.5),
              '& svg, .material-icons': {
                fontSize: 20,
                color: palette.grey[300],
              },
              '& .MuiIcon--starred': {
                color: '#ffbb00',
              },
              '& .MuiTypography--rating': {
                verticalAlign: 'top',
                fontWeight: 'bold',
                fontSize: 16,
                marginLeft: spacing(2),
                display: 'inline-block',
              },
            },
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              display: 'inline-block',
              border: '2px solid white',
              '&:not(:first-of-type)': {
                marginLeft: -spacing(1) * 1.5,
              },
            },
            '& .ContentTail': {
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              '& .MuiTypography--reviewer': {
                marginLeft: spacing(1),
                marginRight: 'auto',
              },
            },
          },
          '& .MuiIconButton-root': {
            padding: spacing(1),
          },
        },
      },
    },
  });
`;

const coreCode = `
  import React from 'react';
  import Avatar from '@material-ui/core/Avatar';
  import Card from '@material-ui/core/Card';
  import CardMedia from '@material-ui/core/CardMedia';
  import CardContent from '@material-ui/core/CardContent';
  import IconButton from '@material-ui/core/IconButton';
  import Typography from '@material-ui/core/Typography';
  import Icon from '@material-ui/core/Icon';
  
  const faces = [
    'http://i.pravatar.cc/300?img=6',
    'http://i.pravatar.cc/300?img=7',
    'http://i.pravatar.cc/300?img=8',
    'http://i.pravatar.cc/300?img=9',
  ];
  
  const ReviewCard01 = () => (
    <Card className={'MuiReviewCard--01'}>
      <CardMedia
        component={'img'}
        className={'MuiCardMedia-root'}
        src={
          'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
        }
      />
      <CardContent className={'MuiCardContent-root'}>
        <div className={'ContentHead'}>
          <Typography
            className={'MuiTypography--heading'}
            variant={'h6'}
            gutterBottom
          >
            Colloseo
          </Typography>
          <IconButton className={'MuiIconButton-root'}>
            <Icon>favorite</Icon>
          </IconButton>
        </div>
        <Typography
          className={'MuiTypography--subheading'}
          color={'textSecondary'}
          gutterBottom
        >
          <Icon className={'MuiIcon--text'}>location_on</Icon> Rome
        </Typography>
        <div className={'ContentRating'}>
          <Icon className={'MuiIcon--starred'}>star_rounded</Icon>
          <Icon className={'MuiIcon--starred'}>star_rounded</Icon>
          <Icon className={'MuiIcon--starred'}>star_rounded</Icon>
          <Icon className={'MuiIcon--starred'}>star_rounded</Icon>
          <Icon>star_rounded</Icon>
          <Typography className={'MuiTypography--rating'} inline>
            4.0
          </Typography>
        </div>
        <Typography gutterBottom color={'textSecondary'}>
          Talking about travelling or new jobs, many people often think of change
          of environment...
        </Typography>
        <div className={'ContentTail'}>
          {faces.map(face => (
            <Avatar className={'MuiAvatar-root'} key={face} src={face} />
          ))}
          <Typography
            className={'MuiTypography--reviewer'}
            color={'textSecondary'}
          >
            +420
          </Typography>
          <IconButton className={'MuiIconButton-root'}>
            <Icon>more_horiz</Icon>
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
  
  export default ReviewCard01;
  
`;

ReviewCard01.codeSandbox = 'https://codesandbox.io/s/4jv45yopj0';
ReviewCard01.info = {
  name: 'Review Card I',
  description: 'Commonly found in review site',
  sandboxTemplateUrl: CONSTANT.sandBoxThemeTemplate,
  links: [
    {
      label: 'Official Examples',
      url: 'https://material-ui.com/components/cards/#simple-card',
    },
    {
      label: 'Card API',
      url: 'https://material-ui.com/api/card',
    },
    {
      label: 'CardMedia API',
      url: 'https://material-ui.com/api/card-media/#cardmedia-api',
    },
    {
      label: 'CardContent API',
      url: 'https://material-ui.com/api/card-content/#cardcontent-api',
    },
  ],
  files: [
    {
      label: 'Demo.js',
      code: demoCode,
    },
    {
      label: 'ReviewCard01.js',
      code: coreCode,
    },
    {
      label: 'theme.js',
      code: theme,
    },
  ],
  libraries: [],
  dependencies: [],
};

export default ReviewCard01;
