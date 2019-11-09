import React from 'react';
import PropTypes from 'prop-types';
import Html from 'components/molecules/Html';
import FrontMatter from './FrontMatter';

const SourceFile = ({ match, ...props }) => {
  return (
    <FrontMatter match={match}>
      {({ html }) => <Html html={html} {...props} />}
    </FrontMatter>
  );
};

SourceFile.propTypes = {
  match: PropTypes.string,
  fileName: PropTypes.string,
  source: PropTypes.string,
};
SourceFile.defaultProps = {
  match: '',
  fileName: 'Click to copy',
  source: '',
};

export default SourceFile;
