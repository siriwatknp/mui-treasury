"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[7468],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./blocks/layout-v5-example-rightEdgeSidebar/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const LayoutV5ExampleRightEdgeSidebarraw_namespaceObject='import React from "react";\nimport ArrowRight from "@mui/icons-material/ArrowRight";\nimport Menu from "@mui/icons-material/Menu";\nimport Box from "@mui/material/Box";\nimport CssBaseline from "@mui/material/CssBaseline";\nimport IconButton from "@mui/material/IconButton";\nimport {\n  EdgeSidebar,\n  EdgeTrigger,\n  Header,\n  Root,\n  SidebarContent,\n} from "../layout-core-v5";\n\nexport const LayoutExampleRightEdgeSidebar = () => {\n  return (\n    <Root\n      scheme={{\n        header: {\n          config: {\n            xs: {\n              position: "sticky",\n              height: 56,\n            },\n          },\n        },\n        leftEdgeSidebar: {\n          config: {\n            sm: {\n              variant: "permanent",\n              width: 256,\n              headerMagnetEnabled: true,\n            },\n          },\n        },\n        rightEdgeSidebar: {\n          config: {\n            sm: {\n              variant: "persistent",\n              persistentBehavior: "fit",\n              width: 64,\n            },\n          },\n        },\n      }}\n    >\n      <CssBaseline />\n      <Header>\n        <Box display="flex" alignItems="center" gap={1} px={1} flexGrow={1}>\n          <div>Header</div>\n          <EdgeTrigger\n            target={{ anchor: "right", field: "open" }}\n            sx={{ marginLeft: "auto" }}\n          >\n            {(open, setOpen) => (\n              <IconButton onClick={() => setOpen(!open)}>\n                {open ? <ArrowRight /> : <Menu />}\n              </IconButton>\n            )}\n          </EdgeTrigger>\n        </Box>\n      </Header>\n      <EdgeSidebar anchor="left">\n        <SidebarContent></SidebarContent>\n      </EdgeSidebar>\n      <EdgeSidebar anchor="right">\n        <SidebarContent></SidebarContent>\n      </EdgeSidebar>\n    </Root>\n  );\n};\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Layout v5/Example/RightEdgeSidebar"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone layoutV5-example-rightEdgeSidebar\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"layoutexamplerightedgesidebar",children:"LayoutExampleRightEdgeSidebar"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:LayoutV5ExampleRightEdgeSidebarraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);