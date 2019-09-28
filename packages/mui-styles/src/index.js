import { makeStyles } from '@material-ui/styles';
import gatsbyMenuItem from './menuItem/gatsbyMenuItem.styles';
import gatsbyNestedMenu from './nestedMenuList/gatsbyNestedMenu.styles';
import jupiterNestedMenu from './nestedMenuList/jupiterNestedMenu.styles';
import contrastInputBase from './inputBase/contrastInputBase.styles';

const useGatsbyMenuItem = makeStyles(gatsbyMenuItem);
const useGatsbyNestedMenu = makeStyles(gatsbyNestedMenu);
const useJupiterNestedMenu = makeStyles(jupiterNestedMenu);
const useContrastInputBase = makeStyles(contrastInputBase);

export {
  gatsbyMenuItem,
  useGatsbyMenuItem,
  gatsbyNestedMenu,
  useGatsbyNestedMenu,
  jupiterNestedMenu,
  useJupiterNestedMenu,
  contrastInputBase,
  useContrastInputBase,
};
export * from './button';
export * from './tabs';
export * from './grid';
export * from './gutter';
