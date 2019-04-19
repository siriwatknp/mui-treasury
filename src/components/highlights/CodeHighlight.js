import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import prismTheme from 'prism-react-renderer/themes/duotoneLight';
import PropTypes from 'prop-types';

const CodeHighlight = ({ code }) => (
  <Highlight {...defaultProps} theme={prismTheme} code={code} language="jsx">
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div
            {...getLineProps({
              line,
              key: i,
            })}
          >
            {line.map((token, key) => (
              <span
                {...getTokenProps({
                  token,
                  key,
                })}
              />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
);

CodeHighlight.propTypes = {
  code: PropTypes.string.isRequired,
};

export default CodeHighlight;
