"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[2836],{"./node_modules/@mui/material/Container/Container.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Container_Container});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js"),useThemeProps=__webpack_require__("./node_modules/@mui/system/useThemeProps/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/system/styled/styled.js"),createTheme=__webpack_require__("./node_modules/@mui/system/createTheme/createTheme.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultTheme=(0,createTheme.Z)(),defaultCreateStyledComponent=(0,styled.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[`maxWidth${(0,capitalize.Z)(String(ownerState.maxWidth))}`],ownerState.fixed&&styles.fixed,ownerState.disableGutters&&styles.disableGutters]}}),useThemePropsDefault=inProps=>(0,useThemeProps.Z)({props:inProps,name:"MuiContainer",defaultTheme});var utils_capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),styles_styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles_useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js");const Container=function createContainer(options={}){const{createStyledComponent=defaultCreateStyledComponent,useThemeProps=useThemePropsDefault,componentName="MuiContainer"}=options,ContainerRoot=createStyledComponent((({theme,ownerState})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!ownerState.disableGutters&&{paddingLeft:theme.spacing(2),paddingRight:theme.spacing(2),[theme.breakpoints.up("sm")]:{paddingLeft:theme.spacing(3),paddingRight:theme.spacing(3)}}})),(({theme,ownerState})=>ownerState.fixed&&Object.keys(theme.breakpoints.values).reduce(((acc,breakpointValueKey)=>{const breakpoint=breakpointValueKey,value=theme.breakpoints.values[breakpoint];return 0!==value&&(acc[theme.breakpoints.up(breakpoint)]={maxWidth:`${value}${theme.breakpoints.unit}`}),acc}),{})),(({theme,ownerState})=>({..."xs"===ownerState.maxWidth&&{[theme.breakpoints.up("xs")]:{maxWidth:Math.max(theme.breakpoints.values.xs,444)}},...ownerState.maxWidth&&"xs"!==ownerState.maxWidth&&{[theme.breakpoints.up(ownerState.maxWidth)]:{maxWidth:`${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`}}}))),Container=react.forwardRef((function Container(inProps,ref){const props=useThemeProps(inProps),{className,component="div",disableGutters=!1,fixed=!1,maxWidth="lg",classes:classesProp,...other}=props,ownerState={...props,component,disableGutters,fixed,maxWidth},classes=((ownerState,componentName)=>{const{classes,fixed,disableGutters,maxWidth}=ownerState,slots={root:["root",maxWidth&&`maxWidth${(0,capitalize.Z)(String(maxWidth))}`,fixed&&"fixed",disableGutters&&"disableGutters"]};return(0,composeClasses.Z)(slots,(slot=>(0,generateUtilityClass.ZP)(componentName,slot)),classes)})(ownerState,componentName);return(0,jsx_runtime.jsx)(ContainerRoot,{as:component,ownerState,className:(0,clsx.Z)(classes.root,className),ref,...other})}));return Container}({createStyledComponent:(0,styles_styled.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[`maxWidth${(0,utils_capitalize.Z)(String(ownerState.maxWidth))}`],ownerState.fixed&&styles.fixed,ownerState.disableGutters&&styles.disableGutters]}}),useThemeProps:inProps=>(0,styles_useThemeProps.Z)({props:inProps,name:"MuiContainer"})}),Container_Container=Container},"./node_modules/@mui/system/styled/styled.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./node_modules/@mui/system/createStyled/createStyled.js").ZP)()},"./blocks/layout-v6-app-messenger/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const LayoutV6AppMessengerraw_namespaceObject='import React from "react";\nimport Box from "@mui/material/Box";\nimport Container from "@mui/material/Container";\nimport CssBaseline from "@mui/material/CssBaseline";\nimport {\n  createTheme,\n  responsiveFontSizes,\n  styled,\n  ThemeProvider,\n} from "@mui/material/styles";\nimport Toolbar from "@mui/material/Toolbar";\nimport {\n  applyEdgeSidebarStyles,\n  applyHeaderStyles,\n  applyInsetSidebarStyles,\n  applyRootStyles,\n  Content,\n  EdgeSidebar,\n  EdgeSidebarContent,\n  Footer,\n  Header,\n  InsetAvoidingView,\n  InsetSidebar,\n  InsetSidebarContent,\n  Root,\n} from "../layout-core-v6";\nimport {\n  ChatBar,\n  ChatDialog,\n  ChatList,\n  ChatSettings,\n  ChatsHeader,\n  ConversationHead,\n  MessengerSearch,\n  // @ts-ignore\n} from "../layout-v5-app-messenger/components";\n\nconst StyledHeader = styled(Header)(() => ({\n  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, .10)",\n  backgroundColor: "#ffffff",\n}));\n\nconst theme = responsiveFontSizes(\n  createTheme({\n    palette: {\n      primary: {\n        main: "rgb(0, 153, 255)",\n      },\n      background: {\n        default: "#fff",\n      },\n    },\n    typography: {\n      fontFamily:\n        \'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"\',\n      body1: {\n        fontSize: `${15 / 16}rem`,\n      },\n    },\n    components: {\n      MuiCssBaseline: {\n        styleOverrides: {\n          "strong, b": {\n            fontWeight: "bold",\n          },\n        },\n      },\n    },\n  }),\n);\n// @ts-ignore\ntheme.vars = null;\n\nexport function LayoutV6AppMessenger() {\n  return (\n    <ThemeProvider theme={theme}>\n      <CssBaseline />\n      <Root sx={{ ...applyRootStyles({ fixedHeight: true }) }}>\n        <StyledHeader\n          position="relative"\n          sx={{ ...applyHeaderStyles({ height: "64px" }) }}\n        >\n          <Toolbar disableGutters sx={{ flex: "auto" }}>\n            <ConversationHead />\n          </Toolbar>\n        </StyledHeader>\n        <EdgeSidebar\n          sx={(theme) => ({\n            ...applyEdgeSidebarStyles({\n              theme,\n              config: {\n                xs: {\n                  variant: "permanent",\n                  width: "25cqw",\n                  autoCollapse: "md",\n                  collapsedWidth: "80px",\n                },\n              },\n            }),\n          })}\n        >\n          <EdgeSidebarContent>\n            <ChatsHeader />\n            <Box p={"4px 16px 12px"}>\n              <MessengerSearch />\n            </Box>\n            <ChatList />\n          </EdgeSidebarContent>\n        </EdgeSidebar>\n        <Content>\n          <ChatDialog />\n          <InsetSidebar\n            sx={{\n              ...applyInsetSidebarStyles({\n                position: "absolute",\n                width: "25cqw",\n              }),\n            }}\n          >\n            <InsetSidebarContent\n              sx={{\n                borderLeft: "1px solid",\n                borderColor: "divider",\n              }}\n            >\n              <ChatSettings />\n            </InsetSidebarContent>\n          </InsetSidebar>\n        </Content>\n        <Footer>\n          <Container disableGutters>\n            <InsetAvoidingView>\n              <Box display={"flex"} alignItems={"center"} p={1}>\n                <ChatBar />\n              </Box>\n            </InsetAvoidingView>\n          </Container>\n        </Footer>\n      </Root>\n    </ThemeProvider>\n  );\n}\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"LayoutV6/App/Messenger"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone layout-v6-app-messenger\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"layoutv6appmessenger",children:"LayoutV6AppMessenger"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:LayoutV6AppMessengerraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./blocks/layout-v6-app-messenger/LayoutV6AppMessenger.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Messenger:()=>Messenger,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LayoutV6AppMessenger_stories});var react=__webpack_require__("./node_modules/react/index.js"),googleFont=__webpack_require__("./.storybook/decorators/googleFont.tsx"),storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Container=__webpack_require__("./node_modules/@mui/material/Container/Container.js"),CssBaseline=__webpack_require__("./node_modules/@mui/material/CssBaseline/CssBaseline.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),responsiveFontSizes=__webpack_require__("./node_modules/@mui/material/styles/responsiveFontSizes.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),ThemeProvider=__webpack_require__("./node_modules/@mui/material/styles/ThemeProvider.js"),Toolbar=__webpack_require__("./node_modules/@mui/material/Toolbar/Toolbar.js"),layout_core_v6=__webpack_require__("./blocks/layout-core-v6/index.ts"),components=__webpack_require__("./blocks/layout-v5-app-messenger/components/index.js");const StyledHeader=(0,styled.ZP)(layout_core_v6.h4)((()=>({boxShadow:"0 1px 2px 0 rgba(0, 0, 0, .10)",backgroundColor:"#ffffff"}))),theme=(0,responsiveFontSizes.Z)((0,createTheme.Z)({palette:{primary:{main:"rgb(0, 153, 255)"},background:{default:"#fff"}},typography:{fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',body1:{fontSize:"0.9375rem"}},components:{MuiCssBaseline:{styleOverrides:{"strong, b":{fontWeight:"bold"}}}}}));function LayoutV6AppMessenger(){return react.createElement(ThemeProvider.Z,{theme},react.createElement(CssBaseline.ZP,null),react.createElement(layout_core_v6.fC,{sx:{...(0,layout_core_v6.Hx)({fixedHeight:!0})}},react.createElement(StyledHeader,{position:"relative",sx:{...(0,layout_core_v6.pJ)({height:"64px"})}},react.createElement(Toolbar.Z,{disableGutters:!0,sx:{flex:"auto"}},react.createElement(components.ju,null))),react.createElement(layout_core_v6.NW,{sx:theme=>({...(0,layout_core_v6.oz)({theme,config:{xs:{variant:"permanent",width:"25cqw",autoCollapse:"md",collapsedWidth:"80px"}}})})},react.createElement(layout_core_v6.dD,null,react.createElement(components.sG,null),react.createElement(Box.Z,{p:"4px 16px 12px"},react.createElement(components.Ab,null)),react.createElement(components.jJ,null))),react.createElement(layout_core_v6.VY,null,react.createElement(components.VY,null),react.createElement(layout_core_v6.bM,{sx:{...(0,layout_core_v6.Q5)({position:"absolute",width:"25cqw"})}},react.createElement(layout_core_v6.JF,{sx:{borderLeft:"1px solid",borderColor:"divider"}},react.createElement(components.lV,null)))),react.createElement(layout_core_v6.$_,null,react.createElement(Container.Z,{disableGutters:!0},react.createElement(layout_core_v6.FK,null,react.createElement(Box.Z,{display:"flex",alignItems:"center",p:1},react.createElement(components.YS,null)))))))}theme.vars=null;var usage=__webpack_require__("./blocks/layout-v6-app-messenger/usage.mdx");const LayoutV6AppMessenger_stories={title:"Layout v6/App/Messenger",component:LayoutV6AppMessenger,parameters:{layout:"fullscreen",githubUsername:"siriwatknp"},decorators:[(0,storyDialog.Z)(usage.default),(0,googleFont.Z)([])]},Messenger={render:()=>react.createElement(LayoutV6AppMessenger,null)};Messenger.parameters={...Messenger.parameters,docs:{...Messenger.parameters?.docs,source:{originalSource:"{\n  render: () => <LayoutV6AppMessenger />\n}",...Messenger.parameters?.docs?.source}}};const __namedExportsOrder=["Messenger"]},"./.storybook/decorators/googleFont.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>googleFont});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function googleFont(fonts=[]){return Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap",rel:"stylesheet"}),fonts.map((font=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{key:font,rel:"stylesheet",href:`https://fonts.googleapis.com/css2?family=${font}&display=swap`}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js"),_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/DialogContent/DialogContent.js"),_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/DialogTitle/DialogTitle.js"),_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/SvgIcon/SvgIcon.js"),_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-ZHZY55TS.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_1__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,context){const[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z,{title:"Show source code",placement:"top-start",sx:{zIndex:1e5}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__.Z,{sx:{position:"fixed",bottom:"1rem",left:"0.5rem",zIndex:99999,borderRadius:40},onClick:()=>setOpen(!0)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_5__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"}))))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_6__.Z,{open,onClose:()=>setOpen(!1)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_7__.Z,null,"Usage"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_theming__WEBPACK_IMPORTED_MODULE_9__.f6,{theme:defaultTheme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_10__.Z,{components:defaultComponents},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,null))))))}}}}]);