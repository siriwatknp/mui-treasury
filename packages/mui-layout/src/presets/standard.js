import ScreenConfigGenerator from '../utils/ScreenConfigGenerator';

const config = ScreenConfigGenerator();
config.addOns.setCollapsedBreakpoint('sm').setSecondaryCollapseBreakpoint('sm');
config.add('xs', screen => {
  screen.header.setPosition('sticky').unclipPrimary();
});
config.add('sm', screen => {
  screen.primarySidebar.setVariant('permanent').setCollapsible(true);
  screen.header.setPosition('relative');
});

export default config.get();
