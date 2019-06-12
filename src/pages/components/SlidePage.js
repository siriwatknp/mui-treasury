import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import merge from 'lodash/merge';
import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { Box } from 'components/atoms';
import { PreviewWidget } from 'components/molecules';
import ShouldUpdate from 'containers/ShouldUpdate';
import ParallaxSlide from 'components/slides/ParallaxSlide';
import Typography from 'components/predefined/Typography';

const useStyles = makeStyles(() => ({
  root: {
    fontSize: 48,
    fontWeight: 900,
  },
}));

const data = [
  {
    boxProps: {
      bgcolor: '#c7ffcf',
    },
    title: 'Parallax #1',
    subtitle: 'Parallax #2',
  },
  {
    boxProps: {
      bgcolor: '#ffcaa9',
    },
    title: 'Parallax #1',
    subtitle: 'Parallax #2',
  },
  {
    boxProps: {
      bgcolor: '#c6d4ff',
    },
    title: 'Parallax #1',
    subtitle: 'Parallax #2',
  },
];

const components = [
  {
    name: 'Parallax Slide',
    component: ParallaxSlide,
    render: () => {
      const classes = useStyles();
      return (
        <Box width={'100%'}>
          <ParallaxSlide>
            {({ injectStyle }) =>
              data.map(({ boxProps, title, subtitle }, i) => (
                <Box {...boxProps}>
                  <Typography
                    noWrap
                    className={classes.root}
                    style={injectStyle(i, 80)}
                  >
                    {title}
                  </Typography>
                  <Typography
                    noWrap
                    className={classes.root}
                    style={injectStyle(i, 40)}
                  >
                    {subtitle}
                  </Typography>
                  <Typography className={classes.root}>Static Text</Typography>
                </Box>
              ))
            }
          </ParallaxSlide>
        </Box>
      );
    },
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
