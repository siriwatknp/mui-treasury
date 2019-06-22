/* eslint-disable */
import React from 'react';
import EngagementCard01 from 'components/cards/EngagementCard01';
import CONSTANT from 'constant';

const demoCode = `
  import React from "react";
  import { createMuiTheme } from "@material-ui/core";
  import { ThemeProvider } from "@material-ui/styles";
  import EngagementCard01 from './EngagementCard01';
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
      <EngagementCard01 />
    </ThemeProvider>
  )
  
  export default Demo
`;

const theme = `
  export default ({ spacing }) => ({
    MuiCard: {
      root: {
        '&.MuiEngagementCard--01': {
          transition: '0.3s',
          maxWidth: 304,
          margin: 'auto',
          boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
          '&:hover': {
            boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
          },
          '& .MuiCardMedia-root': {
            paddingTop: '56.25%',
          },
          '& .MuiCardContent-root': {
            textAlign: 'left',
            padding: spacing(3),
          },
          '& .MuiDivider-root': {
            margin: spacing(3, 0),
          },
          '& .MuiTypography--heading': {
            fontWeight: 'bold',
          },
          '& .MuiTypography--subheading': {
            lineHeight: 1.8,
          },
          '& .MuiAvatar-root': {
            display: 'inline-block',
            border: '2px solid white',
            '&:not(:first-of-type)': {
              marginLeft: -spacing(1),
            },
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
  import Divider from '@material-ui/core/Divider';
  import Typography from '@material-ui/core/Typography';
  
  const faces = [
    'http://i.pravatar.cc/300?img=1',
    'http://i.pravatar.cc/300?img=2',
    'http://i.pravatar.cc/300?img=3',
    'http://i.pravatar.cc/300?img=4',
  ];
  
  const EngagementCard01 = () => (
    <Card className={'MuiEngagementCard--01'}>
      <CardMedia
        className={'MuiCardMedia-root'}
        image={
          'https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg'
        }
      />
      <CardContent className={'MuiCardContent-root'}>
        <Typography
          className={'MuiTypography--heading'}
          variant={'h6'}
          gutterBottom
        >
          Nature Around Us
        </Typography>
        <Typography className={'MuiTypography--subheading'} variant={'caption'}>
          We are going to learn different kinds of species in nature that live
          together to form amazing environment.
        </Typography>
        <Divider className={'MuiDivider-root'} light />
        {faces.map(face => (
          <Avatar className={'MuiAvatar-root'} key={face} src={face} />
        ))}
      </CardContent>
    </Card>
  );
  
  export default EngagementCard01;
`;

EngagementCard01.codeSandbox = 'https://codesandbox.io/s/2xk199xrzp';
EngagementCard01.info = {
  name: 'Engagement Card',
  description: "Show people's engagement",
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
      label: 'EngagementCard01.js',
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

export default EngagementCard01;
