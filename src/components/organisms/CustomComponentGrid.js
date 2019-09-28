import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import molecules from 'components/molecules';
import { useMultiRowBorderedGridStyles } from '@mui-treasury/styles/grid';

const { ShowcaseWidget } = molecules;

const CustomComponentGrid = ({ colWidth, components, getItemProps }) => {
  const multiRowGridStyles = useMultiRowBorderedGridStyles({
    borderColor: '#e9e9e9',
    colWidth,
  });
  return (
    <Box py={{ xs: '2rem', sm: '3rem', md: '4rem' }}>
      <Box textAlign={'center'}>
        <h3>Custom Styles</h3>
      </Box>
      <Grid container classes={multiRowGridStyles}>
        {components.map(Component => {
          if (Component.isDefault) return null;
          const { ShowcaseWidgetProps } = getItemProps(Component);
          const name = Component.metadata.title || Component.name;
          return (
            <Grid key={name} item {...colWidth} classes={multiRowGridStyles}>
              <ShowcaseWidget {...ShowcaseWidgetProps} name={name}>
                <Component />
              </ShowcaseWidget>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

CustomComponentGrid.propTypes = {
  colWidth: PropTypes.shape({}),
  components: PropTypes.arrayOf(PropTypes.shape({})),
  getItemProps: PropTypes.func,
};
CustomComponentGrid.defaultProps = {
  colWidth: {
    xs: 12,
    sm: 6,
    md: 4,
  },
  components: [],
  getItemProps: () => {},
};

export default CustomComponentGrid;
