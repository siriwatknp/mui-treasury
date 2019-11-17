import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import organisms from 'components/organisms';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FeatureWidget from '@mui-treasury/components/widget/FeatureWidget';
import { useFullBorderedGridStyles } from '@mui-treasury/styles/grid/fullBordered';
import { useHalfBorderedGridStyles } from '@mui-treasury/styles/grid/halfBordered';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import StylingIsFun from '../components/section/StylingIsFun';

const { SloganSection, TopicSection } = organisms;

const useStyles = makeStyles(theme => {
  const { palette } = theme;
  return {
    root: {},
    topic: {
      fontSize: 'calc(12px + 1.5vw)',
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
    // icon: 'fad fa-fighter-jet',
    icon: ['fad', 'fighter-jet'],
    title: 'Reduce UI Development time',
    content:
      'Great UI must be reusable. I strongly believe that this project will reduce development time significantly for any project based on Material-UI',
  },
  {
    // icon: 'fad fa-dice-d8',
    icon: ['fad', 'dice-d8'],
    title: 'Provide real-world interface',
    content:
      'Material-UI is a great library but it still has fewer components compare to real-world usage. This project is like an extra resources for Material-UI developers',
  },
  {
    // icon: 'fad fa-sparkles',
    icon: ['fad', 'sparkles'],
    title: 'Changing styles should be easy & fun',
    content:
      'I found that many people have bad experience when it comes to styling in Material-UI, so I want to help them overcome that point and see the beauty of it.',
  },
  {
    // icon: 'fad fa-cubes',
    icon: ['fad', 'cubes'],
    title: 'Composable & Reusable',
    content:
      'Every components in this project are composable & reusable. You can use them in anywhere or as a nested component.',
  },
  {
    // icon: 'fad fa-city',
    icon: ['fad', 'city'],
    title: 'Ecosystem',
    content:
      'Mui Treasury comes with multiple packages as an ecosystem, available on both <code>npm</code> & <code>yarn</code>',
    // 'Mui Treasury comes with multiple packages as an ecosystem such as <br /> <b>@mui-treasury/styling</b> : component’s styling solution <br /> <b>@mui-treasury/styles</b> : collection of reusable stylesheets <br /> <b>@mui-treasury/components</b> : real-world components <br/> <b>@mui-treasury/layout</b> : build layout without tears <br /> <b>@mui-treasury/formik</b> : formik integration for building forms',
  },
  {
    // icon: 'fad fa-thumbs-up',
    icon: ['fad', 'thumbs-up'],
    title: 'Better experience for developers',
    content:
      'Not only components but also Form, Layout and Themes that you can explore in this project.',
  },
];

const socials = [
  {
    // icon: 'fab fa-twitter',
    icon: ['fab', 'twitter'],
    title: 'Twitter',
    content: 'Follow here, so that you won’t miss any updates',
    children: (
      <Button target={'_blank'} rel={'noopener'} href={''} color={'primary'}>
        Follow Mui Treasury
      </Button>
    ),
  },
  {
    // icon: 'fab fa-twitter',
    icon: ['fab', 'facebook'],
    title: 'Facebook',
    content: "For those who don't use twitter, we also have facebook page.",
    children: (
      <Button
        target={'_blank'}
        rel={'noopener'}
        href={'https://www.facebook.com/Material-UI-Treasury-107529197368511/'}
        color={'primary'}
      >
        Keep Posted
      </Button>
    ),
  },
  {
    // icon: 'fab fa-github',
    icon: ['fab', 'github'],
    title: 'Github',
    content: 'Checkout the repo, PR welcome and please give me a star!',
    children: (
      <Button
        target={'_blank'}
        rel={'noopener'}
        href={'https://github.com/siriwatknp/mui-treasury'}
        color={'primary'}
      >
        Checkout Github
      </Button>
    ),
  },
];

const Homepage = ({ navigate }) => {
  const classes = useStyles();
  const widgetStyles = useTintPrimaryWidgetStyles();
  const featureColWidth = { xs: 12, sm: 6, md: 4 };
  const featureGridStyles = useHalfBorderedGridStyles({
    colWidth: featureColWidth,
  });
  const socialGridStyles = useFullBorderedGridStyles({
    colWidth: { xs: 12, sm: 4 },
  });
  return (
    <div>
      <AppBar color={'default'} position={'sticky'} className={classes.appBar}>
        <Toolbar>
          <Header />
        </Toolbar>
      </AppBar>
      <SloganSection />
      <TopicSection
        title={'Why Mui Treasury exists?'}
        subtitle={'Here is my purposes'}
      />
      <Grid container>
        {/* eslint-disable-next-line no-unused-vars */}
        {purposes.map(({ icon, title, content }) => (
          <Grid
            classes={featureGridStyles}
            item
            key={title}
            {...featureColWidth}
          >
            <FeatureWidget
              classes={widgetStyles}
              title={title}
              content={content}
              // renderIcon={({ className }) => (
              //   <FontAwesomeIcon icon={icon} className={className} />
              // )}
            />
          </Grid>
        ))}
      </Grid>
      <StylingIsFun />
      <TopicSection
        title={'Interested ?'}
        subtitle={'Take a few minutes to browse the collection'}
      >
        <Button
          size={'large'}
          variant={'contained'}
          color={'primary'}
          classes={{ label: classes.buttonLabel }}
          onClick={() => navigate('/components/tabs')}
        >
          Show me
        </Button>
      </TopicSection>
      <Container>
        <Box py={{ xs: '2rem', sm: '3.5rem' }}>
          <Box textAlign={'center'}>
            <h2 className={classes.topic}>Stay Updated!</h2>
          </Box>
          <p />
          <Grid container classes={socialGridStyles}>
            {/* eslint-disable-next-line no-unused-vars */}
            {socials.map(({ icon, title, content, children }) => (
              <Grid
                classes={socialGridStyles}
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
                  // renderIcon={({ className }) => (
                  //   <FontAwesomeIcon icon={icon} className={className} />
                  // )}
                >
                  <Box textAlign={'center'}>{children}</Box>
                </FeatureWidget>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

Homepage.propTypes = {};
Homepage.defaultProps = {};

export default Homepage;
