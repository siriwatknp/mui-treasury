import React from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import get from 'lodash/get';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Box } from 'components/atoms';
import { PreviewWidget } from 'components/molecules';
import ShouldUpdate from 'containers/ShouldUpdate';
import ButtonSection from 'pages/components/predefined/ButtonSection';
import ShadowlessButton from 'components/buttons/ShadowlessButton';
import ChubbyButton from 'components/buttons/ChubbyButton';
import GithubButton from 'components/buttons/GithubButton';
// eslint-disable-next-line max-len
import InvertedContainedButton from 'components/buttons/InvertedContainedButton';
import InvertedOutlinedButton from 'components/buttons/InvertedOutlinedButton';
import DangerButton from 'components/buttons/DangerButton';
import FirebaseButton from 'components/buttons/FirebaseButton';
import TwitterButton from 'components/buttons/TwitterButton';
import GradientButton from 'components/buttons/GradientButton';
import ShinningButton from 'components/buttons/ShinningButton';
import IconButton from 'components/buttons/IconButton';

const createTheme = theme => createMuiTheme(theme);
const baseTheme = createMuiTheme();

const components = [
  {
    component: ShadowlessButton,
    render: () => <ShadowlessButton />,
  },
  {
    component: ChubbyButton,
    render: () => <ChubbyButton />,
  },
  {
    component: DangerButton,
    render: () => <DangerButton />,
  },
  {
    component: ShinningButton,
    render: () => <ShinningButton />,
  },
  {
    component: IconButton,
    render: () => <IconButton />,
  },
  {
    component: GradientButton,
    render: () => (
      <Box css={{ '& .MuiButton--chubby': { marginTop: 16 } }}>
        <GradientButton />
      </Box>
    ),
  },
  {
    component: GithubButton,
    render: () => (
      <Box css={{ '& .default': { marginRight: 16 } }}>
        <GithubButton />
      </Box>
    ),
  },
  {
    component: FirebaseButton,
    render: () => (
      <Box css={{ '& .default': { marginRight: 16 } }}>
        <FirebaseButton />
      </Box>
    ),
  },
  {
    component: TwitterButton,
    render: () => (
      <Box
        css={{
          '& .default': { marginRight: 16 },
          '& .bottom': { marginTop: 16 },
        }}
      >
        <TwitterButton />
      </Box>
    ),
  },
  {
    component: InvertedContainedButton,
    render: () => (
      <Box css={{ '& .MuiButton--inverted': { marginRight: 16 } }}>
        <InvertedContainedButton />
      </Box>
    ),
    previewProps: {
      inverted: true,
    },
  },
  {
    component: InvertedOutlinedButton,
    render: () => (
      <Box css={{ '& .MuiButton--inverted': { marginRight: 16 } }}>
        <InvertedOutlinedButton />
      </Box>
    ),
    previewProps: {
      inverted: true,
    },
  },
];

const ButtonPage = ({ counter, globalTheme, onSelectComponent }) => (
  <Box
    width={'100%'}
    p={{
      xs: 2,
      sm: 4,
    }}
  >
    <Typography variant={'h5'}>
      Predefined <code>Button</code>
    </Typography>
    <Typography gutterBottom>
      The one and only one <code>Button</code> that you need if you are using
      Material-UI, just copy the snippet.
    </Typography>
    <Typography>
      <Link
        target={'_blank'}
        rel="noopener"
        href={'https://codesandbox.io/s/4wmz707on4'}
      >
        Code Sandbox
      </Link>
    </Typography>
    <Box pt={{ xs: 2, sm: 4 }}>
      <ButtonSection globalTheme={globalTheme} />
    </Box>
    <Typography variant={'h6'}>How to use</Typography>
    <Typography>
      1. Copy component in <code>/src/components/predefined/Button.js</code>
    </Typography>
    <Typography>2. Use this component instead of Material-ui Button</Typography>
    <Typography gutterBottom>
      3. Look at component propTypes, adjust default props to suit your project.
    </Typography>
    <Box pb={2} />
    <Divider />
    <Box pb={2} />
    <Typography variant={'h5'}>
      Showcase <code>Button</code>
    </Typography>
    <Typography gutterBottom>
      This section shows that Material-UI can be customize to many themes as you
      like.
    </Typography>
    <Box pb={2} />
    <Grid container spacing={32}>
      {components.map(({ component, render, previewProps }) => (
        <Grid key={get(component, 'metadata.name')} item xs={12} sm={6} lg={4}>
          <PreviewWidget
            sandboxLink={component.codeSandbox}
            onClick={() => onSelectComponent(component)}
            {...get(component, 'metadata')}
            {...previewProps}
          >
            <ShouldUpdate value={counter}>
              <MuiThemeProvider
                theme={createTheme({
                  ...globalTheme,
                  overrides: component.getTheme(merge(baseTheme, globalTheme)),
                })}
              >
                {render()}
              </MuiThemeProvider>
            </ShouldUpdate>
          </PreviewWidget>
        </Grid>
      ))}
    </Grid>
  </Box>
);

ButtonPage.propTypes = {
  counter: PropTypes.number.isRequired,
  globalTheme: PropTypes.shape({}).isRequired,
  onSelectComponent: PropTypes.func.isRequired,
};
ButtonPage.components = components;

export default ButtonPage;
