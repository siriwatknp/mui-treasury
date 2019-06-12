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
import InvertedArrow from 'components/arrows/InvertedArrow';
import SimpleArrow from 'components/arrows/SimpleArrow';

const components = [
  {
    name: 'Simple Arrow',
    component: SimpleArrow,
    render: () => (
      <Box width={'100%'} display={'flex'} justifyContent={'space-evenly'}>
        <SimpleArrow direction={'left'} />
        <SimpleArrow direction={'right'} />
      </Box>
    ),
  },
  {
    name: 'Inverted Arrow',
    component: InvertedArrow,
    render: () => (
      <Box width={'100%'} display={'flex'} justifyContent={'space-evenly'}>
        <InvertedArrow direction={'left'} />
        <InvertedArrow direction={'right'} />
      </Box>
    ),
    previewProps: {
      inverted: true,
    },
  },
];

const baseTheme = createMuiTheme();

const ArrowPage = ({ counter, globalTheme, onSelectComponent }) => (
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

ArrowPage.propTypes = {
  counter: PropTypes.number.isRequired,
  globalTheme: PropTypes.shape({}).isRequired,
  onSelectComponent: PropTypes.func.isRequired,
};
ArrowPage.defaultProps = {};
ArrowPage.components = components;

export default ArrowPage;
