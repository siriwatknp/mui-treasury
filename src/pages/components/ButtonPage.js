import React from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import get from 'lodash/get';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Box } from 'components/atoms';
import { PreviewWidget } from 'components/molecules';
import ShouldUpdate from 'containers/ShouldUpdate';
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
