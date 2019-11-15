import React from 'react';
import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import useStateBinding from '@mui-treasury/utils/useStateBinding';
import InfoMenuItem from '../../menuItem/info';
import ToggleMenuItem from '../../menuItem/toggle';

// Selector that will be passed selected props to default Parent, Child
// - getParentProps
// - getChildProps

// Use these props if you want to render different Parent, Child
// - renderParent
// - renderChild

// Note! if you already provide "renderParent" as props, no need to use "getParentProps" anymore

const CollapsibleMenuList = ({
  initialExpanded,
  subMenus,
  renderWrapper,
  getParentProps,
  renderParent,
  getChildProps,
  renderChild,
  collapseProps,
  listProps,
}) => {
  console.log('listProps', listProps);
  const [expanded, setExpanded] = useStateBinding(initialExpanded, false);
  const elements = (
    <>
      {renderParent({
        ...getParentProps({ expanded }),
        expanded,
        onToggle: () => setExpanded(!expanded),
      })}
      <Collapse {...collapseProps} in={expanded}>
        <List {...listProps}>
          {subMenus.map((data, idx, array) =>
            renderChild(
              getChildProps({ data, expanded, idx, array }),
              idx,
              array
            )
          )}
        </List>
      </Collapse>
    </>
  );
  return renderWrapper({ expanded, children: elements });
};

CollapsibleMenuList.propTypes = {
  initialExpanded: PropTypes.bool,
  subMenus: PropTypes.arrayOf(PropTypes.shape({})),
  renderWrapper: PropTypes.func,
  renderParent: PropTypes.func,
  getParentProps: PropTypes.func,
  renderChild: PropTypes.func,
  getChildProps: PropTypes.func,
  collapseProps: PropTypes.shape({}),
  listProps: PropTypes.shape({}),
};
CollapsibleMenuList.defaultProps = {
  initialExpanded: false,
  collapseProps: {},
  listProps: {},
  subMenus: [],
  renderWrapper: ({ children }) => <React.Fragment>{children}</React.Fragment>,
  getParentProps: () => {},
  renderParent: props => <ToggleMenuItem {...props} />,
  getChildProps: () => {},
  renderChild: props => <InfoMenuItem {...props} />,
};

export default CollapsibleMenuList;
