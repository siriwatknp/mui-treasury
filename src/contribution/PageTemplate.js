/* eslint-disable max-len */
// import React from 'react';
// import PropTypes from 'prop-types';
// import merge from 'lodash/merge';
// import get from 'lodash/get';
// import Grid from '@material-ui/core/Grid';
// import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
// import { Box } from 'components/atoms';
// import { PreviewWidget } from 'components/molecules';
// import ShouldUpdate from 'containers/ShouldUpdate';
// // todo: Import Component here
// // import NewComponent from 'components/<category>/<componentName>';
//
// /**
//  * components that will be rendered in this page
//  * @type {Array}
//  */
// const components = [
//   // {
//   //   component: NewComponent,
//   //   render: () => (
//   //     <NewComponent />
//   //   ),
//   //   previewProps: {
//   //     // by default the bg of the preview is grey.100
//   //     white: true, // (set bg of the preview to white)
//   //     inverted: true, // (set bg to black)
//   //   },
//   //   gridItemProps: {
//   //     // props that injected to Grid(item)
//   //   },
//   // },
// ];
//
// const baseTheme = createMuiTheme();
//
// // todo: change page name after you copy & paste to src/pages/components/
// const ComponentPage = ({ counter, globalTheme, onSelectComponent }) => (
//   <Box
//     width={'100%'}
//     p={{
//       xs: 2,
//       sm: 4,
//     }}
//   >
//     <Grid container spacing={32}>
//       {components.map(({ component, render, gridItemProps, previewProps }) => (
//         <Grid
//           key={get(component, 'metadata.name')}
//           item
//           xs={12}
//           sm={6}
//           lg={4}
//           {...gridItemProps}
//         >
//           <PreviewWidget
//             sandboxLink={component.codeSandbox}
//             name={get(component, 'metadata.name')}
//             description={get(component, 'metadata.description')}
//             onClick={() => onSelectComponent(component)}
//             {...previewProps}
//           >
//             <ShouldUpdate value={counter}>
//               <MuiThemeProvider
//                 theme={createMuiTheme({
//                   ...globalTheme,
//                   overrides: component.getTheme(merge(baseTheme, globalTheme)),
//                 })}
//               >
//                 {render()}
//               </MuiThemeProvider>
//             </ShouldUpdate>
//           </PreviewWidget>
//         </Grid>
//       ))}
//     </Grid>
//   </Box>
// );
//
// ComponentPage.propTypes = {
//   counter: PropTypes.number.isRequired,
//   globalTheme: PropTypes.shape({}).isRequired,
//   onSelectComponent: PropTypes.func.isRequired,
// };
//
// export default ComponentPage;
