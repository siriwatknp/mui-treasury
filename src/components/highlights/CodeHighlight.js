import React from 'react';
import PropTypes from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';
import prismTheme from 'prism-react-renderer/themes/oceanicNext';
import Box from 'components/atoms/Box';
import Copier from 'components/atoms/Copier';
import Button from 'extensions/Button';

const CodeHighlight = ({
  code,
  name,
  theme,
  padded,
  rounded,
  copyable,
  ...props
}) => (
  <Box
    overscroll={'auto'}
    css={{
      '& pre': {
        overflow: 'scroll',
        margin: 0,
        ...(padded && { padding: padded * 8 }),
      },
      '& .token': {
        fontSize: 12,
      },
    }}
    bgcolor={'rgb(40, 44, 52)'}
    overflow={'hidden'}
    {...rounded && {
      borderRadius: 8,
    }}
    position={'relative'}
    {...props}
  >
    {copyable && (
      <>
        <Box pb={{ xs: 4.5, sm: 0 }} />
        <Box position={'absolute'} top={16} right={16} zIndex={1200}>
          <Copier text={code}>
            {({ copied }) => (
              <Button
                variant={'contained'}
                color={'secondary'}
                size={'small'}
                icon={copied ? 'check_circle' : 'file_copy'}
              >
                {copied ? 'Copied' : name || 'Copy'}
              </Button>
            )}
          </Copier>
        </Box>
      </>
    )}
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
  copyable: PropTypes.bool,
  name: PropTypes.string,
};
CodeHighlight.defaultProps = {
  theme: undefined,
  padded: undefined,
  rounded: true,
  copyable: false,
  name: '',
};

export default CodeHighlight;
