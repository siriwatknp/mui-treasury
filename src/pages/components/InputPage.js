import React from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import get from 'lodash/get';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Box } from 'components/atoms';
import { PreviewWidget } from 'components/molecules';
import ShouldUpdate from 'containers/ShouldUpdate';
import ChromeInput from 'components/inputs/ChromeInput';
import BootstrapInput from 'components/inputs/BootstrapInput';
import SearchInput from 'components/inputs/SearchInput';

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
  },
  {
    component: SearchInput,
    render: () => <SearchInput />,
    previewProps: {
      white: true,
    },
  },
];

const InputPage = ({ counter, globalTheme, onSelectComponent }) => (
  <Box
    width={'100%'}
    p={{
      xs: 2,
      sm: 4,
    }}
  >
    <Grid container spacing={4}>
      {components.map(({ component, render, previewProps }) => (
        <Grid key={get(component, 'metadata.name')} item xs={12} sm={6} lg={4}>
          <PreviewWidget
            sandboxLink={component.codeSandbox}
            onClick={() => onSelectComponent(component)}
            {...get(component, 'metadata')}
            {...previewProps}
          >
            <ShouldUpdate value={counter}>
              <ThemeProvider
                theme={createTheme({
                  ...globalTheme,
                  overrides: component.getTheme(merge(baseTheme, globalTheme)),
                })}
              >
                {render()}
              </ThemeProvider>
            </ShouldUpdate>
          </PreviewWidget>
        </Grid>
      ))}
    </Grid>
  </Box>
);

InputPage.propTypes = {
  counter: PropTypes.number.isRequired,
  globalTheme: PropTypes.shape({}).isRequired,
  onSelectComponent: PropTypes.func.isRequired,
};
InputPage.components = components;

export default InputPage;
