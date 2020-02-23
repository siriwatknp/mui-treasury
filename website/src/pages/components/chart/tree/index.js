import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
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

TreeChartPage.propTypes = {};
TreeChartPage.defaultProps = {};

export default TreeChartPage;
