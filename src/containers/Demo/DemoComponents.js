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
  ShowcaseWidgetProps,
}) => {
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
              setComponent={setComponent}
              components={customComponents}
              ShowcaseWidgetProps={ShowcaseWidgetProps}
            />
          </ThemeProvider>
        );
      }}
    </MetadataContext.Consumer>
  );
};

export default DemoComponents;
