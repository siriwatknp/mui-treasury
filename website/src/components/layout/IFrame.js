import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheetManager } from 'styled-components';
import cx from 'clsx';
import { create } from 'jss';
import { useTheme, jssPreset, StylesProvider } from '@material-ui/core/styles';
import makeStyles from '@material-ui/styles/makeStyles';
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
    const head = instanceRef.current.contentWindow['demo-frame-jss'];
    const injectFirstNode = instanceRef.current.contentDocument.createComment(
      'mui-inject-first'
    );
    head.insertBefore(injectFirstNode, head.firstChild);
    setState({
      ready: true,
      jss: create({
        plugins: jssPreset().plugins,
        insertionPoint: injectFirstNode,
      }),
      sheetsManager: new Map(),
      document: instanceRef.current.contentDocument,
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
            <StyleSheetManager
              target={instanceRef.current.contentWindow['demo-frame-jss']}
            >
              {typeof children === 'function'
                ? children({
                    window: state.window,
                    document: state.document,
                    container: state.container,
                  })
                : React.cloneElement(children, {
                    container: state.container,
                    window: state.window,
                  })}
            </StyleSheetManager>
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
