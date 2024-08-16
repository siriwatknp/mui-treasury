/*! For license information please see card-engagement-CardEngagement-stories.510158f2.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[8550],{"./node_modules/@mui/material/Avatar/Avatar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Avatar_Avatar});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Person=(0,createSvgIcon.Z)((0,jsx_runtime.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var avatarClasses=__webpack_require__("./node_modules/@mui/material/Avatar/avatarClasses.js"),useSlot=__webpack_require__("./node_modules/@mui/material/utils/useSlot.js");const AvatarRoot=(0,styled.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.variant],ownerState.colorDefault&&styles.colorDefault]}})((({theme})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:theme.typography.fontFamily,fontSize:theme.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(theme.vars||theme).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:{color:(theme.vars||theme).palette.background.default,...theme.vars?{backgroundColor:theme.vars.palette.Avatar.defaultBg}:{backgroundColor:theme.palette.grey[400],...theme.applyStyles("dark",{backgroundColor:theme.palette.grey[600]})}}}]}))),AvatarImg=(0,styled.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(props,styles)=>styles.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),AvatarFallback=(0,styled.ZP)(Person,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(props,styles)=>styles.fallback})({width:"75%",height:"75%"});const Avatar_Avatar=react.forwardRef((function Avatar(inProps,ref){const props=(0,DefaultPropsProvider.i)({props:inProps,name:"MuiAvatar"}),{alt,children:childrenProp,className,component="div",slots={},slotProps={},imgProps,sizes,src,srcSet,variant="circular",...other}=props;let children=null;const loaded=function useLoaded({crossOrigin,referrerPolicy,src,srcSet}){const[loaded,setLoaded]=react.useState(!1);return react.useEffect((()=>{if(!src&&!srcSet)return;setLoaded(!1);let active=!0;const image=new Image;return image.onload=()=>{active&&setLoaded("loaded")},image.onerror=()=>{active&&setLoaded("error")},image.crossOrigin=crossOrigin,image.referrerPolicy=referrerPolicy,image.src=src,srcSet&&(image.srcset=srcSet),()=>{active=!1}}),[crossOrigin,referrerPolicy,src,srcSet]),loaded}({...imgProps,src,srcSet}),hasImg=src||srcSet,hasImgNotFailing=hasImg&&"error"!==loaded,ownerState={...props,colorDefault:!hasImgNotFailing,component,variant};delete ownerState.ownerState;const classes=(ownerState=>{const{classes,variant,colorDefault}=ownerState,slots={root:["root",variant,colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,composeClasses.Z)(slots,avatarClasses.$,classes)})(ownerState),[ImgSlot,imgSlotProps]=(0,useSlot.Z)("img",{className:classes.img,elementType:AvatarImg,externalForwardedProps:{slots,slotProps:{img:{...imgProps,...slotProps.img}}},additionalProps:{alt,src,srcSet,sizes},ownerState});return children=hasImgNotFailing?(0,jsx_runtime.jsx)(ImgSlot,{...imgSlotProps}):childrenProp||0===childrenProp?childrenProp:hasImg&&alt?alt[0]:(0,jsx_runtime.jsx)(AvatarFallback,{ownerState,className:classes.fallback}),(0,jsx_runtime.jsx)(AvatarRoot,{as:component,className:(0,clsx.Z)(classes.root,className),ref,...other,ownerState,children})}))},"./node_modules/@mui/material/Avatar/avatarClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>getAvatarUtilityClass,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getAvatarUtilityClass(slot){return(0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.ZP)("MuiAvatar",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"])},"./node_modules/@mui/material/AvatarGroup/AvatarGroup.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>AvatarGroup_AvatarGroup});var react=__webpack_require__("./node_modules/react/index.js"),clsx=(__webpack_require__("./node_modules/@mui/material/node_modules/react-is/index.js"),__webpack_require__("./node_modules/clsx/dist/clsx.mjs")),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),avatarClasses=__webpack_require__("./node_modules/@mui/material/Avatar/avatarClasses.js"),Avatar=__webpack_require__("./node_modules/@mui/material/Avatar/Avatar.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getAvatarGroupUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiAvatarGroup",slot)}const AvatarGroup_avatarGroupClasses=(0,generateUtilityClasses.Z)("MuiAvatarGroup",["root","avatar"]);var useSlot=__webpack_require__("./node_modules/@mui/material/utils/useSlot.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SPACINGS={small:-16,medium:-8},AvatarGroupRoot=(0,styled.ZP)("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(props,styles)=>({[`& .${AvatarGroup_avatarGroupClasses.avatar}`]:styles.avatar,...styles.root})})((({theme})=>({display:"flex",flexDirection:"row-reverse",[`& .${avatarClasses.Z.root}`]:{border:`2px solid ${(theme.vars||theme).palette.background.default}`,boxSizing:"content-box",marginLeft:"var(--AvatarGroup-spacing, -8px)","&:last-child":{marginLeft:0}}}))),AvatarGroup_AvatarGroup=react.forwardRef((function AvatarGroup(inProps,ref){const props=(0,DefaultPropsProvider.i)({props:inProps,name:"MuiAvatarGroup"}),{children:childrenProp,className,component="div",componentsProps,max=5,renderSurplus,slotProps={},slots={},spacing="medium",total,variant="circular",...other}=props;let clampedMax=max<2?2:max;const ownerState={...props,max,spacing,component,variant},classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"],avatar:["avatar"]},getAvatarGroupUtilityClass,classes)})(ownerState),children=react.Children.toArray(childrenProp).filter((child=>react.isValidElement(child))),totalAvatars=total||children.length;totalAvatars===clampedMax&&(clampedMax+=1),clampedMax=Math.min(totalAvatars+1,clampedMax);const maxAvatars=Math.min(children.length,clampedMax-1),extraAvatars=Math.max(totalAvatars-clampedMax,totalAvatars-maxAvatars,0),extraAvatarsElement=renderSurplus?renderSurplus(extraAvatars):`+${extraAvatars}`,marginValue=ownerState.spacing&&void 0!==SPACINGS[ownerState.spacing]?SPACINGS[ownerState.spacing]:-ownerState.spacing||-8,externalForwardedProps={slots,slotProps:{surplus:slotProps.additionalAvatar??componentsProps?.additionalAvatar,...componentsProps,...slotProps}},[SurplusSlot,surplusProps]=(0,useSlot.Z)("surplus",{elementType:Avatar.Z,externalForwardedProps,className:classes.avatar,ownerState,additionalProps:{variant,style:{"--AvatarRoot-spacing":marginValue?`${marginValue}px`:void 0,...other.style}}});return(0,jsx_runtime.jsxs)(AvatarGroupRoot,{as:component,ownerState,className:(0,clsx.Z)(classes.root,className),ref,...other,children:[extraAvatars?(0,jsx_runtime.jsx)(SurplusSlot,{...surplusProps,children:extraAvatarsElement}):null,children.slice(0,maxAvatars).reverse().map((child=>react.cloneElement(child,{className:(0,clsx.Z)(child.props.className,classes.avatar),variant:child.props.variant||variant})))]})}))},"./node_modules/@mui/material/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Box_Box});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),styled_engine=__webpack_require__("./node_modules/@mui/styled-engine/index.js"),styleFunctionSx=__webpack_require__("./node_modules/@mui/system/styleFunctionSx/styleFunctionSx.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/styleFunctionSx/extendSxProp.js"),useTheme=__webpack_require__("./node_modules/@mui/system/useTheme/useTheme.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var ClassNameGenerator=__webpack_require__("./node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),identifier=__webpack_require__("./node_modules/@mui/material/styles/identifier.js");const Box_boxClasses=(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").Z)("MuiBox",["root"]),defaultTheme=(0,createTheme.Z)(),Box=function createBox(options={}){const{themeId,defaultTheme,defaultClassName="MuiBox-root",generateClassName}=options,BoxRoot=(0,styled_engine.ZP)("div",{shouldForwardProp:prop=>"theme"!==prop&&"sx"!==prop&&"as"!==prop})(styleFunctionSx.Z);return react.forwardRef((function Box(inProps,ref){const theme=(0,useTheme.Z)(defaultTheme),{className,component="div",...other}=(0,extendSxProp.Z)(inProps);return(0,jsx_runtime.jsx)(BoxRoot,{as:component,ref,className:(0,clsx.Z)(className,generateClassName?generateClassName(defaultClassName):defaultClassName),theme:themeId&&theme[themeId]||theme,...other})}))}({themeId:identifier.Z,defaultTheme,defaultClassName:Box_boxClasses.root,generateClassName:ClassNameGenerator.Z.generate}),Box_Box=Box},"./node_modules/@mui/material/Card/Card.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card_Card});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),Paper=__webpack_require__("./node_modules/@mui/material/Paper/Paper.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getCardUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiCard",slot)}(0,generateUtilityClasses.Z)("MuiCard",["root"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CardRoot=(0,styled.ZP)(Paper.Z,{name:"MuiCard",slot:"Root",overridesResolver:(props,styles)=>styles.root})({overflow:"hidden"}),Card_Card=react.forwardRef((function Card(inProps,ref){const props=(0,DefaultPropsProvider.i)({props:inProps,name:"MuiCard"}),{className,raised=!1,...other}=props,ownerState={...props,raised},classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"]},getCardUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(CardRoot,{className:(0,clsx.Z)(classes.root,className),elevation:raised?8:void 0,ref,ownerState,...other})}))},"./node_modules/@mui/material/CardContent/CardContent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>CardContent_CardContent});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getCardContentUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiCardContent",slot)}(0,generateUtilityClasses.Z)("MuiCardContent",["root"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CardContentRoot=(0,styled.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(props,styles)=>styles.root})({padding:16,"&:last-child":{paddingBottom:24}}),CardContent_CardContent=react.forwardRef((function CardContent(inProps,ref){const props=(0,DefaultPropsProvider.i)({props:inProps,name:"MuiCardContent"}),{className,component="div",...other}=props,ownerState={...props,component},classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"]},getCardContentUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(CardContentRoot,{as:component,className:(0,clsx.Z)(classes.root,className),ownerState,ref,...other})}))},"./node_modules/@mui/material/CardMedia/CardMedia.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>CardMedia_CardMedia});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getCardMediaUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiCardMedia",slot)}(0,generateUtilityClasses.Z)("MuiCardMedia",["root","media","img"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CardMediaRoot=(0,styled.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props,{isMediaComponent,isImageComponent}=ownerState;return[styles.root,isMediaComponent&&styles.media,isImageComponent&&styles.img]}})({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",variants:[{props:{isMediaComponent:!0},style:{width:"100%"}},{props:{isImageComponent:!0},style:{objectFit:"cover"}}]}),MEDIA_COMPONENTS=["video","audio","picture","iframe","img"],IMAGE_COMPONENTS=["picture","img"],CardMedia_CardMedia=react.forwardRef((function CardMedia(inProps,ref){const props=(0,DefaultPropsProvider.i)({props:inProps,name:"MuiCardMedia"}),{children,className,component="div",image,src,style,...other}=props,isMediaComponent=-1!==MEDIA_COMPONENTS.indexOf(component),composedStyle=!isMediaComponent&&image?{backgroundImage:`url("${image}")`,...style}:style,ownerState={...props,component,isMediaComponent,isImageComponent:-1!==IMAGE_COMPONENTS.indexOf(component)},classes=(ownerState=>{const{classes,isMediaComponent,isImageComponent}=ownerState,slots={root:["root",isMediaComponent&&"media",isImageComponent&&"img"]};return(0,composeClasses.Z)(slots,getCardMediaUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(CardMediaRoot,{className:(0,clsx.Z)(classes.root,className),as:component,role:!isMediaComponent&&image?"img":void 0,ref,style:composedStyle,ownerState,src:isMediaComponent?image||src:void 0,...other,children})}))},"./node_modules/@mui/material/node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var u,b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen");function v(a){if("object"==typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}u=Symbol.for("react.module.reference")},"./node_modules/@mui/material/node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("./node_modules/@mui/material/node_modules/react-is/cjs/react-is.production.min.js")},"./node_modules/@mui/material/utils/createSvgIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>createSvgIcon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/SvgIcon/SvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function createSvgIcon(path,displayName){function Component(props,ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.Z,{"data-testid":`${displayName}Icon`,ref,...props,children:path})}return Component.muiName=_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.Z.muiName,react__WEBPACK_IMPORTED_MODULE_0__.memo(react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(Component))}},"./blocks/card-engagement/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardEngagementraw_namespaceObject='import React from "react";\nimport Avatar from "@mui/material/Avatar";\nimport AvatarGroup from "@mui/material/AvatarGroup";\nimport Box from "@mui/material/Box";\nimport Card from "@mui/material/Card";\nimport CardContent from "@mui/material/CardContent";\nimport CardMedia from "@mui/material/CardMedia";\nimport { Info, InfoSubtitle, InfoTitle } from "../info-basic";\n\nexport function CardEngagement() {\n  return (\n    <Card\n      sx={{\n        width: 320,\n        maxWidth: "100%",\n        boxShadow:\n          "0 2px 4px -2px rgba(0,0,0,0.24), 0 4px 24px -2px rgba(0, 0, 0, 0.2)",\n      }}\n    >\n      <CardMedia\n        image={\n          "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"\n        }\n        sx={{\n          width: "100%",\n          height: 0,\n          paddingBottom: "min(56.25%, 200px)",\n          bgcolor: "rgba(0, 0, 0, 0.08)",\n        }}\n      />\n      <CardContent sx={{ p: 3 }}>\n        <Info>\n          <InfoTitle sx={{ fontWeight: "bold" }}>Nature Around Us</InfoTitle>\n          <InfoSubtitle>\n            We are going to learn different kinds of species in nature that live\n            together to form amazing environment.\n          </InfoSubtitle>\n        </Info>\n      </CardContent>\n      <Box px={3} pb={3}>\n        <AvatarGroup>\n          <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/300?img=1" />\n          <Avatar alt="Travis Howard" src="https://i.pravatar.cc/300?img=2" />\n          <Avatar alt="Cindy Baker" src="https://i.pravatar.cc/300?img=3" />\n          <Avatar alt="Agnes Walker" src="https://i.pravatar.cc/300?img=4" />\n          <Avatar\n            alt="Trevor Henderson"\n            src="https://i.pravatar.cc/300?img=5"\n            sx={{ mr: "auto" }}\n          />\n        </AvatarGroup>\n      </Box>\n    </Card>\n  );\n}\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/Engagement"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone card-engagement info-basic\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cardengagement",children:"CardEngagement"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardEngagementraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./blocks/card-engagement/CardEngagement.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Engagement:()=>Engagement,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardEngagement_stories});var react=__webpack_require__("./node_modules/react/index.js"),storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),Avatar=__webpack_require__("./node_modules/@mui/material/Avatar/Avatar.js"),AvatarGroup=__webpack_require__("./node_modules/@mui/material/AvatarGroup/AvatarGroup.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Card=__webpack_require__("./node_modules/@mui/material/Card/Card.js"),CardContent=__webpack_require__("./node_modules/@mui/material/CardContent/CardContent.js"),CardMedia=__webpack_require__("./node_modules/@mui/material/CardMedia/CardMedia.js"),info_basic=__webpack_require__("./blocks/info-basic/index.ts");function CardEngagement(){return react.createElement(Card.Z,{sx:{width:320,maxWidth:"100%",boxShadow:"0 2px 4px -2px rgba(0,0,0,0.24), 0 4px 24px -2px rgba(0, 0, 0, 0.2)"}},react.createElement(CardMedia.Z,{image:"https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg",sx:{width:"100%",height:0,paddingBottom:"min(56.25%, 200px)",bgcolor:"rgba(0, 0, 0, 0.08)"}}),react.createElement(CardContent.Z,{sx:{p:3}},react.createElement(info_basic.kI,null,react.createElement(info_basic.Xw,{sx:{fontWeight:"bold"}},"Nature Around Us"),react.createElement(info_basic.In,null,"We are going to learn different kinds of species in nature that live together to form amazing environment."))),react.createElement(Box.Z,{px:3,pb:3},react.createElement(AvatarGroup.Z,null,react.createElement(Avatar.Z,{alt:"Remy Sharp",src:"https://i.pravatar.cc/300?img=1"}),react.createElement(Avatar.Z,{alt:"Travis Howard",src:"https://i.pravatar.cc/300?img=2"}),react.createElement(Avatar.Z,{alt:"Cindy Baker",src:"https://i.pravatar.cc/300?img=3"}),react.createElement(Avatar.Z,{alt:"Agnes Walker",src:"https://i.pravatar.cc/300?img=4"}),react.createElement(Avatar.Z,{alt:"Trevor Henderson",src:"https://i.pravatar.cc/300?img=5",sx:{mr:"auto"}}))))}var usage=__webpack_require__("./blocks/card-engagement/usage.mdx");const CardEngagement_stories={title:"Card/Engagement",component:CardEngagement,parameters:{layout:"centered",githubUsername:"siriwatknp",modules:["info-basic"]},decorators:[(0,storyDialog.Z)(usage.default)]},Engagement={render:()=>react.createElement("div",{style:{width:340,padding:20,maxWidth:"100%",resize:"horizontal",overflow:"auto"}},react.createElement(CardEngagement,null))};Engagement.parameters={...Engagement.parameters,docs:{...Engagement.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    width: 340,\n    padding: 20,\n    maxWidth: "100%",\n    resize: "horizontal",\n    overflow: "auto"\n  }}>\n      <CardEngagement />\n    </div>\n}',...Engagement.parameters?.docs?.source}}};const __namedExportsOrder=["Engagement"]},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Container/Container.js"),_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js"),_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/DialogContent/DialogContent.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-ZHZY55TS.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_1__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,{globals,...rest}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__.Z,{fullScreen:!0,open:globals.blockUsage||!1,transitionDuration:{enter:300,exit:400},slotProps:{backdrop:{sx:theme=>({backgroundColor:`rgba(${theme.vars.palette.background.defaultChannel}/0.5)`})}}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__.Z,{maxWidth:"md"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.f6,{theme:defaultTheme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.Z,{components:defaultComponents},react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:"loading..."},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,null))))))))}}},"./blocks/info-basic/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{kI:()=>Info,im:()=>InfoCaption,yj:()=>InfoEyebrow,In:()=>InfoSubtitle,Xw:()=>InfoTitle,Fj:()=>infoClasses});var react=__webpack_require__("./node_modules/react/index.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs");const infoClasses=(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").Z)("JunInfo",["root","title","subtitle","caption","eyebrow"]);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const defaultUseStyles=()=>({}),StylesContext=react.createContext(void 0),useStylesCtx=()=>{const value=react.useContext(StylesContext);if(!value)throw new Error("`useStylesCtx` must be called under <Info>");return value},InfoRoot=(0,styled.ZP)("div",{name:"JunInfo",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant]]}})((({theme,ownerState})=>({display:"block",...ownerState.useStyles&&ownerState.useStyles(theme).root}))),Info=react.forwardRef((function Info(props,ref){const{children,component,variant,useStyles,...other}=props,ownerState={...props,variant,useStyles};return react.createElement(InfoRoot,_extends({ref},other,{as:component,className:(0,clsx.Z)(infoClasses.root,props.className),ownerState}),react.createElement(StylesContext.Provider,{value:useStyles||defaultUseStyles},children))}));function InfoTitle_extends(){return InfoTitle_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},InfoTitle_extends.apply(this,arguments)}const InfoTitleRoot=(0,styled.ZP)("div",{name:"JunInfo",slot:"Head",overridesResolver:(props,styles)=>styles.title})((({theme,ownerState})=>({letterSpacing:"0.0073529412em",fontSize:"1.25rem",fontWeight:"normal",margin:"0 0 0.4em 0",lineHeight:1.5,...ownerState.useStyles(theme).title}))),InfoTitle=react.forwardRef((function InfoTitle(props,ref){const{children,component,className,...other}=props,useStyles=useStylesCtx();return react.createElement(InfoTitleRoot,InfoTitle_extends({ref},other,{as:component,className:(0,clsx.Z)(infoClasses.title,className),ownerState:{...props,useStyles}}),children)}));function InfoSubtitle_extends(){return InfoSubtitle_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},InfoSubtitle_extends.apply(this,arguments)}const InfoParagraphRoot=(0,styled.ZP)("p",{name:"JunInfo",slot:"Body",overridesResolver:(props,styles)=>styles.subtitle})((({theme,ownerState})=>({color:theme.palette.text.secondary,lineHeight:1.5,fontSize:"1rem",margin:0,...ownerState.useStyles(theme).subtitle}))),InfoSubtitle=react.forwardRef((function InfoSubtitle(props,ref){const{children,component,className,...other}=props,useStyles=useStylesCtx();return react.createElement(InfoParagraphRoot,InfoSubtitle_extends({ref},other,{as:component,className:(0,clsx.Z)(infoClasses.subtitle,className),ownerState:{...props,useStyles}}),children)}));function InfoCaption_extends(){return InfoCaption_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},InfoCaption_extends.apply(this,arguments)}const InfoCaptionRoot=(0,styled.ZP)("div",{name:"JunInfo",slot:"Caption",overridesResolver:(props,styles)=>styles.caption})((({theme,ownerState})=>({color:theme.palette.text.secondary,fontSize:"0.75rem",marginBlockStart:"0.5em",marginBlockEnd:"0.75em",...ownerState.useStyles(theme).caption}))),InfoCaption=react.forwardRef((function InfoCaption(props,ref){const{children,component,className,...other}=props,useStyles=useStylesCtx();return react.createElement(InfoCaptionRoot,InfoCaption_extends({ref},other,{as:component,className:(0,clsx.Z)(infoClasses.caption,className),ownerState:{...props,useStyles}}),children)}));function InfoEyebrow_extends(){return InfoEyebrow_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},InfoEyebrow_extends.apply(this,arguments)}const InfoEyebrowRoot=(0,styled.ZP)("div",{name:"JunInfo",slot:"Eyebrow",overridesResolver:(props,styles)=>styles.eyebrow})((({theme,ownerState})=>({color:theme.palette.text.secondary,fontSize:"0.875rem",marginBottom:"0.25rem",lineHeight:"1.25rem",textTransform:"uppercase",...ownerState.useStyles(theme).eyebrow}))),InfoEyebrow=react.forwardRef((function InfoEyebrow(props,ref){const{children,component,className,...other}=props,useStyles=useStylesCtx();return react.createElement(InfoEyebrowRoot,InfoEyebrow_extends({ref},other,{as:component,className:(0,clsx.Z)(infoClasses.eyebrow,className),ownerState:{...props,useStyles}}),children)}))}}]);