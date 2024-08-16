"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[7233],{"./blocks/info-apex/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const InfoApexraw_namespaceObject='import React from "react";\nimport { Info, InfoSubtitle, InfoTitle } from "../info-basic";\nimport { getInfoApexStyles } from "./InfoApex.styles";\n\nexport function InfoApex() {\n  return (\n    <Info variant="apex" useStyles={getInfoApexStyles}>\n      <InfoTitle>APEX Legends: Assemble!</InfoTitle>\n      <InfoSubtitle>Created by siriwatknp</InfoSubtitle>\n    </Info>\n  );\n}\n',InfoApex_stylesraw_namespaceObject='import { Theme } from "@mui/material/styles";\nimport { CSSObject } from "@mui/system";\nimport { InfoSlotStyles } from "../info-basic";\n\nconst titleFontSize = "0.875rem";\nconst subtitleFontSize = "0.75rem";\n\nexport const getInfoApexStyles = (\n  arg: Theme | { theme: Theme }\n): CSSObject & Partial<InfoSlotStyles> => {\n  const { palette } = "theme" in arg ? arg.theme : arg;\n  return {\n    eyebrow: {},\n    title: {\n      color: palette.mode === "dark" ? "#b5b1d8" : "#4d4b5f",\n      fontFamily: \'Ubuntu, "Helvetica Neue", Arial, sans-serif\',\n      fontSize: titleFontSize,\n      lineHeight: 1.43,\n      fontWeight: 700,\n      letterSpacing: "0.5px",\n      marginBottom: "2px",\n    },\n    subtitle: {\n      color: palette.mode === "dark" ? palette.grey[500] : palette.grey[600],\n      fontFamily: \'Ubuntu, "Helvetica Neue", Arial, sans-serif\',\n      fontSize: subtitleFontSize,\n      lineHeight: 1.4,\n      letterSpacing: 0,\n    },\n  };\n};\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",h3:"h3",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Info/Apex"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone info-apex info-basic\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"font",children:"Font"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'<link rel="preconnect" href="https://fonts.googleapis.com" />\n<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />\n<link\n  href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap"\n  rel="stylesheet"\n/>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"infoapex",children:"InfoApex"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:InfoApexraw_namespaceObject,language:"tsx"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"infoapexstylests",children:"InfoApex.styles.ts"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:InfoApex_stylesraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./blocks/info-apex/InfoApex.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Apex:()=>Apex,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_decorators_googleFont__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/decorators/googleFont.tsx"),_storybook_decorators_storyDialog__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),_InfoApex__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./blocks/info-apex/InfoApex.tsx"),_usage_mdx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./blocks/info-apex/usage.mdx");const __WEBPACK_DEFAULT_EXPORT__={title:"Info/Apex",component:_InfoApex__WEBPACK_IMPORTED_MODULE_3__.c,parameters:{layout:"centered",githubUsername:"siriwatknp",modules:["info-basic"]},decorators:[(0,_storybook_decorators_storyDialog__WEBPACK_IMPORTED_MODULE_2__.Z)(_usage_mdx__WEBPACK_IMPORTED_MODULE_4__.default),(0,_storybook_decorators_googleFont__WEBPACK_IMPORTED_MODULE_1__.Z)(["Ubuntu"])]},Apex={render:()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:340,padding:20,maxWidth:"100%",resize:"horizontal",overflow:"auto"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_InfoApex__WEBPACK_IMPORTED_MODULE_3__.c,null))};Apex.parameters={...Apex.parameters,docs:{...Apex.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    width: 340,\n    padding: 20,\n    maxWidth: "100%",\n    resize: "horizontal",\n    overflow: "auto"\n  }}>\n      <InfoApex />\n    </div>\n}',...Apex.parameters?.docs?.source}}};const __namedExportsOrder=["Apex"]},"./.storybook/decorators/googleFont.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>googleFont});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function googleFont(fonts=[]){return Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap",rel:"stylesheet"}),fonts.map((font=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{key:font,rel:"stylesheet",href:`https://fonts.googleapis.com/css2?family=${font}&display=swap`}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Container/Container.js"),_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js"),_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/DialogContent/DialogContent.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-ZHZY55TS.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_1__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,{globals,...rest}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__.Z,{fullScreen:!0,open:globals.blockUsage||!1,transitionDuration:{enter:300,exit:400},slotProps:{backdrop:{sx:theme=>({backgroundColor:`rgba(${theme.vars.palette.background.defaultChannel}/0.5)`})}}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__.Z,{maxWidth:"md"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.f6,{theme:defaultTheme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.Z,{components:defaultComponents},react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:"loading..."},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,null))))))))}}},"./blocks/info-apex/InfoApex.styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>getInfoApexStyles});const getInfoApexStyles=arg=>{const{palette}="theme"in arg?arg.theme:arg;return{eyebrow:{},title:{color:"dark"===palette.mode?"#b5b1d8":"#4d4b5f",fontFamily:'Ubuntu, "Helvetica Neue", Arial, sans-serif',fontSize:"0.875rem",lineHeight:1.43,fontWeight:700,letterSpacing:"0.5px",marginBottom:"2px"},subtitle:{color:"dark"===palette.mode?palette.grey[500]:palette.grey[600],fontFamily:'Ubuntu, "Helvetica Neue", Arial, sans-serif',fontSize:"0.75rem",lineHeight:1.4,letterSpacing:0}}}},"./blocks/info-apex/InfoApex.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>InfoApex});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_info_basic__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./blocks/info-basic/index.ts"),_InfoApex_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./blocks/info-apex/InfoApex.styles.ts");function InfoApex(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_info_basic__WEBPACK_IMPORTED_MODULE_1__.kI,{variant:"apex",useStyles:_InfoApex_styles__WEBPACK_IMPORTED_MODULE_2__.E},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_info_basic__WEBPACK_IMPORTED_MODULE_1__.Xw,null,"APEX Legends: Assemble!"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_info_basic__WEBPACK_IMPORTED_MODULE_1__.In,null,"Created by siriwatknp"))}},"./blocks/info-basic/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{kI:()=>Info,im:()=>InfoCaption,yj:()=>InfoEyebrow,In:()=>InfoSubtitle,Xw:()=>InfoTitle,Fj:()=>infoClasses});var react=__webpack_require__("./node_modules/react/index.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs");const infoClasses=(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").Z)("JunInfo",["root","title","subtitle","caption","eyebrow"]);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const defaultUseStyles=()=>({}),StylesContext=react.createContext(void 0),useStylesCtx=()=>{const value=react.useContext(StylesContext);if(!value)throw new Error("`useStylesCtx` must be called under <Info>");return value},InfoRoot=(0,styled.ZP)("div",{name:"JunInfo",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant]]}})((({theme,ownerState})=>({display:"block",...ownerState.useStyles&&ownerState.useStyles(theme).root}))),Info=react.forwardRef((function Info(props,ref){const{children,component,variant,useStyles,...other}=props,ownerState={...props,variant,useStyles};return react.createElement(InfoRoot,_extends({ref},other,{as:component,className:(0,clsx.Z)(infoClasses.root,props.className),ownerState}),react.createElement(StylesContext.Provider,{value:useStyles||defaultUseStyles},children))}));function InfoTitle_extends(){return InfoTitle_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},InfoTitle_extends.apply(this,arguments)}const InfoTitleRoot=(0,styled.ZP)("div",{name:"JunInfo",slot:"Head",overridesResolver:(props,styles)=>styles.title})((({theme,ownerState})=>({letterSpacing:"0.0073529412em",fontSize:"1.25rem",fontWeight:"normal",margin:"0 0 0.4em 0",lineHeight:1.5,...ownerState.useStyles(theme).title}))),InfoTitle=react.forwardRef((function InfoTitle(props,ref){const{children,component,className,...other}=props,useStyles=useStylesCtx();return react.createElement(InfoTitleRoot,InfoTitle_extends({ref},other,{as:component,className:(0,clsx.Z)(infoClasses.title,className),ownerState:{...props,useStyles}}),children)}));function InfoSubtitle_extends(){return InfoSubtitle_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},InfoSubtitle_extends.apply(this,arguments)}const InfoParagraphRoot=(0,styled.ZP)("p",{name:"JunInfo",slot:"Body",overridesResolver:(props,styles)=>styles.subtitle})((({theme,ownerState})=>({color:theme.palette.text.secondary,lineHeight:1.5,fontSize:"1rem",margin:0,...ownerState.useStyles(theme).subtitle}))),InfoSubtitle=react.forwardRef((function InfoSubtitle(props,ref){const{children,component,className,...other}=props,useStyles=useStylesCtx();return react.createElement(InfoParagraphRoot,InfoSubtitle_extends({ref},other,{as:component,className:(0,clsx.Z)(infoClasses.subtitle,className),ownerState:{...props,useStyles}}),children)}));function InfoCaption_extends(){return InfoCaption_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},InfoCaption_extends.apply(this,arguments)}const InfoCaptionRoot=(0,styled.ZP)("div",{name:"JunInfo",slot:"Caption",overridesResolver:(props,styles)=>styles.caption})((({theme,ownerState})=>({color:theme.palette.text.secondary,fontSize:"0.75rem",marginBlockStart:"0.5em",marginBlockEnd:"0.75em",...ownerState.useStyles(theme).caption}))),InfoCaption=react.forwardRef((function InfoCaption(props,ref){const{children,component,className,...other}=props,useStyles=useStylesCtx();return react.createElement(InfoCaptionRoot,InfoCaption_extends({ref},other,{as:component,className:(0,clsx.Z)(infoClasses.caption,className),ownerState:{...props,useStyles}}),children)}));function InfoEyebrow_extends(){return InfoEyebrow_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},InfoEyebrow_extends.apply(this,arguments)}const InfoEyebrowRoot=(0,styled.ZP)("div",{name:"JunInfo",slot:"Eyebrow",overridesResolver:(props,styles)=>styles.eyebrow})((({theme,ownerState})=>({color:theme.palette.text.secondary,fontSize:"0.875rem",marginBottom:"0.25rem",lineHeight:"1.25rem",textTransform:"uppercase",...ownerState.useStyles(theme).eyebrow}))),InfoEyebrow=react.forwardRef((function InfoEyebrow(props,ref){const{children,component,className,...other}=props,useStyles=useStylesCtx();return react.createElement(InfoEyebrowRoot,InfoEyebrow_extends({ref},other,{as:component,className:(0,clsx.Z)(infoClasses.eyebrow,className),ownerState:{...props,useStyles}}),children)}))}}]);