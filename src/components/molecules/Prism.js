import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import prismTheme from 'prism-react-renderer/themes/oceanicNext';
import Highlight, { defaultProps } from 'prism-react-renderer';
import SourceCopier from 'components/atoms/SourceCopier';

const useStyles = makeStyles(() => ({
  root: {
    margin: '0 !important',
  },
}));

const Prism = ({ code, fileName }) => {
  const classes = useStyles();
  return (
    <SourceCopier source={code} sourceName={fileName}>
      <Highlight
        {...defaultProps}
        theme={{
          ...prismTheme,
          plain: { ...prismTheme.plain, color: '#e5e5e5', fontSize: 14 },
        }}
        code={code}
        language="jsx"
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${className} ${classes.root}`} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </SourceCopier>
  );
};

Prism.propTypes = {
  code: PropTypes.string.isRequired,
  fileName: PropTypes.string,
};
Prism.defaultProps = {
  fileName: 'Click to copy',
};

export default Prism;
