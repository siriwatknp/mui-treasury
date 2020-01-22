import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import molecules from 'components/molecules';

const { BoxTabs, ShowcaseWidget } = molecules;

const DefaultSection = ({
  Component,
  ShowcaseWidgetProps,
  componentImage,
  cssTree,
}) => (
  <Box maxWidth={1152} mx={'auto'}>
    <Grid container>
      <Grid item xs={12} sm={5} md={5}>
        <ShowcaseWidget
          overflow={'auto'}
          {...ShowcaseWidgetProps}
          border={'1px solid #e9e9e9'}
          mr={'-1px'}
          name={Component.metadata.title}
        >
          <Component />
        </ShowcaseWidget>
      </Grid>
      <Grid item xs={12} sm={7} md={7} container direction={'column'}>
        <BoxTabs
          initialTabIndex={1}
          tabs={[{ label: 'Anatomy' }, { label: 'CSS API' }]}
        >
          {([key], { wrapContent }) =>
            wrapContent(
              <>
                {key === 0 && componentImage}
                {key === 1 && cssTree}
              </>,
              { p: 3, flexGrow: 1 }
            )
          }
        </BoxTabs>
      </Grid>
    </Grid>
  </Box>
);

DefaultSection.propTypes = {
  cssTree: PropTypes.node,
  componentImage: PropTypes.node,
  Component: PropTypes.elementType,
  ShowcaseWidgetProps: PropTypes.shape({}),
};
DefaultSection.defaultProps = {
  cssTree: undefined,
  componentImage: undefined,
  Component: () => {},
  ShowcaseWidgetProps: {},
};

export default DefaultSection;
