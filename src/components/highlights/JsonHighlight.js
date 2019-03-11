import React from 'react';
import PropTypes from 'prop-types';

import Highlight, { defaultProps } from 'prism-react-renderer';
import prismTheme from 'prism-react-renderer/themes/duotoneLight';
import Clipboard from 'containers/Clipboard';

const JsonHighlight = ({ value }) => (
  <Clipboard>
    {({ renderCopier }) => (
      <React.Fragment>
        {renderCopier({ text: JSON.stringify(value, null, 2) })}
        <Highlight
          {...defaultProps}
          theme={prismTheme}
          code={JSON.stringify(value, null, 2)}
          language="json"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
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
      </React.Fragment>
    )}
  </Clipboard>
);

JsonHighlight.propTypes = {
  value: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]),
};
JsonHighlight.defaultProps = {
  value: '',
};

export default JsonHighlight;
