import merge from 'lodash/merge';
import PropTypes from 'prop-types';
import React from 'react';
import get from 'lodash/get';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Box from 'components/atoms/Box';
import PreviewWidget from 'components/molecules/PreviewWidget';

// TEMPLATES
import DashboardLogin from 'templates/login/DashboardLogin01';
import ShouldUpdate from 'containers/ShouldUpdate';

const createTheme = theme => createMuiTheme(theme);
const baseTheme = createMuiTheme();

const components = [
  {
    component: DashboardLogin,
    render: () => <DashboardLogin />,
  },
];

const LoginTemplates = ({ counter, globalTheme, onSelectComponent }) => (
  <Box width={'100%'}>
    {components.map(({ component, render, previewProps }) => (
      <PreviewWidget
        key={get(component, 'metadata.name')}
        white
        contentProps={{
          px: 0,
          py: 0,
        }}
        onClick={() => onSelectComponent(component)}
        sandboxLink={component.codeSandbox}
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
    ))}
  </Box>
);

LoginTemplates.propTypes = {
  counter: PropTypes.number.isRequired,
  globalTheme: PropTypes.shape({}).isRequired,
  onSelectComponent: PropTypes.func.isRequired,
};
LoginTemplates.components = components;

export default LoginTemplates;
