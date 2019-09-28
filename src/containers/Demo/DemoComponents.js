import React from 'react';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import organisms from 'components/organisms';
import MetadataContext from './context';

const { DefaultSection, CustomComponentGrid } = organisms;

const baseTheme = createMuiTheme();

const DemoComponents = ({
  noDefaultSection,
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
    md: 6,
    lg: 4,
    ...GridItemProps,
  };
  return (
    <MetadataContext.Consumer>
      {({ setComponent }) => {
        const getShowcaseProps = Component => ({
          ...ShowcaseWidgetProps,
          onClickCode: () => setComponent(Component),
        });
        return (
          <ThemeProvider theme={baseTheme}>
            {!noDefaultSection && (
              <DefaultSection
                Component={DefaultComponent}
                ShowcaseWidgetProps={getShowcaseProps(DefaultComponent)}
                componentImage={componentImage}
                cssTree={cssTree}
              />
            )}
            <CustomComponentGrid
              noHeader={noDefaultSection}
              components={customComponents}
              colWidth={colWidth}
              getItemProps={Component => ({
                ShowcaseWidgetProps: getShowcaseProps(Component),
              })}
            />
          </ThemeProvider>
        );
      }}
    </MetadataContext.Consumer>
  );
};

export default DemoComponents;
