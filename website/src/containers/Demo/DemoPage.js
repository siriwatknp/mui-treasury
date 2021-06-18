import React from 'react';
import PropTypes from 'prop-types';
import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import organisms from 'components/organisms';
import ComponentHeading from 'components/organisms/ComponentHeading';
import DemoSourceDrawer from './DemoSourceDrawer';
import MetadataContext from './context';

const { DefaultSection, CustomComponentGrid } = organisms;

const baseTheme = createTheme();

const DemoPage = ({
  title,
  description,
  DemoComponentsProps,
  DemoSourceDrawerProps,
}) => {
  const {
    noDefaultSection,
    cssTree,
    componentImage,
    customComponents,
    DefaultComponent,
    ShowcaseWidgetProps,
  } = DemoComponentsProps;
  return (
    <MetadataContext>
      <ComponentHeading title={title} description={description} />
      <DemoSourceDrawer title={title} {...DemoSourceDrawerProps} />
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
              />
            </ThemeProvider>
          );
        }}
      </MetadataContext.Consumer>
    </MetadataContext>
  );
};

DemoPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  DemoComponentsProps: PropTypes.shape({}),
  DemoSourceDrawerProps: PropTypes.shape({}),
};
DemoPage.defaultProps = {
  description: '',
  DemoComponentsProps: {},
  DemoSourceDrawerProps: {},
};

export default DemoPage;
