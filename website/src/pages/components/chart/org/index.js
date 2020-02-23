import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import OrgChart from 'docs/components/chart/org/OrgChart';

const OrgChartPage = () => {
  return (
    <ComponentShowcase
      metadata={OrgChart.metadata}
      renderComponent={() => <OrgChart />}
    />
  );
};

OrgChartPage.propTypes = {
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

export default OrgChartPage;

