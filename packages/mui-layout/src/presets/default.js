import ScreenConfigGenerator from '../utils/ScreenConfigGenerator';

const config = ScreenConfigGenerator();
config.add('xs', screen => {
  screen.header.setPosition('relative').unclipPrimary();
});
config.add('md', screen => {
  screen.primarySidebar.setVariant('persistent').setCollapsible(true);
  screen.header.setPosition('sticky');
});

export default config.get();
