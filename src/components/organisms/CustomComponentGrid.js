import React from 'react';
import partition from 'lodash/partition';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import molecules from 'components/molecules';
import { useHalfBorderedGridStyles } from '@mui-treasury/styles/grid';

const { GridShowcase, ShowcaseWidget } = molecules;

const CustomComponentGrid = ({ components, noHeader }) => {
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
      <GridShowcase
        gridStyles={gridStyles}
        components={shortComponents}
        GridItemProps={normalColWidth}
        renderComponentWrapper={ShowcaseWidget}
      />
      {longComponents.length > 0 && (
        <Box mt={'-1px'}>
          <GridShowcase
            gridStyles={longGridStyles}
            components={longComponents}
            GridItemProps={longColWidth}
            renderComponentWrapper={ShowcaseWidget}
          />
        </Box>
      )}
    </Box>
  );
};

CustomComponentGrid.propTypes = {
  noHeader: PropTypes.bool,
  components: PropTypes.arrayOf(PropTypes.elementType),
};
CustomComponentGrid.defaultProps = {
  noHeader: false,
  components: [],
};

export default CustomComponentGrid;
