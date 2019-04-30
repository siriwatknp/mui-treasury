import React from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'containers/Clipboard';
import CodeHighlight from './CodeHighlight';

const JsonHighlight = ({ value }) => (
  <Clipboard>
    {({ renderCopier }) => (
      <React.Fragment>
        {renderCopier({ text: JSON.stringify(value, null, 2) })}
        <CodeHighlight
          rounded={false}
          padded={1}
          code={JSON.stringify(value, null, 2)}
        />
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
