import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { Link } from 'gatsby';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import Fade from '@material-ui/core/Fade';
import Hidden from '@material-ui/core/Hidden';
import Portal from '@material-ui/core/Portal';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SourceFile from 'containers/SourceFile';
import docGen from 'utils/docGen';
import { isExternalLink, prettifySource } from 'utils/functions';

import atoms from 'components/atoms';
import organisms from 'components/organisms';
import BrowserIFrame from 'components/layout/BrowserIFrame';

import { Consumer } from './context';

const { Tag } = atoms;
const { ModuleProjector } = organisms;

const baseTheme = createMuiTheme();

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: palette.grey[50],
  },
  fakeBackdrop: {
    display: 'none',
  },
  drawerBackdrop: {
    backgroundColor: '#fff',
    cursor: 'alias',
  },
  closeButton: {
    position: 'fixed',
    top: 19,
    right: 8,
    '& .MuiSvgIcon-root': {
      fontSize: 32,
    },
    [breakpoints.up('sm')]: {
      top: 16,
      left: 16,
      right: 'unset',
      '& .MuiSvgIcon-root': {
        fontSize: 40,
      },
    },
  },
}));

const DemoSourceDrawer = ({ title }) => {
  const classes = useStyles();
  const renderList = items => {
    if (!items || !items.length) return null;
    return (
      <>
        <Grid container spacing={2}>
          {items.map(({ label, url, ...rest }) => {
            const isExternal = isExternalLink(url);
            return (
              <Grid item key={label}>
                <Tag
                  icon={<KeyboardArrowRight />}
                  component={isExternal ? 'a' : Link}
                  {...(isExternal
                    ? {
                        rel: 'noopener',
                        target: '_blank',
                        href: url,
                      }
                    : {
                        to: url,
                      })}
                  {...rest}
                >
                  {label}
                </Tag>
              </Grid>
            );
          })}
        </Grid>
        <Box mb={3} />
      </>
    );
  };
  return (
    <Consumer>
      {({ Component, setComponent }) => {
        const { metadata = {}, raw_js: rawSource } = Component;
        const isOpen = Object.keys(metadata).length > 0;
        const { files = [], relates = [], frameProps } = metadata;
        const mappedFiles = docGen().mapAllFiles(files);
        return (
          <>
            <Drawer
              classes={{
                paper: classes.paper,
              }}
              open={isOpen}
              anchor={'right'}
              variant={'temporary'}
              onClose={() => setComponent({})}
              ModalProps={{
                BackdropProps: {
                  className: classes.drawerBackdrop,
                },
              }}
              elevation={0}
            >
              <IconButton
                className={classes.closeButton}
                onClick={() => setComponent({})}
              >
                <Close />
              </IconButton>
              <Box mt={3} px={3}>
                <h2>
                  {metadata.title} {title}
                </h2>
              </Box>
              <Box px={3}>{renderList(relates, 'Relates')}</Box>
              <Box width={{ xs: '100vw', sm: 500, md: 680 }}>
                <ModuleProjector
                  files={mappedFiles}
                  demoSource={
                    <SourceFile
                      match={metadata.path}
                      fileName={'Demo.js'}
                      source={prettifySource(rawSource)}
                    />
                  }
                />
              </Box>
              <Box css={{ flexGrow: 1 }} bgcolor={'rgb(40, 44, 52)'} />
            </Drawer>
            <ThemeProvider theme={baseTheme}>
              <Hidden smDown>
                <Portal>
                  <Fade in={isOpen}>
                    <Box
                      position={'fixed'}
                      top={'50%'}
                      left={'calc(50% - 350px)'}
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                      borderRadius={4}
                      bgcolor={'common.white'}
                      zIndex={1500}
                      css={{
                        transform: 'scale(0.75) translate(-50%, -50%)',
                        transformOrigin: '0 0',
                      }}
                    >
                      {!isEmpty(Component) && (
                        <BrowserIFrame
                          includes={['xs', 'xs-h', 'sm', 'md']}
                          initialKey={'md'}
                        >
                          <Box
                            px={{ xs: 1, sm: 1, md: 2 }}
                            py={3}
                            {...frameProps}
                          >
                            <CssBaseline />
                            <Component />
                          </Box>
                        </BrowserIFrame>
                      )}
                    </Box>
                  </Fade>
                </Portal>
              </Hidden>
            </ThemeProvider>
          </>
        );
      }}
    </Consumer>
  );
};

DemoSourceDrawer.propTypes = {
  title: PropTypes.string,
  frameProps: PropTypes.shape({}),
};
DemoSourceDrawer.defaultProps = {
  title: '',
  frameProps: {},
};

export default DemoSourceDrawer;
