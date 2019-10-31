import React from 'react';
import partition from 'lodash/partition';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { useHalfBorderedGridStyles } from '@mui-treasury/styles/grid';

const CustomComponentGrid = ({
  components,
  noHeader,
  normalGridItemConfig,
  largeGridItemConfig,
  renderGrid: Grid,
}) => {
  const normalColWidth = {
    xs: 12,
    sm: 6,
    lg: 4,
    ...normalGridItemConfig,
  };
  const longColWidth = {
    xs: 12,
    lg: 6,
    ...largeGridItemConfig,
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
  normalGridItemConfig: PropTypes.shape({}),
  largeGridItemConfig: PropTypes.shape({}),
};
CustomComponentGrid.defaultProps = {
  noHeader: false,
  components: [],
  renderGrid: () => null,
  normalGridItemConfig: {},
  largeGridItemConfig: {},
};

export default CustomComponentGrid;
