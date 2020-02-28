import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import { StylesProvider } from './StylesContext';
import Row from './submodules/Row';
import List from './submodules/List';
import ListItem from './submodules/ListItem';
import styles from './collapsibleMenu.styles';

const useDefaultStyles = makeStyles(styles, { name: 'CollapsibleMenu' });

const CollapsibleMenu = ({
  collapsed: extCollapsed,
  children,
  renderToggle,
  useStyles,
  ...props
}) => {
  const [collapsed, setCollapsed] = React.useState(extCollapsed);
  React.useEffect(() => {
    setCollapsed(c => (c !== extCollapsed ? extCollapsed : c));
  }, [extCollapsed]);
  const onToggle = React.useMemo(() => () => setCollapsed(c => !c), []);
  return (
    <StylesProvider useStyles={useStyles}>
      {renderToggle({ onClick: onToggle, collapsed }, setCollapsed)}
      <Collapse {...props} in={collapsed}>
        {children}
      </Collapse>
    </StylesProvider>
  );
};

CollapsibleMenu.Row = Row;
CollapsibleMenu.RowItem = Row.ListItem;
CollapsibleMenu.Action = Row.Action;
CollapsibleMenu.List = List;
CollapsibleMenu.ListItem = ListItem;
CollapsibleMenu.propTypes = {
  collapsed: PropTypes.bool,
  children: PropTypes.node,
  renderToggle: PropTypes.func,
  useStyles: PropTypes.func,
};
CollapsibleMenu.defaultProps = {
  collapsed: false,
  children: undefined,
  renderToggle: () => null,
  useStyles: useDefaultStyles,
};

export default CollapsibleMenu;
