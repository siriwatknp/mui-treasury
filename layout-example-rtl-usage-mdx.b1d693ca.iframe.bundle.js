"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[439],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./blocks/layout-example-rtl/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const LayoutExampleRtlraw_namespaceObject='import { CacheProvider } from "@emotion/react";\nimport React from "react";\nimport createCache from "@emotion/cache";\nimport Box from "@mui/material/Box";\nimport Container from "@mui/material/Container";\nimport CssBaseline from "@mui/material/CssBaseline";\nimport rtlPlugin from "stylis-plugin-rtl";\nimport {\n  Content,\n  EdgeSidebar,\n  Footer,\n  Header,\n  InsetAvoidingView,\n  InsetContainer,\n  InsetSidebar,\n  Root,\n  SidebarContent,\n} from "../layout-core-v5";\n\n// Create rtl cache\nconst cacheRtl = createCache({\n  key: "muirtl",\n  // @ts-ignore\n  stylisPlugins: [rtlPlugin],\n});\n\nexport const LayoutExampleRtl = () => {\n  return (\n    <CacheProvider value={cacheRtl}>\n      <div dir="rtl">\n        <Root\n          initialState={{\n            leftEdgeSidebar: {\n              open: true,\n              collapsed: true,\n            },\n          }}\n          scheme={{\n            header: {\n              config: {\n                xs: {\n                  position: "sticky",\n                  height: 56,\n                  clipped: {\n                    leftEdgeSidebar: true,\n                  },\n                },\n                md: {\n                  position: "sticky",\n                  height: 64,\n                  clipped: true,\n                },\n              },\n            },\n            leftEdgeSidebar: {\n              config: {\n                xs: {\n                  variant: "temporary",\n                  width: 256,\n                },\n                sm: {\n                  variant: "persistent",\n                  persistentBehavior: "fit",\n                  width: 256,\n                  collapsible: true,\n                  collapsedWidth: 72,\n                  headerMagnetEnabled: true,\n                },\n                lg: {\n                  variant: "permanent",\n                  width: 256,\n                  collapsible: true,\n                  collapsedWidth: 80,\n                  autoExpanded: true,\n                  headerMagnetEnabled: true,\n                },\n              },\n              autoCollapse: "sm",\n            },\n            rightInsetSidebar: {\n              config: {\n                xs: {\n                  position: "fixed",\n                  headerMagnetEnabled: true,\n                  width: 256,\n                },\n              },\n            },\n          }}\n        >\n          <CssBaseline />\n          <Header>Header</Header>\n          <EdgeSidebar anchor="left">\n            <SidebarContent>Sidebar</SidebarContent>\n          </EdgeSidebar>\n          <EdgeSidebar anchor="left">\n            <SidebarContent>Hello</SidebarContent>\n          </EdgeSidebar>\n          {/* <EdgeSidebar anchor="right">Hello</EdgeSidebar> */}\n          <Content>\n            <InsetContainer\n              maxWidth={"md"}\n              rightSidebar={\n                <InsetSidebar>\n                  {/* <Box mt={10} /> */}\n                  Hello test\n                </InsetSidebar>\n              }\n            >\n              <Container maxWidth="md">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                eiusmod tempor incididunt ut labore et dolore magna aliqua.\n                Proin sagittis nisl rhoncus mattis. Enim neque volutpat ac\n                tincidunt vitae. Purus viverra accumsan in nisl nisi. Amet\n                venenatis urna cursus eget nunc scelerisque viverra. Pulvinar\n                mattis nunc sed blandit libero volutpat sed cras. Nam at lectus\n                urna duis convallis convallis. Tincidunt lobortis feugiat\n                vivamus at augue. Ac felis donec et odio pellentesque diam\n                volutpat commodo sed.\n                <br />\n                <br />\n                Et netus et malesuada fames ac. Et ultrices neque ornare aenean\n                euismod elementum nisi. Sollicitudin ac orci phasellus egestas\n                tellus rutrum tellus pellentesque. Sed risus pretium quam\n                vulputate dignissim suspendisse in. Tortor aliquam nulla\n                facilisi cras fermentum odio eu feugiat pretium. Urna duis\n                convallis convallis tellus. Mattis aliquam faucibus purus in\n                massa tempor nec feugiat. Imperdiet dui accumsan sit amet nulla\n                facilisi. In ornare quam viverra orci sagittis eu volutpat odio.\n                Et sollicitudin ac orci phasellus egestas tellus rutrum. Quam\n                vulputate dignissim suspendisse in est ante. Orci sagittis eu\n                volutpat odio facilisis mauris sit amet massa. Amet mattis\n                vulputate enim nulla aliquet porttitor lacus luctus. Volutpat\n                consequat mauris nunc congue nisi vitae suscipit tellus.\n                Fermentum iaculis eu non diam. Non quam lacus suspendisse\n                faucibus interdum posuere. In ornare quam viverra orci sagittis\n                eu volutpat.\n                <br />\n                <br />\n                Quis blandit turpis cursus in hac habitasse. Etiam non quam\n                lacus suspendisse faucibus. Sit amet nulla facilisi morbi tempus\n                iaculis urna id volutpat. Suspendisse ultrices gravida dictum\n                fusce ut. Maecenas volutpat blandit aliquam etiam erat velit\n                scelerisque in dictum. Pellentesque elit eget gravida cum. At\n                lectus urna duis convallis. Aliquam id diam maecenas ultricies.\n                Cursus turpis massa tincidunt dui ut. Sollicitudin nibh sit amet\n                commodo nulla facilisi. Aliquet bibendum enim facilisis gravida.\n                In dictum non consectetur a erat nam at lectus. Nunc faucibus a\n                pellentesque sit amet porttitor eget dolor. Adipiscing diam\n                donec adipiscing tristique risus nec feugiat. Ut diam quam nulla\n                porttitor massa id. Lectus arcu bibendum at varius vel. In ante\n                metus dictum at tempor commodo ullamcorper a. Consectetur libero\n                id faucibus nisl tincidunt eget nullam non. Diam vel quam\n                elementum pulvinar. Est ullamcorper eget nulla facilisi. Sit\n                amet volutpat consequat mauris nunc congue nisi. Tellus\n                elementum sagittis vitae et leo duis ut diam quam.\n                <br />\n                <br />\n              </Container>\n            </InsetContainer>\n          </Content>\n          <Footer>\n            <Container maxWidth="md">\n              <InsetAvoidingView>\n                <Box my={5}>\n                  Footer: Proin fermentum leo vel orci. Aliquet enim tortor at\n                  auctor urna nunc id cursus. Leo vel orci porta non pulvinar\n                  neque laoreet suspendisse interdum.\n                </Box>\n              </InsetAvoidingView>\n            </Container>\n          </Footer>\n        </Root>\n      </div>\n    </CacheProvider>\n  );\n};\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Layout v5/Example/Right-to-Left"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone layout-example-rtl\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"layoutexamplertl",children:"LayoutExampleRtl"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:LayoutExampleRtlraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);