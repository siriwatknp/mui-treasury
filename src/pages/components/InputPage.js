/* eslint-disable max-len,react/prop-types */
import React from 'react';
import merge from 'lodash/merge';
import get from 'lodash/get';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Box } from 'components/atoms';
import { PreviewWidget } from 'components/molecules';
import ShouldUpdate from 'containers/ShouldUpdate';
import ChromeInput from 'components/inputs/ChromeInput';
import BootstrapInput from 'components/inputs/BootstrapInput';

const createTheme = theme => createMuiTheme(theme);
const baseTheme = createMuiTheme();

const components = [
  {
    component: ChromeInput,
    render: () => <ChromeInput />,
    previewProps: {
      white: true,
    },
  },
  {
    component: BootstrapInput,
    render: () => (
      <Box
        css={{
          '& .BootstrapInput-root:not(:last-child)': {
            marginBottom: 16,
          },
        }}
      >
        <BootstrapInput />
      </Box>
    ),
    previewProps: {
      white: true,
    },
  },
];

const ButtonPage = ({ occurrence, globalTheme, onSelectComponent }) => (
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
            name={get(component, 'metadata.name')}
            description={get(component, 'metadata.description')}
            onClick={() => onSelectComponent(component)}
            {...previewProps}
          >
            <ShouldUpdate value={occurrence}>
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

ButtonPage.propTypes = {};
ButtonPage.defaultProps = {};

export default ButtonPage;
