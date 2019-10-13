import React from 'react';
import partition from 'lodash/partition';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import molecules from 'components/molecules';
import { useHalfBorderedGridStyles } from '@mui-treasury/styles/grid';

const { ShowcaseWidget } = molecules;

const CustomComponentGrid = ({
  colWidth,
  components,
  getItemProps,
  noHeader,
  setComponent,
}) => {
  const longColWidth = {
    xs: 12,
    lg: 6,
  };
  const longGridStyles = useHalfBorderedGridStyles({
    borderColor: '#e9e9e9',
    colWidth: longColWidth,
  });
  const multiRowGridStyles = useHalfBorderedGridStyles({
    borderColor: '#e9e9e9',
    colWidth,
  });
  const [longComponents, shortComponents] = partition(
    components,
    o => o.metadata.long
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
      <Grid container classes={multiRowGridStyles}>
        {shortComponents.map(Component => {
          const { ShowcaseWidgetProps } = getItemProps(Component);
          const {
            title: name = Component.name,
            frame,
            description,
          } = Component.metadata;
          return (
            <Grid key={name} item {...colWidth} classes={multiRowGridStyles}>
              <ShowcaseWidget
                {...ShowcaseWidgetProps}
                frameProps={frame}
                description={description}
                name={name}
                height={'100%'}
              >
                <Component />
              </ShowcaseWidget>
            </Grid>
          );
        })}
      </Grid>
      {longComponents.length > 0 && (
        <Box mt={'-1px'}>
          <Grid container classes={longGridStyles}>
            {longComponents.map(Component => {
              const {
                title: name = Component.name,
                frame,
                description,
              } = Component.metadata;
              return (
                <Grid
                  key={name}
                  item
                  {...longColWidth}
                  classes={longGridStyles}
                >
                  <ShowcaseWidget
                    pt={3}
                    px={4}
                    frameProps={frame}
                    description={description}
                    name={name}
                    height={'100%'}
                    onClickCode={() => setComponent(Component)}
                  >
                    <Component />
                  </ShowcaseWidget>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

CustomComponentGrid.propTypes = {
  noHeader: PropTypes.bool,
  colWidth: PropTypes.shape({}),
  components: PropTypes.arrayOf(PropTypes.elementType),
  getItemProps: PropTypes.func,
};
CustomComponentGrid.defaultProps = {
  noHeader: false,
  colWidth: {
    xs: 12,
    sm: 6,
    md: 4,
  },
  components: [],
  getItemProps: () => {},
};

export default CustomComponentGrid;
