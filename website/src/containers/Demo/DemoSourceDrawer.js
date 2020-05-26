import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { Link } from 'gatsby';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';

import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Close from '@material-ui/icons/Close';

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

const useStyles = makeStyles(({ palette, breakpoints, spacing }) => ({
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
  gridContainer: {
    height: 'calc(100vh - 56px)',
    [breakpoints.up('sm')]: {
      height: 'calc(100vh - 64px)'
    }
  },
  codeSection: {
    flexGrow: 1,
    maxWidth: '100vw',
    zIndex: 1,
    backgroundColor: '#fff',
    boxShadow: '0 0 8px -2px rgba(0,0,0,0.12)',
    [breakpoints.up('lg')]: {
      height: '100%',
      flexGrow: 0,
      display: 'flex',
      flexDirection: 'column',
      '& .ModuleProjector-sourceCode': {
        flexGrow: 1,
        minHeight: 0,
        overflow: 'auto',
        '& > div': {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }
      },
      '& .SourceCopier-root': {
        flexGrow: 1,
        '& > .prism-code': {
          height: '100%',
        }
      }
    }
  },
  title: {
    marginLeft: spacing(1)
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
        const onClose = () => setComponent({})
        return (
          <Dialog
            fullScreen
            open={isOpen}
            onClose={onClose}
            TransitionComponent={Transition}
          >
            <AppBar color={'default'} elevation={0} position={'sticky'}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={onClose}
                  aria-label="close"
                  data-testid="close-projector"
                >
                  <Close />
                </IconButton>
                <Typography data-testid="variant-name" variant="h6" className={classes.title}>
                  {metadata.title} {title}
                </Typography>
              </Toolbar>
            </AppBar>
            <Grid container className={classes.gridContainer}>
              <Grid item xs={12} lg>
                <Box minHeight={400}>
                  <ThemeProvider theme={baseTheme}>
                    <Box
                      position={'absolute'}
                      flexGrow={{ xs: 1, lg: 0 }}
                      css={{
                        transform: 'scale(0.72)',
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
                  </ThemeProvider>
                </Box>
              </Grid>
              <div className={classes.codeSection}>
                <Box px={3}>{renderList(relates, 'Relates')}</Box>
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
              </div>
            </Grid>
          </Dialog>
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
