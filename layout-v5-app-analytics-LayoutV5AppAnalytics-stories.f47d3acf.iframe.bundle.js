"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[7128],{"./node_modules/@mui/icons-material/KeyboardArrowLeftRounded.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@mui/icons-material/node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.Z=void 0;var _createSvgIcon=_interopRequireDefault(__webpack_require__("./node_modules/@mui/icons-material/utils/createSvgIcon.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");exports.Z=(0,_createSvgIcon.default)((0,_jsxRuntime.jsx)("path",{d:"M14.71 15.88 10.83 12l3.88-3.88c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42"}),"KeyboardArrowLeftRounded")},"./node_modules/@mui/icons-material/KeyboardArrowRightRounded.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@mui/icons-material/node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.Z=void 0;var _createSvgIcon=_interopRequireDefault(__webpack_require__("./node_modules/@mui/icons-material/utils/createSvgIcon.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");exports.Z=(0,_createSvgIcon.default)((0,_jsxRuntime.jsx)("path",{d:"M9.29 15.88 13.17 12 9.29 8.12a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42"}),"KeyboardArrowRightRounded")},"./blocks/layout-v5-app-analytics/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const LayoutV5AppAnalyticsraw_namespaceObject='import React from "react";\nimport KeyboardArrowLeftRounded from "@mui/icons-material/KeyboardArrowLeftRounded";\nimport KeyboardArrowRightRounded from "@mui/icons-material/KeyboardArrowRightRounded";\nimport MenuRounded from "@mui/icons-material/MenuRounded";\nimport Box from "@mui/material/Box";\nimport ButtonBase from "@mui/material/ButtonBase";\nimport CssBaseline from "@mui/material/CssBaseline";\nimport Grid from "@mui/material/Grid";\nimport IconButton from "@mui/material/IconButton";\nimport { alpha, createTheme, ThemeProvider } from "@mui/material/styles";\nimport Tab from "@mui/material/Tab";\nimport Typography from "@mui/material/Typography";\nimport useScrollTrigger from "@mui/material/useScrollTrigger";\nimport {\n  Content,\n  EdgeSidebar,\n  EdgeTrigger,\n  Header,\n  Root,\n  SidebarContent,\n  Subheader,\n} from "../layout-core-v5";\nimport {\n  IconNavMockup,\n  LinkNavMockup,\n  SideNavUserInfoMockup,\n  StatCardMockup,\n  TopUsersCardMockup,\n  UserActiveCardMockup,\n} from "../mockup-dashboard";\nimport { UnderlineTabs } from "../mockup-tabs";\nimport { Word } from "../mockup-typography";\n\nconst theme = createTheme({\n  palette: {\n    primary: {\n      main: "#0064FE",\n    },\n    error: {\n      main: "#FD3E5B",\n    },\n    grey: {\n      50: "#f8fafc",\n      100: "#f1f5f9",\n      200: "#e2e8f0",\n      300: "#cbd5e1",\n      400: "#94a3b8",\n      500: "#64748b",\n      600: "#475569",\n      700: "#334155",\n      800: "#1e293b",\n      900: "#0f172a",\n    },\n  },\n});\n\nexport const LayoutAppAnalytics = () => {\n  const [tabIndex, setTabIndex] = React.useState(0);\n  const trigger = useScrollTrigger({\n    threshold: 0,\n    disableHysteresis: true,\n  });\n  return (\n    <ThemeProvider theme={theme}>\n      <Root\n        scheme={{\n          header: {\n            config: {\n              xs: {\n                position: "sticky",\n                height: 48,\n              },\n              sm: {\n                position: "sticky",\n                height: 64,\n              },\n              md: {\n                position: "sticky",\n                height: 72,\n              },\n            },\n          },\n          subheader: {\n            config: {\n              xs: {\n                position: "sticky",\n                height: 44,\n              },\n              sm: {\n                position: "sticky",\n                height: 44,\n              },\n              md: {\n                position: "sticky",\n                height: 48,\n              },\n            },\n          },\n          leftEdgeSidebar: {\n            autoCollapse: "md",\n            config: {\n              xs: {\n                variant: "temporary",\n                width: "100vw",\n              },\n              md: {\n                variant: "permanent",\n                width: 256,\n                collapsible: true,\n                collapsedWidth: 72,\n                uncollapsedOnHover: true,\n              },\n            },\n          },\n        }}\n      >\n        <CssBaseline />\n        <Header\n          sx={{\n            bgcolor: "rgba(255,255,255,0.5)",\n            backdropFilter: "blur(12px)",\n            ...(trigger && {\n              transition: "0.2s",\n              boxShadow: "0 0 4px 0 #e2e8f0",\n              "&:before": {\n                content: \'""\',\n                position: "absolute",\n                display: "block",\n                width: "100%",\n                height: "1px",\n                bgcolor: "grey.200",\n                bottom: 0,\n              },\n            }),\n          }}\n        >\n          <Box\n            sx={{\n              px: { xs: 1, md: 2.5 },\n              display: "flex",\n              alignItems: "center",\n              gap: 1,\n              height: { xs: 52, sm: 64, md: 72 },\n            }}\n          >\n            <EdgeTrigger target={{ anchor: "left", field: "open" }}>\n              {(open, setOpen) => (\n                <IconButton onClick={() => setOpen(!open)}>\n                  <MenuRounded />\n                </IconButton>\n              )}\n            </EdgeTrigger>\n            <Typography\n              variant="h6"\n              sx={{ fontSize: "clamp(18px, 1vw + 1rem, 24px)" }}\n            >\n              <b>Analytics</b>\n            </Typography>\n          </Box>\n        </Header>\n        <Subheader>\n          <UnderlineTabs\n            value={tabIndex}\n            onChange={(event, index) => setTabIndex(index)}\n            sx={{\n              minHeight: { xs: 44, md: 48 },\n              px: 2,\n              "& .MuiTab-root": {\n                minHeight: { xs: 44, md: 48 },\n                minWidth: 0,\n                fontSize: { md: 16 },\n              },\n            }}\n          >\n            <Tab label={<Word cached />} disableTouchRipple />\n            <Tab label={<Word cached />} disableTouchRipple />\n            <Tab label={<Word cached />} disableTouchRipple />\n          </UnderlineTabs>\n        </Subheader>\n        <EdgeSidebar\n          anchor="left"\n          PaperProps={{\n            sx: {\n              overflow: "visible",\n              maxWidth: 375,\n              "&.AppEdgeSidebar-paperExpanded": {\n                boxShadow: `0 0 12px 0 ${alpha("#64748b", 0.2)}`,\n              },\n            },\n          }}\n        >\n          <EdgeTrigger\n            target={{ anchor: "left", field: "open" }}\n            sx={{\n              position: "absolute",\n              top: 48,\n              right: { xs: 8, sm: -24 },\n              zIndex: 1,\n            }}\n          >\n            {(open, setOpen) => (\n              <IconButton\n                onClick={() => setOpen(!open)}\n                sx={{\n                  bgcolor: "background.paper",\n                  border: "1px solid",\n                  borderColor: "grey.200",\n                  boxShadow: "0 1px 4px 0 rgba(0,0,0,0.12)",\n                  "&:hover": {\n                    bgcolor: "#f5f5f5",\n                  },\n                }}\n              >\n                <KeyboardArrowLeftRounded />\n              </IconButton>\n            )}\n          </EdgeTrigger>\n          <SidebarContent>\n            <SideNavUserInfoMockup />\n            <Box\n              sx={{\n                borderTop: "1px solid",\n                borderColor: "grey.200",\n                display: "flex",\n                height: "100%",\n              }}\n            >\n              <IconNavMockup size="small" />\n              <LinkNavMockup />\n            </Box>\n          </SidebarContent>\n          <EdgeTrigger target={{ anchor: "left", field: "collapsed" }}>\n            {(collapsed, setCollapsed) => (\n              <ButtonBase\n                onClick={() => setCollapsed(!collapsed)}\n                sx={{\n                  height: 48,\n                  width: "100%",\n                  borderTop: "1px solid",\n                  borderColor: "grey.200",\n                }}\n              >\n                {collapsed ? (\n                  <KeyboardArrowRightRounded />\n                ) : (\n                  <KeyboardArrowLeftRounded />\n                )}\n              </ButtonBase>\n            )}\n          </EdgeTrigger>\n        </EdgeSidebar>\n        <Content>\n          <Box\n            sx={{\n              height: "16vh",\n              minHeight: 240,\n              borderRadius: 2,\n              bgcolor: "#eaeff7",\n              m: 2,\n            }}\n          />\n          <Box sx={{ px: 2 }}>\n            <Grid container spacing={2}>\n              <Grid item xs={12} sm={6} md={8} container spacing={2}>\n                <Grid item xs={6}>\n                  <StatCardMockup />\n                </Grid>\n                <Grid item xs={6}>\n                  <StatCardMockup />\n                </Grid>\n                <Grid item xs={6}>\n                  <StatCardMockup />\n                </Grid>\n                <Grid item xs={6}>\n                  <StatCardMockup />\n                </Grid>\n                <Grid item xs={12} md={6}>\n                  <UserActiveCardMockup />\n                </Grid>\n              </Grid>\n              <Grid item xs={12} sm={6} md={4}>\n                <TopUsersCardMockup sx={{ height: "100%" }} />\n              </Grid>\n            </Grid>\n          </Box>\n          <br />\n          <br />\n          <br />\n        </Content>\n      </Root>\n    </ThemeProvider>\n  );\n};\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Layout v5 (LEGACY)/App/Analytics"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone layout-v5-app-analytics\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"layoutappanalytics",children:"LayoutAppAnalytics"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:LayoutV5AppAnalyticsraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./blocks/layout-v5-app-analytics/LayoutV5AppAnalytics.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Analytics:()=>Analytics,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LayoutV5AppAnalytics_stories});var react=__webpack_require__("./node_modules/react/index.js"),googleFont=__webpack_require__("./.storybook/decorators/googleFont.tsx"),storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),KeyboardArrowLeftRounded=__webpack_require__("./node_modules/@mui/icons-material/KeyboardArrowLeftRounded.js"),KeyboardArrowRightRounded=__webpack_require__("./node_modules/@mui/icons-material/KeyboardArrowRightRounded.js"),MenuRounded=__webpack_require__("./node_modules/@mui/icons-material/MenuRounded.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),ButtonBase=__webpack_require__("./node_modules/@mui/material/ButtonBase/ButtonBase.js"),CssBaseline=__webpack_require__("./node_modules/@mui/material/CssBaseline/CssBaseline.js"),Grid=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),IconButton=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),ThemeProvider=__webpack_require__("./node_modules/@mui/material/styles/ThemeProvider.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/colorManipulator/colorManipulator.js"),Tab=__webpack_require__("./node_modules/@mui/material/Tab/Tab.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),useScrollTrigger=__webpack_require__("./node_modules/@mui/material/useScrollTrigger/useScrollTrigger.js"),layout_core_v5=__webpack_require__("./blocks/layout-core-v5/index.ts"),mockup_dashboard=__webpack_require__("./blocks/mockup-dashboard/index.ts"),mockup_tabs=__webpack_require__("./blocks/mockup-tabs/index.ts"),mockup_typography=__webpack_require__("./blocks/mockup-typography/index.ts");const theme=(0,createTheme.Z)({palette:{primary:{main:"#0064FE"},error:{main:"#FD3E5B"},grey:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"}}}),LayoutAppAnalytics=()=>{const[tabIndex,setTabIndex]=react.useState(0),trigger=(0,useScrollTrigger.Z)({threshold:0,disableHysteresis:!0});return react.createElement(ThemeProvider.Z,{theme},react.createElement(layout_core_v5.fC,{scheme:{header:{config:{xs:{position:"sticky",height:48},sm:{position:"sticky",height:64},md:{position:"sticky",height:72}}},subheader:{config:{xs:{position:"sticky",height:44},sm:{position:"sticky",height:44},md:{position:"sticky",height:48}}},leftEdgeSidebar:{autoCollapse:"md",config:{xs:{variant:"temporary",width:"100vw"},md:{variant:"permanent",width:256,collapsible:!0,collapsedWidth:72,uncollapsedOnHover:!0}}}}},react.createElement(CssBaseline.ZP,null),react.createElement(layout_core_v5.h4,{sx:{bgcolor:"rgba(255,255,255,0.5)",backdropFilter:"blur(12px)",...trigger&&{transition:"0.2s",boxShadow:"0 0 4px 0 #e2e8f0","&:before":{content:'""',position:"absolute",display:"block",width:"100%",height:"1px",bgcolor:"grey.200",bottom:0}}}},react.createElement(Box.Z,{sx:{px:{xs:1,md:2.5},display:"flex",alignItems:"center",gap:1,height:{xs:52,sm:64,md:72}}},react.createElement(layout_core_v5.Rd,{target:{anchor:"left",field:"open"}},((open,setOpen)=>react.createElement(IconButton.Z,{onClick:()=>setOpen(!open)},react.createElement(MenuRounded.Z,null)))),react.createElement(Typography.Z,{variant:"h6",sx:{fontSize:"clamp(18px, 1vw + 1rem, 24px)"}},react.createElement("b",null,"Analytics")))),react.createElement(layout_core_v5.fi,null,react.createElement(mockup_tabs.D,{value:tabIndex,onChange:(event,index)=>setTabIndex(index),sx:{minHeight:{xs:44,md:48},px:2,"& .MuiTab-root":{minHeight:{xs:44,md:48},minWidth:0,fontSize:{md:16}}}},react.createElement(Tab.Z,{label:react.createElement(mockup_typography.B,{cached:!0}),disableTouchRipple:!0}),react.createElement(Tab.Z,{label:react.createElement(mockup_typography.B,{cached:!0}),disableTouchRipple:!0}),react.createElement(Tab.Z,{label:react.createElement(mockup_typography.B,{cached:!0}),disableTouchRipple:!0}))),react.createElement(layout_core_v5.NW,{anchor:"left",PaperProps:{sx:{overflow:"visible",maxWidth:375,"&.AppEdgeSidebar-paperExpanded":{boxShadow:`0 0 12px 0 ${(0,colorManipulator.Fq)("#64748b",.2)}`}}}},react.createElement(layout_core_v5.Rd,{target:{anchor:"left",field:"open"},sx:{position:"absolute",top:48,right:{xs:8,sm:-24},zIndex:1}},((open,setOpen)=>react.createElement(IconButton.Z,{onClick:()=>setOpen(!open),sx:{bgcolor:"background.paper",border:"1px solid",borderColor:"grey.200",boxShadow:"0 1px 4px 0 rgba(0,0,0,0.12)","&:hover":{bgcolor:"#f5f5f5"}}},react.createElement(KeyboardArrowLeftRounded.Z,null)))),react.createElement(layout_core_v5.TZ,null,react.createElement(mockup_dashboard.HM,null),react.createElement(Box.Z,{sx:{borderTop:"1px solid",borderColor:"grey.200",display:"flex",height:"100%"}},react.createElement(mockup_dashboard.hh,{size:"small"}),react.createElement(mockup_dashboard.ov,null))),react.createElement(layout_core_v5.Rd,{target:{anchor:"left",field:"collapsed"}},((collapsed,setCollapsed)=>react.createElement(ButtonBase.Z,{onClick:()=>setCollapsed(!collapsed),sx:{height:48,width:"100%",borderTop:"1px solid",borderColor:"grey.200"}},collapsed?react.createElement(KeyboardArrowRightRounded.Z,null):react.createElement(KeyboardArrowLeftRounded.Z,null))))),react.createElement(layout_core_v5.VY,null,react.createElement(Box.Z,{sx:{height:"16vh",minHeight:240,borderRadius:2,bgcolor:"#eaeff7",m:2}}),react.createElement(Box.Z,{sx:{px:2}},react.createElement(Grid.ZP,{container:!0,spacing:2},react.createElement(Grid.ZP,{item:!0,xs:12,sm:6,md:8,container:!0,spacing:2},react.createElement(Grid.ZP,{item:!0,xs:6},react.createElement(mockup_dashboard.kV,null)),react.createElement(Grid.ZP,{item:!0,xs:6},react.createElement(mockup_dashboard.kV,null)),react.createElement(Grid.ZP,{item:!0,xs:6},react.createElement(mockup_dashboard.kV,null)),react.createElement(Grid.ZP,{item:!0,xs:6},react.createElement(mockup_dashboard.kV,null)),react.createElement(Grid.ZP,{item:!0,xs:12,md:6},react.createElement(mockup_dashboard.XX,null))),react.createElement(Grid.ZP,{item:!0,xs:12,sm:6,md:4},react.createElement(mockup_dashboard.po,{sx:{height:"100%"}})))),react.createElement("br",null),react.createElement("br",null),react.createElement("br",null))))};var usage=__webpack_require__("./blocks/layout-v5-app-analytics/usage.mdx");const LayoutV5AppAnalytics_stories={title:"Layout v5 (LEGACY)/App/Analytics",component:LayoutAppAnalytics,parameters:{layout:"fullscreen",githubUsername:"siriwatknp"},decorators:[(0,storyDialog.Z)(usage.default),(0,googleFont.Z)([])]},Analytics={render:()=>react.createElement(LayoutAppAnalytics,null)};Analytics.parameters={...Analytics.parameters,docs:{...Analytics.parameters?.docs,source:{originalSource:"{\n  render: () => <LayoutAppAnalytics />\n}",...Analytics.parameters?.docs?.source}}};const __namedExportsOrder=["Analytics"]},"./blocks/mockup-dashboard/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{hh:()=>IconNavMockup,ov:()=>LinkNavMockup,HM:()=>SideNavUserInfoMockup,kV:()=>StatCardMockup,po:()=>TopUsersCardMockup,XX:()=>UserActiveCardMockup});var react=__webpack_require__("./node_modules/react/index.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),mockup_shape=__webpack_require__("./blocks/mockup-shape/index.ts"),mockup_typography=__webpack_require__("./blocks/mockup-typography/index.ts"),mockup_utils=__webpack_require__("./blocks/mockup-utils/index.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const SideNavUserInfoMockup=({collapsed,...props})=>react.createElement(Box.Z,_extends({},props,{sx:{borderRadius:1,bgcolor:mockup_utils.bh,p:1.5,display:"flex",alignItems:"center",...props.sx}}),react.createElement(mockup_shape.Cd,{sx:{fontSize:collapsed?36:48,transition:"0.2s"}}),!collapsed&&react.createElement(Box.Z,{sx:{ml:1.5,minWidth:"0px"}},react.createElement(mockup_typography.B,null),react.createElement(mockup_typography.B,{sx:{height:10,borderRadius:2,mt:.75,bgcolor:mockup_utils.PY}})));function StatCard_extends(){return StatCard_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},StatCard_extends.apply(this,arguments)}const StatCardMockup=props=>react.createElement(Box.Z,StatCard_extends({},props,{sx:{borderRadius:1,border:"1px solid",borderColor:mockup_utils.PY,bgcolor:"background.paper",p:1.5,display:"flex",alignItems:"center",boxShadow:"0 2px 6px 0 rgba(0,0,0,0.08)",...props.sx}}),react.createElement(mockup_shape.bK,null),react.createElement(Box.Z,{sx:{ml:1.5,minWidth:"0px"}},react.createElement(mockup_typography.B,{sx:{height:10,borderRadius:3,bgcolor:mockup_utils.PY,m:0}}),react.createElement(mockup_typography.B,{sx:{mt:.5,mb:0}})));var AppRegistrationRounded=__webpack_require__("./node_modules/@mui/icons-material/AppRegistrationRounded.js"),EventNoteRounded=__webpack_require__("./node_modules/@mui/icons-material/EventNoteRounded.js"),ForumRounded=__webpack_require__("./node_modules/@mui/icons-material/ForumRounded.js"),HomeRounded=__webpack_require__("./node_modules/@mui/icons-material/HomeRounded.js"),SearchRounded=__webpack_require__("./node_modules/@mui/icons-material/SearchRounded.js"),SettingsRounded=__webpack_require__("./node_modules/@mui/icons-material/SettingsRounded.js"),IconButton=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/colorManipulator/colorManipulator.js");function IconNav_extends(){return IconNav_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},IconNav_extends.apply(this,arguments)}const defaultIcons=[react.createElement(SearchRounded.Z,null),react.createElement(HomeRounded.Z,null),react.createElement(ForumRounded.Z,null),react.createElement(SettingsRounded.Z,null),react.createElement(AppRegistrationRounded.Z,null),react.createElement(EventNoteRounded.Z,null)],IconNavMockup=({activeIndex=1,icons=defaultIcons,size,...props})=>react.createElement(Box.Z,IconNav_extends({},props,{sx:{display:"inline-flex",flexDirection:"column",gap:2,p:2,bgcolor:mockup_utils.bh,"& .MuiIconButton-root":{borderRadius:2},...props.sx}}),icons.map(((icon,index)=>react.createElement(IconButton.Z,{key:index,disableTouchRipple:!0,size,sx:{...0===index&&{mb:0},...index===activeIndex&&{bgcolor:theme=>(0,colorManipulator.Fq)(theme.palette.primary.main,.12),"& svg":{color:theme=>theme.palette.primary.main}}}},icon))));var List=__webpack_require__("./node_modules/@mui/material/List/List.js"),ListItem=__webpack_require__("./node_modules/@mui/material/ListItem/ListItem.js");function LinkNav_extends(){return LinkNav_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},LinkNav_extends.apply(this,arguments)}const LinkNavMockup=({lineCount=5,...props})=>react.createElement(List.Z,LinkNav_extends({},props,{sx:{flexGrow:1,p:2,"& .MuiListItem-root":{borderRadius:2,"&:hover":{bgcolor:theme=>(0,colorManipulator.Fq)(theme.palette.grey[300],.2),color:"grey.500"}},...props.sx}}),[...Array(lineCount).fill(void 0)].map(((_,index)=>react.createElement(ListItem.ZP,{key:index,button:!0},react.createElement(mockup_typography.B,{sx:{my:1}})))));var Avatar=__webpack_require__("./node_modules/@mui/material/Avatar/Avatar.js"),Divider=__webpack_require__("./node_modules/@mui/material/Divider/Divider.js"),ListItemAvatar=__webpack_require__("./node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js");function TopUsersCard_extends(){return TopUsersCard_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},TopUsersCard_extends.apply(this,arguments)}const TopUsersCardMockup=({userCount=5,...props})=>react.createElement(Box.Z,TopUsersCard_extends({},props,{sx:{borderRadius:1,border:"1px solid",borderColor:mockup_utils.PY,bgcolor:"background.paper",boxShadow:"0 2px 6px 0 rgba(0,0,0,0.08)",...props.sx}}),react.createElement(Box.Z,{sx:{display:"flex",p:1.5,alignItems:"center"}},react.createElement(Box.Z,null,react.createElement(mockup_typography.B,{sx:{height:10,borderRadius:3,bgcolor:mockup_utils.PY,m:0,width:40}}),react.createElement(mockup_typography.B,{sx:{mt:.5,mb:0}})),react.createElement(mockup_shape.Cd,{sx:{ml:"auto",fontSize:24}})),react.createElement(Divider.Z,null),react.createElement(List.Z,null,[...Array(userCount).fill(void 0)].map(((_,index)=>react.createElement(ListItem.ZP,{key:index},react.createElement(ListItemAvatar.Z,null,react.createElement(Avatar.Z,null)),react.createElement(mockup_typography.B,null))))));var LinearProgress=__webpack_require__("./node_modules/@mui/material/LinearProgress/LinearProgress.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js");function UserActiveCard_extends(){return UserActiveCard_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},UserActiveCard_extends.apply(this,arguments)}const UserActiveCardMockup=props=>react.createElement(Box.Z,UserActiveCard_extends({},props,{sx:{borderRadius:1,border:"1px solid",borderColor:mockup_utils.PY,bgcolor:"background.paper",p:1.5,boxShadow:"0 2px 6px 0 rgba(0,0,0,0.08)",...props.sx}}),react.createElement(Box.Z,{sx:{display:"flex",alignItems:"center",width:"100%"}},react.createElement(mockup_typography.B,{sx:{bgcolor:mockup_utils.PY}}),react.createElement(mockup_shape.Cd,{sx:{fontSize:20,ml:"auto"}})),react.createElement("br",null),react.createElement(Box.Z,{sx:{display:"flex",justifyContent:"space-around"}},react.createElement(Box.Z,null,react.createElement(Box.Z,{sx:{display:"flex",alignItems:"center"}},react.createElement(mockup_shape.bK,{sx:{fontSize:16,bgcolor:"primary.main",mr:1}}),react.createElement(Typography.Z,{variant:"h4"},react.createElement("b",null,"92%"))),react.createElement(mockup_typography.B,{sx:{bgcolor:mockup_utils.PY,ml:3,height:12,borderRadius:2,width:48}})),react.createElement(Box.Z,null,react.createElement(Box.Z,{sx:{display:"flex",alignItems:"center"}},react.createElement(mockup_shape.bK,{sx:{fontSize:16,bgcolor:"error.main",mr:1}}),react.createElement(Typography.Z,{variant:"h4"},react.createElement("b",null,"8%"))),react.createElement(mockup_typography.B,{sx:{bgcolor:mockup_utils.PY,ml:3,height:12,borderRadius:2,width:48}}))),react.createElement("br",null),react.createElement(LinearProgress.Z,{variant:"determinate",value:92,sx:{height:10,borderRadius:3,bgcolor:mockup_utils.PY,"& > .MuiLinearProgress-bar":{borderRadius:3}}}),react.createElement(Box.Z,{height:16}),react.createElement(LinearProgress.Z,{variant:"determinate",value:8,sx:{height:10,borderRadius:3,bgcolor:mockup_utils.PY,"& > .MuiLinearProgress-bar":{borderRadius:3,bgcolor:"error.main"}}}),react.createElement("br",null))},"./blocks/mockup-shape/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cd:()=>Circle,DR:()=>Pill,bK:()=>Square});var react=__webpack_require__("./node_modules/react/index.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),mockup_utils=__webpack_require__("./blocks/mockup-utils/index.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Square=props=>react.createElement(Box.Z,_extends({},props,{sx:{width:"1em",height:"1em",fontSize:"40px",backgroundColor:mockup_utils.j9,borderRadius:1,flexShrink:0,...props.sx}}));function Pill_extends(){return Pill_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Pill_extends.apply(this,arguments)}const Pill=props=>react.createElement(Box.Z,Pill_extends({},props,{sx:{width:56,height:24,backgroundColor:mockup_utils.j9,borderRadius:5,...props.sx}}));function Circle_extends(){return Circle_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Circle_extends.apply(this,arguments)}const Circle=props=>react.createElement(Box.Z,Circle_extends({},props,{sx:{width:"1em",height:"1em",fontSize:"40px",backgroundColor:mockup_utils.j9,borderRadius:10,flexShrink:0,...props.sx}}))},"./blocks/mockup-tabs/MockupTabs.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>UnderlineTabs});var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/Tabs/Tabs.js");const UnderlineTabs=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.ZP)(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_1__.Z)((({theme})=>({"&:before":{content:'""',display:"block",height:"1px",backgroundColor:theme.palette.grey[200],left:0,bottom:0,width:"100%",position:"absolute"},"& .MuiTab-root":{textTransform:"none",paddingLeft:0,paddingRight:0,marginLeft:theme.spacing(2),marginRight:theme.spacing(2),"&:first-of-type":{marginLeft:0},"&:last-of-type":{marginRight:0}}})))},"./blocks/mockup-tabs/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>_MockupTabs__WEBPACK_IMPORTED_MODULE_0__.D});var _MockupTabs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./blocks/mockup-tabs/MockupTabs.tsx")},"./blocks/mockup-typography/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H1:()=>H1,x:()=>Text,B:()=>Word});var react=__webpack_require__("./node_modules/react/index.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),mockup_utils=__webpack_require__("./blocks/mockup-utils/index.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const createTypography=generateSx=>({cached,sx=[],...props})=>{const ref=react.useRef(generateSx()),resolvedSx=(cached?ref.current:generateSx())||[];return react.createElement(Box.Z,_extends({},props,{sx:[{height:16,borderRadius:1,bgcolor:mockup_utils.j9},...Array.isArray(resolvedSx)?resolvedSx:[resolvedSx],...Array.isArray(sx)?sx:[sx]]}))},H1=createTypography((()=>({height:40,width:(0,mockup_utils.W7)(12,20,"ch"),maxWidth:"100%",mt:3,mb:1}))),Text=createTypography((()=>({height:16,mt:1.5,mb:1.5,width:"100%",maxWidth:"100%"}))),Word=createTypography((()=>({height:16,width:(0,mockup_utils.W7)(8,14,"ch"),maxWidth:"100%"})))},"./blocks/mockup-utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{PY:()=>getLightGrey,W7:()=>randomBetween,bh:()=>getLightestGrey,j9:()=>getBaseGrey});const getBaseGrey=theme=>"dark"===theme.palette.mode?"rgba(255,255,255,0.12)":"grey.300",getLightGrey=theme=>"dark"===theme.palette.mode?"rgba(255,255,255,0.09)":"grey.200",getLightestGrey=theme=>"dark"===theme.palette.mode?"rgba(255,255,255,0.07)":"grey.50",randomBetween=(min,max,unit)=>{const result=Math.floor(Math.random()*(max-min))+min;return unit?`${result}${unit}`:result}}}]);