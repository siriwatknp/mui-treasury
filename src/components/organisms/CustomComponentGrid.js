import React from 'react';
import partition from 'lodash/partition';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { useHalfBorderedGridStyles } from '@mui-treasury/styles/grid';

const CustomComponentGrid = ({ components, noHeader, renderGrid: Grid }) => {
  const normalColWidth = {
    xs: 12,
    sm: 6,
    lg: 4,
  };
  const longColWidth = {
    xs: 12,
    lg: 6,
  };
  const gridStyles = useHalfBorderedGridStyles({
    borderColor: '#e9e9e9',
    colWidth: normalColWidth,
  });
  const longGridStyles = useHalfBorderedGridStyles({
    borderColor: '#e9e9e9',
    colWidth: longColWidth,
  });
  const [longComponents, shortComponents] = partition(
    components,
    o => o.metadata.longFrame
  );
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
      <Grid
        gridStyles={gridStyles}
        components={shortComponents}
        GridItemProps={normalColWidth}
      />
      {longComponents.length > 0 && (
        <Box mt={'-1px'}>
          <Grid
            gridStyles={longGridStyles}
            components={longComponents}
            GridItemProps={longColWidth}
          />
        </Box>
      )}
    </Box>
  );
};

CustomComponentGrid.propTypes = {
  noHeader: PropTypes.bool,
  components: PropTypes.arrayOf(PropTypes.elementType),
  renderGrid: PropTypes.func,
};
CustomComponentGrid.defaultProps = {
  noHeader: false,
  components: [],
  renderGrid: () => null,
};

export default CustomComponentGrid;
