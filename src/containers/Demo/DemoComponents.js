import React from 'react';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useMultiRowBorderedGrid } from '@mui-treasury/styles';
import molecules from 'components/molecules';
import organisms from 'components/organisms';
import MetadataContext from './context';

const { ShowcaseWidget } = molecules;
const { DefaultSection } = organisms;

const baseTheme = createMuiTheme();

const DemoComponents = ({
  cssTree,
  componentImage,
  customComponents,
  DefaultComponent,
  GridItemProps,
  ShowcaseWidgetProps,
}) => {
  const colWidth = {
    xs: 12,
    sm: 6,
    md: 4,
    ...GridItemProps,
  };
  const multiRowGridStyles = useMultiRowBorderedGrid({
    borderColor: '#e9e9e9',
    colWidth,
  });
  return (
    <MetadataContext.Consumer>
      {({ setComponent }) => (
        <ThemeProvider theme={baseTheme}>
          <DefaultSection
            demo={
              <ShowcaseWidget
                {...ShowcaseWidgetProps}
                border={'1px solid #e9e9e9'}
                mr={'-1px'}
                name={DefaultComponent.metadata.title}
                onClickCode={() => {
                  setComponent(DefaultComponent);
                }}
              >
                <DefaultComponent />
              </ShowcaseWidget>
            }
            componentImage={componentImage}
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
                    {...colWidth}
                    classes={multiRowGridStyles}
                  >
                    <ShowcaseWidget
                      {...ShowcaseWidgetProps}
                      name={Component.metadata.title || Component.name}
                      onClickCode={() => {
                        setComponent(Component);
                      }}
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
