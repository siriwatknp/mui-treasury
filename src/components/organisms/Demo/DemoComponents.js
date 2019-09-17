import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { customComponents, DefaultButton } from 'docs/components/button';
import molecules from 'components/molecules';
import { createMuiTheme } from '@material-ui/core';
import { useMultiRowBorderedGrid } from '@mui-treasury/styles/src';
import DefaultSection from './DefaultSection';
import MetadataContext from './context';

const { ShowcaseWidget } = molecules;

const baseTheme = createMuiTheme();

const DemoComponents = ({ cssTree }) => {
  const multiRowGridStyles = useMultiRowBorderedGrid({
    borderColor: '#e9e9e9',
  });
  return (
    <MetadataContext.Consumer>
      {({ setMetadata }) => (
        <ThemeProvider theme={baseTheme}>
          <DefaultSection
            demo={
              <ShowcaseWidget
                border={'1px solid #e9e9e9'}
                mr={'-1px'}
                name={DefaultButton.metadata.title}
                onClickCode={() => setMetadata(DefaultButton.metadata)}
              >
                <DefaultButton />
              </ShowcaseWidget>
            }
            cssTree={cssTree}
          />
          <Box py={{ xs: '2rem', sm: '3rem', md: '4rem' }} textAlign={'center'}>
            <h3>Custom Styles</h3>
            <Grid container classes={multiRowGridStyles}>
              {customComponents.map(Component => {
                if (Component.isDefault) return null;
                return (
                  <Grid
                    key={Component.name}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    classes={multiRowGridStyles}
                  >
                    <ShowcaseWidget
                      name={Component.metadata.title || Component.name}
                      onClickCode={() => setMetadata(Component.metadata)}
                    >
                      <Component key={Component.name} />
                    </ShowcaseWidget>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </ThemeProvider>
      )}
    </MetadataContext.Consumer>
  );
};

export default DemoComponents;
