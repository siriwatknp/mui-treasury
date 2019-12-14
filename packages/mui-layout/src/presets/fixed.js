import ScreenConfigGenerator from '../utils/ScreenConfigGenerator';

const config = ScreenConfigGenerator();
config.addOns
  .setCollapsedBreakpoint('sm')
  .setSecondaryCollapseBreakpoint('sm')
  .setHeightAdjustmentDisabled(true);
config.add('xs', screen => {
  screen.header.setPosition('sticky').unclipPrimary();
});
config.add('md', screen => {
  screen.primarySidebar.setVariant('permanent').setCollapsible(true);
  screen.header.setPosition('relative').unclipPrimary();
});

export default config.get();
