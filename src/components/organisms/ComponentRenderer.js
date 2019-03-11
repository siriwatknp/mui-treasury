import React from 'react';
import merge from 'lodash/merge';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { PreviewWidget } from 'components/molecules';
import ShouldUpdate from 'containers/ShouldUpdate';

const createTheme = theme => createMuiTheme(theme);
const baseTheme = createMuiTheme();

const ComponentRenderer = ({
  occurrence,
  active,
  component: Component,
  render,
  globalTheme,
  onSelectComponent,
  previewProps,
}) => {
  const theme = createTheme({
    ...globalTheme,
    overrides: Component.getTheme(merge(baseTheme, globalTheme)),
  });
  return (
    <PreviewWidget
      active={active}
      name={get(Component, 'metadata.name')}
      description={get(Component, 'metadata.description')}
      onClick={() => onSelectComponent(Component)}
      {...previewProps}
    >
      <ShouldUpdate value={occurrence}>
        <MuiThemeProvider theme={theme}>{render()}</MuiThemeProvider>
      </ShouldUpdate>
    </PreviewWidget>
  );
};

ComponentRenderer.propTypes = {
  occurrence: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  globalTheme: PropTypes.shape({}).isRequired,
  onSelectComponent: PropTypes.func.isRequired,
  component: PropTypes.shape({}).isRequired,
  render: PropTypes.func.isRequired,
  previewProps: PropTypes.shape({}),
};
ComponentRenderer.defaultProps = {
  previewProps: {},
};

export default ComponentRenderer;
