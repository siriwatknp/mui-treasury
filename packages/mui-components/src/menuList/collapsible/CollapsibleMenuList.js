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
  renderWrapper: Wrapper,
  renderParent: Parent,
  renderChild: Child,
  getParentProps,
  listProps,
  getChildProps,
}) => {
  React.useEffect(() => {
    console.log('CollapsibleMenuList did mount!');
  }, []);
  const [expanded, setExpanded] = useStateBinding(initialExpanded, false);
  return (
    <>
      <Parent
        {...getParentProps(expanded)}
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      />
      <Collapse {...collapseProps} in={expanded}>
        <List {...listProps}>
          {subMenus.map((menu, idx) => (
            <Child
              key={menu.key || menu.id || idx}
              component={'li'}
              {...getChildProps(menu, idx)}
            />
          ))}
        </List>
      </Collapse>
    </>
  );
  // const render = () => (
  //   <>
  //     <Parent
  //       {...getParentProps(expanded)}
  //       expanded={expanded}
  //       onToggle={() => setExpanded(!expanded)}
  //     />
  //     <Collapse {...collapseProps} in={expanded}>
  //       <List {...listProps}>
  //         {subMenus.map((menu, idx) => (
  //           <Child
  //             key={menu.key || menu.id || idx}
  //             component={'li'}
  //             {...getChildProps(menu, idx)}
  //           />
  //         ))}
  //       </List>
  //     </Collapse>
  //   </>
  // );
  // return Wrapper ? <Wrapper expanded={expanded}>{render()}</Wrapper> : render();
};

CollapsibleMenuList.propTypes = {
  initialExpanded: PropTypes.bool,
  collapseProps: PropTypes.shape({}),
  subMenus: PropTypes.arrayOf(PropTypes.shape({})),
  renderWrapper: PropTypes.elementType,
  renderParent: PropTypes.elementType,
  renderChild: PropTypes.elementType,
  listProps: PropTypes.shape({}),
  getParentProps: PropTypes.func,
  getChildProps: PropTypes.func,
};
CollapsibleMenuList.defaultProps = {
  initialExpanded: false,
  collapseProps: {},
  listProps: {},
  subMenus: [],
  renderWrapper: undefined,
  renderParent: ToggleMenuItem,
  renderChild: InfoMenuItem,
  getParentProps: () => {},
  getChildProps: menu => menu,
};

export default CollapsibleMenuList;
