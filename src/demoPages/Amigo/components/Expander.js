import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import Typography from 'extensions/Typography';
import Icon from 'extensions/Icon';

const Expander = ({ children, label }) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <ListItem button onClick={() => setOpen(!open)}>
        <Icon push={'right'}>
          {open ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
        </Icon>
        <ListItemText disableTypography>
          <Typography>{label}</Typography>
        </ListItemText>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box pl={{ xs: 2, md: 3 }} pb={2}>
          {children}
        </Box>
      </Collapse>
    </>
  );
};

Expander.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
Expander.defaultProps = {};

export default Expander;
