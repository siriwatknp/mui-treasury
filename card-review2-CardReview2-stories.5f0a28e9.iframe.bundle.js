"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[3328],{"./node_modules/@mui/icons-material/ArrowForwardIos.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@mui/icons-material/node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.Z=void 0;var _createSvgIcon=_interopRequireDefault(__webpack_require__("./node_modules/@mui/icons-material/utils/createSvgIcon.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");exports.Z=(0,_createSvgIcon.default)((0,_jsxRuntime.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos")},"./node_modules/@mui/icons-material/ModeComment.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@mui/icons-material/node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.Z=void 0;var _createSvgIcon=_interopRequireDefault(__webpack_require__("./node_modules/@mui/icons-material/utils/createSvgIcon.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");exports.Z=(0,_createSvgIcon.default)((0,_jsxRuntime.jsx)("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4z"}),"ModeComment")},"./node_modules/@mui/material/Divider/Divider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),_mui_system_colorManipulator__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/system/colorManipulator/colorManipulator.js"),_zero_styled__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_DefaultPropsProvider__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),_dividerClasses__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Divider/dividerClasses.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const DividerRoot=(0,_zero_styled__WEBPACK_IMPORTED_MODULE_4__.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.absolute&&styles.absolute,styles[ownerState.variant],ownerState.light&&styles.light,"vertical"===ownerState.orientation&&styles.vertical,ownerState.flexItem&&styles.flexItem,ownerState.children&&styles.withChildren,ownerState.children&&"vertical"===ownerState.orientation&&styles.withChildrenVertical,"right"===ownerState.textAlign&&"vertical"!==ownerState.orientation&&styles.textAlignRight,"left"===ownerState.textAlign&&"vertical"!==ownerState.orientation&&styles.textAlignLeft]}})((({theme})=>({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(theme.vars||theme).palette.divider,borderBottomWidth:"thin",variants:[{props:{absolute:!0},style:{position:"absolute",bottom:0,left:0,width:"100%"}},{props:{light:!0},style:{borderColor:theme.vars?`rgba(${theme.vars.palette.dividerChannel} / 0.08)`:(0,_mui_system_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.Fq)(theme.palette.divider,.08)}},{props:{variant:"inset"},style:{marginLeft:72}},{props:{variant:"middle",orientation:"horizontal"},style:{marginLeft:theme.spacing(2),marginRight:theme.spacing(2)}},{props:{variant:"middle",orientation:"vertical"},style:{marginTop:theme.spacing(1),marginBottom:theme.spacing(1)}},{props:{orientation:"vertical"},style:{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"}},{props:{flexItem:!0},style:{alignSelf:"stretch",height:"auto"}},{props:({ownerState})=>!!ownerState.children,style:{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}},{props:({ownerState})=>ownerState.children&&"vertical"!==ownerState.orientation,style:{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(theme.vars||theme).palette.divider}`,borderTopStyle:"inherit"}}},{props:({ownerState})=>"vertical"===ownerState.orientation&&ownerState.children,style:{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(theme.vars||theme).palette.divider}`,borderLeftStyle:"inherit"}}},{props:({ownerState})=>"right"===ownerState.textAlign&&"vertical"!==ownerState.orientation,style:{"&::before":{width:"90%"},"&::after":{width:"10%"}}},{props:({ownerState})=>"left"===ownerState.textAlign&&"vertical"!==ownerState.orientation,style:{"&::before":{width:"10%"},"&::after":{width:"90%"}}}]}))),DividerWrapper=(0,_zero_styled__WEBPACK_IMPORTED_MODULE_4__.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.wrapper,"vertical"===ownerState.orientation&&styles.wrapperVertical]}})((({theme})=>({display:"inline-block",paddingLeft:`calc(${theme.spacing(1)} * 1.2)`,paddingRight:`calc(${theme.spacing(1)} * 1.2)`,variants:[{props:{orientation:"vertical"},style:{paddingTop:`calc(${theme.spacing(1)} * 1.2)`,paddingBottom:`calc(${theme.spacing(1)} * 1.2)`}}]}))),Divider=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Divider(inProps,ref){const props=(0,_DefaultPropsProvider__WEBPACK_IMPORTED_MODULE_6__.i)({props:inProps,name:"MuiDivider"}),{absolute=!1,children,className,component=children?"div":"hr",flexItem=!1,light=!1,orientation="horizontal",role="hr"!==component?"separator":void 0,textAlign="center",variant="fullWidth",...other}=props,ownerState={...props,absolute,component,flexItem,light,orientation,role,textAlign,variant},classes=(ownerState=>{const{absolute,children,classes,flexItem,light,orientation,textAlign,variant}=ownerState,slots={root:["root",absolute&&"absolute",variant,light&&"light","vertical"===orientation&&"vertical",flexItem&&"flexItem",children&&"withChildren",children&&"vertical"===orientation&&"withChildrenVertical","right"===textAlign&&"vertical"!==orientation&&"textAlignRight","left"===textAlign&&"vertical"!==orientation&&"textAlignLeft"],wrapper:["wrapper","vertical"===orientation&&"wrapperVertical"]};return(0,_mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_2__.Z)(slots,_dividerClasses__WEBPACK_IMPORTED_MODULE_3__.V,classes)})(ownerState);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DividerRoot,{as:component,className:(0,clsx__WEBPACK_IMPORTED_MODULE_7__.Z)(classes.root,className),role,ref,ownerState,...other,children:children?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DividerWrapper,{className:classes.wrapper,ownerState,children}):null})}));Divider&&(Divider.muiSkipListHighlight=!0);const __WEBPACK_DEFAULT_EXPORT__=Divider},"./node_modules/@mui/material/Divider/dividerClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>getDividerUtilityClass,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getDividerUtilityClass(slot){return(0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.ZP)("MuiDivider",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])},"./node_modules/@mui/material/Link/Link.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Link_Link});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),colorManipulator=__webpack_require__("./node_modules/@mui/system/colorManipulator/colorManipulator.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),isFocusVisible=__webpack_require__("./node_modules/@mui/utils/esm/isFocusVisible/isFocusVisible.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getLinkUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiLink",slot)}const Link_linkClasses=(0,generateUtilityClasses.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var style=__webpack_require__("./node_modules/@mui/system/style/style.js");const colorTransformations={textPrimary:"text.primary",textSecondary:"text.secondary",primary:null,secondary:null,error:null,info:null,success:null,warning:null},Link_getTextDecoration=({theme,ownerState})=>{let transformedColor=colorTransformations[ownerState.color];if(null===transformedColor)return null;void 0===transformedColor&&(transformedColor=ownerState.color);const color=(0,style.DW)(theme,`palette.${transformedColor}`,!1)||ownerState.color,channelColor=(0,style.DW)(theme,`palette.${transformedColor}Channel`);return"vars"in theme&&channelColor?`rgba(${channelColor} / 0.4)`:(0,colorManipulator.Fq)(color,.4)};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const LinkRoot=(0,styled.ZP)(Typography.Z,{name:"MuiLink",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[`underline${(0,capitalize.Z)(ownerState.underline)}`],"button"===ownerState.component&&styles.button]}})((({theme})=>({variants:[{props:{underline:"none"},style:{textDecoration:"none"}},{props:{underline:"hover"},style:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},{props:{underline:"always"},style:{textDecoration:"underline","&:hover":{textDecorationColor:"inherit"}}},{props:({underline,ownerState})=>"always"===underline&&"inherit"!==ownerState.color,style:{textDecorationColor:"var(--Link-underlineColor)"}},...Object.entries(theme.palette).filter((([,value])=>value&&value.main)).map((([color])=>({props:{underline:"always",color},style:{"--Link-underlineColor":theme.vars?`rgba(${theme.vars.palette[color].mainChannel} / 0.4)`:(0,colorManipulator.Fq)(theme.palette[color].main,.4)}}))),{props:{component:"button"},style:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Link_linkClasses.focusVisible}`]:{outline:"auto"}}}]}))),Link_Link=react.forwardRef((function Link(inProps,ref){const props=(0,DefaultPropsProvider.i)({props:inProps,name:"MuiLink"}),theme=(0,useTheme.Z)(),{className,color="primary",component="a",onBlur,onFocus,TypographyClasses,underline="always",variant="inherit",sx,...other}=props,[focusVisible,setFocusVisible]=react.useState(!1),ownerState={...props,color,component,focusVisible,underline,variant},classes=(ownerState=>{const{classes,component,focusVisible,underline}=ownerState,slots={root:["root",`underline${(0,capitalize.Z)(underline)}`,"button"===component&&"button",focusVisible&&"focusVisible"]};return(0,composeClasses.Z)(slots,getLinkUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(LinkRoot,{color,className:(0,clsx.Z)(classes.root,className),classes:TypographyClasses,component,onBlur:event=>{(0,isFocusVisible.Z)(event.target)||setFocusVisible(!1),onBlur&&onBlur(event)},onFocus:event=>{(0,isFocusVisible.Z)(event.target)&&setFocusVisible(!0),onFocus&&onFocus(event)},ref,ownerState,variant,...other,sx:[...void 0===colorTransformations[color]?[{color}]:[],...Array.isArray(sx)?sx:[sx]],style:{...other.style,..."always"===underline&&"inherit"!==color&&{"--Link-underlineColor":Link_getTextDecoration({theme,ownerState})}}})}))},"./blocks/card-review2/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardReview2raw_namespaceObject='import React from "react";\nimport ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";\nimport Favorite from "@mui/icons-material/Favorite";\nimport ModeComment from "@mui/icons-material/ModeComment";\nimport Box from "@mui/material/Box";\nimport Card from "@mui/material/Card";\nimport CardContent from "@mui/material/CardContent";\nimport CardMedia from "@mui/material/CardMedia";\nimport Divider from "@mui/material/Divider";\nimport Link from "@mui/material/Link";\nimport Rating from "@mui/material/Rating";\n\nexport function CardReview2() {\n  return (\n    <Card\n      elevation={0}\n      sx={{ display: "flex", padding: 2, borderRadius: "16px" }}\n    >\n      <CardContent sx={{ pr: 2 }}>\n        <Box mb={1}>\n          <Box\n            component="h3"\n            sx={{\n              fontSize: 17,\n              fontWeight: "bold",\n              letterSpacing: "0.5px",\n              marginBottom: 0,\n              marginRight: 1.5,\n              display: "inline-block",\n            }}\n          >\n            Aegen magazines{" "}\n          </Box>\n          <Rating\n            name={"rating"}\n            value={2}\n            size={"small"}\n            sx={{ verticalAlign: "text-top" }}\n          />\n        </Box>\n        <Box\n          component="p"\n          sx={{ fontSize: 14, color: "grey.500", mb: "1.275rem" }}\n        >\n          Lorem ipsum is placeholder text commonly used in the graphic, print,\n          and publishing industries for previewing layouts and visual mockups.\n          credit (www.brighttv.co.th)\n        </Box>\n        <Divider light sx={{ mt: 1, mb: 1 }} />\n        <Box sx={{ display: "flex", alignItems: "center" }}>\n          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}\n          <Link\n            component={"button"}\n            sx={{\n              fontSize: 14,\n              color: "primary.light",\n              opacity: 0.87,\n              "&:hover, &:focus": {\n                color: "primary.main",\n                opacity: 1,\n                "& $icon": {\n                  opacity: 1,\n                },\n              },\n            }}\n          >\n            Read more{" "}\n            <ArrowForwardIos\n              sx={{\n                opacity: 0.6,\n                fontSize: "1.125em",\n                verticalAlign: "middle",\n                "&:first-child": {\n                  marginRight: 1,\n                },\n                "&:last-child": {\n                  marginLeft: 1,\n                },\n              }}\n            />\n          </Link>\n          <Box\n            sx={{\n              display: "flex",\n              alignItems: "center",\n              marginLeft: "auto",\n              gap: 1.5,\n            }}\n          >\n            <Box\n              component="button"\n              type={"button"}\n              sx={{\n                display: "flex",\n                alignItems: "center",\n                color: "text.secondary",\n                "&:hover, &:focus": {\n                  color: "primary.main",\n                  "& svg": {\n                    opacity: 1,\n                  },\n                },\n              }}\n            >\n              <ModeComment\n                sx={{\n                  opacity: 0.6,\n                  fontSize: "1.125em",\n                  verticalAlign: "middle",\n                  "&:first-child": {\n                    marginRight: 1,\n                  },\n                  "&:last-child": {\n                    marginLeft: 1,\n                  },\n                }}\n              />{" "}\n              135\n            </Box>\n            <Box\n              component="button"\n              type={"button"}\n              sx={{\n                display: "flex",\n                alignItems: "center",\n                color: "text.secondary",\n                "&:hover, &:focus": {\n                  color: "primary.main",\n                  "& svg": {\n                    opacity: 1,\n                  },\n                },\n              }}\n            >\n              <Favorite\n                sx={{\n                  opacity: 0.6,\n                  fontSize: "1.125em",\n                  verticalAlign: "middle",\n                  "&:first-child": {\n                    marginRight: 1,\n                  },\n                  "&:last-child": {\n                    marginLeft: 1,\n                  },\n                }}\n              />{" "}\n              12\n            </Box>\n          </Box>\n        </Box>\n      </CardContent>\n      <CardMedia\n        image={\n          "https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"\n        }\n        sx={{\n          minWidth: "25%",\n          maxWidth: "25%",\n          flexShrink: 0,\n          backgroundColor: "grey.200",\n          borderRadius: "12px",\n          boxShadow: "0 2px 8px 0 #c1c9d7, 0 -2px 8px 0 #cce1e9",\n        }}\n      />\n    </Card>\n  );\n}\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/Review2"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone card-review2\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cardreview2",children:"CardReview2"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardReview2raw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./blocks/card-review2/CardReview2.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Review2:()=>Review2,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardReview2_stories});var react=__webpack_require__("./node_modules/react/index.js"),googleFont=__webpack_require__("./.storybook/decorators/googleFont.tsx"),storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),usage=__webpack_require__("./blocks/card-review2/usage.mdx"),ArrowForwardIos=__webpack_require__("./node_modules/@mui/icons-material/ArrowForwardIos.js"),Favorite=__webpack_require__("./node_modules/@mui/icons-material/Favorite.js"),ModeComment=__webpack_require__("./node_modules/@mui/icons-material/ModeComment.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Card=__webpack_require__("./node_modules/@mui/material/Card/Card.js"),CardContent=__webpack_require__("./node_modules/@mui/material/CardContent/CardContent.js"),CardMedia=__webpack_require__("./node_modules/@mui/material/CardMedia/CardMedia.js"),Divider=__webpack_require__("./node_modules/@mui/material/Divider/Divider.js"),Link=__webpack_require__("./node_modules/@mui/material/Link/Link.js"),Rating=__webpack_require__("./node_modules/@mui/material/Rating/Rating.js");function CardReview2(){return react.createElement(Card.Z,{elevation:0,sx:{display:"flex",padding:2,borderRadius:"16px"}},react.createElement(CardContent.Z,{sx:{pr:2}},react.createElement(Box.Z,{mb:1},react.createElement(Box.Z,{component:"h3",sx:{fontSize:17,fontWeight:"bold",letterSpacing:"0.5px",marginBottom:0,marginRight:1.5,display:"inline-block"}},"Aegen magazines"," "),react.createElement(Rating.Z,{name:"rating",value:2,size:"small",sx:{verticalAlign:"text-top"}})),react.createElement(Box.Z,{component:"p",sx:{fontSize:14,color:"grey.500",mb:"1.275rem"}},"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. credit (www.brighttv.co.th)"),react.createElement(Divider.Z,{light:!0,sx:{mt:1,mb:1}}),react.createElement(Box.Z,{sx:{display:"flex",alignItems:"center"}},react.createElement(Link.Z,{component:"button",sx:{fontSize:14,color:"primary.light",opacity:.87,"&:hover, &:focus":{color:"primary.main",opacity:1,"& $icon":{opacity:1}}}},"Read more"," ",react.createElement(ArrowForwardIos.Z,{sx:{opacity:.6,fontSize:"1.125em",verticalAlign:"middle","&:first-child":{marginRight:1},"&:last-child":{marginLeft:1}}})),react.createElement(Box.Z,{sx:{display:"flex",alignItems:"center",marginLeft:"auto",gap:1.5}},react.createElement(Box.Z,{component:"button",type:"button",sx:{display:"flex",alignItems:"center",color:"text.secondary","&:hover, &:focus":{color:"primary.main","& svg":{opacity:1}}}},react.createElement(ModeComment.Z,{sx:{opacity:.6,fontSize:"1.125em",verticalAlign:"middle","&:first-child":{marginRight:1},"&:last-child":{marginLeft:1}}})," ","135"),react.createElement(Box.Z,{component:"button",type:"button",sx:{display:"flex",alignItems:"center",color:"text.secondary","&:hover, &:focus":{color:"primary.main","& svg":{opacity:1}}}},react.createElement(Favorite.Z,{sx:{opacity:.6,fontSize:"1.125em",verticalAlign:"middle","&:first-child":{marginRight:1},"&:last-child":{marginLeft:1}}})," ","12")))),react.createElement(CardMedia.Z,{image:"https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",sx:{minWidth:"25%",maxWidth:"25%",flexShrink:0,backgroundColor:"grey.200",borderRadius:"12px",boxShadow:"0 2px 8px 0 #c1c9d7, 0 -2px 8px 0 #cce1e9"}}))}const CardReview2_stories={title:"Card/Review2",component:CardReview2,parameters:{layout:"centered",githubUsername:"siriwatknp"},decorators:[(0,storyDialog.Z)(usage.default),(0,googleFont.Z)([])]},Review2={render:()=>react.createElement(CardReview2,null)};Review2.parameters={...Review2.parameters,docs:{...Review2.parameters?.docs,source:{originalSource:"{\n  render: () => <CardReview2 />\n}",...Review2.parameters?.docs?.source}}};const __namedExportsOrder=["Review2"]},"./.storybook/decorators/googleFont.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>googleFont});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function googleFont(fonts=[]){return Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap",rel:"stylesheet"}),fonts.map((font=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{key:font,rel:"stylesheet",href:`https://fonts.googleapis.com/css2?family=${font}&display=swap`}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js"),_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/DialogContent/DialogContent.js"),_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/DialogTitle/DialogTitle.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-ZHZY55TS.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_1__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,{globals}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__.Z,{maxWidth:"md",open:globals.blockUsage||!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_4__.Z,null,"Usage"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.f6,{theme:defaultTheme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.Z,{components:defaultComponents},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,null))))))}}}}]);