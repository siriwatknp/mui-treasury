"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[9560],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@mui/material/Card/Card.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card_Card});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),Paper=__webpack_require__("./node_modules/@mui/material/Paper/Paper.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getCardUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiCard",slot)}(0,generateUtilityClasses.Z)("MuiCard",["root"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CardRoot=(0,styled.ZP)(Paper.Z,{name:"MuiCard",slot:"Root",overridesResolver:(props,styles)=>styles.root})({overflow:"hidden"}),Card_Card=react.forwardRef((function Card(inProps,ref){const props=(0,DefaultPropsProvider.i)({props:inProps,name:"MuiCard"}),{className,raised=!1,...other}=props,ownerState={...props,raised},classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"]},getCardUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(CardRoot,{className:(0,clsx.Z)(classes.root,className),elevation:raised?8:void 0,ref,ownerState,...other})}))},"./node_modules/@mui/material/CardContent/CardContent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>CardContent_CardContent});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getCardContentUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiCardContent",slot)}(0,generateUtilityClasses.Z)("MuiCardContent",["root"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CardContentRoot=(0,styled.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(props,styles)=>styles.root})({padding:16,"&:last-child":{paddingBottom:24}}),CardContent_CardContent=react.forwardRef((function CardContent(inProps,ref){const props=(0,DefaultPropsProvider.i)({props:inProps,name:"MuiCardContent"}),{className,component="div",...other}=props,ownerState={...props,component},classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"]},getCardContentUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(CardContentRoot,{as:component,className:(0,clsx.Z)(classes.root,className),ownerState,ref,...other})}))},"./node_modules/@mui/material/CardMedia/CardMedia.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>CardMedia_CardMedia});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getCardMediaUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiCardMedia",slot)}(0,generateUtilityClasses.Z)("MuiCardMedia",["root","media","img"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CardMediaRoot=(0,styled.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props,{isMediaComponent,isImageComponent}=ownerState;return[styles.root,isMediaComponent&&styles.media,isImageComponent&&styles.img]}})({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",variants:[{props:{isMediaComponent:!0},style:{width:"100%"}},{props:{isImageComponent:!0},style:{objectFit:"cover"}}]}),MEDIA_COMPONENTS=["video","audio","picture","iframe","img"],IMAGE_COMPONENTS=["picture","img"],CardMedia_CardMedia=react.forwardRef((function CardMedia(inProps,ref){const props=(0,DefaultPropsProvider.i)({props:inProps,name:"MuiCardMedia"}),{children,className,component="div",image,src,style,...other}=props,isMediaComponent=MEDIA_COMPONENTS.includes(component),composedStyle=!isMediaComponent&&image?{backgroundImage:`url("${image}")`,...style}:style,ownerState={...props,component,isMediaComponent,isImageComponent:IMAGE_COMPONENTS.includes(component)},classes=(ownerState=>{const{classes,isMediaComponent,isImageComponent}=ownerState,slots={root:["root",isMediaComponent&&"media",isImageComponent&&"img"]};return(0,composeClasses.Z)(slots,getCardMediaUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(CardMediaRoot,{className:(0,clsx.Z)(classes.root,className),as:component,role:!isMediaComponent&&image?"img":void 0,ref,style:composedStyle,ownerState,src:isMediaComponent?image||src:void 0,...other,children})}))},"./node_modules/@mui/material/Paper/Paper.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Paper_Paper});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/colorManipulator/colorManipulator.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),memoTheme=__webpack_require__("./node_modules/@mui/material/utils/memoTheme.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),getOverlayAlpha=__webpack_require__("./node_modules/@mui/material/styles/getOverlayAlpha.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getPaperUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiPaper",slot)}(0,generateUtilityClasses.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PaperRoot=(0,styled.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.variant],!ownerState.square&&styles.rounded,"elevation"===ownerState.variant&&styles[`elevation${ownerState.elevation}`]]}})((0,memoTheme.Z)((({theme})=>({backgroundColor:(theme.vars||theme).palette.background.paper,color:(theme.vars||theme).palette.text.primary,transition:theme.transitions.create("box-shadow"),variants:[{props:({ownerState})=>!ownerState.square,style:{borderRadius:theme.shape.borderRadius}},{props:{variant:"outlined"},style:{border:`1px solid ${(theme.vars||theme).palette.divider}`}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]})))),Paper_Paper=react.forwardRef((function Paper(inProps,ref){const props=(0,DefaultPropsProvider.i)({props:inProps,name:"MuiPaper"}),theme=(0,useTheme.Z)(),{className,component="div",elevation=1,square=!1,variant="elevation",...other}=props,ownerState={...props,component,elevation,square,variant},classes=(ownerState=>{const{square,elevation,variant,classes}=ownerState,slots={root:["root",variant,!square&&"rounded","elevation"===variant&&`elevation${elevation}`]};return(0,composeClasses.Z)(slots,getPaperUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(PaperRoot,{as:component,ownerState,className:(0,clsx.Z)(classes.root,className),ref,...other,style:{..."elevation"===variant&&{"--Paper-shadow":(theme.vars||theme).shadows[elevation],...theme.vars&&{"--Paper-overlay":theme.vars.overlays?.[elevation]},...!theme.vars&&"dark"===theme.palette.mode&&{"--Paper-overlay":`linear-gradient(${(0,colorManipulator.Fq)("#fff",(0,getOverlayAlpha.Z)(elevation))}, ${(0,colorManipulator.Fq)("#fff",(0,getOverlayAlpha.Z)(elevation))})`}},...other.style}})}))},"./node_modules/@mui/material/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/zero-styled/index.js"),_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_utils_memoTheme_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/utils/memoTheme.js"),_DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),_utils_capitalize_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),_typographyClasses_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Typography/typographyClasses.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const v6Colors={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},extendSxProp=(0,_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_2__.u7)(),TypographyRoot=(0,_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_6__.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant],"inherit"!==ownerState.align&&styles[`align${(0,_utils_capitalize_js__WEBPACK_IMPORTED_MODULE_3__.Z)(ownerState.align)}`],ownerState.noWrap&&styles.noWrap,ownerState.gutterBottom&&styles.gutterBottom,ownerState.paragraph&&styles.paragraph]}})((0,_utils_memoTheme_js__WEBPACK_IMPORTED_MODULE_7__.Z)((({theme})=>({margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(theme.typography).filter((([variant,value])=>"inherit"!==variant&&value&&"object"==typeof value)).map((([variant,value])=>({props:{variant},style:value}))),...Object.entries(theme.palette).filter((([,value])=>value&&value.main)).map((([color])=>({props:{color},style:{color:(theme.vars||theme).palette[color].main}}))),...Object.entries(theme.palette?.text||{}).filter((([,value])=>"string"==typeof value)).map((([color])=>({props:{color:`text${(0,_utils_capitalize_js__WEBPACK_IMPORTED_MODULE_3__.Z)(color)}`},style:{color:(theme.vars||theme).palette.text[color]}}))),{props:({ownerState})=>"inherit"!==ownerState.align,style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState})=>ownerState.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState})=>ownerState.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState})=>ownerState.paragraph,style:{marginBottom:16}}]})))),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},__WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Typography(inProps,ref){const{color,...themeProps}=(0,_DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_8__.i)({props:inProps,name:"MuiTypography"}),props=extendSxProp({...themeProps,...!v6Colors[color]&&{color}}),{align="inherit",className,component,gutterBottom=!1,noWrap=!1,paragraph=!1,variant="body1",variantMapping=defaultVariantMapping,...other}=props,ownerState={...props,align,color,className,component,gutterBottom,noWrap,paragraph,variant,variantMapping},Component=component||(paragraph?"p":variantMapping[variant]||defaultVariantMapping[variant])||"span",classes=(ownerState=>{const{align,gutterBottom,noWrap,paragraph,variant,classes}=ownerState,slots={root:["root",variant,"inherit"!==ownerState.align&&`align${(0,_utils_capitalize_js__WEBPACK_IMPORTED_MODULE_3__.Z)(align)}`,gutterBottom&&"gutterBottom",noWrap&&"noWrap",paragraph&&"paragraph"]};return(0,_mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_4__.Z)(slots,_typographyClasses_js__WEBPACK_IMPORTED_MODULE_5__.f,classes)})(ownerState);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TypographyRoot,{as:Component,ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_9__.Z)(classes.root,className),...other,ownerState,style:{..."inherit"!==align&&{"--Typography-textAlign":align},...other.style}})}))},"./node_modules/@mui/material/Typography/typographyClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,f:()=>getTypographyUtilityClass});var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getTypographyUtilityClass(slot){return(0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.ZP)("MuiTypography",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"])},"./node_modules/@mui/material/styles/useThemeProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useThemeProps});var _mui_system_useThemeProps__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/useThemeProps/useThemeProps.js"),_defaultTheme_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/styles/defaultTheme.js"),_identifier_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/styles/identifier.js");function useThemeProps({props,name}){return(0,_mui_system_useThemeProps__WEBPACK_IMPORTED_MODULE_0__.Z)({props,name,defaultTheme:_defaultTheme_js__WEBPACK_IMPORTED_MODULE_1__.Z,themeId:_identifier_js__WEBPACK_IMPORTED_MODULE_2__.Z})}},"./node_modules/@mui/system/useThemeProps/useThemeProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useThemeProps});var resolveProps=__webpack_require__("./node_modules/@mui/utils/esm/resolveProps/resolveProps.js");var useTheme=__webpack_require__("./node_modules/@mui/system/useTheme/useTheme.js");function useThemeProps({props,name,defaultTheme,themeId}){let theme=(0,useTheme.Z)(defaultTheme);return themeId&&(theme=theme[themeId]||theme),function getThemeProps(params){const{theme,name,props}=params;return theme&&theme.components&&theme.components[name]&&theme.components[name].defaultProps?(0,resolveProps.Z)(theme.components[name].defaultProps,props):props}({theme,name,props})}},"./docs/layout-v5/starter-templates.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BrandCard:()=>BrandCard,default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_mui_treasury_mui_treasury_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_mui_material_Card__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Card/Card.js"),_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/CardContent/CardContent.js"),_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/CardMedia/CardMedia.js"),_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js");const BrandCard=({title,imgBgColor,src,...props})=>{const _components={b:"b",...(0,_home_runner_work_mui_treasury_mui_treasury_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.a)()};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_3__.Z,{component:"a",...props,sx:{...props.sx,display:"block",p:1.5,borderRadius:"12px",boxShadow:"rgb(0 0 0 / 30%) 0px 8px 40px -12px",transition:"all 0.3s ease 0s","&:hover":{boxShadow:"rgb(0 0 0 / 30%) 0px 16px 70px -12.125px"}},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_4__.Z,{image:src,sx:{backgroundColor:imgBgColor,borderRadius:"6px",width:"100%",height:0,pb:"75%"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__.Z,{variant:"h6",color:"textPrimary",align:"center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.b,{children:title})})})]})};function _createMdxContent(props){const _components={h1:"h1",...(0,_home_runner_work_mui_treasury_mui_treasury_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.a)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.h_,{title:"Layout v5 (LEGACY)/Starter Templates"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"starter-templates",children:"Starter Templates"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n","\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__.Z,{width:"100%",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__.ZP,{container:!0,spacing:4,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BrandCard,{title:"Create React App",src:"https://create-react-app.dev/img/logo-og.png",href:"https://github.com/mui-treasury/cra-mui-layout-starter#get-started-",target:"_blank",rel:"noreferrer noopener"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BrandCard,{title:"Gatsby",src:"https://cdn.auth0.com/blog/illustrations/gatsbyjs.png",href:"https://github.com/mui-treasury/gatsby-mui-layout-starter#get-started-",target:"_blank",rel:"noreferrer noopener"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BrandCard,{title:"NextJS",src:"https://cdn.auth0.com/blog/illustrations/nextjs.png",href:"https://github.com/mui-treasury/nextjs-mui-layout-starter#get-started-",target:"_blank",rel:"noreferrer noopener"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BrandCard,{title:"CodeSandbox",src:"https://user-images.githubusercontent.com/18292247/119919458-b0f76380-bf94-11eb-83a3-7e636c955a07.jpg",href:"https://codesandbox.io/s/material-ui-layout-7mn9xq3nnj?file=/src/LayoutV5.js",target:"_blank",rel:"noreferrer noopener"})})]})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_mui_treasury_mui_treasury_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.a)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);