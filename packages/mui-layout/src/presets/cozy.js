import ScreenConfigGenerator from '../utils/ScreenConfigGenerator';

const config = ScreenConfigGenerator();
config.add('xs', screen => {
  screen.header.unclipPrimary();
});
config.add('sm', screen => {
  screen.primarySidebar.setVariant('permanent').setWidth(64);
  screen.header.unclipPrimary();
});
config.add('md', screen => {
  screen.primarySidebar.setVariant('permanent').setCollapsible(true);
});

export default config.get();
