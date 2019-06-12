import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import merge from 'lodash/merge';
import { createMuiTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { Box } from 'components/atoms';
import { PreviewWidget } from 'components/molecules';
import ShouldUpdate from 'containers/ShouldUpdate';
import IndicatorGroup from 'components/indicators/IndicatorGroup';
import InvertedIndicator from 'components/indicators/InvertedIndicator';
import SimpleIndicator from 'components/indicators/SimpleIndicator';

const components = [
  {
    name: 'Dot Indicator',
    component: SimpleIndicator,
    render: () => (
      <IndicatorGroup>
        <SimpleIndicator active onClick={() => alert('#1 clicked')} />
        <SimpleIndicator onClick={() => alert('#2 clicked')} />
        <SimpleIndicator onClick={() => alert('#2 clicked')} />
      </IndicatorGroup>
    ),
  },
  {
    name: 'Inverted Indicator',
    component: InvertedIndicator,
    render: () => (
      <IndicatorGroup>
        <InvertedIndicator active onClick={() => alert('#1 clicked')} />
        <InvertedIndicator onClick={() => alert('#2 clicked')} />
        <InvertedIndicator onClick={() => alert('#2 clicked')} />
      </IndicatorGroup>
    ),
    previewProps: {
      inverted: true,
    },
  },
];

const baseTheme = createMuiTheme();

const IndicatorPage = ({ counter, globalTheme, onSelectComponent }) => (
  <Box
    width={'100%'}
    p={{
      xs: 2,
      sm: 4,
    }}
  >
    <Grid container spacing={4}>
      {components.map(
        ({ name, component, render, gridItemProps, previewProps }) => (
          <Grid
            key={name || get(component, 'metadata.name')}
            item
            xs={12}
            sm={4}
            {...gridItemProps}
          >
            <PreviewWidget
              sandboxLink={component.codeSandbox}
              onClick={() => onSelectComponent(component)}
              {...get(component, 'metadata')}
              {...previewProps}
              name={name || get(component, 'metadata.name')}
            >
              <ShouldUpdate value={counter}>
                <ThemeProvider
                  theme={createMuiTheme({
                    ...globalTheme,
                    ...(component.getTheme && {
                      overrides: component.getTheme(
                        merge(baseTheme, globalTheme),
                      ),
                    }),
                  })}
                >
                  {render()}
                </ThemeProvider>
              </ShouldUpdate>
            </PreviewWidget>
          </Grid>
        ),
      )}
    </Grid>
  </Box>
);

IndicatorPage.propTypes = {
  counter: PropTypes.number.isRequired,
  globalTheme: PropTypes.shape({}).isRequired,
  onSelectComponent: PropTypes.func.isRequired,
};
IndicatorPage.defaultProps = {};
IndicatorPage.components = components;

export default IndicatorPage;
