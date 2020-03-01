import React from 'react';
import PropTypes from 'prop-types';
import RowToggle from '../../../toggle/row';
import { useCtxStyles } from '../StylesContext';

const Row = ({ useStyles = useCtxStyles, ...props }) => {
  const styles = useStyles(props);
  return (
    <RowToggle
      useStyles={() => ({
        ...styles,
        root: styles.row,
        rootSelected: styles.rowSelected,
        listItem: styles.rowItem,
        listItemSelected: styles.rowItemSelected,
      })}
      {...props}
    />
  );
};

Row.ListItem = RowToggle.ListItem;
Row.Action = RowToggle.Action;
Row.propTypes = {
  useStyles: PropTypes.func,
};

export default Row;
