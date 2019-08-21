import { makeStyles } from '@material-ui/styles';
import gatsbyMenuItem from './menuItem/gatsbyMenuItem.styles';
import gatsbyNestedMenu from './nestedMenuList/gatsbyNestedMenu.styles';
import jupiterNestedMenu from './nestedMenuList/jupiterNestedMenu.styles';
import borderedGrid from './grid/borderedGrid.styles';
import contrastInputBase from './inputBase/contrastInputBase.styles';

const useGatsbyMenuItem = makeStyles(gatsbyMenuItem);
const useGatsbyNestedMenu = makeStyles(gatsbyNestedMenu);
const useJupiterNestedMenu = makeStyles(jupiterNestedMenu);
const useBorderedGrid = makeStyles(borderedGrid);
const useContrastInputBase = makeStyles(contrastInputBase);

export {
  gatsbyMenuItem,
  useGatsbyMenuItem,
  gatsbyNestedMenu,
  useGatsbyNestedMenu,
  jupiterNestedMenu,
  useJupiterNestedMenu,
  borderedGrid,
  useBorderedGrid,
  contrastInputBase,
  useContrastInputBase,
};
