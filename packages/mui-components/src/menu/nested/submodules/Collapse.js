import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import CollapsibleMenu from '../../collapsible';
import { useCtxStyles } from '../StylesContext';

const Collapse = ({ useStyles = useCtxStyles, level, ...props }) => {
  const styles = useStyles(props);
  return (
    <CollapsibleMenu
      useStyles={() => ({
        ...styles,
        row: cx(styles.row, styles[`lv${level}Row`]),
        rowSelected: cx(styles.rowSelected, styles[`lv${level}RowSelected`]),
        rowItem: cx(styles.rowItem, styles[`lv${level}RowItem`]),
        rowItemSelected: cx(
          styles.rowItemSelected,
          styles[`lv${level}RowItemSelected`]
        ),
        list: cx(styles.list, styles[`lv${level + 1}List`]),
        listItem: cx(styles.listItem, styles[`lv${level + 1}ListItem`]),
        listItemSelected: cx(
          styles.listItemSelected,
          styles[`lv${level + 1}ListItemSelected`]
        ),
      })}
      {...props}
    />
  );
};

Collapse.Row = CollapsibleMenu.Row;
Collapse.RowItem = CollapsibleMenu.RowItem;
Collapse.Action = CollapsibleMenu.Action;
Collapse.List = CollapsibleMenu.List;
Collapse.ListItem = CollapsibleMenu.ListItem;
Collapse.propTypes = {
  useStyles: PropTypes.func,
  level: PropTypes.number,
};
Collapse.defaultProps = {};

export default Collapse;
