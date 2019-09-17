import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import molecules from 'components/molecules';

const { BoxTabs } = molecules;

const DefaultSection = ({ demo, cssTree }) => (
  <Box maxWidth={1152} mx={'auto'}>
    <Grid container>
      <Grid item xs={12} sm={5} md={5}>
        {demo}
      </Grid>
      <Grid item xs={12} sm={7} md={7} container direction={'column'}>
        <BoxTabs
          initialTabIndex={1}
          tabs={[{ label: 'Anatomy' }, { label: 'CSS API' }]}
        >
          {([key], { wrapContent }) =>
            wrapContent(
              <>
                {key === 0 && 'image'}
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
  demo: PropTypes.node,
  cssTree: PropTypes.node,
};
DefaultSection.defaultProps = {
  demo: undefined,
  cssTree: undefined,
};

export default DefaultSection;
