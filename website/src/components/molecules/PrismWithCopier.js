import React from 'react';
import PropTypes from 'prop-types';
import SourceCopier from 'components/atoms/SourceCopier';
import Prism from './Prism';

const PrismWithCopier = ({ code, fileName }) => (
  <SourceCopier source={code} sourceName={fileName}>
    <Prism code={code} />
  </SourceCopier>
);

PrismWithCopier.propTypes = {
  code: PropTypes.string.isRequired,
  fileName: PropTypes.string,
};
PrismWithCopier.defaultProps = {
  fileName: 'Click to copy',
};

export default PrismWithCopier;
