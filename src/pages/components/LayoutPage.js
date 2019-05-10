/* eslint-disable jsx-a11y/anchor-is-valid, max-len */
import React from 'react';
import merge from 'lodash/merge';
import { Link as RouterLink } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from 'components/atoms/Box';
import Image from 'components/atoms/Image';
import Typography from 'components/predefined/Typography';
import CodeHighlight from 'components/highlights/CodeHighlight';
import treasuryTheme from 'theme/treasury';

const components = [];
const providedTheme = merge(treasuryTheme, {
  overrides: Typography.getTheme(treasuryTheme),
});

const exampleCode = `
  import { ThemeProvider } from '@material-ui/styles';
  import { Root, Header, Nav, Content, Footer, presets } from "./Layout";
  
  function App() {
    return (
      <ThemeProvider theme={createMuiTheme()}>
        <Root>
          <CssBaseline />
          <Header
            menuIcon={{
              inactive: <Icon>menu</Icon>,
              active: <Icon>chevron_left</Icon>,
            }}
          >
            <Typography>Header</Typography>
          </Header>
          <Nav>
            <Typography>Nav</Typography>
          </Nav>
          <Content>
            <Typography>Content</Typography>
          </Content>
          <Footer>
            <Typography>Footer</Typography>
          </Footer>
        </Root>
      </ThemeProvider>
    );
  }
`;

const code1 = `
  <Root
    config={{
       // adjust behavior here!
    }}
  >
`;
const code2 = `
  config={{
    navWidth: 256, // default
  }}
  
  config={{
    navWidth: {
      // xs is 256px by default
      sm: 200, // in sm
      md: 256, // mdUp
    }
  }}
  
  config={{
    navWidth: {
      // xs is 256px by default
      sm: 200, // in sm && md
      lg: 256, // lgUp
    }
  }}
`;

const code3 = `
  config={{
    clipped: true,
  }}
`;

const code4 = `
  config={{
    collapsible: true,
    collapsedWidth: 64, // default
    // support responsive pattern
    // ex. collapsedWidth: { xs: 64, md: 80 }
  }}
`;

const code5 = `
  // from @material-ui/icons
  <Header
    menuIcon={{
      inactive: <MenuIcon />,
      active: <ChevronLeft />,
    }}
  >
  
  // or from @material-ui/core
  <Header
    menuIcon={{
      inactive: <Icon>menu</Icon>,
      active: <Icon>chevron_left</Icon>,
    }}
  >
`;

const codePreset0 = `
  import { presets } from './Layout';
`;
const codePreset1 = `
  <Root
    config={presets.createFixedLayout()}
  >
    ...
  </Root>
`;
const codePreset2 = `
  <Root
    config={
      presets.createContentBasedLayout()
    }
  >
    ...
  </Root>
`;
const codePreset3 = `
  <Root
   config={presets.createCozyLayout()}
  >
    ...
  </Root>
`;

const LayoutPage = () => (
  <ThemeProvider theme={providedTheme}>
    <Box maxWidth={768} mx={'auto'} px={2} py={{ xs: 2, sm: 3 }}>
      <Typography variant={'overline'}>INTRODUCING</Typography>
      <Typography weight={'bold'} variant={'h4'} gutterBottom>
        Material UI <Link underline={'none'}>Layout</Link>
      </Typography>
      <Typography gutterBottom>
        <b>Version 1.0</b>
      </Typography>
      <Typography indent={'small'}>
        Layout is a group of Material-UI components that are enhanced and
        combined to create dynamic, easy-to-maintain and easy-to-code as much as
        possible.
      </Typography>
      <Box pb={3} />
      <Typography weight={'bold'} variant={'h5'} gutterBottom>
        {"Let's start with Why?"}
      </Typography>
      <Typography gutterBottom>
        I created this because
        <br />
      </Typography>
      <Typography component={'div'}>
        <ol>
          <li>
            It took me a lot of time to initialize dashboard layout when I have
            new projects and I’m sure that a lot of you guys agree with me.
          </li>
          <li>
            Sometimes it is hard to refactor because the structure is so poor
            because someone isn’t deeply understand what he/she was doing, as a
            result, rewrite the whole layout (it actually happened, at least in
            my experience).
          </li>
          <li>
            Because we need to be fast to let others continue our work, we
            frequently write poor and a lot of code. However, we say we don’t
            have time to fix them. Eventually, spend all day paying technical
            debts.
          </li>
        </ol>
      </Typography>
      <Box pb={3} />
      <Typography weight={'bold'} variant={'h5'} gutterBottom>
        Objectives
      </Typography>
      <Typography>
        It must be easy enough to use, however still be able to adjust to compat
        with real word examples and usages. More importantly, it need to follow{' '}
        <Link
          target={'_blank'}
          rel="noopener"
          href={'https://material.io/design/components/navigation-drawer.html#'}
          underline={'none'}
        >
          Material specs
        </Link>{' '}
        since we are 100% based on Material-UI with no other styling libraries.
        Last but not least, responsive is a must.
      </Typography>
      <Box pb={3} />
      <Typography weight={'bold'} variant={'h5'} gutterBottom>
        Solution
      </Typography>
      <Typography>Separate layout into 5 components</Typography>
      <Typography component={'div'}>
        <ul>
          <li>Root</li>
          <li>Header (AppBar)</li>
          <li>Nav (Drawer)</li>
          <li>Content</li>
          <li>Footer</li>
        </ul>
      </Typography>
      <Typography>
        <b>Root</b> will provide context to other components to sync states
        across them.
      </Typography>
      <Typography>
        <b>Behavior</b> of your layout will be controlled by using config (just
        a plain object) that will be injected to the Root.
      </Typography>
      <Typography>
        <b>Presets</b> is a set of predefined config that I can come up with
        after researching a lot of the real world websites and also the{' '}
        <Link
          href={
            'https://material.io/design/components/navigation-drawer.html#usage'
          }
        >
          official Material specs
        </Link>
      </Typography>
      <Box pb={3} />
      <Typography weight={'bold'} variant={'h5'} gutterBottom>
        How to use
      </Typography>
      <Typography gutterBottom>
        This{' '}
        <Link href={'https://codesandbox.io/s/6xnlp688v3'}>code sandbox</Link>{' '}
        is the treasure that you can play with. Happy treasuring!
      </Typography>
      <Grid container justify={'center'}>
        <Grid item xs={12}>
          <Typography>
            <b>Step 1</b>
          </Typography>
          <Typography gutterBottom>
            Open the code sandbox and copy folder “Layout” to your project.
          </Typography>
          <Image
            src={
              'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Flayout01.png?alt=media'
            }
            maxWidth={343}
          />
          <Box pb={3} />
        </Grid>
        <Grid item xs={12}>
          <Typography>
            <b>Step 2</b>
          </Typography>
          <Typography gutterBottom>In your App.js, add this codes.</Typography>
          <CodeHighlight code={exampleCode} />
          <Box pb={2} />
        </Grid>
        <Grid item xs={12}>
          <iframe
            src="https://codesandbox.io/embed/7mn9xq3nnj?fontsize=14&hidenavigation=1"
            title="Material-UI Layout"
            style={{
              width: '100%',
              height: 500,
              border: '1px solid #e5e5e5',
              borderRadius: 4,
              overflow: 'hidden',
            }}
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          />
        </Grid>
      </Grid>
      <Box py={3} maxWidth={500} mx={'auto'}>
        <Typography
          variant={'h4'}
          color={'primary'}
          weight={'bold'}
          align={'center'}
          gutterBottom
        >
          Congratulations!
        </Typography>
        <Typography variant={'h6'} align={'center'}>
          {"quite easy, isn't it"}
        </Typography>
        <Typography align={'center'}>
          Now try resize the browser screen in sandbox, the drawer is
          automatically hidden with smooth transition.
        </Typography>
      </Box>

      <Typography weight={'bold'} variant={'h5'} gutterBottom>
        Time to Decorate
      </Typography>
      <Typography gutterBottom>
        use config (a prop of Root) to adjust all of the behaviors that you
        want.
      </Typography>
      <Box px={2}>
        <CodeHighlight code={code1} />
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item>
              <Typography gutterBottom>
                <b>Adjust Nav Width</b>
              </Typography>
              <Image
                src={
                  'https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1MylKkyLxQ83fM2L7y2toQ8HG8tdECh_r%2Flateral-nav-drawer.png'
                }
              />
              <Typography
                variant={'caption'}
                gutterBottom
                align={'center'}
                color={'textSecondary'}
              >
                image from material.io
              </Typography>
              <Typography variant={'body2'}>
                Nav width accepts number or object (responsive). For object,
                specify number for each screen (if some screen is not provided,
                it will fallback to available smaller screen or 256px if not
                match any screen)
              </Typography>
              <CodeHighlight code={code2} />
            </Grid>
            <Grid item>
              <Typography gutterBottom>
                <b>Collapsible Nav</b>
              </Typography>
              <Image
                src={
                  'https://media.giphy.com/media/1BgIQWDxSNQHZS0HiN/giphy.gif'
                }
              />
              <Typography variant={'body2'}>
                Nav can be collapse to smaller width to give more space to
                Content. Add “collapsible: true” to the config and
                {'"collapsedWidth: number"'} (width after collapsed)
              </Typography>
              <CodeHighlight code={code4} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item>
              <Typography gutterBottom>
                <b>Clipped Header</b>
              </Typography>
              <Image
                src={
                  'https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1CPoEQp4vBj9aRARuqexAbZhqBxJukOiX%2Fstandard-elevation-below.png'
                }
              />
              <Typography
                variant={'caption'}
                gutterBottom
                align={'center'}
                color={'textSecondary'}
              >
                image from material.io
              </Typography>
              <Typography variant={'body2'}>
                If you want to make full width Header while having permanent
                Drawer. Add “clipped: true” to the config.
              </Typography>
              <CodeHighlight code={code3} />
            </Grid>
            <Grid item xs={12}>
              <Typography gutterBottom>
                <b>Menu Icon</b>
              </Typography>
              <Image
                src={
                  'https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1x2NU6vyNNO9oDBAOabnED4ktz_jum_Z_%2Fstandard-behavior-visibility-dismissible.png'
                }
              />
              <Typography
                variant={'caption'}
                gutterBottom
                align={'center'}
                color={'textSecondary'}
              >
                image from material.io
              </Typography>
              <Typography variant={'body2'}>
                If you want to add a menu icon to the Header when the drawer
                variant is persistent or temporary to open it.
              </Typography>
              <CodeHighlight code={code5} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box pb={3} />
      <Typography weight={'bold'} variant={'h5'} gutterBottom>
        Presets
      </Typography>
      <Typography>
        Because I know that many people don’t want to do the config thing by
        yourself. I had prepared 3 presets that are widely used in many modern
        websites or CMS
      </Typography>
      <CodeHighlight code={codePreset0} />
      <Box pb={2} />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>
            <b>Default Layout</b>
          </Typography>
          <Image
            src={'https://media.giphy.com/media/1jXGr4qb8dVizIUudS/giphy.gif'}
          />
          <Typography component={'div'} gutterBottom color={'textSecondary'}>
            <ul>
              <li>Nav is permanent & collapsible </li>
              <li>Nav elevation is full height</li>
              <li>{'Nav hidden at Tablet screen (< 600px)'}</li>
            </ul>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>
            <b>Fixed Layout</b>
          </Typography>
          <Image
            src={'https://media.giphy.com/media/fnW25ZYsCtCyrX2aho/giphy.gif'}
          />
          <Typography component={'div'} gutterBottom color={'textSecondary'}>
            <ul>
              <li>Nav is permanent & collapsible</li>
              <li>Nav elevation is clipped</li>
              <li>{'Nav hidden at Tablet screen (< 960px)'}</li>
            </ul>
          </Typography>
          <CodeHighlight code={codePreset1} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>
            <b>Content Based Layout</b>
          </Typography>
          <Image
            src={'https://media.giphy.com/media/1ZnFrQUZpCibwtTGj9/giphy.gif'}
          />
          <Typography component={'div'} gutterBottom color={'textSecondary'}>
            <ul>
              <li>
                Nav is not permanent, uncollapsible but can be open & close
              </li>
              <li>No breakpoint, all screen is the same</li>
            </ul>
          </Typography>
          <CodeHighlight code={codePreset2} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>
            <b>Cozy Layout</b>
          </Typography>
          <Image
            src={'https://media.giphy.com/media/w9d1LsOBFndXpzV62z/giphy.gif'}
          />
          <Typography component={'div'} gutterBottom color={'textSecondary'}>
            <ul>
              <li>Nav is permanent beyond breakpoint</li>
              <li>Nav width is bigger in desktop than in tablet</li>
              <li>{'Nav hidden at mobile screen (< 600px)'}</li>
              <li>Nav is modal mode in mobile screen</li>
            </ul>
          </Typography>
          <CodeHighlight code={codePreset3} />
        </Grid>
      </Grid>
      <Box pb={3} />
      <Typography weight={'bold'} variant={'h5'} gutterBottom>
        Customization
      </Typography>
      <Typography>
        Want to build your own layout? we have built the tool for you.{' '}
        <Link component={RouterLink} to={'/layout-builder'}>
          <b>Layout Builder</b>
        </Link>
      </Typography>
      <Box pb={3} />
      <Typography weight={'bold'} variant={'h5'} gutterBottom>
        API
      </Typography>
      <Typography>
        Each of the component’s API and props will be described soon.
      </Typography>
      <Box pb={3} />
      <Typography weight={'bold'} variant={'h5'} gutterBottom>
        Feedback & Request
      </Typography>
      <Typography>
        Feel free to give me feedbacks and comments. If you need anything more
        than this. Let me know via{' '}
        <Link
          target={'_blank'}
          rel="noopener"
          href={'https://twitter.com/siriwatknp'}
        >
          twitter (@siriwatknp)
        </Link>{' '}
        or mail{' '}
        <Link
          target={'_blank'}
          rel="noopener"
          href={'mailto:siriwatkunaporn@gmail.com'}
        >
          me
        </Link>{' '}
        directly. I will do my best to help.
      </Typography>
    </Box>
  </ThemeProvider>
);

LayoutPage.propTypes = {};
LayoutPage.defaultProps = {};
LayoutPage.components = components;

export default LayoutPage;
