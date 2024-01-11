"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[9081],{"./blocks/card-kanban/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardKanbanraw_namespaceObject='import React from "react";\nimport Avatar from "@mui/material/Avatar";\nimport Box from "@mui/material/Box";\nimport Card from "@mui/material/Card";\nimport Slider, { sliderClasses } from "@mui/material/Slider";\n\nexport function CardKanban() {\n  const family =\n    \'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"\';\n  return (\n    <Card\n      elevation={0}\n      sx={{\n        display: "flex",\n        padding: 2,\n        minWidth: 288,\n        borderRadius: "12px",\n        boxShadow: "0 2px 4px 0 rgba(138, 148, 159, 0.2)",\n        "& > *:nth-child(1)": {\n          marginRight: 2,\n        },\n        "& > *:nth-child(2)": {\n          flex: "auto",\n        },\n      }}\n    >\n      <Avatar src={"https://i.pravatar.cc/300"} />\n      <Box>\n        <Box\n          component="h3"\n          sx={{ fontFamily: family, fontSize: 16, marginBottom: 0 }}\n        >\n          Sarah Onella\n        </Box>\n        <Box\n          sx={{\n            fontFamily: family,\n            fontSize: 14,\n            color: "grey.600",\n            letterSpacing: "1px",\n            marginBottom: "4px",\n          }}\n        >\n          23 y.o • Canada\n        </Box>\n        <Box display={"flex"} alignItems={"center"}>\n          <Slider\n            defaultValue={30}\n            sx={{\n              height: 4,\n              [`& .${sliderClasses.rail}`]: {\n                borderRadius: "10px",\n                height: 4,\n                backgroundColor: "rgb(202,211,216)",\n              },\n              [`& .${sliderClasses.track}`]: {\n                borderRadius: "10px",\n                height: 4,\n                backgroundColor: "rgb(117,156,250)",\n                border: "none",\n              },\n              [`& .${sliderClasses.thumb}`]: {\n                display: "none",\n              },\n            }}\n          />\n          <Box\n            component="span"\n            sx={{\n              marginLeft: 1,\n              fontSize: 14,\n              color: "grey.500",\n            }}\n          >\n            3/10\n          </Box>\n        </Box>\n      </Box>\n    </Card>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/Kanban"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone card-kanban\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cardkanban",children:"CardKanban"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardKanbanraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./.storybook/decorators/googleFont.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>googleFont});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function googleFont(fonts=[]){return Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap",rel:"stylesheet"}),fonts.map((font=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("link",{rel:"stylesheet",href:`https://fonts.googleapis.com/css2?family=${font}&display=swap`},font))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})]})}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js"),_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/material/DialogContent/DialogContent.js"),_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/DialogTitle/DialogTitle.js"),_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/SvgIcon/SvgIcon.js"),_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-6P7RB4HF.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_2__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,context){const[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__.Z,{title:"Show source code",placement:"top-start",sx:{zIndex:1e5},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__.Z,{sx:{position:"fixed",bottom:"1rem",left:"0.5rem",zIndex:99999,borderRadius:40},onClick:()=>setOpen(!0),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_6__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"})})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_7__.Z,{open,onClose:()=>setOpen(!1),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8__.Z,{children:"Usage"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_9__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_theming__WEBPACK_IMPORTED_MODULE_10__.f6,{theme:defaultTheme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mdx_js_react__WEBPACK_IMPORTED_MODULE_11__.Zo,{components:defaultComponents,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component,{})})})})]})]})}}},"./blocks/card-kanban/CardKanban.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Kanban:()=>Kanban,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardKanban_stories});__webpack_require__("./node_modules/react/index.js");var googleFont=__webpack_require__("./.storybook/decorators/googleFont.tsx"),storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),usage=__webpack_require__("./blocks/card-kanban/usage.mdx"),Avatar=__webpack_require__("./node_modules/@mui/material/Avatar/Avatar.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Card=__webpack_require__("./node_modules/@mui/material/Card/Card.js"),Slider=__webpack_require__("./node_modules/@mui/material/Slider/Slider.js"),sliderClasses=__webpack_require__("./node_modules/@mui/material/Slider/sliderClasses.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function CardKanban(){const family='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';return(0,jsx_runtime.jsxs)(Card.Z,{elevation:0,sx:{display:"flex",padding:2,minWidth:288,borderRadius:"12px",boxShadow:"0 2px 4px 0 rgba(138, 148, 159, 0.2)","& > *:nth-child(1)":{marginRight:2},"& > *:nth-child(2)":{flex:"auto"}},children:[(0,jsx_runtime.jsx)(Avatar.Z,{src:"https://i.pravatar.cc/300"}),(0,jsx_runtime.jsxs)(Box.Z,{children:[(0,jsx_runtime.jsx)(Box.Z,{component:"h3",sx:{fontFamily:family,fontSize:16,marginBottom:0},children:"Sarah Onella"}),(0,jsx_runtime.jsx)(Box.Z,{sx:{fontFamily:family,fontSize:14,color:"grey.600",letterSpacing:"1px",marginBottom:"4px"},children:"23 y.o • Canada"}),(0,jsx_runtime.jsxs)(Box.Z,{display:"flex",alignItems:"center",children:[(0,jsx_runtime.jsx)(Slider.ZP,{defaultValue:30,sx:{height:4,[`& .${sliderClasses.Z.rail}`]:{borderRadius:"10px",height:4,backgroundColor:"rgb(202,211,216)"},[`& .${sliderClasses.Z.track}`]:{borderRadius:"10px",height:4,backgroundColor:"rgb(117,156,250)",border:"none"},[`& .${sliderClasses.Z.thumb}`]:{display:"none"}}}),(0,jsx_runtime.jsx)(Box.Z,{component:"span",sx:{marginLeft:1,fontSize:14,color:"grey.500"},children:"3/10"})]})]})]})}CardKanban.displayName="CardKanban";const CardKanban_stories={title:"Card/Kanban",component:CardKanban,parameters:{layout:"centered",githubUsername:"siriwatknp"},decorators:[(0,storyDialog.Z)(usage.default),(0,googleFont.Z)([])]},Kanban={render:()=>(0,jsx_runtime.jsx)(CardKanban,{})};Kanban.parameters={...Kanban.parameters,docs:{...Kanban.parameters?.docs,source:{originalSource:"{\n  render: () => <CardKanban />\n}",...Kanban.parameters?.docs?.source}}};const __namedExportsOrder=["Kanban"]}}]);