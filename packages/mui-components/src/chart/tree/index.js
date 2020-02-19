import TreeChart from './TreeChart';
import * as Submodules from './submodules';

export * from './submodules';
export * from './TreeContext';
export * from './treeChart.styles';
export { default as treeChartStyles } from './treeChart.styles';

TreeChart.Trunk = Submodules.Trunk;
TreeChart.Branches = Submodules.Branches;
TreeChart.Twig = Submodules.Twig;
TreeChart.Stem = Submodules.Stem;

export default TreeChart;
