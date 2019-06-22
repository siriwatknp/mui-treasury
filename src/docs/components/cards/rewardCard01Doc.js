/* eslint-disable */
import React from 'react';
import RewardCard01 from 'components/cards/RewardCard01';
import CONSTANT from 'constant';

const demoCode = `
  import React from "react";
  import { createMuiTheme } from "@material-ui/core";
  import { ThemeProvider } from "@material-ui/styles";
  import RewardCard01 from './RewardCard01';
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
      <RewardCard01 />
    </ThemeProvider>
  )
  
  export default Demo
`;

const theme = `
  export default ({ spacing }) => ({
    MuiCard: {
      root: {
        '&.MuiRewardCard--01': {
          borderRadius: spacing(2), // 16px
          transition: '0.3s',
          boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
          width: '95%',
          position: 'relative',
          maxWidth: 800,
          marginLeft: 'auto',
          overflow: 'initial',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: 8,
          paddingRight: 8,
          background:
            'linear-gradient(34deg, rgba(55,16,83,1) 0%, rgba(162,73,190,1) 29%, rgba(33,16,83,1) 92%)',
          '& .MuiCardMedia-root': {
            flexShrink: 0,
            width: '30%',
            paddingTop: '30%',
            marginLeft: 'auto',
          },
          '& .MuiCardContent-root': {
            textAlign: 'left',
            padding: spacing(2),
          },
          '& .MuiTypography--overline': {
            lineHeight: 2,
            color: '#ffffff',
            fontWeight: 'bold',
            opacity: 0.7,
          },
          '& .MuiTypography--heading': {
            fontWeight: '900',
            color: '#ffffff',
            letterSpacing: 0.5,
          },
          '& .MuiTypography--subheading': {
            marginBottom: spacing(2),
            color: '#ffffff',
          },
          '& .MuiButton--readMore': {
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            borderRadius: 100,
            paddingLeft: 48,
            paddingRight: 48,
            color: '#ffffff',
            textTransform: 'none',
          },
        },
      },
    },
  });
`;

const coreCode = `
  import React from 'react';
  import Button from '@material-ui/core/Button';
  import Card from '@material-ui/core/Card';
  import CardMedia from '@material-ui/core/CardMedia';
  import CardContent from '@material-ui/core/CardContent';
  import Typography from '@material-ui/core/Typography';
  
  const RewardCard01 = () => (
    <Card className={'MuiRewardCard--01'}>
      <CardContent className={'MuiCardContent-root'}>
        <Typography className={'MuiTypography--overline'} variant={'overline'}>
          Songkran Festival Contest
        </Typography>
        <Typography
          className={'MuiTypography--heading'}
          variant={'h6'}
          gutterBottom
        >
          Result Announced
        </Typography>
        <Button className={'MuiButton--readMore'}>View Winners</Button>
      </CardContent>
      <CardMedia
        className={'MuiCardMedia-root'}
        image={'https://jkkm.info/ui/images/awards/victory.png'}
      />
    </Card>
  );
  
  export default RewardCard01;
  
`;

RewardCard01.codeSandbox = 'https://codesandbox.io/s/88y1v9l6j';
RewardCard01.info = {
  name: 'Reward Card',
  description: 'Commonly used in games.',
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
      label: 'RewardCard01.js',
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

export default RewardCard01;
