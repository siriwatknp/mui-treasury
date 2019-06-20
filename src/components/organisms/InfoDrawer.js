import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer/Drawer';
import ComponentInfo from 'components/organisms/ComponentInfo';

const InfoDrawer = ({ open, onClose, drawerProps, info, ...props }) => (
  <Drawer
    anchor={'right'}
    variant={'temporary'}
    {...drawerProps}
    open={open}
    onClose={onClose}
  >
    <Box width={{ xs: 320, sm: 600, md: 700 }}>
      <ComponentInfo {...props} {...info} />
    </Box>
  </Drawer>
);

InfoDrawer.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  info: PropTypes.shape({}),
  drawerProps: PropTypes.shape({}),
};
InfoDrawer.defaultProps = {
  open: false,
  onClose: () => {},
  info: undefined,
  drawerProps: {},
};

export default InfoDrawer;
