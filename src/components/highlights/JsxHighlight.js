/* eslint-disable prettier/prettier,no-useless-escape */
import React from 'react';
import PropTypes from 'prop-types';
import reactElementToJSXString from 'react-element-to-jsx-string';
import Highlight, { defaultProps } from 'prism-react-renderer';
import prismTheme from 'prism-react-renderer/themes/duotoneLight';
import Clipboard from 'containers/Clipboard';
import { normalizeJSX } from 'helpers/string';

const JsxHighlight = ({ component }) => {
  let code =
    typeof component === 'function'
      ? reactElementToJSXString(component(), {
          // displayName: () => component.displayName,
        })
      : component;
  code = normalizeJSX(code);
  return (
    <Clipboard>
      {({ renderCopier }) => (
        <React.Fragment>
          {renderCopier({
            text:
              typeof component === 'function'
                ? code
                : JSON.stringify(code, null, 2),
          })}
          <Highlight
            {...defaultProps}
            theme={prismTheme}
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
        </React.Fragment>
      )}
    </Clipboard>
  );
};

JsxHighlight.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
};

export default JsxHighlight;
