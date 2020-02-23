import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import TreeChart from 'docs/components/chart/tree/TreeChart';

const TreeChartPage = () => {
  return (
    <ComponentShowcase
      metadata={TreeChart.metadata}
      renderComponent={() => <TreeChart />}
    />
  );
};

TreeChartPage.propTypes = {
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

export default TreeChartPage;
