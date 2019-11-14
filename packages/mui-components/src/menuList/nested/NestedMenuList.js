import React from 'react';
import PropTypes from 'prop-types';
import { useNestedMenuList, mapNestedPath } from '@mui-treasury/utils';
import CollapsibleMenuList from '@mui-treasury/components/menuList/collapsible';

const NestedMenuList = ({ menus }) => {
  const keyMap = React.useMemo(() => mapNestedPath(menus), [menus]);
  return <div></div>;
};

NestedMenuList.propTypes = {};
NestedMenuList.defaultProps = {};

export default NestedMenuList;
