(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[6211],{"./node_modules/@mui/icons-material/KeyboardArrowRight.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__("./node_modules/@mui/icons-material/node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.Z=void 0;var _createSvgIcon=_interopRequireDefault(__webpack_require__("./node_modules/@mui/icons-material/utils/createSvgIcon.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");exports.Z=(0,_createSvgIcon.default)((0,_jsxRuntime.jsx)("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"}),"KeyboardArrowRight")},"./node_modules/@mui/icons-material/Menu.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__("./node_modules/@mui/icons-material/node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.Z=void 0;var _createSvgIcon=_interopRequireDefault(__webpack_require__("./node_modules/@mui/icons-material/utils/createSvgIcon.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");exports.Z=(0,_createSvgIcon.default)((0,_jsxRuntime.jsx)("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu")},"./node_modules/@mui/icons-material/node_modules/@babel/runtime/helpers/interopRequireDefault.js":module=>{module.exports=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@mui/icons-material/utils/createSvgIcon.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return _utils.createSvgIcon}});var _utils=__webpack_require__("./node_modules/@mui/material/utils/index.js")},"./node_modules/@mui/material/Card/Card.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Card_Card});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),Paper=__webpack_require__("./node_modules/@mui/material/Paper/Paper.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getCardUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiCard",slot)}(0,generateUtilityClasses.Z)("MuiCard",["root"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CardRoot=(0,styled.ZP)(Paper.Z,{name:"MuiCard",slot:"Root",overridesResolver:(props,styles)=>styles.root})({overflow:"hidden"}),Card_Card=react.forwardRef((function Card(inProps,ref){const props=(0,DefaultPropsProvider.i)({props:inProps,name:"MuiCard"}),{className,raised=!1,...other}=props,ownerState={...props,raised},classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"]},getCardUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(CardRoot,{className:(0,clsx.Z)(classes.root,className),elevation:raised?8:void 0,ref,ownerState,...other})}))},"./node_modules/@mui/material/Container/Container.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Container_Container});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js"),useThemeProps=__webpack_require__("./node_modules/@mui/system/useThemeProps/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/system/styled/styled.js"),createTheme=__webpack_require__("./node_modules/@mui/system/createTheme/createTheme.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultTheme=(0,createTheme.Z)(),defaultCreateStyledComponent=(0,styled.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[`maxWidth${(0,capitalize.Z)(String(ownerState.maxWidth))}`],ownerState.fixed&&styles.fixed,ownerState.disableGutters&&styles.disableGutters]}}),useThemePropsDefault=inProps=>(0,useThemeProps.Z)({props:inProps,name:"MuiContainer",defaultTheme});var utils_capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),styles_styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles_useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js");const Container=function createContainer(options={}){const{createStyledComponent=defaultCreateStyledComponent,useThemeProps=useThemePropsDefault,componentName="MuiContainer"}=options,ContainerRoot=createStyledComponent((({theme,ownerState})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!ownerState.disableGutters&&{paddingLeft:theme.spacing(2),paddingRight:theme.spacing(2),[theme.breakpoints.up("sm")]:{paddingLeft:theme.spacing(3),paddingRight:theme.spacing(3)}}})),(({theme,ownerState})=>ownerState.fixed&&Object.keys(theme.breakpoints.values).reduce(((acc,breakpointValueKey)=>{const breakpoint=breakpointValueKey,value=theme.breakpoints.values[breakpoint];return 0!==value&&(acc[theme.breakpoints.up(breakpoint)]={maxWidth:`${value}${theme.breakpoints.unit}`}),acc}),{})),(({theme,ownerState})=>({..."xs"===ownerState.maxWidth&&{[theme.breakpoints.up("xs")]:{maxWidth:Math.max(theme.breakpoints.values.xs,444)}},...ownerState.maxWidth&&"xs"!==ownerState.maxWidth&&{[theme.breakpoints.up(ownerState.maxWidth)]:{maxWidth:`${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`}}}))),Container=react.forwardRef((function Container(inProps,ref){const props=useThemeProps(inProps),{className,component="div",disableGutters=!1,fixed=!1,maxWidth="lg",classes:classesProp,...other}=props,ownerState={...props,component,disableGutters,fixed,maxWidth},classes=((ownerState,componentName)=>{const{classes,fixed,disableGutters,maxWidth}=ownerState,slots={root:["root",maxWidth&&`maxWidth${(0,capitalize.Z)(String(maxWidth))}`,fixed&&"fixed",disableGutters&&"disableGutters"]};return(0,composeClasses.Z)(slots,(slot=>(0,generateUtilityClass.ZP)(componentName,slot)),classes)})(ownerState,componentName);return(0,jsx_runtime.jsx)(ContainerRoot,{as:component,ownerState,className:(0,clsx.Z)(classes.root,className),ref,...other})}));return Container}({createStyledComponent:(0,styles_styled.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[`maxWidth${(0,utils_capitalize.Z)(String(ownerState.maxWidth))}`],ownerState.fixed&&styles.fixed,ownerState.disableGutters&&styles.disableGutters]}}),useThemeProps:inProps=>(0,styles_useThemeProps.Z)({props:inProps,name:"MuiContainer"})}),Container_Container=Container},"./node_modules/@mui/material/styles/useThemeProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>useThemeProps});var _mui_system_useThemeProps__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/useThemeProps/useThemeProps.js"),_defaultTheme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/styles/defaultTheme.js"),_identifier__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/styles/identifier.js");function useThemeProps({props,name}){return(0,_mui_system_useThemeProps__WEBPACK_IMPORTED_MODULE_0__.Z)({props,name,defaultTheme:_defaultTheme__WEBPACK_IMPORTED_MODULE_1__.Z,themeId:_identifier__WEBPACK_IMPORTED_MODULE_2__.Z})}},"./node_modules/@mui/material/utils/createChainedFunction.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/createChainedFunction/createChainedFunction.js").Z},"./node_modules/@mui/material/utils/debounce.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/debounce/debounce.js").Z},"./node_modules/@mui/material/utils/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{capitalize:()=>capitalize.Z,createChainedFunction:()=>createChainedFunction.Z,createSvgIcon:()=>createSvgIcon.Z,debounce:()=>debounce.Z,deprecatedPropType:()=>utils_deprecatedPropType,isMuiElement:()=>isMuiElement.Z,ownerDocument:()=>ownerDocument.Z,ownerWindow:()=>ownerWindow.Z,requirePropFactory:()=>utils_requirePropFactory,setRef:()=>utils_setRef,unstable_ClassNameGenerator:()=>unstable_ClassNameGenerator,unstable_useEnhancedEffect:()=>useEnhancedEffect.Z,unstable_useId:()=>useId.Z,unsupportedProp:()=>utils_unsupportedProp,useControlled:()=>useControlled.Z,useEventCallback:()=>useEventCallback.Z,useForkRef:()=>useForkRef.Z});var ClassNameGenerator=__webpack_require__("./node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),createChainedFunction=__webpack_require__("./node_modules/@mui/material/utils/createChainedFunction.js"),createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),debounce=__webpack_require__("./node_modules/@mui/material/utils/debounce.js");const utils_deprecatedPropType=function deprecatedPropType(validator,reason){return()=>null};var isMuiElement=__webpack_require__("./node_modules/@mui/material/utils/isMuiElement.js"),ownerDocument=__webpack_require__("./node_modules/@mui/material/utils/ownerDocument.js"),ownerWindow=__webpack_require__("./node_modules/@mui/material/utils/ownerWindow.js");const utils_requirePropFactory=function requirePropFactory(componentNameInError,Component){return()=>null};const utils_setRef=__webpack_require__("./node_modules/@mui/utils/esm/setRef/setRef.js").Z;var useEnhancedEffect=__webpack_require__("./node_modules/@mui/material/utils/useEnhancedEffect.js"),useId=__webpack_require__("./node_modules/@mui/material/utils/useId.js");const utils_unsupportedProp=function unsupportedProp(props,propName,componentName,location,propFullName){return null};var useControlled=__webpack_require__("./node_modules/@mui/material/utils/useControlled.js"),useEventCallback=__webpack_require__("./node_modules/@mui/material/utils/useEventCallback.js"),useForkRef=__webpack_require__("./node_modules/@mui/material/utils/useForkRef.js");const unstable_ClassNameGenerator={configure:generator=>{ClassNameGenerator.Z.configure(generator)}}},"./node_modules/@mui/material/utils/isMuiElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>utils_isMuiElement});var react=__webpack_require__("./node_modules/react/index.js");const utils_isMuiElement=function isMuiElement(element,muiNames){return react.isValidElement(element)&&-1!==muiNames.indexOf(element.type.muiName??element.type?._payload?.value?.muiName)}},"./node_modules/@mui/material/utils/ownerDocument.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js").Z},"./node_modules/@mui/material/utils/ownerWindow.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js").Z},"./node_modules/@mui/material/utils/useEnhancedEffect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js").Z},"./node_modules/@mui/system/styled/styled.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./node_modules/@mui/system/createStyled/createStyled.js").ZP)()},"./node_modules/@mui/system/useThemeProps/useThemeProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>useThemeProps});var resolveProps=__webpack_require__("./node_modules/@mui/utils/esm/resolveProps/resolveProps.js");var useTheme=__webpack_require__("./node_modules/@mui/system/useTheme/useTheme.js");function useThemeProps({props,name,defaultTheme,themeId}){let theme=(0,useTheme.Z)(defaultTheme);themeId&&(theme=theme[themeId]||theme);const mergedProps=function getThemeProps(params){const{theme,name,props}=params;return theme&&theme.components&&theme.components[name]&&theme.components[name].defaultProps?(0,resolveProps.Z)(theme.components[name].defaultProps,props):props}({theme,name,props});return mergedProps}},"./node_modules/@mui/utils/esm/debounce/debounce.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function debounce(func,wait=166){let timeout;function debounced(...args){clearTimeout(timeout),timeout=setTimeout((()=>{func.apply(this,args)}),wait)}return debounced.clear=()=>{clearTimeout(timeout)},debounced}__webpack_require__.d(__webpack_exports__,{Z:()=>debounce})},"./blocks/layout-v6-app-cloudflare/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const LayoutV6AppCloudflareraw_namespaceObject='import React from "react";\nimport KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";\nimport Menu from "@mui/icons-material/Menu";\nimport Box from "@mui/material/Box";\nimport Button from "@mui/material/Button";\nimport ButtonBase from "@mui/material/ButtonBase";\nimport Card from "@mui/material/Card";\nimport Container from "@mui/material/Container";\nimport Divider from "@mui/material/Divider";\nimport IconButton from "@mui/material/IconButton";\nimport Typography from "@mui/material/Typography";\nimport {\n  applyEdgeSidebarRightStyles,\n  applyEdgeSidebarStyles,\n  applyHeaderStyles,\n  Content,\n  EdgeSidebar,\n  EdgeSidebarContent,\n  EdgeSidebarRight,\n  Footer,\n  Header,\n  layoutClasses,\n  Root,\n  toggleEdgeSidebarCollapse,\n  toggleEdgeSidebarRightCollapse,\n  toggleTemporaryEdgeSidebar,\n  toggleTemporaryEdgeSidebarRight,\n} from "../layout-core-v6";\n\nexport function LayoutV6AppCloudflare() {\n  return (\n    <Root>\n      <Header\n        sx={{\n          ...applyHeaderStyles({ height: "63px", fullWidth: true }),\n        }}\n      >\n        <Box sx={{ ml: 2, display: "flex", gap: 1 }}>\n          <IconButton\n            className={layoutClasses.TemporaryEdgeSidebarTrigger}\n            onClick={() => toggleTemporaryEdgeSidebar()}\n          >\n            <Menu />\n          </IconButton>\n          <svg\n            viewBox="0 0 105 36"\n            role="img"\n            width="105px"\n            height="41px"\n            aria-hidden="true"\n          >\n            <path\n              fill="#000"\n              d="M11.679 26.754h2.353v6.423h4.111v2.06H11.68v-8.483zM20.58 31.02v-.024c0-2.436 1.965-4.412 4.584-4.412 2.62 0 4.56 1.951 4.56 4.387v.025c0 2.436-1.965 4.41-4.584 4.41-2.618 0-4.56-1.95-4.56-4.386zm6.743 0v-.024c0-1.223-.885-2.291-2.183-2.291-1.285 0-2.147 1.042-2.147 2.266v.025c0 1.222.886 2.29 2.171 2.29 1.298 0 2.159-1.042 2.159-2.266zM32.604 31.517v-4.763h2.389v4.714c0 1.223.618 1.806 1.564 1.806.946 0 1.564-.557 1.564-1.745v-4.775h2.39v4.7c0 2.74-1.564 3.939-3.978 3.939s-3.93-1.223-3.93-3.878M44.112 26.755h3.274c3.032 0 4.79 1.744 4.79 4.192v.025c0 2.447-1.782 4.265-4.838 4.265h-3.226v-8.483zm3.31 6.397c1.408 0 2.34-.775 2.34-2.146v-.024c0-1.357-.932-2.145-2.34-2.145h-.958v4.316l.959-.001zM55.596 26.754h6.791v2.06h-4.438v1.442h4.014v1.951h-4.014v3.03h-2.353v-8.483zM65.661 26.754h2.353v6.423h4.111v2.06h-6.464v-8.483zM78.273 26.693h2.268l3.614 8.544h-2.522l-.62-1.515H77.74l-.606 1.515h-2.474l3.614-8.544zm2.062 5.2l-.946-2.413-.959 2.412h1.905zM87.186 26.754H91.2c1.298 0 2.195.34 2.765.921.498.485.752 1.14.752 1.976v.024c0 1.296-.693 2.156-1.746 2.605l2.025 2.957H92.28l-1.71-2.57h-1.03v2.57h-2.353v-8.483zm3.905 4.072c.8 0 1.262-.388 1.262-1.006v-.024c0-.667-.486-1.006-1.275-1.006h-1.54v2.038l1.553-.002zM98.112 26.754h6.827v2h-4.498v1.284h4.075v1.854h-4.075v1.346H105v1.999h-6.888v-8.483zM6.528 32.014c-.33.744-1.023 1.272-1.944 1.272-1.286 0-2.171-1.067-2.171-2.29v-.025c0-1.223.86-2.266 2.146-2.266.97 0 1.708.595 2.02 1.406h2.48c-.398-2.02-2.173-3.526-4.475-3.526-2.62 0-4.584 1.977-4.584 4.41v.024c0 2.436 1.94 4.388 4.56 4.388 2.24 0 3.991-1.45 4.453-3.393H6.528z"\n            ></path>\n            <path\n              d="M89.012 22.355l.257-.887c.306-1.056.192-2.031-.321-2.748-.472-.66-1.259-1.049-2.214-1.094l-18.096-.229a.358.358 0 01-.285-.151.367.367 0 01-.04-.326.481.481 0 01.42-.321l18.263-.232c2.166-.099 4.512-1.856 5.333-3.998L93.37 9.65a.659.659 0 00.028-.36C92.216 3.975 87.468 0 81.792 0c-5.23 0-9.67 3.373-11.263 8.061a5.34 5.34 0 00-3.756-1.039 5.356 5.356 0 00-4.637 6.644c-4.099.12-7.386 3.475-7.386 7.6 0 .368.028.735.082 1.1a.354.354 0 00.348.305l33.408.004h.009a.44.44 0 00.415-.32z"\n              fill="#F6821F"\n            ></path>\n            <path\n              d="M95.04 9.847c-.167 0-.334.004-.5.013a.28.28 0 00-.079.017.285.285 0 00-.182.192l-.712 2.456c-.305 1.055-.192 2.03.322 2.746.471.661 1.258 1.05 2.213 1.094l3.858.232a.351.351 0 01.275.149.365.365 0 01.041.328.484.484 0 01-.42.32l-4.008.232c-2.176.1-4.521 1.856-5.342 3.998l-.29.756a.212.212 0 00.095.262c.03.017.062.027.096.028h13.802a.366.366 0 00.356-.265 9.846 9.846 0 00.367-2.677c-.001-5.457-4.429-9.88-9.891-9.88z"\n              fill="#FBAD41"\n            ></path>\n          </svg>\n        </Box>\n      </Header>\n      <EdgeSidebar\n        sx={(theme) => ({\n          ...applyEdgeSidebarStyles({\n            theme,\n            config: {\n              xs: {\n                variant: "temporary",\n              },\n              sm: {\n                variant: "permanent",\n                expandOnHover: true,\n                autoCollapse: "sm",\n                collapsedWidth: "56px",\n              },\n            },\n          }),\n        })}\n      >\n        <EdgeSidebarContent sx={{ containerType: "inline-size" }}>\n          <Box\n            sx={{\n              p: 2,\n              textAlign: "center",\n              fontSize: "1.25rem",\n              fontWeight: "bold",\n              "& > span": {\n                display: {\n                  "@": "none",\n                  "@200": "initial",\n                },\n              },\n              "&::before": {\n                content: {\n                  "@": \'"SK"\',\n                  "@200": \'""\',\n                },\n              },\n            }}\n          >\n            <span>Siriwat knp</span>\n          </Box>\n          <Divider />\n          <Box sx={{ minHeight: 0, overflow: "auto" }}>\n            <Box sx={{ height: 2000 }} />\n          </Box>\n          <Divider sx={{ mt: "auto" }} />\n          <ButtonBase\n            className={layoutClasses.EdgeSidebarCollapser}\n            sx={{ height: 48, flex: "none" }}\n            onClick={(event) => toggleEdgeSidebarCollapse({ event })}\n          >\n            <KeyboardArrowRight\n              className={layoutClasses.EdgeSidebarCollapsedVisible}\n            />\n            <span className={layoutClasses.EdgeSidebarUncollapsedVisible}>\n              Collapse sidebar\n            </span>\n          </ButtonBase>\n        </EdgeSidebarContent>\n      </EdgeSidebar>\n      <EdgeSidebarRight\n        sx={(theme) => ({\n          ...applyEdgeSidebarRightStyles({\n            theme,\n            config: {\n              xs: {\n                variant: "temporary",\n              },\n              md: {\n                variant: "persistent",\n                persistentBehavior: "none",\n                width: "300px",\n              },\n            },\n          }),\n        })}\n      >\n        <EdgeSidebarContent>test</EdgeSidebarContent>\n      </EdgeSidebarRight>\n      <Content>\n        <Container sx={{ py: 3 }}>\n          <Typography\n            variant="h1"\n            sx={{ fontSize: "1.75rem", fontWeight: "bold" }}\n          >\n            Account Home\n          </Typography>\n          <Typography sx={{ mb: 2 }}>\n            Welcome to the new home experience.\n          </Typography>\n          <Button\n            variant="outlined"\n            className="EdgeSidebar-R-trigger"\n            onClick={() => {\n              toggleTemporaryEdgeSidebarRight();\n            }}\n          >\n            Open documentation\n          </Button>\n          <Button\n            variant="outlined"\n            className="EdgeSidebar-R-collapser"\n            onClick={(event) => {\n              toggleEdgeSidebarRightCollapse({ event });\n            }}\n          >\n            Open documentation\n          </Button>\n          <Box\n            sx={{\n              display: "grid",\n              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",\n              gap: 2,\n              py: 5,\n            }}\n          >\n            <Card variant="outlined" sx={{ height: 398 }}></Card>\n            <Card variant="outlined" sx={{ height: 360 }}></Card>\n            <Card variant="outlined" sx={{ height: 574 }}></Card>\n            <Card variant="outlined" sx={{ height: 692 }}></Card>\n          </Box>\n        </Container>\n      </Content>\n      <Footer sx={{ height: 400 }}></Footer>\n    </Root>\n  );\n}\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Layout V6/App/Cloudflare"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone layout-v6-app-cloudflare\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"layoutv6appcloudflare",children:"LayoutV6AppCloudflare"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:LayoutV6AppCloudflareraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./blocks/layout-v6-app-cloudflare/LayoutV6AppCloudflare.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Cloudflare:()=>Cloudflare,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LayoutV6AppCloudflare_stories});var react=__webpack_require__("./node_modules/react/index.js"),googleFont=__webpack_require__("./.storybook/decorators/googleFont.tsx"),storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),KeyboardArrowRight=__webpack_require__("./node_modules/@mui/icons-material/KeyboardArrowRight.js"),Menu=__webpack_require__("./node_modules/@mui/icons-material/Menu.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),ButtonBase=__webpack_require__("./node_modules/@mui/material/ButtonBase/ButtonBase.js"),Card=__webpack_require__("./node_modules/@mui/material/Card/Card.js"),Container=__webpack_require__("./node_modules/@mui/material/Container/Container.js"),Divider=__webpack_require__("./node_modules/@mui/material/Divider/Divider.js"),IconButton=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),layout_core_v6=__webpack_require__("./blocks/layout-core-v6/index.ts");function LayoutV6AppCloudflare(){return react.createElement(layout_core_v6.fC,null,react.createElement(layout_core_v6.h4,{sx:{...(0,layout_core_v6.pJ)({height:"63px",fullWidth:!0})}},react.createElement(Box.Z,{sx:{ml:2,display:"flex",gap:1}},react.createElement(IconButton.Z,{className:layout_core_v6.KG.TemporaryEdgeSidebarTrigger,onClick:()=>(0,layout_core_v6.SL)()},react.createElement(Menu.Z,null)),react.createElement("svg",{viewBox:"0 0 105 36",role:"img",width:"105px",height:"41px","aria-hidden":"true"},react.createElement("path",{fill:"#000",d:"M11.679 26.754h2.353v6.423h4.111v2.06H11.68v-8.483zM20.58 31.02v-.024c0-2.436 1.965-4.412 4.584-4.412 2.62 0 4.56 1.951 4.56 4.387v.025c0 2.436-1.965 4.41-4.584 4.41-2.618 0-4.56-1.95-4.56-4.386zm6.743 0v-.024c0-1.223-.885-2.291-2.183-2.291-1.285 0-2.147 1.042-2.147 2.266v.025c0 1.222.886 2.29 2.171 2.29 1.298 0 2.159-1.042 2.159-2.266zM32.604 31.517v-4.763h2.389v4.714c0 1.223.618 1.806 1.564 1.806.946 0 1.564-.557 1.564-1.745v-4.775h2.39v4.7c0 2.74-1.564 3.939-3.978 3.939s-3.93-1.223-3.93-3.878M44.112 26.755h3.274c3.032 0 4.79 1.744 4.79 4.192v.025c0 2.447-1.782 4.265-4.838 4.265h-3.226v-8.483zm3.31 6.397c1.408 0 2.34-.775 2.34-2.146v-.024c0-1.357-.932-2.145-2.34-2.145h-.958v4.316l.959-.001zM55.596 26.754h6.791v2.06h-4.438v1.442h4.014v1.951h-4.014v3.03h-2.353v-8.483zM65.661 26.754h2.353v6.423h4.111v2.06h-6.464v-8.483zM78.273 26.693h2.268l3.614 8.544h-2.522l-.62-1.515H77.74l-.606 1.515h-2.474l3.614-8.544zm2.062 5.2l-.946-2.413-.959 2.412h1.905zM87.186 26.754H91.2c1.298 0 2.195.34 2.765.921.498.485.752 1.14.752 1.976v.024c0 1.296-.693 2.156-1.746 2.605l2.025 2.957H92.28l-1.71-2.57h-1.03v2.57h-2.353v-8.483zm3.905 4.072c.8 0 1.262-.388 1.262-1.006v-.024c0-.667-.486-1.006-1.275-1.006h-1.54v2.038l1.553-.002zM98.112 26.754h6.827v2h-4.498v1.284h4.075v1.854h-4.075v1.346H105v1.999h-6.888v-8.483zM6.528 32.014c-.33.744-1.023 1.272-1.944 1.272-1.286 0-2.171-1.067-2.171-2.29v-.025c0-1.223.86-2.266 2.146-2.266.97 0 1.708.595 2.02 1.406h2.48c-.398-2.02-2.173-3.526-4.475-3.526-2.62 0-4.584 1.977-4.584 4.41v.024c0 2.436 1.94 4.388 4.56 4.388 2.24 0 3.991-1.45 4.453-3.393H6.528z"}),react.createElement("path",{d:"M89.012 22.355l.257-.887c.306-1.056.192-2.031-.321-2.748-.472-.66-1.259-1.049-2.214-1.094l-18.096-.229a.358.358 0 01-.285-.151.367.367 0 01-.04-.326.481.481 0 01.42-.321l18.263-.232c2.166-.099 4.512-1.856 5.333-3.998L93.37 9.65a.659.659 0 00.028-.36C92.216 3.975 87.468 0 81.792 0c-5.23 0-9.67 3.373-11.263 8.061a5.34 5.34 0 00-3.756-1.039 5.356 5.356 0 00-4.637 6.644c-4.099.12-7.386 3.475-7.386 7.6 0 .368.028.735.082 1.1a.354.354 0 00.348.305l33.408.004h.009a.44.44 0 00.415-.32z",fill:"#F6821F"}),react.createElement("path",{d:"M95.04 9.847c-.167 0-.334.004-.5.013a.28.28 0 00-.079.017.285.285 0 00-.182.192l-.712 2.456c-.305 1.055-.192 2.03.322 2.746.471.661 1.258 1.05 2.213 1.094l3.858.232a.351.351 0 01.275.149.365.365 0 01.041.328.484.484 0 01-.42.32l-4.008.232c-2.176.1-4.521 1.856-5.342 3.998l-.29.756a.212.212 0 00.095.262c.03.017.062.027.096.028h13.802a.366.366 0 00.356-.265 9.846 9.846 0 00.367-2.677c-.001-5.457-4.429-9.88-9.891-9.88z",fill:"#FBAD41"})))),react.createElement(layout_core_v6.NW,{sx:theme=>({...(0,layout_core_v6.oz)({theme,config:{xs:{variant:"temporary"},sm:{variant:"permanent",expandOnHover:!0,autoCollapse:"sm",collapsedWidth:"56px"}}})})},react.createElement(layout_core_v6.dD,{sx:{containerType:"inline-size"}},react.createElement(Box.Z,{sx:{p:2,textAlign:"center",fontSize:"1.25rem",fontWeight:"bold","& > span":{display:{"@":"none","@200":"initial"}},"&::before":{content:{"@":'"SK"',"@200":'""'}}}},react.createElement("span",null,"Siriwat knp")),react.createElement(Divider.Z,null),react.createElement(Box.Z,{sx:{minHeight:0,overflow:"auto"}},react.createElement(Box.Z,{sx:{height:2e3}})),react.createElement(Divider.Z,{sx:{mt:"auto"}}),react.createElement(ButtonBase.Z,{className:layout_core_v6.KG.EdgeSidebarCollapser,sx:{height:48,flex:"none"},onClick:event=>(0,layout_core_v6.fO)({event})},react.createElement(KeyboardArrowRight.Z,{className:layout_core_v6.KG.EdgeSidebarCollapsedVisible}),react.createElement("span",{className:layout_core_v6.KG.EdgeSidebarUncollapsedVisible},"Collapse sidebar")))),react.createElement(layout_core_v6.zC,{sx:theme=>({...(0,layout_core_v6.H7)({theme,config:{xs:{variant:"temporary"},md:{variant:"persistent",persistentBehavior:"none",width:"300px"}}})})},react.createElement(layout_core_v6.dD,null,"test")),react.createElement(layout_core_v6.VY,null,react.createElement(Container.Z,{sx:{py:3}},react.createElement(Typography.Z,{variant:"h1",sx:{fontSize:"1.75rem",fontWeight:"bold"}},"Account Home"),react.createElement(Typography.Z,{sx:{mb:2}},"Welcome to the new home experience."),react.createElement(Button.Z,{variant:"outlined",className:"EdgeSidebar-R-trigger",onClick:()=>{(0,layout_core_v6.Vy)()}},"Open documentation"),react.createElement(Button.Z,{variant:"outlined",className:"EdgeSidebar-R-collapser",onClick:event=>{(0,layout_core_v6.DY)({event})}},"Open documentation"),react.createElement(Box.Z,{sx:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:2,py:5}},react.createElement(Card.Z,{variant:"outlined",sx:{height:398}}),react.createElement(Card.Z,{variant:"outlined",sx:{height:360}}),react.createElement(Card.Z,{variant:"outlined",sx:{height:574}}),react.createElement(Card.Z,{variant:"outlined",sx:{height:692}})))),react.createElement(layout_core_v6.$_,{sx:{height:400}}))}var usage=__webpack_require__("./blocks/layout-v6-app-cloudflare/usage.mdx");const LayoutV6AppCloudflare_stories={title:"Layout V6/App/Cloudflare",component:LayoutV6AppCloudflare,parameters:{layout:"fullscreen",githubUsername:"siriwatknp"},decorators:[(0,storyDialog.Z)(usage.default),(0,googleFont.Z)([])]},Cloudflare={render:()=>react.createElement(LayoutV6AppCloudflare,null)};Cloudflare.parameters={...Cloudflare.parameters,docs:{...Cloudflare.parameters?.docs,source:{originalSource:"{\n  render: () => <LayoutV6AppCloudflare />\n}",...Cloudflare.parameters?.docs?.source}}};const __namedExportsOrder=["Cloudflare"]},"./.storybook/decorators/googleFont.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>googleFont});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function googleFont(fonts=[]){return Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap",rel:"stylesheet"}),fonts.map((font=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{key:font,rel:"stylesheet",href:`https://fonts.googleapis.com/css2?family=${font}&display=swap`}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js"),_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/DialogContent/DialogContent.js"),_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/DialogTitle/DialogTitle.js"),_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/SvgIcon/SvgIcon.js"),_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-ZHZY55TS.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_1__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,context){const[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z,{title:"Show source code",placement:"top-start",sx:{zIndex:1e5}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__.Z,{sx:{position:"fixed",bottom:"1rem",left:"0.5rem",zIndex:99999,borderRadius:40},onClick:()=>setOpen(!0)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_5__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"}))))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_6__.Z,{open,onClose:()=>setOpen(!1)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_7__.Z,null,"Usage"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_theming__WEBPACK_IMPORTED_MODULE_9__.f6,{theme:defaultTheme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_10__.Z,{components:defaultComponents},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,null))))))}}}}]);