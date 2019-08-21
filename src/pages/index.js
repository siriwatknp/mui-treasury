import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { FeatureWidget } from '@mui-treasury/components';
import { useBorderedGrid } from '@mui-treasury/styles';
import Footer from '../components/Footer';
import Header from '../components/Header';

const useStyles = makeStyles(theme => {
  const { palette, breakpoints } = theme;
  return {
    root: {},
    overline: {
      color: palette.primary.light,
      fontWeight: 300,
      fontSize: 'calc(2vh + 1vw)',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    headline: {
      color: palette.primary.main,
      fontSize: 27,
      fontWeight: 800,
      lineHeight: 1.4,
      [breakpoints.up('sm')]: {
        fontSize: 'calc(2vh + 3vw)',
        marginBottom: '2rem',
      },
    },
    body: {
      fontSize: 16,
      [breakpoints.up('sm')]: {
        fontSize: 'calc(2vh + 0.75vw)',
      },
    },
    topic: {
      fontSize: 'calc(12px + 1.5vw)',
    },
    buttonLabel: {
      letterSpacing: '1px',
    },
    secondaryText: {
      color: palette.text.secondary,
    },
    appBar: {
      boxShadow: '0 1px 0 rgb(230, 241, 244)',
      background: palette.common.white,
    },
  };
});

const useTintPrimaryWidgetStyles = makeStyles(({ palette }) => ({
  iconWrapper: {
    backgroundColor: '#ebf3f6',
  },
  icon: {
    color: palette.primary.main,
  },
}));

const purposes = [
  {
    icon: 'fad fa-fighter-jet',
    title: 'Reduce UI Development time',
    content:
      'No one likes to write the same code twice, same as ui. I strongly believe that this project can reduce development time for any starter project based on Material-UI',
  },
  {
    icon: 'fad fa-dice-d8',
    title: 'Provide real-world interface',
    content:
      'Material-UI is a great library but it still has fewer components compare to real-world usage. This project is like an extra resources for Material-UI',
  },
  {
    icon: 'fad fa-sparkles',
    title: 'Changing styles should be easy & fun',
    content:
      'I found that many people have bad experience when it comes to styling in Material-UI, so I want to help them pass that point and see the beauty of it.',
  },
  {
    icon: 'fad fa-cubes',
    title: 'Composable & Reusable',
    content:
      'Every components in this project are composable & reusable. You can use them in anywhere or as a nested component.',
  },
  {
    icon: 'fad fa-city',
    title: 'Ecosystem',
    content:
      'Mui Treasury comes with multiple packages as an ecosystem such as mui-styling that handle component’s styling pattern or mui-styles that contain the whole styles you can select.',
  },
  {
    icon: 'fad fa-thumbs-up',
    title: 'Better experience for developers',
    content:
      'Not only components but also Form, Layout and Themes that you can find in this project.',
  },
];

const socials = [
  {
    icon: 'fab fa-twitter',
    title: 'Follow here, so that you won’t miss any updates',
    children: (
      <Button href={''} color={'primary'}>
        Follow Mui Treasury
      </Button>
    ),
  },
  {
    icon: 'fab fa-github',
    title: 'Checkout the repo, PR welcome and please give me a star!',
    children: (
      <Button href={''} color={'primary'}>
        Checkout Github
      </Button>
    ),
  },
];

const Homepage = ({ location }) => {
  const classes = useStyles();
  const widgetStyles = useTintPrimaryWidgetStyles();
  const borderedGridStyles = useBorderedGrid({
    colWidth: { xs: 12, sm: 6, md: 4 },
  });
  return (
    <div>
      <AppBar color={'default'} position={'sticky'} className={classes.appBar}>
        <Toolbar>
          <Header location={location} />
        </Toolbar>
      </AppBar>
      <Box
        textAlign={'center'}
        py={{ xs: '3rem', sm: '4.5rem' }}
        px={{ xs: 3, sm: '2rem' }}
        mx={'auto'}
      >
        <p className={classes.overline}>Bring your idea to life</p>
        <h1 className={classes.headline}>Browse, Choose and Use. That’s it.</h1>
        <Box
          maxWidth={{ sm: 600, md: 700 }}
          mx={'auto'}
          mb={{ xs: '2rem', sm: '3rem' }}
        >
          <p className={classes.body}>
            MUI Treasury is a collection of ready-to-use and themeable
            components base on{' '}
            <a
              href="https://material-ui.com"
              target={'_blank'}
              rel={'noopener'}
            >
              Material-UI
            </a>
          </p>
        </Box>
        <Button
          size={'large'}
          variant={'contained'}
          color={'primary'}
          classes={{ label: classes.buttonLabel }}
        >
          Get started
        </Button>
      </Box>
      <Box
        bgcolor={'#f6fafc'}
        border={'1px solid #e6f1f4'}
        py={{ xs: '2rem', sm: '3.5rem' }}
      >
        <Box textAlign={'center'}>
          <h2 className={classes.topic}>
            <b>Why Mui Treasury exists?</b>
          </h2>
          <p className={classes.secondaryText}>Here is my purposes</p>
        </Box>
      </Box>
      <Grid container>
        {purposes.map(({ icon, title, content }) => (
          <Grid
            classes={borderedGridStyles}
            item
            key={title}
            xs={12}
            sm={6}
            md={4}
          >
            <FeatureWidget
              classes={widgetStyles}
              title={title}
              content={content}
              renderIcon={({ className }) => (
                <i className={`${icon} ${className}`} />
              )}
            />
          </Grid>
        ))}
      </Grid>
      <Container>
        <Box py={{ xs: '2rem', sm: '3.5rem' }}>
          <h2 className={classes.topic}>How it works</h2>
          <p />
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={7}>
              <Box bgcolor={'grey.100'} height={'100%'} />
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
              <p>
                I want it to be simple for developers as much as possible, so
                the easiest way to start is
              </p>
              <ol>
                <li>Browse a component</li>
                <li>Select one that you like</li>
                <li>Import it in your project</li>
                <li>Customize it if you like.</li>
              </ol>
              <p>That’s it, easy.</p>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box
        bgcolor={'#f6fafc'}
        border={'1px solid #e6f1f4'}
        py={{ xs: '2rem', sm: '3.5rem' }}
      >
        <Box textAlign={'center'}>
          <h2 className={classes.topic}>
            <b>Interested ?</b>
          </h2>
          <p className={classes.secondaryText}>
            Take a few minutes to browse the collection
          </p>
          <Button
            size={'large'}
            variant={'contained'}
            color={'primary'}
            classes={{ label: classes.buttonLabel }}
          >
            Show me
          </Button>
        </Box>
      </Box>
      <Container maxWidth={'md'}>
        <Box py={{ xs: '2rem', sm: '3.5rem' }}>
          <Box textAlign={'center'}>
            <h2 className={classes.topic}>Stay Updated!</h2>
          </Box>
          <p />
          <Box
            border={'1px solid'}
            borderBottom={'none'}
            borderColor={'rgb(230, 241, 244)'}
          >
            <Grid container>
              {socials.map(({ icon, title, children }) => (
                <Grid
                  classes={borderedGridStyles}
                  item
                  key={title}
                  xs={12}
                  sm={6}
                >
                  <FeatureWidget
                    classes={widgetStyles}
                    content={title}
                    renderIcon={({ className }) => (
                      <i className={`${icon} ${className}`} />
                    )}
                  >
                    <Box textAlign={'center'}>{children}</Box>
                  </FeatureWidget>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

Homepage.propTypes = {};
Homepage.defaultProps = {};

export default Homepage;
