"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[3341],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/blocks.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./docs/layout-v5/tutorial/blog-layout.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",code:"code",pre:"pre",img:"img",h3:"h3"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.h_,{title:"Layout v5/Tutorials/Blog"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style",{children:"\n  .sbdocs-content {\n    max-width: 720px;\n  }\n"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"blog-layout-tutorial",children:"Blog Layout Tutorial"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["If you haven't go through ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"/?path=/story/layout-tutorials-dashboard--page",children:"Dashboard Layout Tutorial"}),", please check it out first."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"quick-start",children:"Quick start"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["We will not start from scratch in this tutorial instead reusing layout from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"/?path=/story/layout-tutorials-dashboard--page",children:"Dashboard Layout Tutorial"}),".\nIf you've already deleted the code, below is the final source code. Replace it in ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"App.js"})," and you are ready to go!."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("details",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("summary",{children:"Expand to see source code"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import React from "react";\nimport CssBaseline from "@mui/material/CssBaseline";\nimport {\n  Content,\n  EdgeSidebar,\n  EdgeTriggger,\n  Footer,\n  Header,\n  SidebarContent,\n} from "path/to/layout-core-v5";\n\nconst App = () => {\n  return (\n    <Root\n      scheme={{\n        header: {\n          config: {\n            xs: {\n              position: "sticky",\n              height: 56,\n            },\n            md: {\n              position: "relative",\n              height: 64,\n            },\n          },\n        },\n        leftEdgeSidebar: {\n          config: {\n            xs: {\n              variant: "temporary",\n              width: "auto",\n            },\n          },\n        },\n        md: {\n          variant: "permanent",\n          width: 256,\n          collapsible: true,\n          collapsedWidth: 64,\n        },\n      }}\n    >\n      <CssBaseline />\n      <Header>\n        <EdgeTrigger target={{ anchor: "left", field: "open" }}>\n          {(open, setOpen) => (\n            <IconButton onClick={() => setOpen(!open)}>\n              {open ? <ArrowLeft /> : <Menu />}\n            </IconButton>\n          )}\n        </EdgeTrigger>\n        Header\n      </Header>\n      <EdgeSidebar anchor="left">\n        <SidebarContent>Sidebar content</SidebarContent>\n        <EdgeTrigger target={{ anchor: "left", field: "collapsed" }}>\n          {(collapsed, setCollapsed) => (\n            <ButtonBase\n              onClick={() => setCollapsed(!collapsed)}\n              sx={{ minHeight: 40, width: "100%" }}\n            >\n              {collapsed ? <ArrowRight /> : <ArrowLeft />}\n            </ButtonBase>\n          )}\n        </EdgeTrigger>\n      </EdgeSidebar>\n      <Content>Content</Content>\n      <Footer>Footer</Footer>\n    </Root>\n  );\n};\n\nexport default App;\n'})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Before we begin, I want to point out something that I haven't explained in the previous tutorial.\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Root"}),"'s children can also be a function that receive context value (plain object) and you\ncan use that to change, or control your component."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img,{src:"https://media.giphy.com/media/KFsdkitrFSBLD3Dv9y/giphy.gif",alt:"gif"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Here is what context value looks like. (you can console.log in devtool)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-ts",children:"{\n  state: {\n    leftEdgeSidebar: {\n      collapsed: boolean;\n      open: boolean;\n    },\n    rightEdgeSidebar: {\n      collapsed: boolean;\n      open: boolean;\n    },\n  }\n  setOpen: (sidebar: 'leftEdgeSidebar' | 'rightEdgeSidebar', open: boolean) => void\n  setCollapsed: (sidebar: 'leftEdgeSidebar' | 'rightEdgeSidebar', collapsed: boolean) => void\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"blog-example",children:"Blog Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Usually, blog post will have a design like the image below. Header is on top (fixed), Sidebar & Content stay inside a Container\nFooter can also be inside a Container as well."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img,{src:"https://user-images.githubusercontent.com/18292247/72673981-fe5fe880-3aa3-11ea-8b5a-2de90b7a4c13.png",alt:"image"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The first step is to remove PermanentEdgeSidebar and configure inset sidebar by adding this code below."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'<Root\n  scheme={{\n    header: {\n      config: {\n        xs: {\n          position: "sticky",\n          height: 56,\n        },\n        md: {\n          position: "relative",\n          height: 64,\n        },\n      },\n    },\n    leftEdgeSidebar: {\n      config: {\n        xs: {\n          variant: "temporary",\n          width: "auto",\n        },\n      },\n    },\n    rightInsetSidebar: {\n      variant: "sticky",\n      top: "4rem",\n      width: 256,\n      hidden: ["xs", "sm"],\n    },\n  }}\n></Root>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["It means to create an inset sidebar on the right hand-side with sticky variant and width: 256px but hidden on ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"xs"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"sm"}),". Also when user scroll the page, this sidebar will stick from the top ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"4rem"})," ~ 64px"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The config part is done, let's add ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"InsetSidebar"})," component to the screen. You also need to use ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"InsetContainer"}),"\nso everything works properly. (I encourage you to look at these DOM in devtool once it is rendered to see why we need container)"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'// ...other imports\nimport {\n  // ...other imports\n  InsetContainer,\n  InsetSidebar,\n} from "path/to/layout-core-v5";\n\nconst App = () => {\n  return (\n    <Root\n      scheme={\n        {\n          // ...the scheme above\n        }\n      }\n    >\n      {({ state: { leftEdgeSidebar } }) => (\n        <>\n          <CssBaseline />\n          <Header>\n            <Toolbar>\n              <EdgeTrigger target={{ anchor: "left", field: "open" }}>\n                {(open, setOpen) => (\n                  <IconButton onClick={() => setOpen(!open)}>\n                    {open ? <ArrowLeft /> : <Menu />}\n                  </IconButton>\n                )}\n              </EdgeTrigger>\n              Header\n            </Toolbar>\n          </Header>\n          <EdgeSidebar anchor="left">\n            <SidebarContent>\n              <Avatar\n                sx={{\n                  ...(leftEdgeSidebar.collapsed && { width: 40, height: 40 }),\n                }}\n              >\n                A\n              </Avatar>\n            </SidebarContent>\n            <EdgeTrigger target={{ anchor: "left", field: "collapsed" }}>\n              {(collapsed, setCollapsed) => (\n                <ButtonBase\n                  onClick={() => setCollapsed(!collapsed)}\n                  sx={{ minHeight: 40, width: "100%" }}\n                >\n                  {collapsed ? <ArrowRight /> : <ArrowLeft />}\n                </ButtonBase>\n              )}\n            </EdgeTrigger>\n          </EdgeSidebar>\n          <Content>\n            <InsetContainer\n              rightSidebar={<InsetSidebar>Inset Sidebar</InsetSidebar>}\n            >\n              Content\n            </InsetContainer>\n          </Content>\n          <Footer>Footer</Footer>\n        </>\n      )}\n    </Root>\n  );\n};\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Basically, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"InsetContainer"})," is a flex container that extends ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://material-ui.com/components/container/#container",target:"_blank",rel:"nofollow noopener noreferrer",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Container"})})," from Material UI. So, you can send any props that Material-ui ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Container"})," accepts."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img,{src:"https://media.giphy.com/media/eNRqgQtkD2JpArtsfm/giphy.gif",alt:"gif"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Try changing ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"top"})," value in the config to see what happen to sidebar. (number(px), rem, em, is supported)"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"fixed-variant",children:"Fixed variant"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"In some blog or documentation (like reactjs.org), the InsetSidebar is fixed to the page."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img,{src:"https://user-images.githubusercontent.com/18292247/80732307-547a0880-8b36-11ea-93f0-716667bcd18e.png",alt:"image"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["We can achieve this layout by changing variant in ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"rightInsetSidebar"})," to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"fixed"})," like this."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-diff",children:'<Root\n  scheme={{\n    // other config\n    rightInsetSidebar: {\n-     variant: "sticky",\n+     variant: "fixed",\n      top: "4rem",\n      width: 256,\n      hidden: ["xs", "sm"],\n    },\n  }}\n></Root>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img,{src:"https://user-images.githubusercontent.com/18292247/80732115-0cf37c80-8b36-11ea-98d0-33c3b798d6c1.png",alt:"image"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"So easy right?. By using this config you will get this covered background to the edge automatically without dealing with headache\ncss by yourself. Let's pause here and give me a round of applause 👏, thank you."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"But nothing is perfect, there is one problem with footer if you scroll down and inspect, you will see this. No worries, we can still make it perfect."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img,{src:"https://user-images.githubusercontent.com/18292247/80733392-d9b1ed00-8b37-11ea-8d08-b928adf01305.png",alt:"image"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Our footer is not aware of FixedInsetSidebar, that's why it stays at the center of the page. If we want to make it similar to reactjs.org\nwe need to add ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"InsetAvoidingView"})," (got this name from react-native) to make sure that no content is behind the sidebar."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import React from "react";\n// ...\nimport Container from "@mui/material/Container";\n// ...\n\nimport {\n  // ...\n  InsetAvoidingView,\n} from "path/to/layout-core-v5";\n\nconst Blog = () => {\n  return (\n    <Root\n      scheme={\n        {\n          // ...the scheme\n        }\n      }\n    >\n      {({ state: { sidebar } }) => (\n        <>\n          {/* ...other */}\n          <Footer>\n            <Container>\n              <InsetAvoidingView>Footer</InsetAvoidingView>\n            </Container>\n          </Footer>\n        </>\n      )}\n    </Root>\n  );\n};\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Done! we need to wrap with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Container"})," first because we want the same alignment as ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Content"})," and then\nwrapped by ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"InsetAvoidingView"})," so that its margin prevents the content from FixedInsetSidebar."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"congratulations-you-have-completed-this-tutorial",children:"Congratulations! you have completed this tutorial."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"You can look at clone examples to see advance layout like documentation site, e-commerce site or even chat site."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("details",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("summary",{children:"See Full Code"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import React from "react";\nimport ArrowLeft from "@mui/icons-material/ArrowLeft";\nimport ArrowRight from "@mui/icons-material/ArrowRight";\nimport Menu from "@mui/icons-material/Menu";\nimport Container from "@mui/material/Container";\nimport CssBaseline from "@mui/material/CssBaseline";\nimport IconButton from "@mui/material/IconButton";\nimport {\n  Content,\n  EdgeSidebar,\n  EdgeTriggger,\n  Footer,\n  Header,\n  InsetAvoidingView,\n  InsetContainer,\n  InsetSidebar,\n  Root,\n  SidebarContent,\n} from "path/to/layout-core-v5";\n\nconst App = () => {\n  return (\n    <Root\n      scheme={{\n        header: {\n          config: {\n            xs: {\n              position: "sticky",\n              height: 56,\n            },\n            md: {\n              position: "relative",\n              height: 64,\n            },\n          },\n        },\n        leftEdgeSidebar: {\n          config: {\n            xs: {\n              variant: "temporary",\n              width: "auto",\n            },\n          },\n          hidden: ["md", "lg", "xl"],\n        },\n        rightInsetSidebar: {\n          rightInsetSidebar: {\n            variant: "sticky",\n            top: "4rem",\n            width: 256,\n            hidden: ["xs", "sm"],\n          },\n        },\n      }}\n    >\n      {({ state: { leftEdgeSidebar } }) => (\n        <>\n          <CssBaseline />\n          <Header>\n            <EdgeTrigger target={{ anchor: "left", field: "open" }}>\n              {(open, setOpen) => (\n                <IconButton onClick={() => setOpen(!open)}>\n                  {open ? <ArrowLeft /> : <Menu />}\n                </IconButton>\n              )}\n            </EdgeTrigger>\n            Header\n          </Header>\n          <EdgeSidebar anchor="left">\n            <SidebarContent>\n              <Avatar\n                sx={{\n                  ...(leftEdgeSidebar.collapsed && { width: 40, height: 40 }),\n                }}\n              >\n                A\n              </Avatar>\n              Sidebar content\n            </SidebarContent>\n            <EdgeTrigger target={{ anchor: "left", field: "collapsed" }}>\n              {(collapsed, setCollapsed) => (\n                <ButtonBase\n                  onClick={() => setCollapsed(!collapsed)}\n                  sx={{ minHeight: 40, width: "100%" }}\n                >\n                  {collapsed ? <ArrowRight /> : <ArrowLeft />}\n                </ButtonBase>\n              )}\n            </EdgeTrigger>\n          </EdgeSidebar>\n          <Content>\n            <InsetContainer\n              rightSidebar={<InsetSidebar>Inset Sidebar</InsetSidebar>}\n            >\n              Content\n            </InsetContainer>\n          </Content>\n          <Footer>\n            <Container>\n              <InsetAvoidingView>Footer</InsetAvoidingView>\n            </Container>\n          </Footer>\n        </>\n      )}\n    </Root>\n  );\n};\n\nexport default App;\n'})})]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);