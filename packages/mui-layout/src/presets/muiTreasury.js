import ScreenConfigGenerator from '../utils/ScreenConfigGenerator';

const config = ScreenConfigGenerator();
config.add('xs', screen => {
  screen.header.setPosition('sticky').unclipPrimary();
});
config.add('md', screen => {
  screen.primarySidebar.setVariant('permanent').setWidth(200);
  screen.header.setPosition('sticky');
});
config.add('lg', screen => {
  screen.primarySidebar.setVariant('permanent');
  screen.header.setPosition('sticky');
});

export default config.get();
