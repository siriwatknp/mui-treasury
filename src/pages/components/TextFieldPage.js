/* eslint-disable max-len,react/prop-types */
import React from 'react';
import merge from 'lodash/merge';
import get from 'lodash/get';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Box } from 'components/atoms';
import { PreviewWidget } from 'components/molecules';
import ShouldUpdate from 'containers/ShouldUpdate';
import BootstrapTextField from 'components/textFields/BootstrapTextField';
import FilledTextField01 from 'components/textFields/FilledTextField01';

const createTheme = theme => createMuiTheme(theme);
const baseTheme = createMuiTheme();

const components = [
  {
    component: BootstrapTextField,
    render: () => (
      <Box
        css={{
          '& .BootstrapFormControl-root:not(:last-child)': {
            marginBottom: 16,
          },
        }}
      >
        <BootstrapTextField />
      </Box>
    ),
  },
  {
    component: FilledTextField01,
    render: () => (
      <Box
        css={{
          '& .FilledTextField01:not(:last-child)': {
            marginBottom: 16,
          },
        }}
      >
        <FilledTextField01 className={'FilledTextField01'} />
      </Box>
    ),
    previewProps: {
      white: true,
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

ButtonPage.propTypes = {};
ButtonPage.defaultProps = {};

export default ButtonPage;
