"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[9378],{"./node_modules/@mui/material/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Box_Box});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),styled_engine=__webpack_require__("./node_modules/@mui/styled-engine/index.js"),styleFunctionSx=__webpack_require__("./node_modules/@mui/system/styleFunctionSx/styleFunctionSx.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/styleFunctionSx/extendSxProp.js"),useTheme=__webpack_require__("./node_modules/@mui/system/useTheme/useTheme.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var ClassNameGenerator=__webpack_require__("./node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),identifier=__webpack_require__("./node_modules/@mui/material/styles/identifier.js");const Box_boxClasses=(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").Z)("MuiBox",["root"]),defaultTheme=(0,createTheme.Z)(),Box=function createBox(options={}){const{themeId,defaultTheme,defaultClassName="MuiBox-root",generateClassName}=options,BoxRoot=(0,styled_engine.ZP)("div",{shouldForwardProp:prop=>"theme"!==prop&&"sx"!==prop&&"as"!==prop})(styleFunctionSx.Z);return react.forwardRef((function Box(inProps,ref){const theme=(0,useTheme.Z)(defaultTheme),{className,component="div",...other}=(0,extendSxProp.Z)(inProps);return(0,jsx_runtime.jsx)(BoxRoot,{as:component,ref,className:(0,clsx.Z)(className,generateClassName?generateClassName(defaultClassName):defaultClassName),theme:themeId&&theme[themeId]||theme,...other})}))}({themeId:identifier.Z,defaultTheme,defaultClassName:Box_boxClasses.root,generateClassName:ClassNameGenerator.Z.generate}),Box_Box=Box},"./node_modules/@mui/material/Button/Button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Button_Button});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),resolveProps=__webpack_require__("./node_modules/@mui/utils/esm/resolveProps/resolveProps.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/colorManipulator/colorManipulator.js"),rootShouldForwardProp=__webpack_require__("./node_modules/@mui/material/styles/rootShouldForwardProp.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),ButtonBase=__webpack_require__("./node_modules/@mui/material/ButtonBase/ButtonBase.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getButtonUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiButton",slot)}const Button_buttonClasses=(0,generateUtilityClasses.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);const ButtonGroup_ButtonGroupContext=react.createContext({});const ButtonGroup_ButtonGroupButtonContext=react.createContext(void 0);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const commonIconStyles=[{props:{size:"small"},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:"medium"},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:"large"},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],ButtonRoot=(0,styled.ZP)(ButtonBase.Z,{shouldForwardProp:prop=>(0,rootShouldForwardProp.Z)(prop)||"classes"===prop,name:"MuiButton",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.variant],styles[`${ownerState.variant}${(0,capitalize.Z)(ownerState.color)}`],styles[`size${(0,capitalize.Z)(ownerState.size)}`],styles[`${ownerState.variant}Size${(0,capitalize.Z)(ownerState.size)}`],"inherit"===ownerState.color&&styles.colorInherit,ownerState.disableElevation&&styles.disableElevation,ownerState.fullWidth&&styles.fullWidth]}})((({theme})=>{const inheritContainedBackgroundColor="light"===theme.palette.mode?theme.palette.grey[300]:theme.palette.grey[800],inheritContainedHoverBackgroundColor="light"===theme.palette.mode?theme.palette.grey.A100:theme.palette.grey[700];return{...theme.typography.button,minWidth:64,padding:"6px 16px",border:0,borderRadius:(theme.vars||theme).shape.borderRadius,transition:theme.transitions.create(["background-color","box-shadow","border-color","color"],{duration:theme.transitions.duration.short}),"&:hover":{textDecoration:"none"},[`&.${Button_buttonClasses.disabled}`]:{color:(theme.vars||theme).palette.action.disabled},variants:[{props:{variant:"contained"},style:{color:"var(--variant-containedColor)",backgroundColor:"var(--variant-containedBg)",boxShadow:(theme.vars||theme).shadows[2],"&:hover":{boxShadow:(theme.vars||theme).shadows[4],"@media (hover: none)":{boxShadow:(theme.vars||theme).shadows[2]}},"&:active":{boxShadow:(theme.vars||theme).shadows[8]},[`&.${Button_buttonClasses.focusVisible}`]:{boxShadow:(theme.vars||theme).shadows[6]},[`&.${Button_buttonClasses.disabled}`]:{color:(theme.vars||theme).palette.action.disabled,boxShadow:(theme.vars||theme).shadows[0],backgroundColor:(theme.vars||theme).palette.action.disabledBackground}}},{props:{variant:"outlined"},style:{padding:"5px 15px",border:"1px solid currentColor",borderColor:"var(--variant-outlinedBorder, currentColor)",backgroundColor:"var(--variant-outlinedBg)",color:"var(--variant-outlinedColor)",[`&.${Button_buttonClasses.disabled}`]:{border:`1px solid ${(theme.vars||theme).palette.action.disabledBackground}`}}},{props:{variant:"text"},style:{padding:"6px 8px",color:"var(--variant-textColor)",backgroundColor:"var(--variant-textBg)"}},...Object.entries(theme.palette).filter((([,palette])=>palette&&palette.main&&palette.dark&&palette.contrastText)).map((([color])=>({props:{color},style:{"--variant-textColor":(theme.vars||theme).palette[color].main,"--variant-outlinedColor":(theme.vars||theme).palette[color].main,"--variant-outlinedBorder":theme.vars?`rgba(${theme.vars.palette[color].mainChannel} / 0.5)`:(0,colorManipulator.Fq)(theme.palette[color].main,.5),"--variant-containedColor":(theme.vars||theme).palette[color].contrastText,"--variant-containedBg":(theme.vars||theme).palette[color].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(theme.vars||theme).palette[color].dark,"--variant-textBg":theme.vars?`rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.Fq)(theme.palette[color].main,theme.palette.action.hoverOpacity),"--variant-outlinedBorder":(theme.vars||theme).palette[color].main,"--variant-outlinedBg":theme.vars?`rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.Fq)(theme.palette[color].main,theme.palette.action.hoverOpacity)}}}}))),{props:{color:"inherit"},style:{"--variant-containedColor":theme.vars?theme.vars.palette.text.primary:theme.palette.getContrastText?.(inheritContainedBackgroundColor),"--variant-containedBg":theme.vars?theme.vars.palette.Button.inheritContainedBg:inheritContainedBackgroundColor,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":theme.vars?theme.vars.palette.Button.inheritContainedHoverBg:inheritContainedHoverBackgroundColor,"--variant-textBg":theme.vars?`rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.Fq)(theme.palette.text.primary,theme.palette.action.hoverOpacity),"--variant-outlinedBg":theme.vars?`rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.Fq)(theme.palette.text.primary,theme.palette.action.hoverOpacity)}}}},{props:{size:"small",variant:"text"},style:{padding:"4px 5px",fontSize:theme.typography.pxToRem(13)}},{props:{size:"large",variant:"text"},style:{padding:"8px 11px",fontSize:theme.typography.pxToRem(15)}},{props:{size:"small",variant:"outlined"},style:{padding:"3px 9px",fontSize:theme.typography.pxToRem(13)}},{props:{size:"large",variant:"outlined"},style:{padding:"7px 21px",fontSize:theme.typography.pxToRem(15)}},{props:{size:"small",variant:"contained"},style:{padding:"4px 10px",fontSize:theme.typography.pxToRem(13)}},{props:{size:"large",variant:"contained"},style:{padding:"8px 22px",fontSize:theme.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${Button_buttonClasses.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${Button_buttonClasses.disabled}`]:{boxShadow:"none"}}},{props:{fullWidth:!0},style:{width:"100%"}}]}})),ButtonStartIcon=(0,styled.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.startIcon,styles[`iconSize${(0,capitalize.Z)(ownerState.size)}`]]}})((()=>({display:"inherit",marginRight:8,marginLeft:-4,variants:[{props:{size:"small"},style:{marginLeft:-2}},...commonIconStyles]}))),ButtonEndIcon=(0,styled.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.endIcon,styles[`iconSize${(0,capitalize.Z)(ownerState.size)}`]]}})((()=>({display:"inherit",marginRight:-4,marginLeft:8,variants:[{props:{size:"small"},style:{marginRight:-2}},...commonIconStyles]}))),Button_Button=react.forwardRef((function Button(inProps,ref){const contextProps=react.useContext(ButtonGroup_ButtonGroupContext),buttonGroupButtonContextPositionClassName=react.useContext(ButtonGroup_ButtonGroupButtonContext),resolvedProps=(0,resolveProps.Z)(contextProps,inProps),props=(0,DefaultPropsProvider.i)({props:resolvedProps,name:"MuiButton"}),{children,color="primary",component="button",className,disabled=!1,disableElevation=!1,disableFocusRipple=!1,endIcon:endIconProp,focusVisibleClassName,fullWidth=!1,size="medium",startIcon:startIconProp,type,variant="text",...other}=props,ownerState={...props,color,component,disabled,disableElevation,disableFocusRipple,fullWidth,size,type,variant},classes=(ownerState=>{const{color,disableElevation,fullWidth,size,variant,classes}=ownerState,slots={root:["root",variant,`${variant}${(0,capitalize.Z)(color)}`,`size${(0,capitalize.Z)(size)}`,`${variant}Size${(0,capitalize.Z)(size)}`,`color${(0,capitalize.Z)(color)}`,disableElevation&&"disableElevation",fullWidth&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${(0,capitalize.Z)(size)}`],endIcon:["icon","endIcon",`iconSize${(0,capitalize.Z)(size)}`]},composedClasses=(0,composeClasses.Z)(slots,getButtonUtilityClass,classes);return{...classes,...composedClasses}})(ownerState),startIcon=startIconProp&&(0,jsx_runtime.jsx)(ButtonStartIcon,{className:classes.startIcon,ownerState,children:startIconProp}),endIcon=endIconProp&&(0,jsx_runtime.jsx)(ButtonEndIcon,{className:classes.endIcon,ownerState,children:endIconProp}),positionClassName=buttonGroupButtonContextPositionClassName||"";return(0,jsx_runtime.jsxs)(ButtonRoot,{ownerState,className:(0,clsx.Z)(contextProps.className,classes.root,className,positionClassName),component,disabled,focusRipple:!disableFocusRipple,focusVisibleClassName:(0,clsx.Z)(classes.focusVisible,focusVisibleClassName),ref,type,...other,classes,children:[startIcon,children,endIcon]})}))},"./node_modules/@mui/material/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Typography_Typography});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),zero_styled=__webpack_require__("./node_modules/@mui/material/zero-styled/index.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getTypographyUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiTypography",slot)}(0,generateUtilityClasses.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const extendSxProp=(0,zero_styled.u7)(),TypographyRoot=(0,styled.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant],"inherit"!==ownerState.align&&styles[`align${(0,capitalize.Z)(ownerState.align)}`],ownerState.noWrap&&styles.noWrap,ownerState.gutterBottom&&styles.gutterBottom,ownerState.paragraph&&styles.paragraph]}})((({theme})=>({margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(theme.typography).filter((([variant,value])=>"inherit"!==variant&&value&&"object"==typeof value)).map((([variant,value])=>({props:{variant},style:value}))),...Object.entries(theme.palette).filter((([,value])=>value&&value.main)).map((([color])=>({props:{color},style:{color:(theme.vars||theme).palette[color].main}}))),{props:({ownerState})=>"inherit"!==ownerState.align,style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState})=>ownerState.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState})=>ownerState.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState})=>ownerState.paragraph,style:{marginBottom:16}}]}))),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},colorTransformations={textPrimary:"text.primary",textSecondary:"text.secondary",primary:null,secondary:null,error:null,info:null,success:null,warning:null},Typography_Typography=react.forwardRef((function Typography(inProps,ref){const{color,...themeProps}=(0,DefaultPropsProvider.i)({props:inProps,name:"MuiTypography"}),textColor=colorTransformations[color],props=extendSxProp({...themeProps,...null!==textColor&&{color:textColor||color}}),{align="inherit",className,component,gutterBottom=!1,noWrap=!1,paragraph=!1,variant="body1",variantMapping=defaultVariantMapping,...other}=props,ownerState={...props,align,color,className,component,gutterBottom,noWrap,paragraph,variant,variantMapping},Component=component||(paragraph?"p":variantMapping[variant]||defaultVariantMapping[variant])||"span",classes=(ownerState=>{const{align,gutterBottom,noWrap,paragraph,variant,classes}=ownerState,slots={root:["root",variant,"inherit"!==ownerState.align&&`align${(0,capitalize.Z)(align)}`,gutterBottom&&"gutterBottom",noWrap&&"noWrap",paragraph&&"paragraph"]};return(0,composeClasses.Z)(slots,getTypographyUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(TypographyRoot,{as:Component,ref,className:(0,clsx.Z)(classes.root,className),...other,ownerState,style:{..."inherit"!==align&&{"--Typography-textAlign":align},...other.style}})}))},"./blocks/card-sysi/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardSysiraw_namespaceObject='import React from "react";\nimport Box from "@mui/material/Box";\nimport Button from "@mui/material/Button";\nimport Typography from "@mui/material/Typography";\n\nexport function CardSysi(props: { style?: React.CSSProperties }) {\n  return (\n    <Box\n      display="flex"\n      flexDirection="column"\n      gap={3}\n      borderRadius={2}\n      border="1px solid"\n      borderColor="grey.300"\n      maxWidth={500}\n      {...props}\n    >\n      <Box>\n        <Typography variant="h6" px={2} pt={2} textAlign="center">\n          <b>ระดับใกล้โปร • Turn-Pro</b>\n        </Typography>\n      </Box>\n      <Box\n        py={1}\n        bgcolor="primary.main"\n        color={(theme) => (theme.palette.mode === "dark" ? "#212121" : "#fff")}\n      >\n        <Typography align="center">เปิดรับสมัครแล้ว ถึง 30 พ.ค. 63</Typography>\n      </Box>\n      <Box px={2}>\n        สําหรับกลุ่มที่ต้องการจริงจังกับการแก้ปัญหาในประเด็นที่ทําและต้องการการสนับสนุน\n        เพื่อสร้างองค์กรของตนเองสําหรับทํางานต่อในระยะยาว\n      </Box>\n      <Box display="flex" flexWrap="wrap" gap={1} px={2} pb={2}>\n        <Box flex="auto">\n          <Button\n            variant={"outlined"}\n            size="large"\n            fullWidth\n            disableElevation\n            sx={{ borderRadius: "40px" }}\n          >\n            อ่านรายละเอียด\n          </Button>\n        </Box>\n        <Box flex="auto">\n          <Button\n            variant={"contained"}\n            color={"primary"}\n            size="large"\n            fullWidth\n            disableElevation\n            sx={{ borderRadius: "40px" }}\n          >\n            โหลดใบสมัคร\n          </Button>\n        </Box>\n      </Box>\n    </Box>\n  );\n}\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/Sysi"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone card-sysi\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cardsysi",children:"CardSysi"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardSysiraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./blocks/card-sysi/CardSysi.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Sysi:()=>Sysi,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardSysi_stories});var react=__webpack_require__("./node_modules/react/index.js"),googleFont=__webpack_require__("./.storybook/decorators/googleFont.tsx"),storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function CardSysi(props){return react.createElement(Box.Z,_extends({display:"flex",flexDirection:"column",gap:3,borderRadius:2,border:"1px solid",borderColor:"grey.300",maxWidth:500},props),react.createElement(Box.Z,null,react.createElement(Typography.Z,{variant:"h6",px:2,pt:2,textAlign:"center"},react.createElement("b",null,"ระดับใกล้โปร • Turn-Pro"))),react.createElement(Box.Z,{py:1,bgcolor:"primary.main",color:theme=>"dark"===theme.palette.mode?"#212121":"#fff"},react.createElement(Typography.Z,{align:"center"},"เปิดรับสมัครแล้ว ถึง 30 พ.ค. 63")),react.createElement(Box.Z,{px:2},"สําหรับกลุ่มที่ต้องการจริงจังกับการแก้ปัญหาในประเด็นที่ทําและต้องการการสนับสนุน เพื่อสร้างองค์กรของตนเองสําหรับทํางานต่อในระยะยาว"),react.createElement(Box.Z,{display:"flex",flexWrap:"wrap",gap:1,px:2,pb:2},react.createElement(Box.Z,{flex:"auto"},react.createElement(Button.Z,{variant:"outlined",size:"large",fullWidth:!0,disableElevation:!0,sx:{borderRadius:"40px"}},"อ่านรายละเอียด")),react.createElement(Box.Z,{flex:"auto"},react.createElement(Button.Z,{variant:"contained",color:"primary",size:"large",fullWidth:!0,disableElevation:!0,sx:{borderRadius:"40px"}},"โหลดใบสมัคร"))))}var usage=__webpack_require__("./blocks/card-sysi/usage.mdx");const CardSysi_stories={title:"Card/Sysi",component:CardSysi,parameters:{layout:"centered",githubUsername:"siriwatknp"},decorators:[(0,storyDialog.Z)(usage.default),(0,googleFont.Z)([])]},Sysi={render:()=>react.createElement(CardSysi,null)};Sysi.parameters={...Sysi.parameters,docs:{...Sysi.parameters?.docs,source:{originalSource:"{\n  render: () => <CardSysi />\n}",...Sysi.parameters?.docs?.source}}};const __namedExportsOrder=["Sysi"]},"./.storybook/decorators/googleFont.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>googleFont});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function googleFont(fonts=[]){return Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap",rel:"stylesheet"}),fonts.map((font=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{key:font,rel:"stylesheet",href:`https://fonts.googleapis.com/css2?family=${font}&display=swap`}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Container/Container.js"),_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js"),_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/DialogContent/DialogContent.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-ZHZY55TS.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_1__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,{globals,...rest}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__.Z,{fullScreen:!0,open:globals.blockUsage||!1,transitionDuration:{enter:300,exit:400},slotProps:{backdrop:{sx:theme=>({backgroundColor:`rgba(${theme.vars.palette.background.defaultChannel}/0.5)`})}}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__.Z,{maxWidth:"md"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.f6,{theme:defaultTheme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.Z,{components:defaultComponents},react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:"loading..."},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,null))))))))}}}}]);