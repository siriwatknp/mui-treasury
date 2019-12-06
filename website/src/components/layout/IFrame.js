import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { create } from 'jss';
import {
  useTheme,
  jssPreset,
  StylesProvider,
  makeStyles,
} from '@material-ui/core/styles';
import NoSsr from '@material-ui/core/NoSsr';
import Frame from 'react-frame-component';

const useStyles = makeStyles(() => ({
  root: {
    border: 'none',
    display: 'block',
    margin: 0,
    width: '100%',
    height: '100%',
  },
}));

function IFrame(props) {
  const { children, ...other } = props;
  const theme = useTheme();
  const styles = useStyles();
  const [state, setState] = React.useState({
    ready: false,
  });
  const instanceRef = React.useRef();

  const handleRef = React.useCallback(ref => {
    instanceRef.current = {
      contentDocument: ref ? ref.node.contentDocument : null,
      contentWindow: ref ? ref.node.contentWindow : null,
    };
  }, []);

  const onContentDidMount = () => {
    setState({
      ready: true,
      jss: create({
        plugins: jssPreset().plugins,
        insertionPoint: instanceRef.current.contentWindow['demo-frame-jss'],
      }),
      sheetsManager: new Map(),
      container: instanceRef.current.contentDocument.body,
      window: instanceRef.current.contentWindow,
    });
  };

  const onContentDidUpdate = () => {
    instanceRef.current.contentDocument.body.dir = theme.direction;
  };

  // NoSsr fixes a strange concurrency issue with iframe and quick React mount/unmount
  return (
    <NoSsr>
      <Frame
        ref={handleRef}
        contentDidMount={onContentDidMount}
        contentDidUpdate={onContentDidUpdate}
        {...other}
        className={cx(styles.root, other.className)}
      >
        <div id="demo-frame-jss" />
        {state.ready ? (
          <StylesProvider jss={state.jss} sheetsManager={state.sheetsManager}>
            {typeof children === 'function'
              ? children({ container: state.container, window: state.window })
              : React.cloneElement(children, {
                  container: state.container,
                  window: state.window,
                })}
          </StylesProvider>
        ) : null}
      </Frame>
    </NoSsr>
  );
}

IFrame.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

export default React.memo(IFrame);
