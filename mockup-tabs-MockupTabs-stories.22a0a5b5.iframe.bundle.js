"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[987],{"./blocks/mockup-tabs/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const MockupTabsraw_namespaceObject='import { styled } from "@mui/material/styles";\nimport Tabs from "@mui/material/Tabs";\n\nexport const UnderlineTabs = styled(Tabs)(({ theme }) => ({\n  "&:before": {\n    content: \'""\',\n    display: "block",\n    height: "1px",\n    backgroundColor: theme.palette.grey[200],\n    left: 0,\n    bottom: 0,\n    width: "100%",\n    position: "absolute",\n  },\n  "& .MuiTab-root": {\n    textTransform: "none",\n    paddingLeft: 0,\n    paddingRight: 0,\n    marginLeft: theme.spacing(2),\n    marginRight: theme.spacing(2),\n    "&:first-of-type": {\n      marginLeft: 0,\n    },\n    "&:last-of-type": {\n      marginRight: 0,\n    },\n  },\n}));\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Mockup/Tabs"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone mockup-tabs\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"mockuptabs",children:"MockupTabs"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:MockupTabsraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./blocks/mockup-tabs/MockupTabs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{UnderlineTabs:()=>_MockupTabs__WEBPACK_IMPORTED_MODULE_3__.D,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_decorators_googleFont__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./.storybook/decorators/googleFont.tsx"),_storybook_decorators_storyDialog__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),_usage_mdx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./blocks/mockup-tabs/usage.mdx"),_MockupTabs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./blocks/mockup-tabs/MockupTabs.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Mockup/Tabs",parameters:{layout:"centered",githubUsername:"siriwatknp"},decorators:[(0,_storybook_decorators_storyDialog__WEBPACK_IMPORTED_MODULE_1__.Z)(_usage_mdx__WEBPACK_IMPORTED_MODULE_2__.default),(0,_storybook_decorators_googleFont__WEBPACK_IMPORTED_MODULE_0__.Z)([])]}},"./.storybook/decorators/googleFont.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>googleFont});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function googleFont(fonts=[]){return Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap",rel:"stylesheet"}),fonts.map((font=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{key:font,rel:"stylesheet",href:`https://fonts.googleapis.com/css2?family=${font}&display=swap`}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js"),_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/DialogContent/DialogContent.js"),_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/DialogTitle/DialogTitle.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-ZHZY55TS.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_1__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,{globals}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__.Z,{maxWidth:"md",open:globals.blockUsage||!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_4__.Z,null,"Usage"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.f6,{theme:defaultTheme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.Z,{components:defaultComponents},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,null))))))}}},"./blocks/mockup-tabs/MockupTabs.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>UnderlineTabs});var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/Tabs/Tabs.js");const UnderlineTabs=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.ZP)(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_1__.Z)((({theme})=>({"&:before":{content:'""',display:"block",height:"1px",backgroundColor:theme.palette.grey[200],left:0,bottom:0,width:"100%",position:"absolute"},"& .MuiTab-root":{textTransform:"none",paddingLeft:0,paddingRight:0,marginLeft:theme.spacing(2),marginRight:theme.spacing(2),"&:first-of-type":{marginLeft:0},"&:last-of-type":{marginRight:0}}})))}}]);