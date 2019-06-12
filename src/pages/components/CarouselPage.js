import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import merge from 'lodash/merge';
import { Helmet } from 'react-helmet';
import { createMuiTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { Box } from 'components/atoms';
import { PreviewWidget } from 'components/molecules';
import ShouldUpdate from 'containers/ShouldUpdate';
import ParallaxCarousel from 'components/carousels/ParallaxCarousel';

const url =
  // eslint-disable-next-line max-len
  'https://fonts.googleapis.com/css?family=Poppins:900&display=swap';
const data = [
  {
    id: 1,
    title: 'Huarache',
    subtitle: 'Gripp',
    image:
      // eslint-disable-next-line max-len
      'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fshoes%2Fair-huarache-gripp.png?alt=media',
  },
  {
    id: 2,
    title: 'Air Max',
    subtitle: '270',
    image:
      // eslint-disable-next-line max-len
      'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fshoes%2Fair-max-270.png?alt=media',
  },
  {
    id: 3,
    title: 'Air Max',
    subtitle: 'Deluxe',
    image:
      // eslint-disable-next-line max-len
      'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fshoes%2Fair-max-deluxe.png?alt=media',
  },
];

const components = [
  {
    name: 'Parallax Carousel',
    component: ParallaxCarousel,
    render: () => (
      <Box width={'100%'} maxWidth={840} mx={'auto'}>
        <ParallaxCarousel data={data} />
      </Box>
    ),
    previewProps: {
      // inverted: true,
    },
  },
];

const baseTheme = createMuiTheme();

const CarouselPage = ({ counter, globalTheme, onSelectComponent }) => (
  <Box
    width={'100%'}
    p={{
      xs: 2,
      sm: 4,
    }}
  >
    <Helmet>
      <link href={url} rel="stylesheet" />
    </Helmet>
    <Grid container spacing={4}>
      {components.map(
        ({ name, component, render, gridItemProps, previewProps }) => (
          <Grid
            key={name || get(component, 'metadata.name')}
            item
            xs={12}
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

CarouselPage.propTypes = {
  counter: PropTypes.number.isRequired,
  globalTheme: PropTypes.shape({}).isRequired,
  onSelectComponent: PropTypes.func.isRequired,
};
CarouselPage.defaultProps = {};
CarouselPage.components = components;

export default CarouselPage;
