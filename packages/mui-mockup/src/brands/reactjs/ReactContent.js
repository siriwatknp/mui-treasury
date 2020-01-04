import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const ReactContent = () => (
  <Box mr={{ md: 10 }} py={{ xs: 4, sm: 6, md: 8 }}>
    <Box pb={5}>
      <Typography variant={'h2'}>
        <b>Getting Started</b>
      </Typography>
    </Box>
    <Typography color={'textSecondary'} variant={'h5'}>
      This page is an overview of the React documentation and related resources.
    </Typography>
    <br />
    <Typography>
      <b>React</b> is a JavaScript library for building user interfaces. Learn
      what React is all about on our homepage or in the tutorial.
    </Typography>
    <br />
    <br />
    <Divider />
    <br />
    <Typography component={'div'}>
      <ul>
        <li>Try React</li>
        <li>Learn React</li>
        <li>Staying Informed</li>
        <li>Versioned Documentation</li>
        <li>Something Missing?</li>
      </ul>
    </Typography>
    <br />
    <Divider />
    <br />
    <br />
    <Typography variant={'h4'}>
      <b>Try React</b>
    </Typography>
    <br />
    <Typography>
      React has been designed from the start for gradual adoption, and{' '}
      <b>you can use as little or as much React as you need</b>. Whether you
      want to get a taste of React, add some interactivity to a simple HTML
      page, or start a complex React-powered app, the links in this section will
      help you get started.
    </Typography>
    <br />
    <br />
    <Typography variant={'h5'}>
      <b>Online Playgrounds</b>
    </Typography>
    <br />
    <Typography>
      If you’re interested in playing around with React, you can use an online
      code playground. Try a Hello World template on CodePen, CodeSandbox, or
      Glitch.
    </Typography>
    <br />
    <br />
    <Typography variant={'h5'}>
      <b>Add React to a Website</b>
    </Typography>
    <br />
    <Typography>
      You can add React to an HTML page in one minute. You can then either
      gradually expand its presence, or keep it contained to a few dynamic
      widgets.
    </Typography>
    <br />
    <br />
    <Typography variant={'h5'}>
      <b>Create a New React App</b>
    </Typography>
    <br />
    <Typography>
      When starting a React project, a simple HTML page with script tags might
      still be the best option. It only takes a minute to set up!
    </Typography>
    <br />
    <Typography>
      As your application grows, you might want to consider a more integrated
      setup. There are several JavaScript toolchains we recommend for larger
      applications. Each of them can work with little to no configuration and
      lets you take full advantage of the rich React ecosystem.
    </Typography>
  </Box>
);

export default ReactContent;
