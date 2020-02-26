import React from 'react';
import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';

const CollapsibleMenu = ({
  collapsed: extCollapsed,
  children,
  renderToggle,
  ...props
}) => {
  const [collapsed, setCollapsed] = React.useState(extCollapsed);
  React.useEffect(() => {
    setCollapsed(c => (c !== extCollapsed ? extCollapsed : c));
  }, [extCollapsed]);
  const onToggle = React.useMemo(() => () => setCollapsed(c => !c), []);
  return (
    <>
      {renderToggle({ onClick: onToggle, collapsed }, setCollapsed)}
      <Collapse {...props} in={collapsed}>
        {children}
      </Collapse>
    </>
  );
};

CollapsibleMenu.propTypes = {
  collapsed: PropTypes.bool,
  children: PropTypes.node,
  renderToggle: PropTypes.func,
};
CollapsibleMenu.defaultProps = {
  collapsed: false,
  children: undefined,
  renderToggle: () => null,
};

export default CollapsibleMenu;
