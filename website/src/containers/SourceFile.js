import React from 'react';
import PropTypes from 'prop-types';
import Html from 'components/molecules/Html';
import FrontMatter from './FrontMatter';

const SourceFile = ({ component: Component, match, ...props }) => {
  return (
    <Component match={match}>
      {({ body }) => <Html body={body} {...props} />}
    </Component>
  );
};

SourceFile.propTypes = {
  component: PropTypes.elementType,
  match: PropTypes.string,
  fileName: PropTypes.string,
  source: PropTypes.string,
};
SourceFile.defaultProps = {
  component: FrontMatter,
  match: '',
  fileName: 'Click to copy',
  source: '',
};

export default SourceFile;
