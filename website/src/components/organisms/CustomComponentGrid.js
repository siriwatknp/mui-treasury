import React from 'react';
import groupBy from 'lodash/groupBy';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { useHalfBorderedGridStyles } from '@mui-treasury/styles/grid/halfBordered';
import GridShowcase from '../molecules/GridShowcase';

/*
  categorize components into 2 group (medium, large)
  render
 */

const columnConfig = {
  medium: {
    xs: 12,
    sm: 6,
    // md will be 6
    lg: 4,
    xl: 3,
  },
  large: {
    xs: 12,
    // sm will be 12
    // md will be 12
    lg: 6,
    xl: 4,
  },
  huge: {
    xs: 12,
    // sm will be 12
    // md will be 12
    // lg will be 12
    xl: 6,
  },
};

const useGridProps = size => {
  const GridItemProps = columnConfig[size];
  return {
    gridStyles: useHalfBorderedGridStyles({
      borderColor: '#e9e9e9',
      colWidth: GridItemProps,
    }),
    GridItemProps,
  };
};

const Section = ({ size, components }) => {
  const gridProps = useGridProps(size);
  return (
    <Box mt={'-1px'}>
      <GridShowcase components={components} {...gridProps} />
    </Box>
  );
};

const ORDER = {
  huge: 0,
  large: 10,
  medium: 20,
};

const CustomComponentGrid = ({
  noHeader,
  components,
  renderGrid: CustomGrid,
}) => {
  const groupBySize = groupBy(components, o => o.metadata.size || 'medium');
  return (
    <Box
      py={{ xs: '2rem', sm: '3rem', md: '4rem' }}
      {...(noHeader && { pt: '0 !important' })}
    >
      {!noHeader && (
        <Box textAlign={'center'}>
          <h3>Custom Styles</h3>
        </Box>
      )}
      {Object.keys(groupBySize)
        .sort((a, b) => ORDER[a] - ORDER[b])
        .map(size => (
          <Section
            key={size}
            component={CustomGrid}
            size={size}
            components={groupBySize[size]}
          />
        ))}
    </Box>
  );
};

CustomComponentGrid.propTypes = {
  noHeader: PropTypes.bool,
  components: PropTypes.arrayOf(PropTypes.elementType),
  renderGrid: PropTypes.func,
  gridItemConfig: PropTypes.shape({
    medium: PropTypes.shape({}),
    large: PropTypes.shape({}),
    huge: PropTypes.shape({}),
  }),
};
CustomComponentGrid.defaultProps = {
  noHeader: false,
  components: [],
  renderGrid: () => null,
  gridItemConfig: {},
};

export default CustomComponentGrid;
