test.skip('Footer', () => {});
// import cx from 'clsx';
// import ConfigGenerator from '../utils/ConfigGenerator';
// import createFooter from '../models/footer';
//
// describe('Footer', () => {
//   let footer;
//   let config;
//   let loadConfig = () => {};
//   beforeEach(() => {
//     config = ConfigGenerator();
//     loadConfig = otherConfig => {
//       footer = createFooter({ ...config.get(), ...otherConfig });
//     };
//     loadConfig();
//   });
//
//   test(
//     cx(
//       '[Footer]',
//       'p-left-drawer-temporary-closed-fit',
//       's-right-drawer-persistent-closed-none'
//     ),
//     () => {
//       // check structure of the config
//       expect(config.get()).toMatchObject({
//         sidebar: {
//           anchor: 'left',
//           variant: 'temporary',
//           width: 256,
//           collapsible: false,
//           collapsedWidth: 64,
//           hidden: false,
//           inset: false,
//         },
//         secondarySidebar: {
//           anchor: 'right',
//           variant: 'persistent',
//           width: 244,
//           collapsible: true,
//           collapsedWidth: 64,
//           hidden: false,
//           inset: false,
//         },
//         footer: {
//           persistentBehavior: 'fit',
//           secondaryPersistentBehavior: 'none',
//           insetBehavior: 'fit',
//           secondaryInsetBehavior: 'none',
//         },
//       });
//       // test behavior
//       expect(footer.getStyle()).toMatchObject({
//         marginLeft: 0,
//         marginRight: 0,
//         width: '100%',
//       });
//     }
//   );
//
//   test(
//     cx(
//       '[Footer]',
//       'p-left-drawer-temporary-opened-fit',
//       's-right-drawer-persistent-opened-fit'
//     ),
//     () => {
//       config.footer.setSecondaryPersistentBehavior('fit');
//       loadConfig({ opened: true, secondaryOpened: true });
//       expect(footer.getStyle()).toMatchObject({
//         marginLeft: 0,
//         marginRight: 244,
//         width: 'calc(100% - 244px)',
//       });
//     }
//   );
//
//   test(
//     cx(
//       '[Footer]',
//       'p-left-drawer-permanent-fit',
//       's-right-drawer-permanent-opened-fit'
//     ),
//     () => {
//       config.footer.setSecondaryPersistentBehavior('fit');
//       loadConfig({ opened: true, secondaryOpened: true });
//       expect(footer.getStyle()).toMatchObject({
//         marginLeft: 0,
//         marginRight: 244,
//         width: 'calc(100% - 244px)',
//       });
//     }
//   );
// });
