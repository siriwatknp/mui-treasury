"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[6136],{"./blocks/tabs-firebase/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const TabsFirebaseraw_namespaceObject='import React from "react";\nimport { styled } from "@mui/material/styles";\nimport Tab from "@mui/material/Tab";\nimport Tabs, { tabsClasses } from "@mui/material/Tabs";\n\nconst TabItem = styled(Tab)(({ theme }) => ({\n  textTransform: "initial",\n  minWidth: 0,\n  letterSpacing: 0.5,\n  margin: theme.spacing(0, 2),\n  padding: 0,\n  overflow: "unset",\n  fontWeight: 500,\n  "&:hover::before": {\n    backgroundColor: "rgba(0 0 0 / 0.04)",\n  },\n  "&::before": {\n    content: \'""\',\n    position: "absolute",\n    left: "-1rem",\n    right: "-1rem",\n    height: "100%",\n  },\n  [theme.breakpoints.up("md")]: {\n    minWidth: 0,\n  },\n}));\n\nexport function TabsFirebase() {\n  const [tabIndex, setTabIndex] = React.useState(0);\n  return (\n    <Tabs\n      value={tabIndex}\n      onChange={(e, index) => setTabIndex(index)}\n      sx={{\n        marginLeft: 1,\n        [`& .${tabsClasses.indicator}`]: {\n          height: 3,\n          borderTopLeftRadius: "3px",\n          borderTopRightRadius: "3px",\n        },\n      }}\n    >\n      <TabItem disableRipple label={"Data"} />\n      <TabItem disableRipple label={"Rule"} />\n      <TabItem disableRipple label={"Indexes"} />\n      <TabItem disableRipple label={"Usage"} />\n    </Tabs>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Tabs/Firebase"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone tabs-firebase\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"tabsfirebase",children:"TabsFirebase"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:TabsFirebaseraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./.storybook/decorators/googleFont.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>googleFont});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function googleFont(fonts=[]){return Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap",rel:"stylesheet"}),fonts.map((font=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("link",{rel:"stylesheet",href:`https://fonts.googleapis.com/css2?family=${font}&display=swap`},font))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})]})}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js"),_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/material/DialogContent/DialogContent.js"),_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/DialogTitle/DialogTitle.js"),_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/SvgIcon/SvgIcon.js"),_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-6P7RB4HF.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_2__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,context){const[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__.Z,{title:"Show source code",placement:"top-start",sx:{zIndex:1e5},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__.Z,{sx:{position:"fixed",bottom:"1rem",left:"0.5rem",zIndex:99999,borderRadius:40},onClick:()=>setOpen(!0),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_6__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"})})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_7__.Z,{open,onClose:()=>setOpen(!1),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8__.Z,{children:"Usage"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_9__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_theming__WEBPACK_IMPORTED_MODULE_10__.f6,{theme:defaultTheme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mdx_js_react__WEBPACK_IMPORTED_MODULE_11__.Zo,{components:defaultComponents,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component,{})})})})]})]})}}},"./blocks/tabs-firebase/TabsFirebase.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Firebase:()=>Firebase,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TabsFirebase_stories});var react=__webpack_require__("./node_modules/react/index.js"),googleFont=__webpack_require__("./.storybook/decorators/googleFont.tsx"),storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),Tab=__webpack_require__("./node_modules/@mui/material/Tab/Tab.js"),Tabs=__webpack_require__("./node_modules/@mui/material/Tabs/Tabs.js"),tabsClasses=__webpack_require__("./node_modules/@mui/material/Tabs/tabsClasses.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TabItem=(0,styled.ZP)(Tab.Z)((({theme})=>({textTransform:"initial",minWidth:0,letterSpacing:.5,margin:theme.spacing(0,2),padding:0,overflow:"unset",fontWeight:500,"&:hover::before":{backgroundColor:"rgba(0 0 0 / 0.04)"},"&::before":{content:'""',position:"absolute",left:"-1rem",right:"-1rem",height:"100%"},[theme.breakpoints.up("md")]:{minWidth:0}})));function TabsFirebase(){const[tabIndex,setTabIndex]=react.useState(0);return(0,jsx_runtime.jsxs)(Tabs.Z,{value:tabIndex,onChange:(e,index)=>setTabIndex(index),sx:{marginLeft:1,[`& .${tabsClasses.Z.indicator}`]:{height:3,borderTopLeftRadius:"3px",borderTopRightRadius:"3px"}},children:[(0,jsx_runtime.jsx)(TabItem,{disableRipple:!0,label:"Data"}),(0,jsx_runtime.jsx)(TabItem,{disableRipple:!0,label:"Rule"}),(0,jsx_runtime.jsx)(TabItem,{disableRipple:!0,label:"Indexes"}),(0,jsx_runtime.jsx)(TabItem,{disableRipple:!0,label:"Usage"})]})}TabsFirebase.displayName="TabsFirebase";var usage=__webpack_require__("./blocks/tabs-firebase/usage.mdx");const TabsFirebase_stories={title:"Tabs/Firebase",component:TabsFirebase,parameters:{layout:"centered",githubUsername:"siriwatknp"},decorators:[(0,storyDialog.Z)(usage.default),(0,googleFont.Z)([])]},Firebase={render:()=>(0,jsx_runtime.jsx)(TabsFirebase,{})};Firebase.parameters={...Firebase.parameters,docs:{...Firebase.parameters?.docs,source:{originalSource:"{\n  render: () => <TabsFirebase />\n}",...Firebase.parameters?.docs?.source}}};const __namedExportsOrder=["Firebase"]}}]);