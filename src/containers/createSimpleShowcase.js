import React, { useState } from 'react';
import get from 'lodash/get';
import { styled, ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Showcase from 'components/molecules/Showcase';
import InfoDrawer from 'components/organisms/InfoDrawer';

const Image = styled('img')({
  width: 24,
  height: 24,
  opacity: 0.7,
  '&:hover': {
    opacity: 1,
  },
});

const baseTheme = createMuiTheme();

const createSimpleShowcase = (components, options = {}) => {
  const {
    wrapperOmitted = false,
    gridItemProps: globalGridItemProps,
    gridContainerProps: globalGridContainerProps,
  } = options;
  const Page = props => {
    const [info, setInfo] = useState(null);
    const [infoShowed, setInfoShowed] = useState(false);
    const showInfo = component => {
      setInfo(component);
      setInfoShowed(true);
    };
    const closeInfo = () => setInfoShowed(false);
    const renderContent = () => (
      <>
        <Grid
          container
          spacing={4}
          justify={'center'}
          {...globalGridContainerProps}
        >
          {components.map(
            ({ component, render, previewProps = {}, gridItemProps }) => (
              <Grid
                key={get(component, 'info.name')}
                item
                xs={12}
                sm={6}
                lg={4}
                {...globalGridItemProps}
                {...gridItemProps}
              >
                <Showcase
                  actions={[
                    component.codeSandbox && (
                      <IconButton
                        component={'a'}
                        href={component.codeSandbox}
                        target={'_blank'}
                        onClick={e => {
                          e.stopPropagation();
                        }}
                      >
                        <Image
                          alt={'code-sandbox'}
                          src={
                            // eslint-disable-next-line max-len
                            'https://camo.githubusercontent.com/237fa1e304ff8d669572cf96784308c87975d149/687474703a2f2f63646e2e656d6265642e6c792f70726f7669646572732f6c6f676f732f636f646573616e64626f782e706e67'
                          }
                        />
                      </IconButton>
                    ),
                  ]}
                  onClickInfo={() => showInfo(component.info)}
                  name={get(component, 'info.name')}
                  description={get(component, 'info.description')}
                  {...previewProps}
                  sheetProps={{
                    bgColor: previewProps.inverted ? 'dark' : 'white',
                    ...previewProps.sheetProps,
                  }}
                >
                  {component.getTheme ? (
                    <ThemeProvider
                      theme={createMuiTheme({
                        overrides: component.getTheme(baseTheme),
                      })}
                    >
                      {render(props)}
                    </ThemeProvider>
                  ) : (
                    <ThemeProvider theme={baseTheme}>
                      {render(props)}
                    </ThemeProvider>
                  )}
                </Showcase>
              </Grid>
            ),
          )}
        </Grid>
        <InfoDrawer open={infoShowed} onClose={closeInfo} info={info} />
      </>
    );
    return wrapperOmitted ? (
      renderContent()
    ) : (
      <Box
        width={'100%'}
        p={{
          xs: 2,
          sm: 4,
        }}
      >
        {renderContent()}
      </Box>
    );
  };

  Page.components = components;
  return Page;
};

export default createSimpleShowcase;
