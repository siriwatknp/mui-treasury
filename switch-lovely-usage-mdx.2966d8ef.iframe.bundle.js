"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[8369],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./blocks/switch-lovely/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const SwitchLovelyraw_namespaceObject='import { styled } from "@mui/material/styles";\nimport Switch, { switchClasses } from "@mui/material/Switch";\n\nconst pxToRem = (px: number, oneRemPx = 17) => `${px / oneRemPx}rem`;\n\nexport const SwitchLovely = styled(Switch)(({ theme }) => {\n  const borderWidth = 2;\n  const width = pxToRem(56);\n  const height = pxToRem(34);\n  const size = pxToRem(22);\n  const gap = (34 - 22) / 2;\n  return {\n    width,\n    height,\n    padding: 0,\n    margin: theme.spacing(1),\n    overflow: "unset",\n    [`& .${switchClasses.switchBase}`]: {\n      padding: pxToRem(gap),\n      [`&.${switchClasses.checked}`]: {\n        color: "#fff",\n        transform: `translateX(calc(${width} - ${size} - ${pxToRem(2 * gap)}))`,\n        [`& + .${switchClasses.track}`]: {\n          backgroundColor: theme.palette.primary.main,\n          opacity: 1,\n          border: "none",\n        },\n        [`& .${switchClasses.thumb}`]: {\n          backgroundColor: "#fff",\n        },\n      },\n    },\n    [`& .${switchClasses.thumb}`]: {\n      boxShadow: "none",\n      backgroundColor: theme.palette.grey[400],\n      width: size,\n      height: size,\n    },\n    [`& .${switchClasses.track}`]: {\n      borderRadius: 40,\n      border: `solid ${theme.palette.grey[400]}`,\n      borderWidth,\n      backgroundColor: theme.palette.grey[50],\n      opacity: 1,\n      transition: theme.transitions.create(["background-color", "border"]),\n      boxSizing: "border-box",\n    },\n  };\n});\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Switch/Lovely"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone switch-lovely\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"switchlovely",children:"SwitchLovely"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:SwitchLovelyraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);