"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[9643],{"./node_modules/@mui/material/Avatar/Avatar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Avatar_Avatar});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Person=(0,createSvgIcon.Z)((0,jsx_runtime.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var avatarClasses=__webpack_require__("./node_modules/@mui/material/Avatar/avatarClasses.js"),useSlot=__webpack_require__("./node_modules/@mui/material/utils/useSlot.js");const AvatarRoot=(0,styled.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.variant],ownerState.colorDefault&&styles.colorDefault]}})((({theme})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:theme.typography.fontFamily,fontSize:theme.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(theme.vars||theme).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:{color:(theme.vars||theme).palette.background.default,...theme.vars?{backgroundColor:theme.vars.palette.Avatar.defaultBg}:{backgroundColor:theme.palette.grey[400],...theme.applyStyles("dark",{backgroundColor:theme.palette.grey[600]})}}}]}))),AvatarImg=(0,styled.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(props,styles)=>styles.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),AvatarFallback=(0,styled.ZP)(Person,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(props,styles)=>styles.fallback})({width:"75%",height:"75%"});const Avatar_Avatar=react.forwardRef((function Avatar(inProps,ref){const props=(0,DefaultPropsProvider.i)({props:inProps,name:"MuiAvatar"}),{alt,children:childrenProp,className,component="div",slots={},slotProps={},imgProps,sizes,src,srcSet,variant="circular",...other}=props;let children=null;const loaded=function useLoaded({crossOrigin,referrerPolicy,src,srcSet}){const[loaded,setLoaded]=react.useState(!1);return react.useEffect((()=>{if(!src&&!srcSet)return;setLoaded(!1);let active=!0;const image=new Image;return image.onload=()=>{active&&setLoaded("loaded")},image.onerror=()=>{active&&setLoaded("error")},image.crossOrigin=crossOrigin,image.referrerPolicy=referrerPolicy,image.src=src,srcSet&&(image.srcset=srcSet),()=>{active=!1}}),[crossOrigin,referrerPolicy,src,srcSet]),loaded}({...imgProps,src,srcSet}),hasImg=src||srcSet,hasImgNotFailing=hasImg&&"error"!==loaded,ownerState={...props,colorDefault:!hasImgNotFailing,component,variant};delete ownerState.ownerState;const classes=(ownerState=>{const{classes,variant,colorDefault}=ownerState,slots={root:["root",variant,colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,composeClasses.Z)(slots,avatarClasses.$,classes)})(ownerState),[ImgSlot,imgSlotProps]=(0,useSlot.Z)("img",{className:classes.img,elementType:AvatarImg,externalForwardedProps:{slots,slotProps:{img:{...imgProps,...slotProps.img}}},additionalProps:{alt,src,srcSet,sizes},ownerState});return children=hasImgNotFailing?(0,jsx_runtime.jsx)(ImgSlot,{...imgSlotProps}):childrenProp||0===childrenProp?childrenProp:hasImg&&alt?alt[0]:(0,jsx_runtime.jsx)(AvatarFallback,{ownerState,className:classes.fallback}),(0,jsx_runtime.jsx)(AvatarRoot,{as:component,className:(0,clsx.Z)(classes.root,className),ref,...other,ownerState,children})}))},"./node_modules/@mui/material/Avatar/avatarClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>getAvatarUtilityClass,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getAvatarUtilityClass(slot){return(0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.ZP)("MuiAvatar",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"])},"./node_modules/@mui/material/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Box_Box});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),styled_engine=__webpack_require__("./node_modules/@mui/styled-engine/index.js"),styleFunctionSx=__webpack_require__("./node_modules/@mui/system/styleFunctionSx/styleFunctionSx.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/styleFunctionSx/extendSxProp.js"),useTheme=__webpack_require__("./node_modules/@mui/system/useTheme/useTheme.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var ClassNameGenerator=__webpack_require__("./node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),identifier=__webpack_require__("./node_modules/@mui/material/styles/identifier.js");const Box_boxClasses=(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").Z)("MuiBox",["root"]),defaultTheme=(0,createTheme.Z)(),Box=function createBox(options={}){const{themeId,defaultTheme,defaultClassName="MuiBox-root",generateClassName}=options,BoxRoot=(0,styled_engine.ZP)("div",{shouldForwardProp:prop=>"theme"!==prop&&"sx"!==prop&&"as"!==prop})(styleFunctionSx.Z);return react.forwardRef((function Box(inProps,ref){const theme=(0,useTheme.Z)(defaultTheme),{className,component="div",...other}=(0,extendSxProp.Z)(inProps);return(0,jsx_runtime.jsx)(BoxRoot,{as:component,ref,className:(0,clsx.Z)(className,generateClassName?generateClassName(defaultClassName):defaultClassName),theme:themeId&&theme[themeId]||theme,...other})}))}({themeId:identifier.Z,defaultTheme,defaultClassName:Box_boxClasses.root,generateClassName:ClassNameGenerator.Z.generate}),Box_Box=Box},"./node_modules/@mui/material/utils/createSvgIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>createSvgIcon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/SvgIcon/SvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function createSvgIcon(path,displayName){function Component(props,ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.Z,{"data-testid":`${displayName}Icon`,ref,...props,children:path})}return Component.muiName=_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.Z.muiName,react__WEBPACK_IMPORTED_MODULE_0__.memo(react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(Component))}},"./blocks/card-highlight/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardHighlightraw_namespaceObject='import React from "react";\nimport Avatar from "@mui/material/Avatar";\nimport Box from "@mui/material/Box";\nimport CardMedia from "@mui/material/CardMedia";\nimport Grid from "@mui/material/Grid";\nimport { styled } from "@mui/material/styles";\nimport Color from "color"; // v3.2.1\n\nconst defaultColor = "#747f84";\n\nconst StyledRoot = styled("div")<{ color?: string }>(\n  ({ color = defaultColor }) => ({\n    position: "relative",\n    borderRadius: "1rem",\n    minWidth: 320,\n    paddingTop: 160,\n    "&:before": {\n      transition: "0.2s",\n      position: "absolute",\n      width: "100%",\n      height: "100%",\n      content: \'""\',\n      display: "block",\n      borderRadius: "1rem",\n      zIndex: 0,\n      bottom: 0,\n      backgroundColor: Color(color).darken(0.3).desaturate(0.2).string(),\n    },\n    "&:hover": {\n      "&:before": {\n        bottom: -6,\n      },\n      "& .MuiAvatar-root": {\n        transform: "scale(1.1)",\n        boxShadow: "0 6px 20px 0 rgba(0,0,0,0.38)",\n      },\n    },\n  })\n);\n\nconst CardMediaCover = styled(CardMedia)(() => ({\n  borderRadius: "1rem",\n  position: "absolute",\n  width: "100%",\n  height: "100%",\n  top: 0,\n  left: 0,\n  zIndex: 0,\n  backgroundColor: "rgba(0, 0, 0, 0.08)",\n  backgroundPosition: "center",\n}));\n\nconst StyledH2 = styled("h2")(() => ({\n  fontFamily: "Fjalla One",\n  fontSize: "1.25rem",\n  color: "#fff",\n  margin: 0,\n}));\n\nconst StyledContent = styled("div")<{ color?: string }>(\n  ({ color = defaultColor }) => ({\n    position: "relative",\n    zIndex: 1,\n    padding: "1rem",\n    borderRadius: "1rem",\n    boxShadow: `0 6px 16px 0 ${Color(color).fade(0.5)}`,\n    "&:before": {\n      content: \'""\',\n      display: "block",\n      position: "absolute",\n      left: 0,\n      top: 1,\n      zIndex: 0,\n      width: "100%",\n      height: "100%",\n      clipPath:\n        "polygon(0% 100%, 0% 35%, 0.3% 33%, 1% 31%, 1.5% 30%, 2% 29%, 2.5% 28.4%, 3% 27.9%, 3.3% 27.6%, 5% 27%,95% 0%,100% 0%, 100% 100%)",\n      borderRadius: "1rem",\n      background: `linear-gradient(to top, ${color}, ${Color(color)\n        .rotate(24)\n        .lighten(0.12)})`,\n    },\n  })\n);\n\nconst AvatarLogo = styled(Avatar)(() => ({\n  transition: "0.3s",\n  width: 100,\n  height: 100,\n  boxShadow: "0 4px 12px 0 rgba(0,0,0,0.24)",\n  borderRadius: "1rem",\n}));\n\nconst StyledDivTeam = styled("div")(({ theme }) => ({\n  fontFamily: "Sen",\n  fontSize: "0.75rem",\n  color: "rgba(255 255 255 / 80%)",\n}));\n\nconst StyledDivDate = styled("div")(({ theme }) => ({\n  fontFamily: "Sen",\n  color: "#fff",\n  backgroundColor: theme.palette.text.disabled,\n  opacity: 0.72,\n  fontSize: "0.75rem",\n  padding: "0 0.5rem",\n  borderRadius: 12,\n}));\n\nconst CustomCard = ({\n  color,\n  cover,\n  logo,\n  title,\n  brand,\n  date,\n}: {\n  color?: string;\n  cover: string;\n  logo: string;\n  title: React.ReactNode;\n  brand: string;\n  date: string;\n}) => {\n  return (\n    <StyledRoot color={color}>\n      <CardMediaCover image={cover} />\n      <StyledContent color={color}>\n        <Box position={"relative"} zIndex={1}>\n          <Box display="flex" p={0} gap={2} sx={{ flexWrap: "nowrap" }}>\n            <Box>\n              <AvatarLogo src={logo} />\n            </Box>\n            <Box alignSelf="flex-end">\n              <StyledH2>{title}</StyledH2>\n            </Box>\n          </Box>\n          <Box display="flex" mt={4} alignItems={"center"}>\n            <Box>\n              <StyledDivTeam>{brand}</StyledDivTeam>\n            </Box>\n            <Box ml="auto">\n              <StyledDivDate>{date}</StyledDivDate>\n            </Box>\n          </Box>\n        </Box>\n      </StyledContent>\n    </StyledRoot>\n  );\n};\n\nexport function CardHighlight() {\n  return (\n    <Grid wrap={"nowrap"} container spacing={4}>\n      <Grid item>\n        <CustomCard\n          color="#fc7944"\n          brand={"Overwatch Official"}\n          date={"02.04.2020"}\n          cover={\n            "https://cdn.vox-cdn.com/thumbor/C6_-SDnnoFdS19XRH4XvAYN1BT8=/148x0:1768x1080/1400x1400/filters:focal(148x0:1768x1080):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/49641465/tracer_overwatch.0.0.jpg"\n          }\n          logo={"https://d3fa68hw0m2vcc.cloudfront.net/bf4/156511609.jpeg"}\n          title={\n            <>\n              Astronomy Binoculars\n              <br />A Great Alternative\n            </>\n          }\n        />\n      </Grid>\n      <Grid item>\n        <CustomCard\n          color="#5357ce"\n          brand={"League of Legends Official"}\n          date={"02.04.2020"}\n          cover={"https://www.pcclean.io/wp-content/uploads/2019/04/559308.jpg"}\n          logo={\n            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XNqnR-ilQYSK60Hb4kIHMlWQFasoZhmARmaZNxChryILm1wS8das-NkdGzxIw32jtUE&usqp=CAU"\n          }\n          title={\n            <>\n              Astronomy Binoculars\n              <br />A Great Alternative\n            </>\n          }\n        />\n      </Grid>\n    </Grid>\n  );\n}\n';function _createMdxContent(props){const _components={a:"a",code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/Highlight"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/Qix-/color",rel:"nofollow",children:"Qix-/Color"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"yarn add color @types/color\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone card-highlight\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cardhighlight",children:"CardHighlight"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardHighlightraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./blocks/card-highlight/CardHighlight.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Highlight:()=>Highlight,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardHighlight_stories});var react=__webpack_require__("./node_modules/react/index.js"),googleFont=__webpack_require__("./.storybook/decorators/googleFont.tsx"),storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),Avatar=__webpack_require__("./node_modules/@mui/material/Avatar/Avatar.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),CardMedia=__webpack_require__("./node_modules/@mui/material/CardMedia/CardMedia.js"),Grid=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),node_modules_color=__webpack_require__("./node_modules/color/index.js"),color_default=__webpack_require__.n(node_modules_color);const StyledRoot=(0,styled.ZP)("div")((({color="#747f84"})=>({position:"relative",borderRadius:"1rem",minWidth:320,paddingTop:160,"&:before":{transition:"0.2s",position:"absolute",width:"100%",height:"100%",content:'""',display:"block",borderRadius:"1rem",zIndex:0,bottom:0,backgroundColor:color_default()(color).darken(.3).desaturate(.2).string()},"&:hover":{"&:before":{bottom:-6},"& .MuiAvatar-root":{transform:"scale(1.1)",boxShadow:"0 6px 20px 0 rgba(0,0,0,0.38)"}}}))),CardMediaCover=(0,styled.ZP)(CardMedia.Z)((()=>({borderRadius:"1rem",position:"absolute",width:"100%",height:"100%",top:0,left:0,zIndex:0,backgroundColor:"rgba(0, 0, 0, 0.08)",backgroundPosition:"center"}))),StyledH2=(0,styled.ZP)("h2")((()=>({fontFamily:"Fjalla One",fontSize:"1.25rem",color:"#fff",margin:0}))),StyledContent=(0,styled.ZP)("div")((({color="#747f84"})=>({position:"relative",zIndex:1,padding:"1rem",borderRadius:"1rem",boxShadow:`0 6px 16px 0 ${color_default()(color).fade(.5)}`,"&:before":{content:'""',display:"block",position:"absolute",left:0,top:1,zIndex:0,width:"100%",height:"100%",clipPath:"polygon(0% 100%, 0% 35%, 0.3% 33%, 1% 31%, 1.5% 30%, 2% 29%, 2.5% 28.4%, 3% 27.9%, 3.3% 27.6%, 5% 27%,95% 0%,100% 0%, 100% 100%)",borderRadius:"1rem",background:`linear-gradient(to top, ${color}, ${color_default()(color).rotate(24).lighten(.12)})`}}))),AvatarLogo=(0,styled.ZP)(Avatar.Z)((()=>({transition:"0.3s",width:100,height:100,boxShadow:"0 4px 12px 0 rgba(0,0,0,0.24)",borderRadius:"1rem"}))),StyledDivTeam=(0,styled.ZP)("div")((({theme})=>({fontFamily:"Sen",fontSize:"0.75rem",color:"rgba(255 255 255 / 80%)"}))),StyledDivDate=(0,styled.ZP)("div")((({theme})=>({fontFamily:"Sen",color:"#fff",backgroundColor:theme.palette.text.disabled,opacity:.72,fontSize:"0.75rem",padding:"0 0.5rem",borderRadius:12}))),CustomCard=({color,cover,logo,title,brand,date})=>react.createElement(StyledRoot,{color},react.createElement(CardMediaCover,{image:cover}),react.createElement(StyledContent,{color},react.createElement(Box.Z,{position:"relative",zIndex:1},react.createElement(Box.Z,{display:"flex",p:0,gap:2,sx:{flexWrap:"nowrap"}},react.createElement(Box.Z,null,react.createElement(AvatarLogo,{src:logo})),react.createElement(Box.Z,{alignSelf:"flex-end"},react.createElement(StyledH2,null,title))),react.createElement(Box.Z,{display:"flex",mt:4,alignItems:"center"},react.createElement(Box.Z,null,react.createElement(StyledDivTeam,null,brand)),react.createElement(Box.Z,{ml:"auto"},react.createElement(StyledDivDate,null,date))))));function CardHighlight(){return react.createElement(Grid.ZP,{wrap:"nowrap",container:!0,spacing:4},react.createElement(Grid.ZP,{item:!0},react.createElement(CustomCard,{color:"#fc7944",brand:"Overwatch Official",date:"02.04.2020",cover:"https://cdn.vox-cdn.com/thumbor/C6_-SDnnoFdS19XRH4XvAYN1BT8=/148x0:1768x1080/1400x1400/filters:focal(148x0:1768x1080):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/49641465/tracer_overwatch.0.0.jpg",logo:"https://d3fa68hw0m2vcc.cloudfront.net/bf4/156511609.jpeg",title:react.createElement(react.Fragment,null,"Astronomy Binoculars",react.createElement("br",null),"A Great Alternative")})),react.createElement(Grid.ZP,{item:!0},react.createElement(CustomCard,{color:"#5357ce",brand:"League of Legends Official",date:"02.04.2020",cover:"https://www.pcclean.io/wp-content/uploads/2019/04/559308.jpg",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XNqnR-ilQYSK60Hb4kIHMlWQFasoZhmARmaZNxChryILm1wS8das-NkdGzxIw32jtUE&usqp=CAU",title:react.createElement(react.Fragment,null,"Astronomy Binoculars",react.createElement("br",null),"A Great Alternative")})))}var usage=__webpack_require__("./blocks/card-highlight/usage.mdx");const CardHighlight_stories={title:"Card/Highlight",component:CardHighlight,parameters:{layout:"centered",githubUsername:"siriwatknp"},decorators:[(0,storyDialog.Z)(usage.default),(0,googleFont.Z)(["Fjalla One","Sen"])]},Highlight={render:()=>react.createElement(CardHighlight,null)};Highlight.parameters={...Highlight.parameters,docs:{...Highlight.parameters?.docs,source:{originalSource:"{\n  render: () => <CardHighlight />\n}",...Highlight.parameters?.docs?.source}}};const __namedExportsOrder=["Highlight"]},"./.storybook/decorators/googleFont.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>googleFont});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function googleFont(fonts=[]){return Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap",rel:"stylesheet"}),fonts.map((font=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{key:font,rel:"stylesheet",href:`https://fonts.googleapis.com/css2?family=${font}&display=swap`}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js"),_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/DialogContent/DialogContent.js"),_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/DialogTitle/DialogTitle.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-ZHZY55TS.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_1__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,{globals}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__.Z,{maxWidth:"md",open:globals.blockUsage||!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_4__.Z,null,"Usage"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.f6,{theme:defaultTheme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.Z,{components:defaultComponents},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,null))))))}}}}]);