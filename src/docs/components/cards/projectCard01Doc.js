/* eslint-disable */
import React from 'react';
import ProjectCard01 from 'components/cards/ProjectCard01';
import CONSTANT from 'constant';

const demoCode = `
  import React from "react";
  import { createMuiTheme } from "@material-ui/core";
  import { ThemeProvider } from "@material-ui/styles";
  import ProjectCard01 from './ProjectCard01';
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
      <ProjectCard01 />
    </ThemeProvider>
  )
  
  export default Demo
`;

const theme = `
  export default ({ palette, spacing }) => ({
    MuiCard: {
      root: {
        '&.MuiProjectCard--01': {
          transition: '0.3s',
          maxWidth: 304,
          margin: 'auto',
          borderRadius: 16,
          padding: spacing(3),
          boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
          '&:hover': {
            boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
          },
          '& .MuiCard__head': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            '& .MuiAvatar-root': {
              width: 60,
              height: 60,
              backgroundColor: '#ffffff',
              transform: 'translateY(50%)',
            },
            '& .MuiTypography--headLabel': {
              color: palette.grey[500],
            },
          },
          '& .MuiDivider-root': {
            marginLeft: -spacing(3),
            marginRight: -spacing(3),
          },
          '& .MuiCardContent-root': {
            textAlign: 'left',
            padding: 0,
            paddingTop: spacing(6),
            '& .MuiTypography--overline': {
              fontSize: 16,
              fontWeight: 'bold',
              color: palette.grey[500],
            },
            '& .MuiTypography--heading': {
              fontWeight: 900,
            },
            '& .MuiTypography--subheading': {
              lineHeight: 1.8,
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
  import CardContent from '@material-ui/core/CardContent';
  import Divider from '@material-ui/core/Divider';
  import Typography from '@material-ui/core/Typography';
  
  const ProjectCard01 = () => (
    <Card className={'MuiProjectCard--01'}>
      <div className={'MuiCard__head'}>
        <Avatar
          className={'MuiAvatar-root'}
          src={
            'http://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Polymer_Project_logo.png/240px-Polymer_Project_logo.png'
          }
        />
        <Typography
          className={'MuiTypography--headLabel'}
          variant={'overline'}
          gutterBottom
        >
          7 Minutes
        </Typography>
      </div>
      <Divider className={'MuiDivider-root'} light />
      <CardContent className={'MuiCardContent-root'}>
        <Typography
          className={'MuiTypography--overline'}
          variant={'overline'}
          gutterBottom
        >
          Google Inc.
        </Typography>
        <Typography
          className={'MuiTypography--heading'}
          variant={'h5'}
          gutterBottom
        >
          Project Polymer
        </Typography>
        <Typography className={'MuiTypography--subheading'} gutterBottom>
          Web components usher in a new era of web development based on
          encapsulated and interoperable custom
        </Typography>
      </CardContent>
    </Card>
  );
`;

ProjectCard01.codeSandbox = 'https://codesandbox.io/s/r0wo8094p';
ProjectCard01.info = {
  name: 'Project Card',
  description: 'Widely used in Dashboard UI',
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
      label: 'ProjectCard01.js',
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

export default ProjectCard01;
