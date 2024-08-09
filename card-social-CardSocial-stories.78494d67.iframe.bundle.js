"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[9168],{"./node_modules/@mui/material/Avatar/Avatar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Avatar_Avatar});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Person=(0,createSvgIcon.Z)((0,jsx_runtime.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var avatarClasses=__webpack_require__("./node_modules/@mui/material/Avatar/avatarClasses.js"),useSlot=__webpack_require__("./node_modules/@mui/material/utils/useSlot.js");const AvatarRoot=(0,styled.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.variant],ownerState.colorDefault&&styles.colorDefault]}})((({theme})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:theme.typography.fontFamily,fontSize:theme.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(theme.vars||theme).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:{color:(theme.vars||theme).palette.background.default,...theme.vars?{backgroundColor:theme.vars.palette.Avatar.defaultBg}:{backgroundColor:theme.palette.grey[400],...theme.applyStyles("dark",{backgroundColor:theme.palette.grey[600]})}}}]}))),AvatarImg=(0,styled.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(props,styles)=>styles.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),AvatarFallback=(0,styled.ZP)(Person,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(props,styles)=>styles.fallback})({width:"75%",height:"75%"});const Avatar_Avatar=react.forwardRef((function Avatar(inProps,ref){const props=(0,DefaultPropsProvider.i)({props:inProps,name:"MuiAvatar"}),{alt,children:childrenProp,className,component="div",slots={},slotProps={},imgProps,sizes,src,srcSet,variant="circular",...other}=props;let children=null;const loaded=function useLoaded({crossOrigin,referrerPolicy,src,srcSet}){const[loaded,setLoaded]=react.useState(!1);return react.useEffect((()=>{if(!src&&!srcSet)return;setLoaded(!1);let active=!0;const image=new Image;return image.onload=()=>{active&&setLoaded("loaded")},image.onerror=()=>{active&&setLoaded("error")},image.crossOrigin=crossOrigin,image.referrerPolicy=referrerPolicy,image.src=src,srcSet&&(image.srcset=srcSet),()=>{active=!1}}),[crossOrigin,referrerPolicy,src,srcSet]),loaded}({...imgProps,src,srcSet}),hasImg=src||srcSet,hasImgNotFailing=hasImg&&"error"!==loaded,ownerState={...props,colorDefault:!hasImgNotFailing,component,variant};delete ownerState.ownerState;const classes=(ownerState=>{const{classes,variant,colorDefault}=ownerState,slots={root:["root",variant,colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,composeClasses.Z)(slots,avatarClasses.$,classes)})(ownerState),[ImgSlot,imgSlotProps]=(0,useSlot.Z)("img",{className:classes.img,elementType:AvatarImg,externalForwardedProps:{slots,slotProps:{img:{...imgProps,...slotProps.img}}},additionalProps:{alt,src,srcSet,sizes},ownerState});return children=hasImgNotFailing?(0,jsx_runtime.jsx)(ImgSlot,{...imgSlotProps}):childrenProp||0===childrenProp?childrenProp:hasImg&&alt?alt[0]:(0,jsx_runtime.jsx)(AvatarFallback,{ownerState,className:classes.fallback}),(0,jsx_runtime.jsx)(AvatarRoot,{as:component,className:(0,clsx.Z)(classes.root,className),ref,...other,ownerState,children})}))},"./node_modules/@mui/material/Avatar/avatarClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>getAvatarUtilityClass,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getAvatarUtilityClass(slot){return(0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.ZP)("MuiAvatar",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"])},"./node_modules/@mui/material/Link/Link.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Link_Link});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),colorManipulator=__webpack_require__("./node_modules/@mui/system/colorManipulator/colorManipulator.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),isFocusVisible=__webpack_require__("./node_modules/@mui/utils/esm/isFocusVisible/isFocusVisible.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getLinkUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiLink",slot)}const Link_linkClasses=(0,generateUtilityClasses.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var style=__webpack_require__("./node_modules/@mui/system/style/style.js");const colorTransformations={textPrimary:"text.primary",textSecondary:"text.secondary",primary:null,secondary:null,error:null,info:null,success:null,warning:null},Link_getTextDecoration=({theme,ownerState})=>{let transformedColor=colorTransformations[ownerState.color];if(null===transformedColor)return null;void 0===transformedColor&&(transformedColor=ownerState.color);const color=(0,style.DW)(theme,`palette.${transformedColor}`,!1)||ownerState.color,channelColor=(0,style.DW)(theme,`palette.${transformedColor}Channel`);return"vars"in theme&&channelColor?`rgba(${channelColor} / 0.4)`:(0,colorManipulator.Fq)(color,.4)};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const LinkRoot=(0,styled.ZP)(Typography.Z,{name:"MuiLink",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[`underline${(0,capitalize.Z)(ownerState.underline)}`],"button"===ownerState.component&&styles.button]}})((({theme})=>({variants:[{props:{underline:"none"},style:{textDecoration:"none"}},{props:{underline:"hover"},style:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},{props:{underline:"always"},style:{textDecoration:"underline","&:hover":{textDecorationColor:"inherit"}}},{props:({underline,ownerState})=>"always"===underline&&"inherit"!==ownerState.color,style:{textDecorationColor:"var(--Link-underlineColor)"}},...Object.entries(theme.palette).filter((([,value])=>value&&value.main)).map((([color])=>({props:{underline:"always",color},style:{"--Link-underlineColor":theme.vars?`rgba(${theme.vars.palette[color].mainChannel} / 0.4)`:(0,colorManipulator.Fq)(theme.palette[color].main,.4)}}))),{props:{component:"button"},style:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Link_linkClasses.focusVisible}`]:{outline:"auto"}}}]}))),Link_Link=react.forwardRef((function Link(inProps,ref){const props=(0,DefaultPropsProvider.i)({props:inProps,name:"MuiLink"}),theme=(0,useTheme.Z)(),{className,color="primary",component="a",onBlur,onFocus,TypographyClasses,underline="always",variant="inherit",sx,...other}=props,[focusVisible,setFocusVisible]=react.useState(!1),ownerState={...props,color,component,focusVisible,underline,variant},classes=(ownerState=>{const{classes,component,focusVisible,underline}=ownerState,slots={root:["root",`underline${(0,capitalize.Z)(underline)}`,"button"===component&&"button",focusVisible&&"focusVisible"]};return(0,composeClasses.Z)(slots,getLinkUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(LinkRoot,{color,className:(0,clsx.Z)(classes.root,className),classes:TypographyClasses,component,onBlur:event=>{(0,isFocusVisible.Z)(event.target)||setFocusVisible(!1),onBlur&&onBlur(event)},onFocus:event=>{(0,isFocusVisible.Z)(event.target)&&setFocusVisible(!0),onFocus&&onFocus(event)},ref,ownerState,variant,...other,sx:[...void 0===colorTransformations[color]?[{color}]:[],...Array.isArray(sx)?sx:[sx]],style:{...other.style,..."always"===underline&&"inherit"!==color&&{"--Link-underlineColor":Link_getTextDecoration({theme,ownerState})}}})}))},"./blocks/card-social/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardSocialraw_namespaceObject='import React from "react";\nimport Avatar from "@mui/material/Avatar";\nimport Box from "@mui/material/Box";\nimport Button from "@mui/material/Button";\nimport Divider from "@mui/material/Divider";\nimport Link from "@mui/material/Link";\nimport Typography from "@mui/material/Typography";\n\nconst PersonItem = ({ src = "", name = "", count = 0 }) => {\n  return (\n    <Box sx={{ display: "flex", flexWrap: "nowrap", gap: 2, p: 2 }}>\n      <Box sx={{ flexShrink: 0 }}>\n        <Avatar src={src} />\n      </Box>\n      <Box\n        sx={{\n          display: "flex",\n          flexWrap: "wrap",\n          minWidth: 0,\n          gap: 1,\n          alignItems: "center",\n          flexGrow: 1,\n          "& > *": {\n            minWidth: `clamp(0px, (240px + 1px - 100%) * 999, 100%)`,\n          },\n        }}\n      >\n        <Box sx={{ flexGrow: 1 }}>\n          <Typography\n            noWrap\n            sx={{\n              fontWeight: 600,\n              fontSize: "1rem",\n              color: (theme) =>\n                theme.palette.mode === "dark" ? "#fff" : "#122740",\n            }}\n          >\n            <b>{name}</b>\n          </Typography>\n          <Typography\n            noWrap\n            variant="body2"\n            sx={{\n              fontSize: "0.875rem",\n              color: "#758392",\n              mt: -0.25,\n            }}\n          >\n            {count} mutual friends\n          </Typography>\n        </Box>\n        <Box>\n          <Button\n            size="small"\n            variant={"outlined"}\n            sx={{\n              borderRadius: 5,\n              padding: "0.125rem 0.75rem",\n              borderColor: "#becddc",\n              fontSize: "0.75rem",\n            }}\n          >\n            Follow\n          </Button>\n        </Box>\n      </Box>\n    </Box>\n  );\n};\n\nexport function CardSocial() {\n  return (\n    <Box\n      sx={{\n        display: "flex",\n        flexDirection: "column",\n        borderRadius: 2,\n        bgcolor: (theme) =>\n          theme.palette.mode === "dark" ? "#1f2733" : "rgb(244, 247, 250)",\n        boxShadow: (theme) =>\n          theme.palette.mode === "dark" ? "unset" : "0 8px 16px 0 #BDC9D7",\n      }}\n    >\n      <Box\n        alignItems="baseline"\n        p={2}\n        sx={{\n          display: "flex",\n          flexWrap: "wrap",\n          borderTopLeftRadius: "inherit",\n          borderTopRightRadius: "inherit",\n          bgcolor: (theme) =>\n            theme.palette.mode === "dark" ? "#2f3c50" : "#fff",\n        }}\n      >\n        <Box sx={{ flexGrow: 1, mr: 1 }}>\n          <Typography variant="h6">\n            <b>Who to follow</b>\n          </Typography>\n        </Box>\n        <Box>\n          <Link href="#">Refresh</Link> • <Link href="#">See all</Link>\n        </Box>\n      </Box>\n      <PersonItem\n        src="https://i.pravatar.cc/300?img=10"\n        name="Amber Matthews"\n        count={6}\n      />\n      <Divider />\n      <PersonItem\n        src="https://i.pravatar.cc/300?img=20"\n        name="Russel Robertson"\n        count={2}\n      />\n      <Divider />\n      <PersonItem\n        src="https://i.pravatar.cc/300?img=30"\n        name="Kathleen Ellis"\n        count={2}\n      />\n    </Box>\n  );\n}\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/Social"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone card-social\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cardsocial",children:"CardSocial"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardSocialraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./blocks/card-social/CardSocial.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Social:()=>Social,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardSocial_stories});var react=__webpack_require__("./node_modules/react/index.js"),googleFont=__webpack_require__("./.storybook/decorators/googleFont.tsx"),storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),usage=__webpack_require__("./blocks/card-social/usage.mdx"),Avatar=__webpack_require__("./node_modules/@mui/material/Avatar/Avatar.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),Divider=__webpack_require__("./node_modules/@mui/material/Divider/Divider.js"),Link=__webpack_require__("./node_modules/@mui/material/Link/Link.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js");const PersonItem=({src="",name="",count=0})=>react.createElement(Box.Z,{sx:{display:"flex",flexWrap:"nowrap",gap:2,p:2}},react.createElement(Box.Z,{sx:{flexShrink:0}},react.createElement(Avatar.Z,{src})),react.createElement(Box.Z,{sx:{display:"flex",flexWrap:"wrap",minWidth:0,gap:1,alignItems:"center",flexGrow:1,"& > *":{minWidth:"clamp(0px, (240px + 1px - 100%) * 999, 100%)"}}},react.createElement(Box.Z,{sx:{flexGrow:1}},react.createElement(Typography.Z,{noWrap:!0,sx:{fontWeight:600,fontSize:"1rem",color:theme=>"dark"===theme.palette.mode?"#fff":"#122740"}},react.createElement("b",null,name)),react.createElement(Typography.Z,{noWrap:!0,variant:"body2",sx:{fontSize:"0.875rem",color:"#758392",mt:-.25}},count," mutual friends")),react.createElement(Box.Z,null,react.createElement(Button.Z,{size:"small",variant:"outlined",sx:{borderRadius:5,padding:"0.125rem 0.75rem",borderColor:"#becddc",fontSize:"0.75rem"}},"Follow"))));function CardSocial(){return react.createElement(Box.Z,{sx:{display:"flex",flexDirection:"column",borderRadius:2,bgcolor:theme=>"dark"===theme.palette.mode?"#1f2733":"rgb(244, 247, 250)",boxShadow:theme=>"dark"===theme.palette.mode?"unset":"0 8px 16px 0 #BDC9D7"}},react.createElement(Box.Z,{alignItems:"baseline",p:2,sx:{display:"flex",flexWrap:"wrap",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit",bgcolor:theme=>"dark"===theme.palette.mode?"#2f3c50":"#fff"}},react.createElement(Box.Z,{sx:{flexGrow:1,mr:1}},react.createElement(Typography.Z,{variant:"h6"},react.createElement("b",null,"Who to follow"))),react.createElement(Box.Z,null,react.createElement(Link.Z,{href:"#"},"Refresh")," • ",react.createElement(Link.Z,{href:"#"},"See all"))),react.createElement(PersonItem,{src:"https://i.pravatar.cc/300?img=10",name:"Amber Matthews",count:6}),react.createElement(Divider.Z,null),react.createElement(PersonItem,{src:"https://i.pravatar.cc/300?img=20",name:"Russel Robertson",count:2}),react.createElement(Divider.Z,null),react.createElement(PersonItem,{src:"https://i.pravatar.cc/300?img=30",name:"Kathleen Ellis",count:2}))}const CardSocial_stories={title:"Card/Social",component:CardSocial,parameters:{layout:"centered",githubUsername:"siriwatknp"},decorators:[(0,storyDialog.Z)(usage.default),(0,googleFont.Z)([])]},Social={render:()=>react.createElement("div",{style:{width:340,padding:20,maxWidth:"100%",resize:"horizontal",overflow:"auto"}},react.createElement(CardSocial,null))};Social.parameters={...Social.parameters,docs:{...Social.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    width: 340,\n    padding: 20,\n    maxWidth: "100%",\n    resize: "horizontal",\n    overflow: "auto"\n  }}>\n      <CardSocial />\n    </div>\n}',...Social.parameters?.docs?.source}}};const __namedExportsOrder=["Social"]},"./.storybook/decorators/googleFont.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>googleFont});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function googleFont(fonts=[]){return Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap",rel:"stylesheet"}),fonts.map((font=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{key:font,rel:"stylesheet",href:`https://fonts.googleapis.com/css2?family=${font}&display=swap`}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js"),_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/DialogContent/DialogContent.js"),_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/DialogTitle/DialogTitle.js"),_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/SvgIcon/SvgIcon.js"),_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-ZHZY55TS.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_1__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,context){const[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z,{title:"Show source code",placement:"top-start",sx:{zIndex:1e5}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__.Z,{sx:{position:"fixed",bottom:"1rem",left:"0.5rem",zIndex:99999,borderRadius:40},onClick:()=>setOpen(!0)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_5__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"}))))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_6__.Z,{open,onClose:()=>setOpen(!1)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_7__.Z,null,"Usage"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_theming__WEBPACK_IMPORTED_MODULE_9__.f6,{theme:defaultTheme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_10__.Z,{components:defaultComponents},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,null))))))}}}}]);