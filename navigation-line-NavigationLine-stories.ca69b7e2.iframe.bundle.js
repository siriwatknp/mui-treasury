"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[5259],{"./blocks/navigation-line/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const NavigationLineraw_namespaceObject='import React from "react";\nimport { useTheme } from "@mui/material/styles";\nimport { Navigation, NavItem } from "../navigation-basic";\nimport { getNavigationLineStyles } from "./NavigationLine.styles";\n\nexport function NavigationLine() {\n  const theme = useTheme();\n  const styles = getNavigationLineStyles(theme);\n  const [activeIndex, setActiveIndex] = React.useState(0);\n  return (\n    <Navigation sx={styles}>\n      {[...Array(5).fill(undefined)].map((_, index) => (\n        <NavItem\n          key={index}\n          // href="#"\n          active={activeIndex === index}\n          disabled={index === 3}\n          onClick={() => setActiveIndex(index)}\n        >\n          Item {index + 1}\n        </NavItem>\n      ))}\n    </Navigation>\n  );\n}\n',NavigationLine_stylesraw_namespaceObject='import { Theme } from "@mui/material/styles";\nimport { CSSObject } from "@mui/system";\nimport { navigationClasses } from "../navigation-basic";\n\nconst itemHorzPadding = 2;\n\nexport const getNavigationLineStyles = (\n  arg: Theme | { theme: Theme }\n): CSSObject => {\n  const { palette, spacing } = "theme" in arg ? arg.theme : arg;\n  return {\n    [`& .${navigationClasses.item}`]: {\n      "&:not(.Mui-disabled)": {\n        color: palette.text.secondary,\n      },\n      "&.Mui-active": {\n        color:\n          palette.mode === "dark"\n            ? palette.primary.light\n            : palette.primary.main,\n        "&:after": {\n          opacity: 1,\n          transform: "scale(1, 1)",\n          backgroundColor:\n            palette.mode === "dark"\n              ? palette.primary.light\n              : palette.primary.main,\n        },\n      },\n      "&:after": {\n        content: \'""\',\n        display: "block",\n        position: "absolute",\n        bottom: 0,\n        left: spacing(itemHorzPadding),\n        width: `calc(100% - ${spacing(itemHorzPadding * 2)})`,\n        height: 3,\n        transform: "scale(0, 1)",\n        transition: "0.2s ease-out",\n        opacity: 0,\n        backgroundColor: palette.primary.light,\n      },\n      "&:hover": {\n        color:\n          palette.mode === "dark"\n            ? palette.primary.light\n            : palette.primary.main,\n        "&:after": {\n          opacity: 1,\n          transform: "scale(1, 1)",\n        },\n      },\n    },\n  };\n};\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Navigation/Line"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone navigation-line navigation-basic\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"navigationline",children:"NavigationLine"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:NavigationLineraw_namespaceObject,language:"tsx"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"navigationlinestylests",children:"NavigationLine.styles.ts"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:NavigationLine_stylesraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./blocks/navigation-line/NavigationLine.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Line:()=>Line,__namedExportsOrder:()=>__namedExportsOrder,default:()=>NavigationLine_stories});var react=__webpack_require__("./node_modules/react/index.js"),googleFont=__webpack_require__("./.storybook/decorators/googleFont.tsx"),storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),navigation_basic=__webpack_require__("./blocks/navigation-basic/index.ts");function NavigationLine(){const styles=(arg=>{const{palette,spacing}="theme"in arg?arg.theme:arg;return{[`& .${navigation_basic.bj.item}`]:{"&:not(.Mui-disabled)":{color:palette.text.secondary},"&.Mui-active":{color:"dark"===palette.mode?palette.primary.light:palette.primary.main,"&:after":{opacity:1,transform:"scale(1, 1)",backgroundColor:"dark"===palette.mode?palette.primary.light:palette.primary.main}},"&:after":{content:'""',display:"block",position:"absolute",bottom:0,left:spacing(2),width:`calc(100% - ${spacing(4)})`,height:3,transform:"scale(0, 1)",transition:"0.2s ease-out",opacity:0,backgroundColor:palette.primary.light},"&:hover":{color:"dark"===palette.mode?palette.primary.light:palette.primary.main,"&:after":{opacity:1,transform:"scale(1, 1)"}}}}})((0,useTheme.Z)()),[activeIndex,setActiveIndex]=react.useState(0);return react.createElement(navigation_basic.W_,{sx:styles},[...Array(5).fill(void 0)].map(((_,index)=>react.createElement(navigation_basic.LY,{key:index,active:activeIndex===index,disabled:3===index,onClick:()=>setActiveIndex(index)},"Item ",index+1))))}var usage=__webpack_require__("./blocks/navigation-line/usage.mdx");const NavigationLine_stories={title:"Navigation/Line",component:NavigationLine,parameters:{layout:"centered",githubUsername:"siriwatknp",modules:["navigation-basic"]},decorators:[(0,storyDialog.Z)(usage.default),(0,googleFont.Z)([])]},Line={render:()=>react.createElement("div",{style:{width:340,padding:20,maxWidth:"100%",resize:"horizontal",overflow:"auto"}},react.createElement(NavigationLine,null))};Line.parameters={...Line.parameters,docs:{...Line.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    width: 340,\n    padding: 20,\n    maxWidth: "100%",\n    resize: "horizontal",\n    overflow: "auto"\n  }}>\n      <NavigationLine />\n    </div>\n}',...Line.parameters?.docs?.source}}};const __namedExportsOrder=["Line"]},"./.storybook/decorators/googleFont.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>googleFont});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function googleFont(fonts=[]){return Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap",rel:"stylesheet"}),fonts.map((font=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{key:font,rel:"stylesheet",href:`https://fonts.googleapis.com/css2?family=${font}&display=swap`}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Container/Container.js"),_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js"),_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/DialogContent/DialogContent.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-ZHZY55TS.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_1__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,{globals,...rest}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__.Z,{fullScreen:!0,open:globals.blockUsage||!1,transitionDuration:{enter:300,exit:400},slotProps:{backdrop:{sx:theme=>({backgroundColor:`rgba(${theme.vars.palette.background.defaultChannel}/0.5)`})}}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__.Z,{maxWidth:"md"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.f6,{theme:defaultTheme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.Z,{components:defaultComponents},react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:"loading..."},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,null))))))))}}},"./blocks/navigation-basic/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{LY:()=>NavItem,W_:()=>Navigation,bj:()=>navigationClasses});var react=__webpack_require__("./node_modules/react/index.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs");const navigationClasses=(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").Z)("JunNavigation",["root","item"]);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const NavigationRoot=(0,styled.ZP)("nav",{name:"JunNavigation",slot:"Root",overridesResolver:(props,styles)=>styles.root})({display:"flex",overflow:"auto",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),Navigation=react.forwardRef((function Navigation({children,...inProps},ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JunNavigation"}),{...other}=props,ownerState={...props};return react.createElement(NavigationRoot,_extends({ref},other,{ownerState,className:(0,clsx.Z)(navigationClasses.root,props.className)}),children)}));function NavItem_extends(){return NavItem_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},NavItem_extends.apply(this,arguments)}const NavItemRoot=(0,styled.ZP)("a",{name:"JunNavigation",slot:"Item",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.item,ownerState.active&&styles.itemActive,ownerState.disabled&&styles.itemDisabled]}})((({theme:{palette,shape,spacing,typography}})=>({...typography.body1,fontWeight:500,flexShrink:0,display:"flex",alignItems:"center",color:"dark"===palette.mode?"rgba(255,255,255,0.57)":palette.text.secondary,position:"relative",padding:spacing(1,2),borderRadius:shape.borderRadius,cursor:"pointer",textDecoration:"none",transition:"0.2s ease-out","&:hover, &:focus":{color:"dark"===palette.mode?"#fff":"rgba(0,0,0,0.72)",outline:"none"},"&.Mui-active":{color:"dark"===palette.mode?"#fff":palette.text.primary},"&.Mui-disabled":{color:palette.action.disabled,pointerEvents:"none"}}))),NavItem=react.forwardRef((function Navigation({children,...inProps},ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JunNavigation"}),{active=!1,disabled=!1,...other}=props,ownerState={...props,active,disabled};return react.createElement(NavItemRoot,NavItem_extends({ref},other,{ownerState,className:(0,clsx.Z)(navigationClasses.item,active&&"Mui-active",disabled&&"Mui-disabled",props.className)}),children)}))}}]);