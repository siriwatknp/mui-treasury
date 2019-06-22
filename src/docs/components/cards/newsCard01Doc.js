/* eslint-disable */
import React from 'react';
import NewsCard01 from 'components/cards/NewsCard01';
import CONSTANT from 'constant';

const demoCode = `
  import React from "react";
  import { createMuiTheme } from "@material-ui/core";
  import { ThemeProvider } from "@material-ui/styles";
  import NewsCard01 from './NewsCard01';
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
      <NewsCard01 />
    </ThemeProvider>
  )
  
  export default Demo
`;

const theme = `
  export default ({ spacing, palette }) => ({
    MuiCard: {
      root: {
        '&.MuiNewsCard--01': {
          maxWidth: 304,
          margin: 'auto',
          transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
          boxShadow: 'none',
          borderRadius: 0,
          '& button': {
            marginLeft: 0,
          },
          '&:hover': {
            transform: 'scale(1.04)',
            boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
          },
          '& .MuiCardMedia-root': {
            paddingTop: '65%',
            position: 'relative',
            '& .MuiTypography--category': {
              color: 'rgba(255, 255, 255, 0.87)',
              position: 'absolute',
              top: spacing(2.5),
              left: spacing(2.5),
              letterSpacing: 0.5,
              fontWeight: 900,
            },
          },
          '& .MuiCardContent-root': {
            textAlign: 'left',
            padding: spacing(3),
            '& .MuiTypography--overline': {
              color: palette.grey[500],
              fontWeight: 'bold',
            },
            '& .MuiTypography--heading': {
              fontWeight: 900,
              lineHeight: 1.3,
            },
            '& .MuiTypography--subheading': {
              lineHeight: 1.8,
              color: palette.text.primary,
              fontWeight: 'bold',
            },
          },
          '& .MuiCardActions-root': {
            padding: spacing(0, 3, 3),
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        },
      },
    },
    MuiButton: {
      root: {
        '& svg, .material-icons': {
          marginLeft: spacing(1),
        },
      },
      label: {
        textTransform: 'initial',
      },
    },
  });
`;

const coreCode = `
  import React from 'react';
  import Card from '@material-ui/core/Card';
  import CardMedia from '@material-ui/core/CardMedia';
  import CardContent from '@material-ui/core/CardContent';
  import CardActions from '@material-ui/core/CardActions';
  import Typography from '@material-ui/core/Typography';
  import Button from '@material-ui/core/Button';
  import Icon from '@material-ui/core/Icon';
  
  const NewsCard01 = () => (
    <Card className={'MuiNewsCard--01'}>
      <CardMedia
        className={'MuiCardMedia-root'}
        image={
          'https://images.unsplash.com/photo-1468774871041-fc64dd5522f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80'
        }
      >
        <Typography className={'MuiTypography--category'}>NEWS</Typography>
      </CardMedia>
      <CardContent className={'MuiCardContent-root'}>
        <Typography
          className={'MuiTypography--overline'}
          variant={'overline'}
          gutterBottom
        >
          March 20 2019
        </Typography>
        <Typography
          className={'MuiTypography--heading'}
          variant={'h6'}
          gutterBottom
        >
          What happened in Thailand?
        </Typography>
        <Typography className={'MuiTypography--subheading'} variant={'caption'}>
          Kayaks crowd Three Sisters Springs, where people and manatees maintain
          controversial coexistence.
        </Typography>
      </CardContent>
      <CardActions className={'MuiCardActions-root'}>
        <Button color={'primary'} fullWidth>
          Find Out More <Icon>chevron_right_rounded</Icon>
        </Button>
      </CardActions>
    </Card>
  );
  
  export default NewsCard01;
`;

NewsCard01.codeSandbox = 'https://codesandbox.io/s/n3pn2mxzlm';
NewsCard01.info = {
  name: 'News Card',
  description: 'Best for Blog',
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
    {
      label: 'CardActions API',
      url: 'https://material-ui.com/api/card-actions/#cardactions-api',
    },
  ],
  files: [
    {
      label: 'Demo.js',
      code: demoCode,
    },
    {
      label: 'NewsCard01.js',
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

export default NewsCard01;
