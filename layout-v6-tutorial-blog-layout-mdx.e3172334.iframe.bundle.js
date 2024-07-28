"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[2317],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/addon-docs/dist/blocks.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./docs/layout-v6/tutorial/blog-layout.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_mui_treasury_mui_treasury_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,_home_runner_work_mui_treasury_mui_treasury_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.a)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.h_,{title:"Layout v6/Tutorials/Blog"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"blog-layout-tutorial",children:"Blog Layout Tutorial"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["If you haven't go through ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"/docs/layout-v6-tutorials-dashboard--docs",children:"Dashboard Layout Tutorial"}),", please check it out first."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"quick-start",children:"Quick start"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["We will not start from scratch in this tutorial instead reusing layout from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"/docs/layout-v6-tutorials-dashboard--docs",children:"Dashboard Layout Tutorial"}),".\nIf you've already deleted the code, below is the final source code. Replace it in ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"App.(js|tsx)"})," and you are ready to go!."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("details",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("summary",{children:"Expand to see source code"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";\nimport KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";\nimport Menu from "@mui/icons-material/Menu";\nimport Box from "@mui/material/Box";\nimport ButtonBase from "@mui/material/ButtonBase";\nimport CssBaseline from "@mui/material/CssBaseline";\nimport IconButton from "@mui/material/IconButton";\nimport {\n  applyEdgeSidebarStyles,\n  applyHeaderStyles,\n  Content,\n  EdgeSidebar,\n  EdgeSidebarContent,\n  Footer,\n  Header,\n  Root,\n  toggleEdgeSidebarCollapse,\n  toggleTemporaryEdgeSidebar,\n} from "path/to/layout-core-v6";\n\nfunction App() {\n  return (\n    <Root>\n      <CssBaseline />\n      <Header\n        sx={{\n          ...applyHeaderStyles({\n            height: { xs: "56px", md: "64px" },\n            fullWidth: true,\n          }),\n          position: { md: "relative" },\n        }}\n      >\n        <Box\n          sx={{ flex: 1, display: "flex", alignItems: "center", px: 2, gap: 1 }}\n        >\n          <IconButton\n            className="EdgeSidebar-trigger"\n            onClick={() => toggleTemporaryEdgeSidebar()}\n          >\n            <Menu />\n          </IconButton>\n          Header\n        </Box>\n      </Header>\n      <EdgeSidebar\n        sx={(theme) => ({\n          ...applyEdgeSidebarStyles({\n            theme,\n            config: {\n              xs: { variant: "temporary", width: "auto" },\n              md: {\n                variant: "permanent",\n                width: "256px",\n                collapsedWidth: "64px",\n              },\n            },\n          }),\n        })}\n      >\n        <EdgeSidebarContent>EdgeSidebarContent</EdgeSidebarContent>\n        <ButtonBase\n          className="EdgeSidebar-collapser"\n          // it\'s important to pass event to `toggleEdgeSidebarCollapse`\n          onClick={(event) => toggleEdgeSidebarCollapse({ event })}\n          sx={{\n            minHeight: 40,\n            width: "100%",\n            bgcolor: "grey.100",\n            borderTop: "1px solid",\n            borderColor: "grey.200",\n          }}\n        >\n          {/* The classnames are important to display between icons */}\n          <KeyboardArrowLeft className="Icon-collapse" />\n          <KeyboardArrowRight className="Icon-uncollapse" />\n        </ButtonBase>\n      </EdgeSidebar>\n      <Content>Content</Content>\n      <Footer>Footer</Footer>\n    </Root>\n  );\n}\n\nexport default App;\n'})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"insetsidebar",children:"InsetSidebar"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Usually, blog post will have a design like the image below. Header is on top (fixed), Sidebar & Content stay inside a Container\nFooter can also be inside a Container as well."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img,{src:"https://user-images.githubusercontent.com/18292247/72673981-fe5fe880-3aa3-11ea-8b5a-2de90b7a4c13.png",alt:"image"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The first step is to remove PermanentEdgeSidebar and configure inset sidebar by adding this code below."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import Container from "@mui/material/Container";\nimport {\n  applyInsetSidebarStyles,\n  // ...other imports\n  InsetSidebar,\n  InsetSidebarContent,\n} from "./mui-treasury/layout-core-v6";\n\n<Root>\n  <EdgeSidebar\n    sx={(theme) => ({\n      ...applyEdgeSidebarStyles({\n        theme,\n        config: {\n          xs: { variant: "temporary", width: "auto" },\n        },\n      }),\n    })}\n  >\n    ...\n  </EdgeSidebar>\n  <Content>\n    <Container>\n      <div>Content</div>\n      <InsetSidebar\n        sx={(theme) => ({\n          ...applyInsetSidebarStyles({ width: "225px" }),\n          [theme.breakpoints.down("sm")]: {\n            display: "none",\n          },\n        })}\n      >\n        <InsetSidebarContent sx={{ top: "6rem" }}>\n          InsetSidebarContent\n        </InsetSidebarContent>\n      </InsetSidebar>\n    </Container>\n  </Content>\n</Root>;\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["It means to create an inset sidebar on the right hand-side with width: 256px and hidden on ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"xs"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"sm"}),".\nAlso when user scroll the page, this sidebar will stick from the top ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"4rem"})," ~ 64px\n(because the default position of the InsetSidebar is sticky)."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img,{src:"https://media.giphy.com/media/eNRqgQtkD2JpArtsfm/giphy.gif",alt:"gif"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Try changing ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"top"})," value in the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"sx"})," prop to see what happen to sidebar. (rem, em, is supported)"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"fixed-variant",children:"Fixed variant"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"In some blog or documentation (like reactjs.org), the InsetSidebar is fixed to the page."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img,{src:"https://user-images.githubusercontent.com/18292247/80732307-547a0880-8b36-11ea-93f0-716667bcd18e.png",alt:"image"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["We can achieve this layout by adding ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"position: fixed"})," in the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"applyInsetSidebarStyles"})," like this:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-diff",children:'<InsetSidebar\n  sx={(theme) => ({\n    ...applyInsetSidebarStyles({\n      width: "225px",\n+     position: "fixed",\n    }),\n    [theme.breakpoints.down("sm")]: {\n      display: "none",\n    },\n  })}\n>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img,{src:"https://user-images.githubusercontent.com/18292247/80732115-0cf37c80-8b36-11ea-98d0-33c3b798d6c1.png",alt:"image"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"So easy right?. By using this config you will get this covered background to the edge automatically without dealing with headache\ncss by yourself. Let's pause here and give me a round of applause 👏, thank you."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"But nothing is perfect, there is one problem with footer if you scroll down and inspect, you will see this. No worries, we can still make it perfect."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img,{src:"https://user-images.githubusercontent.com/18292247/80733392-d9b1ed00-8b37-11ea-8d08-b928adf01305.png",alt:"image"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Our footer is not aware of fixed InsetSidebar, that's why it stays at the center of the page. If we want to make it similar to reactjs.org\nwe need to add ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"InsetAvoidingView"})," (got this name from react-native) to make sure that no content is behind the sidebar."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'// ...\nimport {\n  // ...\n  InsetAvoidingView,\n} from "path/to/layout-core-v6";\n\nfunction App() {\n  return (\n    <Root>\n      ...\n      <Footer>\n        <Container>\n          <InsetAvoidingView>Footer</InsetAvoidingView>\n        </Container>\n      </Footer>\n    </Root>\n  );\n}\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Done! we need to wrap with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Container"})," first because we want the same alignment as ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Content"})," and then\nwrapped by ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"InsetAvoidingView"})," so that its margin prevents the content from FixedInsetSidebar."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"congratulations-you-have-completed-this-tutorial",children:"Congratulations! you have completed this tutorial."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"You can look at clone examples to see advance layout like documentation site, e-commerce site or even chat site."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("details",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("summary",{children:"See Full Code"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";\nimport KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";\nimport Menu from "@mui/icons-material/Menu";\nimport Box from "@mui/material/Box";\nimport ButtonBase from "@mui/material/ButtonBase";\nimport Container from "@mui/material/Container";\nimport CssBaseline from "@mui/material/CssBaseline";\nimport IconButton from "@mui/material/IconButton";\nimport {\n  applyEdgeSidebarStyles,\n  applyHeaderStyles,\n  applyInsetSidebarStyles,\n  Content,\n  EdgeSidebar,\n  EdgeSidebarContent,\n  Footer,\n  Header,\n  InsetAvoidingView,\n  InsetSidebar,\n  InsetSidebarContent,\n  Root,\n  toggleEdgeSidebarCollapse,\n  toggleTemporaryEdgeSidebar,\n} from "./mui-treasury/layout-core-v6";\n\nfunction App() {\n  return (\n    <Root>\n      <CssBaseline />\n      <Header\n        sx={{\n          ...applyHeaderStyles({\n            height: { xs: "56px", md: "64px" },\n            fullWidth: true,\n          }),\n          position: { md: "relative" },\n        }}\n      >\n        <Box\n          sx={{ flex: 1, display: "flex", alignItems: "center", px: 2, gap: 1 }}\n        >\n          <IconButton\n            className="EdgeSidebar-trigger"\n            onClick={() => toggleTemporaryEdgeSidebar()}\n          >\n            <Menu />\n          </IconButton>\n          Header\n        </Box>\n      </Header>\n      <EdgeSidebar\n        sx={(theme) => ({\n          ...applyEdgeSidebarStyles({\n            theme,\n            config: {\n              xs: { variant: "temporary", width: "auto" },\n            },\n          }),\n        })}\n      >\n        <EdgeSidebarContent>EdgeSidebarContent</EdgeSidebarContent>\n        <ButtonBase\n          className="EdgeSidebar-collapser"\n          // it\'s important to pass event to `toggleEdgeSidebarCollapse`\n          onClick={(event) => toggleEdgeSidebarCollapse({ event })}\n          sx={{\n            minHeight: 40,\n            width: "100%",\n            bgcolor: "grey.100",\n            borderTop: "1px solid",\n            borderColor: "grey.200",\n          }}\n        >\n          <KeyboardArrowLeft className="Icon-collapse" />\n          <KeyboardArrowRight className="Icon-uncollapse" />\n        </ButtonBase>\n      </EdgeSidebar>\n      <Content>\n        <Container>\n          <div>Content</div>\n          <InsetSidebar\n            position="fixed"\n            sx={(theme) => ({\n              ...applyInsetSidebarStyles({ width: "225px" }),\n              [theme.breakpoints.down("sm")]: {\n                display: "none",\n              },\n            })}\n          >\n            <InsetSidebarContent>InsetSidebarContent</InsetSidebarContent>\n          </InsetSidebar>\n        </Container>\n      </Content>\n      <Footer>\n        <Container>\n          <InsetAvoidingView>Footer</InsetAvoidingView>\n        </Container>\n      </Footer>\n    </Root>\n  );\n}\n\nexport default App;\n'})})]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_mui_treasury_mui_treasury_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.a)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);