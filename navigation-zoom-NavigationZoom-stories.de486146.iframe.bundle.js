"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[9773],{"./node_modules/@mui/material/styles/useThemeProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useThemeProps});var _mui_system_useThemeProps__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/useThemeProps/useThemeProps.js"),_defaultTheme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/styles/defaultTheme.js"),_identifier__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/styles/identifier.js");function useThemeProps({props,name}){return(0,_mui_system_useThemeProps__WEBPACK_IMPORTED_MODULE_0__.Z)({props,name,defaultTheme:_defaultTheme__WEBPACK_IMPORTED_MODULE_1__.Z,themeId:_identifier__WEBPACK_IMPORTED_MODULE_2__.Z})}},"./node_modules/@mui/system/useThemeProps/useThemeProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useThemeProps});var resolveProps=__webpack_require__("./node_modules/@mui/utils/esm/resolveProps/resolveProps.js");var useTheme=__webpack_require__("./node_modules/@mui/system/useTheme/useTheme.js");function useThemeProps({props,name,defaultTheme,themeId}){let theme=(0,useTheme.Z)(defaultTheme);themeId&&(theme=theme[themeId]||theme);const mergedProps=function getThemeProps(params){const{theme,name,props}=params;return theme&&theme.components&&theme.components[name]&&theme.components[name].defaultProps?(0,resolveProps.Z)(theme.components[name].defaultProps,props):props}({theme,name,props});return mergedProps}},"./blocks/navigation-zoom/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const NavigationZoomraw_namespaceObject='import React from "react";\nimport { useTheme } from "@mui/material/styles";\nimport { Navigation, NavItem } from "../navigation-basic";\nimport { getNavigationZoomStyles } from "./NavigationZoom.styles";\n\nexport function NavigationZoom() {\n  const theme = useTheme();\n  const styles = getNavigationZoomStyles(theme);\n  const [activeIndex, setActiveIndex] = React.useState(0);\n  return (\n    <Navigation sx={styles}>\n      {[...Array(5).fill(undefined)].map((_, index) => (\n        <NavItem\n          key={index}\n          // href="#"\n          active={activeIndex === index}\n          disabled={index === 3}\n          onClick={() => setActiveIndex(index)}\n        >\n          Item {index + 1}\n        </NavItem>\n      ))}\n    </Navigation>\n  );\n}\n',NavigationZoom_stylesraw_namespaceObject='import { CSSObject, Theme } from "@mui/material/styles";\nimport { navigationClasses } from "../navigation-basic";\n\nconst itemHorzPadding = 3;\n\nexport const getNavigationZoomStyles = (\n  arg: Theme | { theme: Theme }\n): CSSObject => {\n  const { palette, spacing } = "theme" in arg ? arg.theme : arg;\n  return {\n    [`& .${navigationClasses.item}`]: {\n      "&:not(.Mui-disabled)": {\n        color: palette.text.primary,\n      },\n      fontWeight: "bold",\n      textTransform: "uppercase",\n      letterSpacing: "1px",\n      "&.Mui-active": {\n        "&:after": {\n          opacity: 1,\n          transform: "scale(1, 1)",\n        },\n      },\n      "&:after": {\n        content: \'""\',\n        display: "block",\n        position: "absolute",\n        bottom: 0,\n        left: spacing(itemHorzPadding / 2),\n        width: `calc(100% - ${spacing(itemHorzPadding)})`,\n        height: 2,\n        transform: "scale(0, 1)",\n        backgroundColor: palette.text.primary,\n      },\n      "&:hover": {\n        "&:after": {\n          opacity: 0.38,\n          transform: "scale(1, 1)",\n        },\n      },\n    },\n  };\n};\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",h3:"h3",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Navigation/Zoom"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone navigation-zoom navigation-basic\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"navigationzoom",children:"NavigationZoom"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:NavigationZoomraw_namespaceObject,language:"tsx"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"navigationzoomstylests",children:"NavigationZoom.styles.ts"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:NavigationZoom_stylesraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./blocks/navigation-zoom/NavigationZoom.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Zoom:()=>Zoom,__namedExportsOrder:()=>__namedExportsOrder,default:()=>NavigationZoom_stories});var react=__webpack_require__("./node_modules/react/index.js"),googleFont=__webpack_require__("./.storybook/decorators/googleFont.tsx"),storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),navigation_basic=__webpack_require__("./blocks/navigation-basic/index.ts");function NavigationZoom(){const styles=(arg=>{const{palette,spacing}="theme"in arg?arg.theme:arg;return{[`& .${navigation_basic.bj.item}`]:{"&:not(.Mui-disabled)":{color:palette.text.primary},fontWeight:"bold",textTransform:"uppercase",letterSpacing:"1px","&.Mui-active":{"&:after":{opacity:1,transform:"scale(1, 1)"}},"&:after":{content:'""',display:"block",position:"absolute",bottom:0,left:spacing(1.5),width:`calc(100% - ${spacing(3)})`,height:2,transform:"scale(0, 1)",backgroundColor:palette.text.primary},"&:hover":{"&:after":{opacity:.38,transform:"scale(1, 1)"}}}}})((0,useTheme.Z)()),[activeIndex,setActiveIndex]=react.useState(0);return react.createElement(navigation_basic.W_,{sx:styles},[...Array(5).fill(void 0)].map(((_,index)=>react.createElement(navigation_basic.LY,{key:index,active:activeIndex===index,disabled:3===index,onClick:()=>setActiveIndex(index)},"Item ",index+1))))}var usage=__webpack_require__("./blocks/navigation-zoom/usage.mdx");const NavigationZoom_stories={title:"Navigation/Zoom",component:NavigationZoom,parameters:{layout:"centered",githubUsername:"siriwatknp",modules:["navigation-basic"]},decorators:[(0,storyDialog.Z)(usage.default),(0,googleFont.Z)([])]},Zoom={render:()=>react.createElement(NavigationZoom,null)};Zoom.parameters={...Zoom.parameters,docs:{...Zoom.parameters?.docs,source:{originalSource:"{\n  render: () => <NavigationZoom />\n}",...Zoom.parameters?.docs?.source}}};const __namedExportsOrder=["Zoom"]},"./.storybook/decorators/googleFont.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>googleFont});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function googleFont(fonts=[]){return Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap",rel:"stylesheet"}),fonts.map((font=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{key:font,rel:"stylesheet",href:`https://fonts.googleapis.com/css2?family=${font}&display=swap`}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js"),_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/DialogContent/DialogContent.js"),_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/DialogTitle/DialogTitle.js"),_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/SvgIcon/SvgIcon.js"),_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-ZHZY55TS.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_1__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,context){const[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z,{title:"Show source code",placement:"top-start",sx:{zIndex:1e5}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__.Z,{sx:{position:"fixed",bottom:"1rem",left:"0.5rem",zIndex:99999,borderRadius:40},onClick:()=>setOpen(!0)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_5__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"}))))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_6__.Z,{open,onClose:()=>setOpen(!1)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_7__.Z,null,"Usage"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_theming__WEBPACK_IMPORTED_MODULE_9__.f6,{theme:defaultTheme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_10__.Z,{components:defaultComponents},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,null))))))}}},"./blocks/navigation-basic/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{LY:()=>NavItem,W_:()=>Navigation,bj:()=>navigationClasses});var react=__webpack_require__("./node_modules/react/index.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs");const navigationClasses=(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").Z)("JunNavigation",["root","item"]);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const NavigationRoot=(0,styled.ZP)("nav",{name:"JunNavigation",slot:"Root",overridesResolver:(props,styles)=>styles.root})({display:"flex",overflow:"auto",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),Navigation=react.forwardRef((function Navigation({children,...inProps},ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JunNavigation"}),{...other}=props,ownerState={...props};return react.createElement(NavigationRoot,_extends({ref},other,{ownerState,className:(0,clsx.Z)(navigationClasses.root,props.className)}),children)}));function NavItem_extends(){return NavItem_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},NavItem_extends.apply(this,arguments)}const NavItemRoot=(0,styled.ZP)("a",{name:"JunNavigation",slot:"Item",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.item,ownerState.active&&styles.itemActive,ownerState.disabled&&styles.itemDisabled]}})((({theme:{palette,shape,spacing,typography}})=>({...typography.body1,fontWeight:500,flexShrink:0,display:"flex",alignItems:"center",color:"dark"===palette.mode?"rgba(255,255,255,0.57)":palette.text.secondary,position:"relative",padding:spacing(1,2),borderRadius:shape.borderRadius,cursor:"pointer",textDecoration:"none",transition:"0.2s ease-out","&:hover, &:focus":{color:"dark"===palette.mode?"#fff":"rgba(0,0,0,0.72)",outline:"none"},"&.Mui-active":{color:"dark"===palette.mode?"#fff":palette.text.primary},"&.Mui-disabled":{color:palette.action.disabled,pointerEvents:"none"}}))),NavItem=react.forwardRef((function Navigation({children,...inProps},ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JunNavigation"}),{active=!1,disabled=!1,...other}=props,ownerState={...props,active,disabled};return react.createElement(NavItemRoot,NavItem_extends({ref},other,{ownerState,className:(0,clsx.Z)(navigationClasses.item,active&&"Mui-active",disabled&&"Mui-disabled",props.className)}),children)}))}}]);