"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[4090],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./blocks/card-post/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardPostraw_namespaceObject='import React from "react";\nimport FavoriteBorderRounded from "@mui/icons-material/FavoriteBorderRounded";\nimport Share from "@mui/icons-material/Share";\nimport Avatar from "@mui/material/Avatar";\nimport Box from "@mui/material/Box";\nimport Card from "@mui/material/Card";\nimport CardContent from "@mui/material/CardContent";\nimport CardMedia from "@mui/material/CardMedia";\nimport IconButton from "@mui/material/IconButton";\nimport { Info, InfoSubtitle, InfoTitle } from "../info-basic";\nimport { getInfoN01Styles } from "../info-n01";\n\nexport function CardPost() {\n  return (\n    <Card\n      sx={{\n        maxWidth: 304,\n        margin: "auto",\n        boxShadow: "0 0 20px 0 rgba(0,0,0,0.12)",\n        transition: "0.3s",\n      }}\n    >\n      <CardMedia\n        image={\n          "https://images.unsplash.com/photo-1517147177326-b37599372b73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2229&q=80"\n        }\n        sx={{\n          width: "100%",\n          paddingBottom: "56.25%",\n          clipPath: "polygon(0 0, 100% 0%, 100% 84%, 0% 100%)",\n          backgroundColor: "rgba(0, 0, 0, 0.08)",\n        }}\n      />\n      <Avatar\n        src={"https://i.pravatar.cc/300"}\n        sx={{\n          width: 50,\n          height: 50,\n          border: "2px solid #fff",\n          margin: "-48px 32px 0 auto",\n          "& > img": {\n            margin: 0,\n          },\n        }}\n      />\n      <CardContent sx={{ p: 3 }}>\n        <Info useStyles={getInfoN01Styles}>\n          <InfoTitle>First Snow Storm</InfoTitle>\n          <InfoSubtitle>\n            Snow storm coming in Sommaroy island, Arctic Norway. This is\n            something that you definitely wanna see in your life.\n          </InfoSubtitle>\n        </Info>\n      </CardContent>\n      <Box px={2} pb={2} mt={-1}>\n        <IconButton>\n          <Share />\n        </IconButton>\n        <IconButton>\n          <FavoriteBorderRounded />\n        </IconButton>\n      </Box>\n    </Card>\n  );\n}\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/Post"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone card-post\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cardpost",children:"CardPost"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardPostraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);