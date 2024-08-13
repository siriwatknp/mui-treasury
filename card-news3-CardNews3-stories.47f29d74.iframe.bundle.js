"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[6103],{"./blocks/card-news3/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardNews3raw_namespaceObject='import React from "react";\nimport Avatar from "@mui/material/Avatar";\nimport Box from "@mui/material/Box";\nimport Card from "@mui/material/Card";\nimport CardMedia from "@mui/material/CardMedia";\nimport { styled, Theme } from "@mui/material/styles";\nimport Typography from "@mui/material/Typography";\nimport { Info, InfoSubtitle, InfoTitle } from "../info-basic";\n\nconst titleFontSize = "1rem";\nconst subtitleFontSize = "0.875rem";\nconst family = "\'Sen\', sans-serif";\n\nconst StyledCard = styled(Card)(() => ({\n  minWidth: 320,\n  position: "relative",\n  boxShadow: "0 8px 24px 0 rgba(0,0,0,0.12)",\n  overflow: "visible",\n  borderRadius: "1.5rem",\n  transition: "0.4s",\n\n  "&:hover": {\n    transform: "translateY(-2px)",\n    "& .Shadow1": {\n      bottom: "-1.5rem",\n    },\n    "& .Shadow2": {\n      bottom: "-2.5rem",\n    },\n  },\n\n  "&:before": {\n    content: \'""\',\n    position: "absolute",\n    zIndex: 0,\n    display: "block",\n    width: "100%",\n    bottom: -1,\n    height: "100%",\n    borderRadius: "1.5rem",\n    backgroundColor: "rgba(0,0,0,0.08)",\n  },\n}));\n\nconst StyledCardMedia = styled(CardMedia)({\n  position: "absolute",\n  width: "100%",\n  height: "100%",\n  top: 0,\n  left: 0,\n  zIndex: 0,\n  backgroundColor: "rgba(0, 0, 0, 0.08)",\n  backgroundPosition: "center",\n});\n\nconst BoxMain = styled(Box)(() => ({\n  overflow: "hidden",\n  borderTopLeftRadius: "1.5rem",\n  borderTopRightRadius: "1.5rem",\n  zIndex: 1,\n\n  "&:after": {\n    content: \'""\',\n    position: "absolute",\n    bottom: 0,\n    display: "block",\n    width: "100%",\n    height: "100%",\n    background: "linear-gradient(to top, #014a7d, rgba(0,0,0,0))",\n  },\n}));\n\nconst StyledDivContent = styled("div")(() => ({\n  position: "absolute",\n  bottom: 0,\n  width: "100%",\n  zIndex: 1,\n  padding: "1.5rem 1.5rem 1rem",\n}));\n\nconst StyledAvatar = styled(Avatar)(() => ({\n  width: 48,\n  height: 48,\n}));\n\nconst StyledDivTag = styled("div")(() => ({\n  display: "inline-block",\n  fontFamily: "\'Sen\', sans-serif",\n  backgroundColor: "#ff5dac",\n  borderRadius: "0.5rem",\n  padding: "2px 0.5rem",\n  color: "#fff",\n  marginBottom: "0.5rem",\n}));\n\nconst TypographyTitle = styled(Typography)(() => ({\n  fontFamily: "\'Sen\', sans-serif",\n  fontSize: "2rem",\n  fontWeight: 800,\n  color: "#fff",\n}));\n\nconst RowAuthor = styled("div")(({ theme }) => ({\n  display: "flex",\n  gap: theme.spacing(2),\n  minWidth: 0,\n  padding: `${theme.spacing(2)} ${theme.spacing(3)} ${theme.spacing(3)}`,\n  margin: 0,\n  backgroundColor: theme.palette.mode === "dark" ? "grey.900" : "#fff",\n  zIndex: 1,\n  position: "relative",\n  borderBottomLeftRadius: "1.5rem",\n  borderBottomRightRadius: "1.5rem",\n}));\n\nconst Shadow = styled("div")(({ theme }) => ({\n  transition: "0.2s",\n  position: "absolute",\n  zIndex: 0,\n  width: "88%",\n  height: "100%",\n  bottom: 0,\n  borderRadius: "1.5rem",\n  backgroundColor:\n    theme.palette.mode === "dark"\n      ? "rgba(255,255,255,0.08)"\n      : "rgba(0,0,0,0.06)",\n  left: "50%",\n  transform: "translateX(-50%)",\n  "& + &": {\n    bottom: 0,\n    width: "72%",\n    backgroundColor:\n      theme.palette.mode === "dark"\n        ? "rgba(255,255,255,0.03)"\n        : "rgba(0,0,0,0.04)",\n  },\n}));\n\nconst newsInfoStyles = ({ palette }: Theme) => ({\n  title: {\n    fontFamily: family,\n    fontSize: titleFontSize,\n    lineHeight: 1.2,\n    marginBottom: 0,\n    fontWeight: 500,\n  },\n  subtitle: {\n    fontFamily: family,\n    color: palette.grey["500"],\n    fontSize: subtitleFontSize,\n    lineHeight: 1.75,\n  },\n});\n\nexport function CardNews3() {\n  return (\n    <StyledCard>\n      <BoxMain minHeight={300} position={"relative"}>\n        <StyledCardMedia\n          image={\n            "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"\n          }\n        />\n        <StyledDivContent>\n          <StyledDivTag>Fashion</StyledDivTag>\n          <TypographyTitle variant={"h2"}>\n            Diana Marvel Has a City Take on the Cowboy Boot\n          </TypographyTitle>\n        </StyledDivContent>\n      </BoxMain>\n      <RowAuthor>\n        <Box>\n          <StyledAvatar src={"https://i.pravatar.cc/300?img=13"} />\n        </Box>\n        <Info useStyles={newsInfoStyles} sx={{ alignSelf: "center" }}>\n          <InfoTitle>Nadine Petrolli</InfoTitle>\n          <InfoSubtitle>Jul 20 | 2 Min Read</InfoSubtitle>\n        </Info>\n      </RowAuthor>\n      <Shadow className="Shadow1" />\n      <Shadow className="Shadow2" />\n    </StyledCard>\n  );\n}\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/News3"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone card-news3 info-basic\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"font",children:"Font"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'<link rel="preconnect" href="https://fonts.googleapis.com" />\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />\n<link\n  href="https://fonts.googleapis.com/css2?family=Sen:wght@400;800&display=swap"\n  rel="stylesheet"\n/>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cardnews3",children:"CardNews3"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardNews3raw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./blocks/card-news3/CardNews3.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{News3:()=>News3,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardNews3_stories});var react=__webpack_require__("./node_modules/react/index.js"),googleFont=__webpack_require__("./.storybook/decorators/googleFont.tsx"),storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),Avatar=__webpack_require__("./node_modules/@mui/material/Avatar/Avatar.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Card=__webpack_require__("./node_modules/@mui/material/Card/Card.js"),CardMedia=__webpack_require__("./node_modules/@mui/material/CardMedia/CardMedia.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),info_basic=__webpack_require__("./blocks/info-basic/index.ts");const StyledCard=(0,styled.ZP)(Card.Z)((()=>({minWidth:320,position:"relative",boxShadow:"0 8px 24px 0 rgba(0,0,0,0.12)",overflow:"visible",borderRadius:"1.5rem",transition:"0.4s","&:hover":{transform:"translateY(-2px)","& .Shadow1":{bottom:"-1.5rem"},"& .Shadow2":{bottom:"-2.5rem"}},"&:before":{content:'""',position:"absolute",zIndex:0,display:"block",width:"100%",bottom:-1,height:"100%",borderRadius:"1.5rem",backgroundColor:"rgba(0,0,0,0.08)"}}))),StyledCardMedia=(0,styled.ZP)(CardMedia.Z)({position:"absolute",width:"100%",height:"100%",top:0,left:0,zIndex:0,backgroundColor:"rgba(0, 0, 0, 0.08)",backgroundPosition:"center"}),BoxMain=(0,styled.ZP)(Box.Z)((()=>({overflow:"hidden",borderTopLeftRadius:"1.5rem",borderTopRightRadius:"1.5rem",zIndex:1,"&:after":{content:'""',position:"absolute",bottom:0,display:"block",width:"100%",height:"100%",background:"linear-gradient(to top, #014a7d, rgba(0,0,0,0))"}}))),StyledDivContent=(0,styled.ZP)("div")((()=>({position:"absolute",bottom:0,width:"100%",zIndex:1,padding:"1.5rem 1.5rem 1rem"}))),StyledAvatar=(0,styled.ZP)(Avatar.Z)((()=>({width:48,height:48}))),StyledDivTag=(0,styled.ZP)("div")((()=>({display:"inline-block",fontFamily:"'Sen', sans-serif",backgroundColor:"#ff5dac",borderRadius:"0.5rem",padding:"2px 0.5rem",color:"#fff",marginBottom:"0.5rem"}))),TypographyTitle=(0,styled.ZP)(Typography.Z)((()=>({fontFamily:"'Sen', sans-serif",fontSize:"2rem",fontWeight:800,color:"#fff"}))),RowAuthor=(0,styled.ZP)("div")((({theme})=>({display:"flex",gap:theme.spacing(2),minWidth:0,padding:`${theme.spacing(2)} ${theme.spacing(3)} ${theme.spacing(3)}`,margin:0,backgroundColor:"dark"===theme.palette.mode?"grey.900":"#fff",zIndex:1,position:"relative",borderBottomLeftRadius:"1.5rem",borderBottomRightRadius:"1.5rem"}))),Shadow=(0,styled.ZP)("div")((({theme})=>({transition:"0.2s",position:"absolute",zIndex:0,width:"88%",height:"100%",bottom:0,borderRadius:"1.5rem",backgroundColor:"dark"===theme.palette.mode?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)",left:"50%",transform:"translateX(-50%)","& + &":{bottom:0,width:"72%",backgroundColor:"dark"===theme.palette.mode?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.04)"}}))),newsInfoStyles=({palette})=>({title:{fontFamily:"'Sen', sans-serif",fontSize:"1rem",lineHeight:1.2,marginBottom:0,fontWeight:500},subtitle:{fontFamily:"'Sen', sans-serif",color:palette.grey[500],fontSize:"0.875rem",lineHeight:1.75}});function CardNews3(){return react.createElement(StyledCard,null,react.createElement(BoxMain,{minHeight:300,position:"relative"},react.createElement(StyledCardMedia,{image:"https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"}),react.createElement(StyledDivContent,null,react.createElement(StyledDivTag,null,"Fashion"),react.createElement(TypographyTitle,{variant:"h2"},"Diana Marvel Has a City Take on the Cowboy Boot"))),react.createElement(RowAuthor,null,react.createElement(Box.Z,null,react.createElement(StyledAvatar,{src:"https://i.pravatar.cc/300?img=13"})),react.createElement(info_basic.kI,{useStyles:newsInfoStyles,sx:{alignSelf:"center"}},react.createElement(info_basic.Xw,null,"Nadine Petrolli"),react.createElement(info_basic.In,null,"Jul 20 | 2 Min Read"))),react.createElement(Shadow,{className:"Shadow1"}),react.createElement(Shadow,{className:"Shadow2"}))}var usage=__webpack_require__("./blocks/card-news3/usage.mdx");const CardNews3_stories={title:"Card/News3",component:CardNews3,parameters:{layout:"centered",githubUsername:"siriwatknp",modules:["info-basic"]},decorators:[(0,storyDialog.Z)(usage.default),(0,googleFont.Z)(["Sen:wght@400;800"])]},News3={render:()=>react.createElement(CardNews3,null)};News3.parameters={...News3.parameters,docs:{...News3.parameters?.docs,source:{originalSource:"{\n  render: () => <CardNews3 />\n}",...News3.parameters?.docs?.source}}};const __namedExportsOrder=["News3"]},"./.storybook/decorators/googleFont.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>googleFont});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function googleFont(fonts=[]){return Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap",rel:"stylesheet"}),fonts.map((font=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{key:font,rel:"stylesheet",href:`https://fonts.googleapis.com/css2?family=${font}&display=swap`}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js"),_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/DialogContent/DialogContent.js"),_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/DialogTitle/DialogTitle.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-ZHZY55TS.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_1__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,{globals}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__.Z,{maxWidth:"md",open:globals.blockUsage||!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_4__.Z,null,"Usage"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.f6,{theme:defaultTheme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.Z,{components:defaultComponents},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,null))))))}}},"./blocks/info-basic/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{kI:()=>Info,im:()=>InfoCaption,yj:()=>InfoEyebrow,In:()=>InfoSubtitle,Xw:()=>InfoTitle,Fj:()=>infoClasses});var react=__webpack_require__("./node_modules/react/index.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs");const infoClasses=(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").Z)("JunInfo",["root","title","subtitle","caption","eyebrow"]);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const defaultUseStyles=()=>({}),StylesContext=react.createContext(void 0),useStylesCtx=()=>{const value=react.useContext(StylesContext);if(!value)throw new Error("`useStylesCtx` must be called under <Info>");return value},InfoRoot=(0,styled.ZP)("div",{name:"JunInfo",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant]]}})((({theme,ownerState})=>({display:"block",...ownerState.useStyles&&ownerState.useStyles(theme).root}))),Info=react.forwardRef((function Info(props,ref){const{children,component,variant,useStyles,...other}=props,ownerState={...props,variant,useStyles};return react.createElement(InfoRoot,_extends({ref},other,{as:component,className:(0,clsx.Z)(infoClasses.root,props.className),ownerState}),react.createElement(StylesContext.Provider,{value:useStyles||defaultUseStyles},children))}));function InfoTitle_extends(){return InfoTitle_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},InfoTitle_extends.apply(this,arguments)}const InfoTitleRoot=(0,styled.ZP)("div",{name:"JunInfo",slot:"Head",overridesResolver:(props,styles)=>styles.title})((({theme,ownerState})=>({letterSpacing:"0.0073529412em",fontSize:"1.25rem",fontWeight:"normal",margin:"0 0 0.4em 0",lineHeight:1.5,...ownerState.useStyles(theme).title}))),InfoTitle=react.forwardRef((function InfoTitle(props,ref){const{children,component,className,...other}=props,useStyles=useStylesCtx();return react.createElement(InfoTitleRoot,InfoTitle_extends({ref},other,{as:component,className:(0,clsx.Z)(infoClasses.title,className),ownerState:{...props,useStyles}}),children)}));function InfoSubtitle_extends(){return InfoSubtitle_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},InfoSubtitle_extends.apply(this,arguments)}const InfoParagraphRoot=(0,styled.ZP)("p",{name:"JunInfo",slot:"Body",overridesResolver:(props,styles)=>styles.subtitle})((({theme,ownerState})=>({color:theme.palette.text.secondary,lineHeight:1.5,fontSize:"1rem",margin:0,...ownerState.useStyles(theme).subtitle}))),InfoSubtitle=react.forwardRef((function InfoSubtitle(props,ref){const{children,component,className,...other}=props,useStyles=useStylesCtx();return react.createElement(InfoParagraphRoot,InfoSubtitle_extends({ref},other,{as:component,className:(0,clsx.Z)(infoClasses.subtitle,className),ownerState:{...props,useStyles}}),children)}));function InfoCaption_extends(){return InfoCaption_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},InfoCaption_extends.apply(this,arguments)}const InfoCaptionRoot=(0,styled.ZP)("div",{name:"JunInfo",slot:"Caption",overridesResolver:(props,styles)=>styles.caption})((({theme,ownerState})=>({color:theme.palette.text.secondary,fontSize:"0.75rem",marginBlockStart:"0.5em",marginBlockEnd:"0.75em",...ownerState.useStyles(theme).caption}))),InfoCaption=react.forwardRef((function InfoCaption(props,ref){const{children,component,className,...other}=props,useStyles=useStylesCtx();return react.createElement(InfoCaptionRoot,InfoCaption_extends({ref},other,{as:component,className:(0,clsx.Z)(infoClasses.caption,className),ownerState:{...props,useStyles}}),children)}));function InfoEyebrow_extends(){return InfoEyebrow_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},InfoEyebrow_extends.apply(this,arguments)}const InfoEyebrowRoot=(0,styled.ZP)("div",{name:"JunInfo",slot:"Eyebrow",overridesResolver:(props,styles)=>styles.eyebrow})((({theme,ownerState})=>({color:theme.palette.text.secondary,fontSize:"0.875rem",marginBottom:"0.25rem",lineHeight:"1.25rem",textTransform:"uppercase",...ownerState.useStyles(theme).eyebrow}))),InfoEyebrow=react.forwardRef((function InfoEyebrow(props,ref){const{children,component,className,...other}=props,useStyles=useStylesCtx();return react.createElement(InfoEyebrowRoot,InfoEyebrow_extends({ref},other,{as:component,className:(0,clsx.Z)(infoClasses.eyebrow,className),ownerState:{...props,useStyles}}),children)}))}}]);