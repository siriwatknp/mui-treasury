import ScreenConfigGenerator from '../utils/ScreenConfigGenerator';

const config = ScreenConfigGenerator();
config.addOns.setCollapsedBreakpoint('sm').setSecondaryCollapseBreakpoint('sm');
config.add('xs', screen => {
  screen.header.setPosition('relative').unclipPrimary();
});
config.add('sm', screen => {
  screen.primarySidebar.setVariant('persistent').setCollapsible(false);
  screen.header
    .setPosition('relative')
    .unclipPrimary()
    .setPersistentBehavior('flexible');
  screen.content.setPersistentBehavior('flexible');
  screen.footer.setPersistentBehavior('flexible');
});

export default config.get();
