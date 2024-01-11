"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[8909],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./blocks/card-news2/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardNews2raw_namespaceObject='import React from "react";\nimport Box from "@mui/material/Box";\nimport Card from "@mui/material/Card";\nimport CardActionArea from "@mui/material/CardActionArea";\nimport CardContent from "@mui/material/CardContent";\nimport CardMedia from "@mui/material/CardMedia";\nimport Typography from "@mui/material/Typography";\n\nexport function CardNews2() {\n  return (\n    <Card\n      sx={{\n        maxWidth: 304,\n        margin: "auto",\n        borderRadius: 0,\n        position: "relative",\n      }}\n    >\n      <CardMedia\n        image={\n          "https://images.unsplash.com/photo-1519810755548-39cd217da494?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"\n        }\n        sx={{\n          position: "absolute",\n          width: "100%",\n          height: "100%",\n          top: 0,\n          left: 0,\n          zIndex: 0,\n          backgroundColor: "rgba(0, 0, 0, 0.08)",\n          backgroundPosition: "center",\n          boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",\n          transition: "0.3s",\n        }}\n      />\n      <CardActionArea>\n        <CardContent sx={{ p: 3 }}>\n          <Box\n            display={"flex"}\n            flexDirection={"column"}\n            alignItems={"center"}\n            justifyContent={"center"}\n            minHeight={360}\n            color={"common.white"}\n            textAlign={"center"}\n            sx={{\n              "& h2": {\n                color: "#fff",\n                letterSpacing: "2px",\n                fontSize: "2.15rem",\n                fontWeight: 700,\n                lineHeight: 1.45,\n                fontFamily: "\'Playfair Display\',serif",\n                mb: "1.275rem",\n              },\n            }}\n          >\n            <h2>Space</h2>\n            <p>The space between the stars and galaxies is largely empty.</p>\n          </Box>\n          <Typography\n            variant={"overline"}\n            sx={{\n              display: "block",\n              textAlign: "center",\n              color: "#fff",\n              letterSpacing: "3px",\n              fontWeight: 200,\n              fontSize: 12,\n            }}\n          >\n            Explore\n          </Typography>\n        </CardContent>\n      </CardActionArea>\n    </Card>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/News2"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone card-news2\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"font",children:"Font"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'<link rel="preconnect" href="https://fonts.googleapis.com" />\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />\n<link\n  href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"\n  rel="stylesheet"\n/>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cardnews2",children:"CardNews2"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardNews2raw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);