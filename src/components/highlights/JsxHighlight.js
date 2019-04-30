/* eslint-disable prettier/prettier,no-useless-escape */
import React from 'react';
import PropTypes from 'prop-types';
import reactElementToJSXString from 'react-element-to-jsx-string';
import Clipboard from 'containers/Clipboard';
import { normalizeJSX } from 'helpers/string';
import CodeHighlight from './CodeHighlight';

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
          <CodeHighlight rounded={false} code={code} padded={1} />
        </React.Fragment>
      )}
    </Clipboard>
  );
};

JsxHighlight.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
};

export default JsxHighlight;
