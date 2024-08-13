"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[1790],{"./node_modules/@mui/material/Avatar/Avatar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Avatar_Avatar});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Person=(0,createSvgIcon.Z)((0,jsx_runtime.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var avatarClasses=__webpack_require__("./node_modules/@mui/material/Avatar/avatarClasses.js"),useSlot=__webpack_require__("./node_modules/@mui/material/utils/useSlot.js");const AvatarRoot=(0,styled.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.variant],ownerState.colorDefault&&styles.colorDefault]}})((({theme})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:theme.typography.fontFamily,fontSize:theme.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(theme.vars||theme).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:{color:(theme.vars||theme).palette.background.default,...theme.vars?{backgroundColor:theme.vars.palette.Avatar.defaultBg}:{backgroundColor:theme.palette.grey[400],...theme.applyStyles("dark",{backgroundColor:theme.palette.grey[600]})}}}]}))),AvatarImg=(0,styled.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(props,styles)=>styles.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),AvatarFallback=(0,styled.ZP)(Person,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(props,styles)=>styles.fallback})({width:"75%",height:"75%"});const Avatar_Avatar=react.forwardRef((function Avatar(inProps,ref){const props=(0,DefaultPropsProvider.i)({props:inProps,name:"MuiAvatar"}),{alt,children:childrenProp,className,component="div",slots={},slotProps={},imgProps,sizes,src,srcSet,variant="circular",...other}=props;let children=null;const loaded=function useLoaded({crossOrigin,referrerPolicy,src,srcSet}){const[loaded,setLoaded]=react.useState(!1);return react.useEffect((()=>{if(!src&&!srcSet)return;setLoaded(!1);let active=!0;const image=new Image;return image.onload=()=>{active&&setLoaded("loaded")},image.onerror=()=>{active&&setLoaded("error")},image.crossOrigin=crossOrigin,image.referrerPolicy=referrerPolicy,image.src=src,srcSet&&(image.srcset=srcSet),()=>{active=!1}}),[crossOrigin,referrerPolicy,src,srcSet]),loaded}({...imgProps,src,srcSet}),hasImg=src||srcSet,hasImgNotFailing=hasImg&&"error"!==loaded,ownerState={...props,colorDefault:!hasImgNotFailing,component,variant};delete ownerState.ownerState;const classes=(ownerState=>{const{classes,variant,colorDefault}=ownerState,slots={root:["root",variant,colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,composeClasses.Z)(slots,avatarClasses.$,classes)})(ownerState),[ImgSlot,imgSlotProps]=(0,useSlot.Z)("img",{className:classes.img,elementType:AvatarImg,externalForwardedProps:{slots,slotProps:{img:{...imgProps,...slotProps.img}}},additionalProps:{alt,src,srcSet,sizes},ownerState});return children=hasImgNotFailing?(0,jsx_runtime.jsx)(ImgSlot,{...imgSlotProps}):childrenProp||0===childrenProp?childrenProp:hasImg&&alt?alt[0]:(0,jsx_runtime.jsx)(AvatarFallback,{ownerState,className:classes.fallback}),(0,jsx_runtime.jsx)(AvatarRoot,{as:component,className:(0,clsx.Z)(classes.root,className),ref,...other,ownerState,children})}))},"./node_modules/@mui/material/Avatar/avatarClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>getAvatarUtilityClass,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getAvatarUtilityClass(slot){return(0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.ZP)("MuiAvatar",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"])},"./node_modules/@mui/material/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Box_Box});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),styled_engine=__webpack_require__("./node_modules/@mui/styled-engine/index.js"),styleFunctionSx=__webpack_require__("./node_modules/@mui/system/styleFunctionSx/styleFunctionSx.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/styleFunctionSx/extendSxProp.js"),useTheme=__webpack_require__("./node_modules/@mui/system/useTheme/useTheme.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var ClassNameGenerator=__webpack_require__("./node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),identifier=__webpack_require__("./node_modules/@mui/material/styles/identifier.js");const Box_boxClasses=(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").Z)("MuiBox",["root"]),defaultTheme=(0,createTheme.Z)(),Box=function createBox(options={}){const{themeId,defaultTheme,defaultClassName="MuiBox-root",generateClassName}=options,BoxRoot=(0,styled_engine.ZP)("div",{shouldForwardProp:prop=>"theme"!==prop&&"sx"!==prop&&"as"!==prop})(styleFunctionSx.Z);return react.forwardRef((function Box(inProps,ref){const theme=(0,useTheme.Z)(defaultTheme),{className,component="div",...other}=(0,extendSxProp.Z)(inProps);return(0,jsx_runtime.jsx)(BoxRoot,{as:component,ref,className:(0,clsx.Z)(className,generateClassName?generateClassName(defaultClassName):defaultClassName),theme:themeId&&theme[themeId]||theme,...other})}))}({themeId:identifier.Z,defaultTheme,defaultClassName:Box_boxClasses.root,generateClassName:ClassNameGenerator.Z.generate}),Box_Box=Box},"./node_modules/@mui/material/Card/Card.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card_Card});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),Paper=__webpack_require__("./node_modules/@mui/material/Paper/Paper.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getCardUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiCard",slot)}(0,generateUtilityClasses.Z)("MuiCard",["root"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CardRoot=(0,styled.ZP)(Paper.Z,{name:"MuiCard",slot:"Root",overridesResolver:(props,styles)=>styles.root})({overflow:"hidden"}),Card_Card=react.forwardRef((function Card(inProps,ref){const props=(0,DefaultPropsProvider.i)({props:inProps,name:"MuiCard"}),{className,raised=!1,...other}=props,ownerState={...props,raised},classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"]},getCardUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(CardRoot,{className:(0,clsx.Z)(classes.root,className),elevation:raised?8:void 0,ref,ownerState,...other})}))},"./node_modules/@mui/material/CardContent/CardContent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>CardContent_CardContent});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getCardContentUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiCardContent",slot)}(0,generateUtilityClasses.Z)("MuiCardContent",["root"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CardContentRoot=(0,styled.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(props,styles)=>styles.root})({padding:16,"&:last-child":{paddingBottom:24}}),CardContent_CardContent=react.forwardRef((function CardContent(inProps,ref){const props=(0,DefaultPropsProvider.i)({props:inProps,name:"MuiCardContent"}),{className,component="div",...other}=props,ownerState={...props,component},classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"]},getCardContentUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(CardContentRoot,{as:component,className:(0,clsx.Z)(classes.root,className),ownerState,ref,...other})}))},"./node_modules/@mui/material/utils/createSvgIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>createSvgIcon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/SvgIcon/SvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function createSvgIcon(path,displayName){function Component(props,ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.Z,{"data-testid":`${displayName}Icon`,ref,...props,children:path})}return Component.muiName=_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.Z.muiName,react__WEBPACK_IMPORTED_MODULE_0__.memo(react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(Component))}},"./blocks/card-project/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardProjectraw_namespaceObject='import React from "react";\nimport Avatar from "@mui/material/Avatar";\nimport Box from "@mui/material/Box";\nimport Card from "@mui/material/Card";\nimport CardContent from "@mui/material/CardContent";\nimport Typography from "@mui/material/Typography";\nimport { Info, InfoEyebrow, InfoSubtitle, InfoTitle } from "../info-basic";\nimport { getInfoN03Styles } from "../info-n03";\n\nexport function CardProject() {\n  return (\n    <Card\n      sx={{\n        maxWidth: 343,\n        borderRadius: "20px",\n        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",\n        transition: "0.3s",\n      }}\n    >\n      <Box sx={{ minWidth: 256 }}>\n        <Box\n          sx={{\n            padding: `4px 24px 0`,\n            display: "flex",\n            alignItems: "center",\n            justifyContent: "space-between",\n          }}\n        >\n          <Avatar\n            alt={"brand logo"}\n            src="https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png"\n            sx={(theme) => ({\n              width: 48,\n              height: 48,\n              transform: "translateY(50%)",\n              "& > img": {\n                margin: 0,\n                backgroundColor: "common.white",\n              },\n              [theme.breakpoints.up("sm")]: {\n                width: 60,\n                height: 60,\n              },\n            })}\n          />\n          <Typography\n            sx={{\n              textTransform: "uppercase",\n              fontSize: 14,\n              color: "grey.500",\n              letterSpacing: "1px",\n            }}\n          >\n            7 minutes\n          </Typography>\n        </Box>\n        <Box\n          component="hr"\n          sx={(theme) => ({\n            backgroundColor: "grey.200",\n            marginBottom: `${24 - 1}px`, // minus 1 due to divider height\n            [theme.breakpoints.up("sm")]: {\n              marginBottom: `${30 - 1}px`, // minus 1 due to divider height\n            },\n          })}\n        />\n      </Box>\n      <CardContent sx={{ p: 3 }}>\n        <Info useStyles={getInfoN03Styles}>\n          <InfoEyebrow>FACEBOOK INC.</InfoEyebrow>\n          <InfoTitle>React</InfoTitle>\n          <InfoSubtitle>\n            A JavaScript library for building user interfaces. Build\n            encapsulated components that manage their own state, then compose\n            them to make complex UIs.\n          </InfoSubtitle>\n        </Info>\n      </CardContent>\n    </Card>\n  );\n}\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/Project"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone card-project\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cardproject",children:"CardProject"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardProjectraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./blocks/card-project/CardProject.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Project:()=>Project,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardProject_stories});var react=__webpack_require__("./node_modules/react/index.js"),googleFont=__webpack_require__("./.storybook/decorators/googleFont.tsx"),storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),usage=__webpack_require__("./blocks/card-project/usage.mdx"),Avatar=__webpack_require__("./node_modules/@mui/material/Avatar/Avatar.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Card=__webpack_require__("./node_modules/@mui/material/Card/Card.js"),CardContent=__webpack_require__("./node_modules/@mui/material/CardContent/CardContent.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),info_basic=__webpack_require__("./blocks/info-basic/index.ts"),InfoN03_styles=(__webpack_require__("./blocks/info-n03/InfoN03.tsx"),__webpack_require__("./blocks/info-n03/InfoN03.styles.ts"));function CardProject(){return react.createElement(Card.Z,{sx:{maxWidth:343,borderRadius:"20px",boxShadow:"0 8px 40px -12px rgba(0,0,0,0.3)",transition:"0.3s"}},react.createElement(Box.Z,{sx:{minWidth:256}},react.createElement(Box.Z,{sx:{padding:"4px 24px 0",display:"flex",alignItems:"center",justifyContent:"space-between"}},react.createElement(Avatar.Z,{alt:"brand logo",src:"https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png",sx:theme=>({width:48,height:48,transform:"translateY(50%)","& > img":{margin:0,backgroundColor:"common.white"},[theme.breakpoints.up("sm")]:{width:60,height:60}})}),react.createElement(Typography.Z,{sx:{textTransform:"uppercase",fontSize:14,color:"grey.500",letterSpacing:"1px"}},"7 minutes")),react.createElement(Box.Z,{component:"hr",sx:theme=>({backgroundColor:"grey.200",marginBottom:"23px",[theme.breakpoints.up("sm")]:{marginBottom:"29px"}})})),react.createElement(CardContent.Z,{sx:{p:3}},react.createElement(info_basic.kI,{useStyles:InfoN03_styles.Y},react.createElement(info_basic.yj,null,"FACEBOOK INC."),react.createElement(info_basic.Xw,null,"React"),react.createElement(info_basic.In,null,"A JavaScript library for building user interfaces. Build encapsulated components that manage their own state, then compose them to make complex UIs."))))}const CardProject_stories={title:"Card/Project",component:CardProject,parameters:{layout:"centered",githubUsername:"siriwatknp"},decorators:[(0,storyDialog.Z)(usage.default),(0,googleFont.Z)([])]},Project={render:()=>react.createElement(CardProject,null)};Project.parameters={...Project.parameters,docs:{...Project.parameters?.docs,source:{originalSource:"{\n  render: () => <CardProject />\n}",...Project.parameters?.docs?.source}}};const __namedExportsOrder=["Project"]},"./.storybook/decorators/googleFont.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>googleFont});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function googleFont(fonts=[]){return Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap",rel:"stylesheet"}),fonts.map((font=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{key:font,rel:"stylesheet",href:`https://fonts.googleapis.com/css2?family=${font}&display=swap`}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js"),_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/DialogContent/DialogContent.js"),_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/DialogTitle/DialogTitle.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-ZHZY55TS.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_1__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,{globals}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__.Z,{maxWidth:"md",open:globals.blockUsage||!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_4__.Z,null,"Usage"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.f6,{theme:defaultTheme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.Z,{components:defaultComponents},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,null))))))}}},"./blocks/info-basic/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{kI:()=>Info,im:()=>InfoCaption,yj:()=>InfoEyebrow,In:()=>InfoSubtitle,Xw:()=>InfoTitle,Fj:()=>infoClasses});var react=__webpack_require__("./node_modules/react/index.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs");const infoClasses=(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").Z)("JunInfo",["root","title","subtitle","caption","eyebrow"]);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const defaultUseStyles=()=>({}),StylesContext=react.createContext(void 0),useStylesCtx=()=>{const value=react.useContext(StylesContext);if(!value)throw new Error("`useStylesCtx` must be called under <Info>");return value},InfoRoot=(0,styled.ZP)("div",{name:"JunInfo",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant]]}})((({theme,ownerState})=>({display:"block",...ownerState.useStyles&&ownerState.useStyles(theme).root}))),Info=react.forwardRef((function Info(props,ref){const{children,component,variant,useStyles,...other}=props,ownerState={...props,variant,useStyles};return react.createElement(InfoRoot,_extends({ref},other,{as:component,className:(0,clsx.Z)(infoClasses.root,props.className),ownerState}),react.createElement(StylesContext.Provider,{value:useStyles||defaultUseStyles},children))}));function InfoTitle_extends(){return InfoTitle_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},InfoTitle_extends.apply(this,arguments)}const InfoTitleRoot=(0,styled.ZP)("div",{name:"JunInfo",slot:"Head",overridesResolver:(props,styles)=>styles.title})((({theme,ownerState})=>({letterSpacing:"0.0073529412em",fontSize:"1.25rem",fontWeight:"normal",margin:"0 0 0.4em 0",lineHeight:1.5,...ownerState.useStyles(theme).title}))),InfoTitle=react.forwardRef((function InfoTitle(props,ref){const{children,component,className,...other}=props,useStyles=useStylesCtx();return react.createElement(InfoTitleRoot,InfoTitle_extends({ref},other,{as:component,className:(0,clsx.Z)(infoClasses.title,className),ownerState:{...props,useStyles}}),children)}));function InfoSubtitle_extends(){return InfoSubtitle_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},InfoSubtitle_extends.apply(this,arguments)}const InfoParagraphRoot=(0,styled.ZP)("p",{name:"JunInfo",slot:"Body",overridesResolver:(props,styles)=>styles.subtitle})((({theme,ownerState})=>({color:theme.palette.text.secondary,lineHeight:1.5,fontSize:"1rem",margin:0,...ownerState.useStyles(theme).subtitle}))),InfoSubtitle=react.forwardRef((function InfoSubtitle(props,ref){const{children,component,className,...other}=props,useStyles=useStylesCtx();return react.createElement(InfoParagraphRoot,InfoSubtitle_extends({ref},other,{as:component,className:(0,clsx.Z)(infoClasses.subtitle,className),ownerState:{...props,useStyles}}),children)}));function InfoCaption_extends(){return InfoCaption_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},InfoCaption_extends.apply(this,arguments)}const InfoCaptionRoot=(0,styled.ZP)("div",{name:"JunInfo",slot:"Caption",overridesResolver:(props,styles)=>styles.caption})((({theme,ownerState})=>({color:theme.palette.text.secondary,fontSize:"0.75rem",marginBlockStart:"0.5em",marginBlockEnd:"0.75em",...ownerState.useStyles(theme).caption}))),InfoCaption=react.forwardRef((function InfoCaption(props,ref){const{children,component,className,...other}=props,useStyles=useStylesCtx();return react.createElement(InfoCaptionRoot,InfoCaption_extends({ref},other,{as:component,className:(0,clsx.Z)(infoClasses.caption,className),ownerState:{...props,useStyles}}),children)}));function InfoEyebrow_extends(){return InfoEyebrow_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},InfoEyebrow_extends.apply(this,arguments)}const InfoEyebrowRoot=(0,styled.ZP)("div",{name:"JunInfo",slot:"Eyebrow",overridesResolver:(props,styles)=>styles.eyebrow})((({theme,ownerState})=>({color:theme.palette.text.secondary,fontSize:"0.875rem",marginBottom:"0.25rem",lineHeight:"1.25rem",textTransform:"uppercase",...ownerState.useStyles(theme).eyebrow}))),InfoEyebrow=react.forwardRef((function InfoEyebrow(props,ref){const{children,component,className,...other}=props,useStyles=useStylesCtx();return react.createElement(InfoEyebrowRoot,InfoEyebrow_extends({ref},other,{as:component,className:(0,clsx.Z)(infoClasses.eyebrow,className),ownerState:{...props,useStyles}}),children)}))},"./blocks/info-n03/InfoN03.styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>getInfoN03Styles});const getInfoN03Styles=arg=>{const{palette}="theme"in arg?arg.theme:arg;return{eyebrow:{textTransform:"uppercase",color:"#9e9e9e",marginBottom:"0.35em",fontWeight:"bold",letterSpacing:"2px",fontSize:16,display:"inline-block"},title:{fontSize:24,fontWeight:900,marginBottom:"0.72em"},subtitle:{fontSize:16,color:palette.text.primary,lineHeight:1.75}}}},"./blocks/info-n03/InfoN03.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>InfoN03});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_info_basic__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./blocks/info-basic/index.ts"),_InfoN03_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./blocks/info-n03/InfoN03.styles.ts");function InfoN03(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_info_basic__WEBPACK_IMPORTED_MODULE_1__.kI,{variant:"n03",useStyles:_InfoN03_styles__WEBPACK_IMPORTED_MODULE_2__.Y},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_info_basic__WEBPACK_IMPORTED_MODULE_1__.yj,null,"GOOGLE INC."),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_info_basic__WEBPACK_IMPORTED_MODULE_1__.Xw,null,"Project Polymer"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_info_basic__WEBPACK_IMPORTED_MODULE_1__.In,null,"Web components usher in a new era of web development based on encapsulated and interoperable custom"))}}}]);