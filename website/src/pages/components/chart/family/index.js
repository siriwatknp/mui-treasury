import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import FamilyChart from 'docs/components/chart/family/FamilyChart';

const FamilyChartPage = () => {
  return (
    <ComponentShowcase
      metadata={FamilyChart.metadata}
      renderComponent={() => <FamilyChart />}
    />
  );
};

FamilyChartPage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
  pathContext: PropTypes.shape({}).isRequired,
};

export default FamilyChartPage;

