import React from 'react';
import PropTypes from 'prop-types';
import usePreserveState from '@mui-treasury/utils/usePreserveState';
import makeStyles from '@material-ui/styles/makeStyles';
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
  renderWrapper,
  useStyles,
  onCollapse,
  stateBypassed,
  ...props
}) => {
  const [collapsed, setCollapsed] = usePreserveState(
    extCollapsed,
    onCollapse,
    stateBypassed
  );
  const onToggle = React.useMemo(() => () => setCollapsed(c => !c), [
    setCollapsed,
  ]);
  return (
    <StylesProvider useStyles={useStyles}>
      {renderWrapper({
        collapsed,
        children: (
          <>
            {renderToggle(
              { onClick: stateBypassed ? onCollapse : onToggle, collapsed },
              setCollapsed
            )}
            <Collapse {...props} in={collapsed}>
              {children}
            </Collapse>
          </>
        ),
      })}
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
  renderWrapper: PropTypes.func,
  useStyles: PropTypes.func,
  onCollapse: PropTypes.func,
  stateBypassed: PropTypes.bool,
};
CollapsibleMenu.defaultProps = {
  collapsed: false,
  children: undefined,
  renderToggle: () => null,
  useStyles: useDefaultStyles,
  stateBypassed: false,
  // eslint-disable-next-line react/prop-types
  renderWrapper: ({ children }) => <>{children}</>,
};

export default CollapsibleMenu;
