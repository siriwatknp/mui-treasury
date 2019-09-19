import { makeStyles } from '@material-ui/styles';
import gatsbyMenuItem from './menuItem/gatsbyMenuItem.styles';
import gatsbyNestedMenu from './nestedMenuList/gatsbyNestedMenu.styles';
import jupiterNestedMenu from './nestedMenuList/jupiterNestedMenu.styles';
import multiRowBorderedGrid from './grid/multiRowBorderedGrid.styles';
import singleRowBorderedGrid from './grid/singleRowBorderedGrid.styles';
import contrastInputBase from './inputBase/contrastInputBase.styles';
import pushingGutter from './gutter/pushingGutter.styles';

const useGatsbyMenuItem = makeStyles(gatsbyMenuItem);
const useGatsbyNestedMenu = makeStyles(gatsbyNestedMenu);
const useJupiterNestedMenu = makeStyles(jupiterNestedMenu);
const useMultiRowBorderedGrid = makeStyles(multiRowBorderedGrid);
const useSingleRowBorderedGrid = makeStyles(singleRowBorderedGrid);
const useContrastInputBase = makeStyles(contrastInputBase);
const usePushingGutter = makeStyles(pushingGutter);

export {
  gatsbyMenuItem,
  useGatsbyMenuItem,
  gatsbyNestedMenu,
  useGatsbyNestedMenu,
  jupiterNestedMenu,
  useJupiterNestedMenu,
  multiRowBorderedGrid,
  useMultiRowBorderedGrid,
  singleRowBorderedGrid,
  useSingleRowBorderedGrid,
  contrastInputBase,
  useContrastInputBase,
  pushingGutter,
  usePushingGutter,
};
export * from './button';
export * from './tabs';
