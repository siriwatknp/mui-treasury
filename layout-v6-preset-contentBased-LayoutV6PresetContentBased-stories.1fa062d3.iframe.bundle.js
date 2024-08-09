(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[3859],{"./node_modules/@mui/icons-material/KeyboardArrowLeft.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__("./node_modules/@mui/icons-material/node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.Z=void 0;var _createSvgIcon=_interopRequireDefault(__webpack_require__("./node_modules/@mui/icons-material/utils/createSvgIcon.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");exports.Z=(0,_createSvgIcon.default)((0,_jsxRuntime.jsx)("path",{d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6z"}),"KeyboardArrowLeft")},"./node_modules/@mui/icons-material/Menu.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__("./node_modules/@mui/icons-material/node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.Z=void 0;var _createSvgIcon=_interopRequireDefault(__webpack_require__("./node_modules/@mui/icons-material/utils/createSvgIcon.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");exports.Z=(0,_createSvgIcon.default)((0,_jsxRuntime.jsx)("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu")},"./node_modules/@mui/icons-material/node_modules/@babel/runtime/helpers/interopRequireDefault.js":module=>{module.exports=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@mui/icons-material/utils/createSvgIcon.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return _utils.createSvgIcon}});var _utils=__webpack_require__("./node_modules/@mui/material/utils/index.js")},"./node_modules/@mui/material/Container/Container.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Container_Container});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js"),useThemeProps=__webpack_require__("./node_modules/@mui/system/useThemeProps/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/system/styled/styled.js"),createTheme=__webpack_require__("./node_modules/@mui/system/createTheme/createTheme.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultTheme=(0,createTheme.Z)(),defaultCreateStyledComponent=(0,styled.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[`maxWidth${(0,capitalize.Z)(String(ownerState.maxWidth))}`],ownerState.fixed&&styles.fixed,ownerState.disableGutters&&styles.disableGutters]}}),useThemePropsDefault=inProps=>(0,useThemeProps.Z)({props:inProps,name:"MuiContainer",defaultTheme});var utils_capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),styles_styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles_useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js");const Container=function createContainer(options={}){const{createStyledComponent=defaultCreateStyledComponent,useThemeProps=useThemePropsDefault,componentName="MuiContainer"}=options,ContainerRoot=createStyledComponent((({theme,ownerState})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!ownerState.disableGutters&&{paddingLeft:theme.spacing(2),paddingRight:theme.spacing(2),[theme.breakpoints.up("sm")]:{paddingLeft:theme.spacing(3),paddingRight:theme.spacing(3)}}})),(({theme,ownerState})=>ownerState.fixed&&Object.keys(theme.breakpoints.values).reduce(((acc,breakpointValueKey)=>{const breakpoint=breakpointValueKey,value=theme.breakpoints.values[breakpoint];return 0!==value&&(acc[theme.breakpoints.up(breakpoint)]={maxWidth:`${value}${theme.breakpoints.unit}`}),acc}),{})),(({theme,ownerState})=>({..."xs"===ownerState.maxWidth&&{[theme.breakpoints.up("xs")]:{maxWidth:Math.max(theme.breakpoints.values.xs,444)}},...ownerState.maxWidth&&"xs"!==ownerState.maxWidth&&{[theme.breakpoints.up(ownerState.maxWidth)]:{maxWidth:`${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`}}}))),Container=react.forwardRef((function Container(inProps,ref){const props=useThemeProps(inProps),{className,component="div",disableGutters=!1,fixed=!1,maxWidth="lg",classes:classesProp,...other}=props,ownerState={...props,component,disableGutters,fixed,maxWidth},classes=((ownerState,componentName)=>{const{classes,fixed,disableGutters,maxWidth}=ownerState,slots={root:["root",maxWidth&&`maxWidth${(0,capitalize.Z)(String(maxWidth))}`,fixed&&"fixed",disableGutters&&"disableGutters"]};return(0,composeClasses.Z)(slots,(slot=>(0,generateUtilityClass.ZP)(componentName,slot)),classes)})(ownerState,componentName);return(0,jsx_runtime.jsx)(ContainerRoot,{as:component,ownerState,className:(0,clsx.Z)(classes.root,className),ref,...other})}));return Container}({createStyledComponent:(0,styles_styled.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[`maxWidth${(0,utils_capitalize.Z)(String(ownerState.maxWidth))}`],ownerState.fixed&&styles.fixed,ownerState.disableGutters&&styles.disableGutters]}}),useThemeProps:inProps=>(0,styles_useThemeProps.Z)({props:inProps,name:"MuiContainer"})}),Container_Container=Container},"./node_modules/@mui/material/utils/createChainedFunction.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/createChainedFunction/createChainedFunction.js").Z},"./node_modules/@mui/material/utils/debounce.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/debounce/debounce.js").Z},"./node_modules/@mui/material/utils/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{capitalize:()=>capitalize.Z,createChainedFunction:()=>createChainedFunction.Z,createSvgIcon:()=>createSvgIcon.Z,debounce:()=>debounce.Z,deprecatedPropType:()=>utils_deprecatedPropType,isMuiElement:()=>isMuiElement.Z,ownerDocument:()=>ownerDocument.Z,ownerWindow:()=>ownerWindow.Z,requirePropFactory:()=>utils_requirePropFactory,setRef:()=>utils_setRef,unstable_ClassNameGenerator:()=>unstable_ClassNameGenerator,unstable_useEnhancedEffect:()=>useEnhancedEffect.Z,unstable_useId:()=>useId.Z,unsupportedProp:()=>utils_unsupportedProp,useControlled:()=>useControlled.Z,useEventCallback:()=>useEventCallback.Z,useForkRef:()=>useForkRef.Z});var ClassNameGenerator=__webpack_require__("./node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),createChainedFunction=__webpack_require__("./node_modules/@mui/material/utils/createChainedFunction.js"),createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),debounce=__webpack_require__("./node_modules/@mui/material/utils/debounce.js");const utils_deprecatedPropType=function deprecatedPropType(validator,reason){return()=>null};var isMuiElement=__webpack_require__("./node_modules/@mui/material/utils/isMuiElement.js"),ownerDocument=__webpack_require__("./node_modules/@mui/material/utils/ownerDocument.js"),ownerWindow=__webpack_require__("./node_modules/@mui/material/utils/ownerWindow.js");const utils_requirePropFactory=function requirePropFactory(componentNameInError,Component){return()=>null};const utils_setRef=__webpack_require__("./node_modules/@mui/utils/esm/setRef/setRef.js").Z;var useEnhancedEffect=__webpack_require__("./node_modules/@mui/material/utils/useEnhancedEffect.js"),useId=__webpack_require__("./node_modules/@mui/material/utils/useId.js");const utils_unsupportedProp=function unsupportedProp(props,propName,componentName,location,propFullName){return null};var useControlled=__webpack_require__("./node_modules/@mui/material/utils/useControlled.js"),useEventCallback=__webpack_require__("./node_modules/@mui/material/utils/useEventCallback.js"),useForkRef=__webpack_require__("./node_modules/@mui/material/utils/useForkRef.js");const unstable_ClassNameGenerator={configure:generator=>{ClassNameGenerator.Z.configure(generator)}}},"./node_modules/@mui/material/utils/ownerDocument.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js").Z},"./node_modules/@mui/material/utils/ownerWindow.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js").Z},"./node_modules/@mui/material/utils/useEnhancedEffect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js").Z},"./node_modules/@mui/system/styled/styled.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./node_modules/@mui/system/createStyled/createStyled.js").ZP)()},"./node_modules/@mui/utils/esm/debounce/debounce.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function debounce(func,wait=166){let timeout;function debounced(...args){clearTimeout(timeout),timeout=setTimeout((()=>{func.apply(this,args)}),wait)}return debounced.clear=()=>{clearTimeout(timeout)},debounced}__webpack_require__.d(__webpack_exports__,{Z:()=>debounce})},"./blocks/layout-v6-preset-contentBased/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const LayoutV6PresetContentBasedraw_namespaceObject='import React from "react";\nimport KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";\nimport Menu from "@mui/icons-material/Menu";\nimport ButtonBase from "@mui/material/ButtonBase";\nimport Container from "@mui/material/Container";\nimport IconButton from "@mui/material/IconButton";\nimport {\n  applyEdgeSidebarStyles,\n  applyHeaderStyles,\n  Content,\n  EdgeSidebar,\n  EdgeSidebarContent,\n  Footer,\n  Header,\n  layoutClasses,\n  Root,\n  toggleEdgeSidebarCollapse,\n  toggleTemporaryEdgeSidebar,\n} from "../layout-core-v6";\nimport {\n  ContentMockup,\n  FooterMockup,\n  HeaderMockup,\n  NavSidebarMockup,\n} from "../mockup-layout";\n\nexport const LayoutV6PresetContentBased = () => {\n  return (\n    <Root>\n      <Header\n        sx={{\n          ...applyHeaderStyles({ height: { xs: "56px", md: "64px" } }),\n          position: "relative",\n        }}\n      >\n        <HeaderMockup\n          trigger={\n            <>\n              <IconButton\n                className={layoutClasses.TemporaryEdgeSidebarTrigger}\n                onClick={() => {\n                  toggleTemporaryEdgeSidebar();\n                }}\n              >\n                <Menu />\n              </IconButton>\n              <IconButton\n                className={layoutClasses.EdgeSidebarCollapser}\n                onClick={(event) => {\n                  toggleEdgeSidebarCollapse({ event });\n                }}\n              >\n                <Menu className={layoutClasses.EdgeSidebarCollapsedVisible} />\n                <KeyboardArrowLeft\n                  className={layoutClasses.EdgeSidebarUncollapsedVisible}\n                />\n              </IconButton>\n            </>\n          }\n        />\n      </Header>\n      <EdgeSidebar\n        sx={(theme) => ({\n          ...applyEdgeSidebarStyles({\n            theme,\n            config: {\n              xs: {\n                variant: "temporary",\n                width: "256px",\n              },\n              sm: {\n                variant: "persistent",\n                width: "256px",\n                persistentBehavior: "none",\n              },\n            },\n          }),\n        })}\n      >\n        <EdgeSidebarContent\n          sx={{\n            borderRight: "min(1px, 1 * var(--SidebarContent-width)) solid",\n            borderColor: "divider",\n          }}\n        >\n          <ButtonBase\n            className={layoutClasses.EdgeSidebarCollapser}\n            onClick={(event) => {\n              toggleEdgeSidebarCollapse({ event });\n            }}\n            sx={{ height: 40, color: "text.secondary" }}\n          >\n            <KeyboardArrowLeft color="inherit" />\n          </ButtonBase>\n          <NavSidebarMockup />\n        </EdgeSidebarContent>\n      </EdgeSidebar>\n      <Content>\n        <Container maxWidth="md" sx={{ py: 5 }}>\n          <ContentMockup />\n        </Container>\n      </Content>\n      <Footer>\n        <FooterMockup />\n      </Footer>\n    </Root>\n  );\n};\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"LayoutV6/Preset/ContentBased"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone layoutV6-preset-contentBased\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"layoutv6presetcontentbased",children:"LayoutV6PresetContentBased"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:LayoutV6PresetContentBasedraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./blocks/layout-v6-preset-contentBased/LayoutV6PresetContentBased.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ContentBased:()=>ContentBased,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LayoutV6PresetContentBased_stories});var react=__webpack_require__("./node_modules/react/index.js"),googleFont=__webpack_require__("./.storybook/decorators/googleFont.tsx"),storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),KeyboardArrowLeft=__webpack_require__("./node_modules/@mui/icons-material/KeyboardArrowLeft.js"),Menu=__webpack_require__("./node_modules/@mui/icons-material/Menu.js"),ButtonBase=__webpack_require__("./node_modules/@mui/material/ButtonBase/ButtonBase.js"),Container=__webpack_require__("./node_modules/@mui/material/Container/Container.js"),IconButton=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),layout_core_v6=__webpack_require__("./blocks/layout-core-v6/index.ts"),mockup_layout=__webpack_require__("./blocks/mockup-layout/index.ts");const LayoutV6PresetContentBased=()=>react.createElement(layout_core_v6.fC,null,react.createElement(layout_core_v6.h4,{sx:{...(0,layout_core_v6.pJ)({height:{xs:"56px",md:"64px"}}),position:"relative"}},react.createElement(mockup_layout.C0,{trigger:react.createElement(react.Fragment,null,react.createElement(IconButton.Z,{className:layout_core_v6.KG.TemporaryEdgeSidebarTrigger,onClick:()=>{(0,layout_core_v6.SL)()}},react.createElement(Menu.Z,null)),react.createElement(IconButton.Z,{className:layout_core_v6.KG.EdgeSidebarCollapser,onClick:event=>{(0,layout_core_v6.fO)({event})}},react.createElement(Menu.Z,{className:layout_core_v6.KG.EdgeSidebarCollapsedVisible}),react.createElement(KeyboardArrowLeft.Z,{className:layout_core_v6.KG.EdgeSidebarUncollapsedVisible})))})),react.createElement(layout_core_v6.NW,{sx:theme=>({...(0,layout_core_v6.oz)({theme,config:{xs:{variant:"temporary",width:"256px"},sm:{variant:"persistent",width:"256px",persistentBehavior:"none"}}})})},react.createElement(layout_core_v6.dD,{sx:{borderRight:"min(1px, 1 * var(--SidebarContent-width)) solid",borderColor:"divider"}},react.createElement(ButtonBase.Z,{className:layout_core_v6.KG.EdgeSidebarCollapser,onClick:event=>{(0,layout_core_v6.fO)({event})},sx:{height:40,color:"text.secondary"}},react.createElement(KeyboardArrowLeft.Z,{color:"inherit"})),react.createElement(mockup_layout.Hf,null))),react.createElement(layout_core_v6.VY,null,react.createElement(Container.Z,{maxWidth:"md",sx:{py:5}},react.createElement(mockup_layout.Vs,null))),react.createElement(layout_core_v6.$_,null,react.createElement(mockup_layout.VW,null)));var usage=__webpack_require__("./blocks/layout-v6-preset-contentBased/usage.mdx");const LayoutV6PresetContentBased_stories={title:"Layout v6/Preset/ContentBased",component:LayoutV6PresetContentBased,parameters:{layout:"fullscreen",githubUsername:"siriwatknp"},decorators:[(0,storyDialog.Z)(usage.default),(0,googleFont.Z)([])]},ContentBased={render:()=>react.createElement(LayoutV6PresetContentBased,null)};ContentBased.parameters={...ContentBased.parameters,docs:{...ContentBased.parameters?.docs,source:{originalSource:"{\n  render: () => <LayoutV6PresetContentBased />\n}",...ContentBased.parameters?.docs?.source}}};const __namedExportsOrder=["ContentBased"]},"./.storybook/decorators/googleFont.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>googleFont});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function googleFont(fonts=[]){return Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap",rel:"stylesheet"}),fonts.map((font=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{key:font,rel:"stylesheet",href:`https://fonts.googleapis.com/css2?family=${font}&display=swap`}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js"),_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/DialogContent/DialogContent.js"),_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/DialogTitle/DialogTitle.js"),_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/SvgIcon/SvgIcon.js"),_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-ZHZY55TS.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_1__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,context){const[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z,{title:"Show source code",placement:"top-start",sx:{zIndex:1e5}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__.Z,{sx:{position:"fixed",bottom:"1rem",left:"0.5rem",zIndex:99999,borderRadius:40},onClick:()=>setOpen(!0)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_5__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"}))))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_6__.Z,{open,onClose:()=>setOpen(!1)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_7__.Z,null,"Usage"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_theming__WEBPACK_IMPORTED_MODULE_9__.f6,{theme:defaultTheme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_10__.Z,{components:defaultComponents},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,null))))))}}},"./blocks/mockup-layout/NavSidebarMockup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hf:()=>NavSidebarMockup});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_Divider__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/Divider/Divider.js"),_mui_material_List__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/List/List.js"),_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/ListItem/ListItem.js"),_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/ListItemIcon/ListItemIcon.js"),_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/ListItemText/ListItemText.js"),_mockup_shape__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./blocks/mockup-shape/index.ts"),_mockup_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./blocks/mockup-utils/index.ts");const IconList=({count=4})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,[...Array(count).fill(void 0)].map(((_,index)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_2__.ZP,{key:index},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mockup_shape__WEBPACK_IMPORTED_MODULE_1__.Cd,{sx:{fontSize:24}})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_4__.Z,{primary:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mockup_shape__WEBPACK_IMPORTED_MODULE_1__.DR,{sx:{height:16,width:(0,_mockup_utils__WEBPACK_IMPORTED_MODULE_5__.W7)(56,136),borderRadius:1}}),sx:{"@container (max-width: 254px)":{width:0,overflow:"hidden"}}}))))),InsetList=({count=4})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,[...Array(count).fill(void 0)].map(((_,index)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_2__.ZP,{key:index},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_4__.Z,{inset:!0,primary:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mockup_shape__WEBPACK_IMPORTED_MODULE_1__.DR,{sx:{height:16,width:(0,_mockup_utils__WEBPACK_IMPORTED_MODULE_5__.W7)(56,136),borderRadius:1}}),sx:{"@container (max-width: 254px)":{width:0,overflow:"hidden"}}}))))),NavSidebarMockup=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_6__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconList,{count:2})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_7__.Z,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_6__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconList,{count:1}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(InsetList,{count:2})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_7__.Z,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_6__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconList,{count:1}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(InsetList,{count:2})))},"./blocks/mockup-layout/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Vs:()=>ContentMockup,VW:()=>FooterMockup,C0:()=>HeaderMockup,Hf:()=>NavSidebarMockup.Hf});var react=__webpack_require__("./node_modules/react/index.js"),Avatar=__webpack_require__("./node_modules/@mui/material/Avatar/Avatar.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),mockup_shape=__webpack_require__("./blocks/mockup-shape/index.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const HeaderMockup=({trigger,...props})=>react.createElement(Box.Z,_extends({},props,{sx:{display:"flex",alignItems:"center",justifyContent:{xs:"space-between",sm:"flex-start"},gap:2,px:2,flex:1,...props.sx}}),trigger,react.createElement(mockup_shape.bK,null),react.createElement(Box.Z,{ml:"auto",sx:{display:{xs:"none",sm:"flex"},alignItems:"center",gap:{xs:2,md:3}}},react.createElement(mockup_shape.DR,null),react.createElement(mockup_shape.DR,null),react.createElement(mockup_shape.DR,null),react.createElement(mockup_shape.DR,null)),react.createElement(Avatar.Z,{sx:{width:32,height:32,ml:{xs:0,sm:2}}}));var NavSidebarMockup=__webpack_require__("./blocks/mockup-layout/NavSidebarMockup.tsx"),Divider=__webpack_require__("./node_modules/@mui/material/Divider/Divider.js"),Stack=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),mockup_utils=__webpack_require__("./blocks/mockup-utils/index.ts");const Paragraph=({lineCount=5,sx})=>react.createElement(react.Fragment,null,[...Array(lineCount).fill(void 0)].map(((_,index)=>react.createElement(mockup_shape.bK,{key:index,sx:{height:16,width:(0,mockup_utils.W7)(96,100,"%"),...0!==index&&{mt:1.5},...sx}})))),ContentMockup=()=>react.createElement("div",null,react.createElement(mockup_shape.bK,{sx:{height:32,width:160}}),react.createElement(mockup_shape.bK,{sx:{height:18,width:120,mt:1.5}}),react.createElement("br",null),react.createElement("br",null),react.createElement(Paragraph,null),react.createElement("br",null),react.createElement(Divider.Z,null),react.createElement("br",null),react.createElement(Paragraph,null),react.createElement("br",null),react.createElement("br",null),react.createElement(Stack.Z,{direction:"row",spacing:1},react.createElement(mockup_shape.bK,{sx:{height:200,flexGrow:1}}),react.createElement(mockup_shape.bK,{sx:{height:200,flexGrow:1}}),react.createElement(mockup_shape.bK,{sx:{height:200,flexGrow:1}})),react.createElement("br",null),react.createElement("br",null),react.createElement(mockup_shape.bK,{sx:{height:32,width:240,mx:"auto"}}),react.createElement(mockup_shape.bK,{sx:{height:18,width:120,mt:1.5,mx:"auto"}}),react.createElement("br",null),react.createElement("br",null),react.createElement(Paragraph,{sx:{mx:"auto"}}),react.createElement("br",null),react.createElement(Stack.Z,{direction:"row",spacing:1},react.createElement(mockup_shape.bK,{sx:{height:100,flexGrow:1}}),react.createElement(mockup_shape.bK,{sx:{height:100,flexGrow:1}}),react.createElement(mockup_shape.bK,{sx:{height:100,flexGrow:1}}),react.createElement(mockup_shape.bK,{sx:{height:100,flexGrow:1}})));var Container=__webpack_require__("./node_modules/@mui/material/Container/Container.js"),Grid=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js");function FooterMockup_extends(){return FooterMockup_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},FooterMockup_extends.apply(this,arguments)}const LinkGroup=({lineCount=5,sx})=>react.createElement(react.Fragment,null,react.createElement(mockup_shape.DR,{sx:{height:12,width:40}}),react.createElement("br",null),react.createElement(Stack.Z,{spacing:2},[...Array(lineCount).fill(void 0)].map(((_,index)=>react.createElement(mockup_shape.bK,{key:index,sx:{width:(0,mockup_utils.W7)(56,120),height:16}}))))),FooterMockup=({disableGutters=!1,...props})=>react.createElement(Box.Z,FooterMockup_extends({},props,{sx:{borderTop:"1px solid",borderColor:theme=>"dark"===theme.palette.mode?"rgba(255,255,255,0.12)":"grey.200",bgcolor:theme=>"dark"===theme.palette.mode?"rgba(255,255,255,0.07)":"grey.50",...props.sx}}),react.createElement(Container.Z,{sx:{py:5,minHeight:300},disableGutters},react.createElement(Grid.ZP,{container:!0,spacing:2},react.createElement(Grid.ZP,{item:!0,xs:12,sm:6,md:3,sx:{order:{xs:2,sm:1,md:1}}},react.createElement(mockup_shape.bK,{sx:{width:72,height:48}}),react.createElement("br",null),react.createElement(mockup_shape.DR,{sx:{height:14}}),react.createElement("br",null)),react.createElement(Grid.ZP,{item:!0,xs:6,md:3,sx:{order:{xs:3,md:2}}},react.createElement(LinkGroup,null)),react.createElement(Grid.ZP,{item:!0,xs:6,md:3,sx:{order:{xs:4,md:3}}},react.createElement(LinkGroup,null)),react.createElement(Grid.ZP,{item:!0,xs:12,sm:6,md:3,sx:{order:{xs:1,sm:2,md:4}}},react.createElement(Stack.Z,{direction:"row",spacing:1,sx:{justifyContent:{xs:"center",sm:"flex-start"}}},react.createElement(mockup_shape.bK,{sx:{height:36,flexBasis:160,flexShrink:1}}),react.createElement(mockup_shape.bK,{sx:{height:36,flexBasis:56,flexShrink:1}})),react.createElement("br",null),react.createElement(Stack.Z,{direction:"row",spacing:1,sx:{justifyContent:{xs:"center",sm:"flex-start"}}},react.createElement(mockup_shape.Cd,null),react.createElement(mockup_shape.Cd,null),react.createElement(mockup_shape.Cd,null)),react.createElement("br",null)))))},"./blocks/mockup-shape/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Cd:()=>Circle,DR:()=>Pill,bK:()=>Square});var react=__webpack_require__("./node_modules/react/index.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),mockup_utils=__webpack_require__("./blocks/mockup-utils/index.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Square=props=>react.createElement(Box.Z,_extends({},props,{sx:{width:"1em",height:"1em",fontSize:"40px",backgroundColor:mockup_utils.j9,borderRadius:1,flexShrink:0,...props.sx}}));function Pill_extends(){return Pill_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Pill_extends.apply(this,arguments)}const Pill=props=>react.createElement(Box.Z,Pill_extends({},props,{sx:{width:56,height:24,backgroundColor:mockup_utils.j9,borderRadius:5,...props.sx}}));function Circle_extends(){return Circle_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Circle_extends.apply(this,arguments)}const Circle=props=>react.createElement(Box.Z,Circle_extends({},props,{sx:{width:"1em",height:"1em",fontSize:"40px",backgroundColor:mockup_utils.j9,borderRadius:10,flexShrink:0,...props.sx}}))},"./blocks/mockup-utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{PY:()=>getLightGrey,W7:()=>randomBetween,bh:()=>getLightestGrey,j9:()=>getBaseGrey});const getBaseGrey=theme=>"dark"===theme.palette.mode?"rgba(255,255,255,0.12)":"grey.300",getLightGrey=theme=>"dark"===theme.palette.mode?"rgba(255,255,255,0.09)":"grey.200",getLightestGrey=theme=>"dark"===theme.palette.mode?"rgba(255,255,255,0.07)":"grey.50",randomBetween=(min,max,unit)=>{const result=Math.floor(Math.random()*(max-min))+min;return unit?`${result}${unit}`:result}}}]);