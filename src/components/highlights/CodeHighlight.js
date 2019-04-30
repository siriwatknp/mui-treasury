import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import prismTheme from 'prism-react-renderer/themes/oceanicNext';
import PropTypes from 'prop-types';
import Box from 'components/atoms/Box';

const CodeHighlight = ({ code, theme, padded, rounded, ...props }) => (
  <Box
    overscroll={'auto'}
    css={{
      '& pre': {
        overflow: 'scroll',
        margin: 0,
        ...(padded && { padding: padded * 8 }),
        ...(rounded && {
          borderRadius: 8,
        }),
      },
    }}
    {...props}
  >
    <Highlight
      {...defaultProps}
      theme={theme || prismTheme}
      code={code}
      language="jsx"
    >
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
  </Box>
);

CodeHighlight.propTypes = {
  code: PropTypes.string.isRequired,
  theme: PropTypes.shape({}),
  padded: PropTypes.number,
  rounded: PropTypes.bool,
};
CodeHighlight.defaultProps = {
  theme: undefined,
  padded: undefined,
  rounded: true,
};

export default CodeHighlight;
