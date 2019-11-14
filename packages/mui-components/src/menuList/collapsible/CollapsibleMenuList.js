import React from 'react';
import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import useStateBinding from '@mui-treasury/utils/useStateBinding';
import InfoMenuItem from '../../menuItem/info';
import ToggleMenuItem from '../../menuItem/toggle';

const CollapsibleMenuList = ({
  collapseProps,
  initialExpanded,
  subMenus,
  renderParent: Parent,
  renderChild: Child,
  parentProps,
  listProps,
  getChildProps,
}) => {
  const [expanded, setExpanded] = useStateBinding(initialExpanded, false);
  return (
    <>
      <Parent
        {...parentProps}
        expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      />
      <Collapse {...collapseProps} in={expanded}>
        <List {...listProps}>
          {subMenus.map((menu, idx) => (
            <Child
              key={menu.key || menu.id || idx}
              {...getChildProps(menu, idx)}
            />
          ))}
        </List>
      </Collapse>
    </>
  );
};

CollapsibleMenuList.propTypes = {
  initialExpanded: PropTypes.bool,
  collapseProps: PropTypes.shape({}),
  parentProps: PropTypes.shape({}),
  subMenus: PropTypes.arrayOf(PropTypes.shape({})),
  renderParent: PropTypes.elementType,
  renderChild: PropTypes.elementType,
  listProps: PropTypes.shape({}),
  getChildProps: PropTypes.func,
};
CollapsibleMenuList.defaultProps = {
  initialExpanded: false,
  collapseProps: {},
  parentProps: {},
  listProps: {},
  subMenus: [],
  renderParent: ToggleMenuItem,
  renderChild: InfoMenuItem,
  getChildProps: menu => menu,
};

export default CollapsibleMenuList;
