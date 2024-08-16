"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[5896],{"./blocks/card-team/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardTeamraw_namespaceObject='import React from "react";\nimport Avatar from "@mui/material/Avatar";\nimport AvatarGroup from "@mui/material/AvatarGroup";\nimport Box from "@mui/material/Box";\nimport Button from "@mui/material/Button";\nimport Grid from "@mui/material/Grid";\nimport { styled } from "@mui/material/styles";\nimport { getInfoApexStyles } from "../info-apex";\nimport { Info, InfoSubtitle, InfoTitle } from "../info-basic";\n\nconst DivRoot = styled("div")(() => ({\n  height: "100%",\n  transition: "0.3s",\n  position: "relative",\n\n  "&:before": {\n    transition: "0.2s",\n    position: "absolute",\n    width: "100%",\n    height: "100%",\n    content: \'""\',\n    display: "block",\n    backgroundColor: "#d9daf1",\n    borderRadius: "1rem",\n    zIndex: 0,\n    bottom: 0,\n  },\n\n  "&:hover": {\n    "&:before": {\n      bottom: -6,\n    },\n    "& $card": {\n      boxShadow: "-12px 12px 64px 0 #bcc3d6",\n    },\n  },\n}));\n\nconst ColumnCard = styled("div")(() => ({\n  display: "flex",\n  flexDirection: "column",\n  zIndex: 1,\n  position: "relative",\n  borderRadius: "1rem",\n  boxShadow: "0 6px 20px 0 #dbdbe8",\n  backgroundColor: "#fff",\n  transition: "0.4s",\n  height: "100%",\n}));\n\nconst AvatarLogo = styled(Avatar)(() => ({\n  width: 48,\n  height: 48,\n  borderRadius: "0.75rem",\n}));\n\nconst ButtonJoin = styled(Button)(() => ({\n  borderRadius: 50,\n  textTransform: "initial",\n  "&:focus": {\n    boxShadow:\n      "0 4px 6px 2px rgba(0,0,0,0.08), 0px 2px 4px 0px rgba(0,0,0,0.24), inset 0 -3px 0 0 rgba(0,0,0,0.12)",\n  },\n  "&:active": {\n    boxShadow: `inset 0 4px 4px 0 rgba(0,0,0,0.14)`,\n  },\n  textShadow: "0 1px 0 rgba(0,0,0,0.2)",\n  transition: "0.2s",\n  background: `linear-gradient(to top, #638ef0, #82e7fe)`,\n  boxShadow:\n    "0 4px 6px 2px rgba(0,0,0,0.08), 0px 2px 4px 0px rgba(0,0,0,0.24), inset 0 -3px 0 0 rgba(0,0,0,0.12)",\n  "&:hover": {\n    borderBottom: "none",\n  },\n  "& > *": {\n    textTransform: "none !important",\n  },\n}));\n\nconst CustomCard = ({\n  title,\n  subtitle,\n  description,\n  thumbnail,\n  joined,\n}: {\n  title: string;\n  subtitle: string;\n  description: React.ReactNode;\n  thumbnail: string;\n  joined?: boolean;\n}) => (\n  <DivRoot>\n    <ColumnCard>\n      <Box display="flex" p={2} gap={2} flexWrap="nowrap">\n        <AvatarLogo variant={"rounded"} src={thumbnail} />\n        <Info useStyles={getInfoApexStyles} sx={{ alignSelf: "center" }}>\n          <InfoTitle>{title}</InfoTitle>\n          <InfoSubtitle>{subtitle}</InfoSubtitle>\n        </Info>\n      </Box>\n      <Box\n        pb={1}\n        px={2}\n        color={"grey.600"}\n        fontSize={"0.875rem"}\n        fontFamily={"Ubuntu"}\n        flexGrow={1}\n      >\n        {description}\n      </Box>\n      <Box\n        display="flex"\n        p={2}\n        gap={2}\n        sx={{\n          flexWrap: "wrap",\n          justifyContent: "space-between",\n          "&& > *": {\n            minWidth: `clamp(0px, (248px + 1px - 100%) * 999, 100%)`,\n          },\n        }}\n      >\n        <Box>\n          <AvatarGroup\n            max={4}\n            sx={{\n              "& .MuiAvatar-root": {\n                fontFamily: "Ubuntu",\n                fontSize: "0.875rem",\n                backgroundColor: "#6d7efc",\n                width: 32,\n                height: 32,\n                "&:first-of-type": {\n                  marginRight: "auto",\n                },\n              },\n            }}\n          >\n            {new Array(5).fill(0).map((_, index) => (\n              <Avatar\n                key={index}\n                src={`https://i.pravatar.cc/300?img=${Math.floor(\n                  Math.random() * 30\n                )}`}\n              />\n            ))}\n          </AvatarGroup>\n        </Box>\n        <ButtonJoin variant={"contained"} color={"primary"} disableRipple>\n          {joined ? "Leave group" : "Join group"}\n        </ButtonJoin>\n      </Box>\n    </ColumnCard>\n  </DivRoot>\n);\n\nexport function CardTeam() {\n  return (\n    <Grid container spacing={4}>\n      <Grid item xs={12} sm={6} lg={4}>\n        <CustomCard\n          thumbnail={\n            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQHCBAj8nRJkEwjWg5TpNuSZZG9iscsf43V1mfx0LZHNDYW3S_&usqp=CAU"\n          }\n          title={"APEX Legends: Assemble!"}\n          subtitle={"Created by siriwatknp"}\n          description={\n            <>\n              <b>Shining Alpaca</b> and 3 others are already members of this\n              group.\n            </>\n          }\n        />\n      </Grid>\n      <Grid item xs={12} sm={6} lg={4}>\n        <CustomCard\n          joined\n          thumbnail={\n            "https://cm1.narvii.com/7153/05204b8d8dcbb652dd1a8ceaafde997bc1909468_00.jpg"\n          }\n          title={"League of Legends Official"}\n          subtitle={"Created by LoL"}\n          description={\n            "You are already a member of this group since April 5th 2019."\n          }\n        />\n      </Grid>\n      <Grid item xs={12} sm={6} lg={4}>\n        <CustomCard\n          thumbnail={"https://avatarfiles.alphacoders.com/537/53765.jpg"}\n          title={"Overwatch official"}\n          subtitle={"Created by Bliz"}\n          description={\n            <>\n              <b>RainBOW</b> and 3 others are already members of this group.\n            </>\n          }\n        />\n      </Grid>\n    </Grid>\n  );\n}\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/Team"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone card-team info-basic info-apex\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"font",children:"Font"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'<link rel="preconnect" href="https://fonts.googleapis.com" />\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />\n<link\n  href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap"\n  rel="stylesheet"\n/>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cardteam",children:"CardTeam"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardTeamraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./blocks/card-team/CardTeam.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Team:()=>Team,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardTeam_stories});var react=__webpack_require__("./node_modules/react/index.js"),googleFont=__webpack_require__("./.storybook/decorators/googleFont.tsx"),storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),Avatar=__webpack_require__("./node_modules/@mui/material/Avatar/Avatar.js"),AvatarGroup=__webpack_require__("./node_modules/@mui/material/AvatarGroup/AvatarGroup.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),Grid=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),InfoApex_styles=(__webpack_require__("./blocks/info-apex/InfoApex.tsx"),__webpack_require__("./blocks/info-apex/InfoApex.styles.ts")),info_basic=__webpack_require__("./blocks/info-basic/index.ts");const DivRoot=(0,styled.ZP)("div")((()=>({height:"100%",transition:"0.3s",position:"relative","&:before":{transition:"0.2s",position:"absolute",width:"100%",height:"100%",content:'""',display:"block",backgroundColor:"#d9daf1",borderRadius:"1rem",zIndex:0,bottom:0},"&:hover":{"&:before":{bottom:-6},"& $card":{boxShadow:"-12px 12px 64px 0 #bcc3d6"}}}))),ColumnCard=(0,styled.ZP)("div")((()=>({display:"flex",flexDirection:"column",zIndex:1,position:"relative",borderRadius:"1rem",boxShadow:"0 6px 20px 0 #dbdbe8",backgroundColor:"#fff",transition:"0.4s",height:"100%"}))),AvatarLogo=(0,styled.ZP)(Avatar.Z)((()=>({width:48,height:48,borderRadius:"0.75rem"}))),ButtonJoin=(0,styled.ZP)(Button.Z)((()=>({borderRadius:50,textTransform:"initial","&:focus":{boxShadow:"0 4px 6px 2px rgba(0,0,0,0.08), 0px 2px 4px 0px rgba(0,0,0,0.24), inset 0 -3px 0 0 rgba(0,0,0,0.12)"},"&:active":{boxShadow:"inset 0 4px 4px 0 rgba(0,0,0,0.14)"},textShadow:"0 1px 0 rgba(0,0,0,0.2)",transition:"0.2s",background:"linear-gradient(to top, #638ef0, #82e7fe)",boxShadow:"0 4px 6px 2px rgba(0,0,0,0.08), 0px 2px 4px 0px rgba(0,0,0,0.24), inset 0 -3px 0 0 rgba(0,0,0,0.12)","&:hover":{borderBottom:"none"},"& > *":{textTransform:"none !important"}}))),CustomCard=({title,subtitle,description,thumbnail,joined})=>react.createElement(DivRoot,null,react.createElement(ColumnCard,null,react.createElement(Box.Z,{display:"flex",p:2,gap:2,flexWrap:"nowrap"},react.createElement(AvatarLogo,{variant:"rounded",src:thumbnail}),react.createElement(info_basic.kI,{useStyles:InfoApex_styles.E,sx:{alignSelf:"center"}},react.createElement(info_basic.Xw,null,title),react.createElement(info_basic.In,null,subtitle))),react.createElement(Box.Z,{pb:1,px:2,color:"grey.600",fontSize:"0.875rem",fontFamily:"Ubuntu",flexGrow:1},description),react.createElement(Box.Z,{display:"flex",p:2,gap:2,sx:{flexWrap:"wrap",justifyContent:"space-between","&& > *":{minWidth:"clamp(0px, (248px + 1px - 100%) * 999, 100%)"}}},react.createElement(Box.Z,null,react.createElement(AvatarGroup.Z,{max:4,sx:{"& .MuiAvatar-root":{fontFamily:"Ubuntu",fontSize:"0.875rem",backgroundColor:"#6d7efc",width:32,height:32,"&:first-of-type":{marginRight:"auto"}}}},new Array(5).fill(0).map(((_,index)=>react.createElement(Avatar.Z,{key:index,src:`https://i.pravatar.cc/300?img=${Math.floor(30*Math.random())}`}))))),react.createElement(ButtonJoin,{variant:"contained",color:"primary",disableRipple:!0},joined?"Leave group":"Join group"))));function CardTeam(){return react.createElement(Grid.ZP,{container:!0,spacing:4},react.createElement(Grid.ZP,{item:!0,xs:12,sm:6,lg:4},react.createElement(CustomCard,{thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQHCBAj8nRJkEwjWg5TpNuSZZG9iscsf43V1mfx0LZHNDYW3S_&usqp=CAU",title:"APEX Legends: Assemble!",subtitle:"Created by siriwatknp",description:react.createElement(react.Fragment,null,react.createElement("b",null,"Shining Alpaca")," and 3 others are already members of this group.")})),react.createElement(Grid.ZP,{item:!0,xs:12,sm:6,lg:4},react.createElement(CustomCard,{joined:!0,thumbnail:"https://cm1.narvii.com/7153/05204b8d8dcbb652dd1a8ceaafde997bc1909468_00.jpg",title:"League of Legends Official",subtitle:"Created by LoL",description:"You are already a member of this group since April 5th 2019."})),react.createElement(Grid.ZP,{item:!0,xs:12,sm:6,lg:4},react.createElement(CustomCard,{thumbnail:"https://avatarfiles.alphacoders.com/537/53765.jpg",title:"Overwatch official",subtitle:"Created by Bliz",description:react.createElement(react.Fragment,null,react.createElement("b",null,"RainBOW")," and 3 others are already members of this group.")})))}var usage=__webpack_require__("./blocks/card-team/usage.mdx");const CardTeam_stories={title:"Card/Team",component:CardTeam,parameters:{layout:"centered",githubUsername:"siriwatknp",modules:["info-basic","info-apex"]},decorators:[(0,storyDialog.Z)(usage.default),(0,googleFont.Z)(["Ubuntu:wght@400;700"])]},Team={render:()=>react.createElement(CardTeam,null)};Team.parameters={...Team.parameters,docs:{...Team.parameters?.docs,source:{originalSource:"{\n  render: () => <CardTeam />\n}",...Team.parameters?.docs?.source}}};const __namedExportsOrder=["Team"]},"./.storybook/decorators/googleFont.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>googleFont});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function googleFont(fonts=[]){return Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap",rel:"stylesheet"}),fonts.map((font=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{key:font,rel:"stylesheet",href:`https://fonts.googleapis.com/css2?family=${font}&display=swap`}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Container/Container.js"),_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js"),_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/DialogContent/DialogContent.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-ZHZY55TS.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_1__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,{globals,...rest}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__.Z,{fullScreen:!0,open:globals.blockUsage||!1,transitionDuration:{enter:300,exit:400},slotProps:{backdrop:{sx:theme=>({backgroundColor:`rgba(${theme.vars.palette.background.defaultChannel}/0.5)`})}}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__.Z,{maxWidth:"md"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.f6,{theme:defaultTheme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.Z,{components:defaultComponents},react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:"loading..."},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,null))))))))}}},"./blocks/info-apex/InfoApex.styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>getInfoApexStyles});const getInfoApexStyles=arg=>{const{palette}="theme"in arg?arg.theme:arg;return{eyebrow:{},title:{color:"dark"===palette.mode?"#b5b1d8":"#4d4b5f",fontFamily:'Ubuntu, "Helvetica Neue", Arial, sans-serif',fontSize:"0.875rem",lineHeight:1.43,fontWeight:700,letterSpacing:"0.5px",marginBottom:"2px"},subtitle:{color:"dark"===palette.mode?palette.grey[500]:palette.grey[600],fontFamily:'Ubuntu, "Helvetica Neue", Arial, sans-serif',fontSize:"0.75rem",lineHeight:1.4,letterSpacing:0}}}},"./blocks/info-apex/InfoApex.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>InfoApex});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_info_basic__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./blocks/info-basic/index.ts"),_InfoApex_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./blocks/info-apex/InfoApex.styles.ts");function InfoApex(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_info_basic__WEBPACK_IMPORTED_MODULE_1__.kI,{variant:"apex",useStyles:_InfoApex_styles__WEBPACK_IMPORTED_MODULE_2__.E},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_info_basic__WEBPACK_IMPORTED_MODULE_1__.Xw,null,"APEX Legends: Assemble!"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_info_basic__WEBPACK_IMPORTED_MODULE_1__.In,null,"Created by siriwatknp"))}},"./blocks/info-basic/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{kI:()=>Info,im:()=>InfoCaption,yj:()=>InfoEyebrow,In:()=>InfoSubtitle,Xw:()=>InfoTitle,Fj:()=>infoClasses});var react=__webpack_require__("./node_modules/react/index.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs");const infoClasses=(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").Z)("JunInfo",["root","title","subtitle","caption","eyebrow"]);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const defaultUseStyles=()=>({}),StylesContext=react.createContext(void 0),useStylesCtx=()=>{const value=react.useContext(StylesContext);if(!value)throw new Error("`useStylesCtx` must be called under <Info>");return value},InfoRoot=(0,styled.ZP)("div",{name:"JunInfo",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant]]}})((({theme,ownerState})=>({display:"block",...ownerState.useStyles&&ownerState.useStyles(theme).root}))),Info=react.forwardRef((function Info(props,ref){const{children,component,variant,useStyles,...other}=props,ownerState={...props,variant,useStyles};return react.createElement(InfoRoot,_extends({ref},other,{as:component,className:(0,clsx.Z)(infoClasses.root,props.className),ownerState}),react.createElement(StylesContext.Provider,{value:useStyles||defaultUseStyles},children))}));function InfoTitle_extends(){return InfoTitle_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},InfoTitle_extends.apply(this,arguments)}const InfoTitleRoot=(0,styled.ZP)("div",{name:"JunInfo",slot:"Head",overridesResolver:(props,styles)=>styles.title})((({theme,ownerState})=>({letterSpacing:"0.0073529412em",fontSize:"1.25rem",fontWeight:"normal",margin:"0 0 0.4em 0",lineHeight:1.5,...ownerState.useStyles(theme).title}))),InfoTitle=react.forwardRef((function InfoTitle(props,ref){const{children,component,className,...other}=props,useStyles=useStylesCtx();return react.createElement(InfoTitleRoot,InfoTitle_extends({ref},other,{as:component,className:(0,clsx.Z)(infoClasses.title,className),ownerState:{...props,useStyles}}),children)}));function InfoSubtitle_extends(){return InfoSubtitle_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},InfoSubtitle_extends.apply(this,arguments)}const InfoParagraphRoot=(0,styled.ZP)("p",{name:"JunInfo",slot:"Body",overridesResolver:(props,styles)=>styles.subtitle})((({theme,ownerState})=>({color:theme.palette.text.secondary,lineHeight:1.5,fontSize:"1rem",margin:0,...ownerState.useStyles(theme).subtitle}))),InfoSubtitle=react.forwardRef((function InfoSubtitle(props,ref){const{children,component,className,...other}=props,useStyles=useStylesCtx();return react.createElement(InfoParagraphRoot,InfoSubtitle_extends({ref},other,{as:component,className:(0,clsx.Z)(infoClasses.subtitle,className),ownerState:{...props,useStyles}}),children)}));function InfoCaption_extends(){return InfoCaption_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},InfoCaption_extends.apply(this,arguments)}const InfoCaptionRoot=(0,styled.ZP)("div",{name:"JunInfo",slot:"Caption",overridesResolver:(props,styles)=>styles.caption})((({theme,ownerState})=>({color:theme.palette.text.secondary,fontSize:"0.75rem",marginBlockStart:"0.5em",marginBlockEnd:"0.75em",...ownerState.useStyles(theme).caption}))),InfoCaption=react.forwardRef((function InfoCaption(props,ref){const{children,component,className,...other}=props,useStyles=useStylesCtx();return react.createElement(InfoCaptionRoot,InfoCaption_extends({ref},other,{as:component,className:(0,clsx.Z)(infoClasses.caption,className),ownerState:{...props,useStyles}}),children)}));function InfoEyebrow_extends(){return InfoEyebrow_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},InfoEyebrow_extends.apply(this,arguments)}const InfoEyebrowRoot=(0,styled.ZP)("div",{name:"JunInfo",slot:"Eyebrow",overridesResolver:(props,styles)=>styles.eyebrow})((({theme,ownerState})=>({color:theme.palette.text.secondary,fontSize:"0.875rem",marginBottom:"0.25rem",lineHeight:"1.25rem",textTransform:"uppercase",...ownerState.useStyles(theme).eyebrow}))),InfoEyebrow=react.forwardRef((function InfoEyebrow(props,ref){const{children,component,className,...other}=props,useStyles=useStylesCtx();return react.createElement(InfoEyebrowRoot,InfoEyebrow_extends({ref},other,{as:component,className:(0,clsx.Z)(infoClasses.eyebrow,className),ownerState:{...props,useStyles}}),children)}))}}]);