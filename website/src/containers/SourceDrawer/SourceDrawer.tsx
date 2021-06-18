import React from 'react';
import isEmpty from 'lodash/isEmpty';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/styles/makeStyles';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

import BrowserIFrame from 'website/src/components/layout/BrowserIFrame';
import SourceFile from 'website/src/containers/SourceFile';
import FrontMatter from 'website/src/containers/FrontMatter';

const baseTheme = createTheme();

const useStyles = makeStyles(({ palette, breakpoints, spacing }: Theme) => ({
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
      height: 'calc(100vh - 64px)',
    },
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
        },
      },
      '& .SourceCopier-root': {
        flexGrow: 1,
        '& > .prism-code': {
          height: '100%',
        },
      },
    },
  },
  title: {
    marginLeft: spacing(1),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  // @ts-ignore
  return <Slide direction="up" ref={ref} {...props} />;
});

const SourceDrawer = ({ Component, setComponent }) => {
  const classes = useStyles();
  const { metadata = {} } = Component;
  const { frameProps } = metadata;
  const isOpen = Object.keys(metadata).length > 0;
  const onClose = () => setComponent({});
  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={onClose}
      // @ts-ignore
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
          <Typography
            data-testid="variant-name"
            variant="h6"
            className={classes.title}
          >
            {Component?.type?.name || Component?.name}
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
                  // @ts-ignore
                  transform: 'scale(0.72)',
                  transformOrigin: '0 0',
                }}
              >
                {!isEmpty(Component) && (
                  <BrowserIFrame
                    includes={['xs', 'xs-h', 'sm', 'md']}
                    initialKey={'md'}
                  >
                    <Box px={{ xs: 1, sm: 1, md: 2 }} py={3} {...frameProps}>
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
          <Box
            data-testid="source-code-projector"
            className={'ModuleProjector-sourceCode'}
            fontSize={14}
            px={'1.5em'}
            width={{ lg: 620, xl: 800 }}
          >
            <SourceFile
              component={FrontMatter}
              match={metadata.path}
              fileName={'Demo.js'}
            />
          </Box>
        </div>
      </Grid>
    </Dialog>
  );
};

export default SourceDrawer;
