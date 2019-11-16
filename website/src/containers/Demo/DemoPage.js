import React from 'react';
import PropTypes from 'prop-types';
import { PKG } from 'constants/menus';
import { mapNestedPath } from '@mui-treasury/utils';
import { createMuiTheme } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import jupiterNestedMenuStyles from '@mui-treasury/styles/nestedMenu/jupiter';
import molecules from 'components/molecules';
import organisms from 'components/organisms';
import SidebarLayout from 'components/layout/SidebarLayout';
import ComponentHeading from 'components/organisms/ComponentHeading';
import DemoSourceDrawer from './DemoSourceDrawer';
import MetadataContext from './context';

const { GridShowcase, ShowcaseWidget } = molecules;
const { DefaultSection, CustomComponentGrid } = organisms;

const baseTheme = createMuiTheme();
const useJupiterNestedMenuStyles = makeStyles(jupiterNestedMenuStyles);

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
  const jupiterStyles = useJupiterNestedMenuStyles();
  return (
    <SidebarLayout
      totalItems={customComponents.length}
      menuListStyles={jupiterStyles}
      pkg={PKG.components}
      getOpenKeys={({ menus, lastPath }) => {
        const keyMap = mapNestedPath(menus);
        return menus
          .filter(({ key }) => keyMap[key].includes(lastPath))
          .map(({ key }) => key);
      }}
    >
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
                  renderGrid={gridProps => (
                    <GridShowcase
                      {...gridProps}
                      renderComponentWrapper={ShowcaseWidget}
                    />
                  )}
                />
              </ThemeProvider>
            );
          }}
        </MetadataContext.Consumer>
      </MetadataContext>
    </SidebarLayout>
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
