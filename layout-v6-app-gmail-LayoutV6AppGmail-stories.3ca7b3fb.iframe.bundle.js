"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[3286],{"./blocks/layout-v6-app-gmail/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const LayoutV6AppGmailraw_namespaceObject='import React from "react";\nimport CloseIcon from "@mui/icons-material/Close";\nimport EditIcon from "@mui/icons-material/EditOutlined";\nimport MenuIcon from "@mui/icons-material/Menu";\nimport MoreVert from "@mui/icons-material/MoreVert";\nimport RefreshIcon from "@mui/icons-material/Refresh";\nimport SettingsIcon from "@mui/icons-material/SettingsOutlined";\nimport Box from "@mui/material/Box";\nimport Button from "@mui/material/Button";\nimport Checkbox from "@mui/material/Checkbox";\nimport IconButton from "@mui/material/IconButton";\nimport Typography from "@mui/material/Typography";\nimport { AvatarGoogle } from "../avatar-google";\nimport {\n  applyEdgeSidebarRightStyles,\n  applyEdgeSidebarStyles,\n  applyHeaderStyles,\n  applyInsetSidebarStyles,\n  applyRootStyles,\n  Content,\n  EdgeSidebar,\n  EdgeSidebarRight,\n  Header,\n  InsetSidebar,\n  InsetSidebarContent,\n  layoutClasses,\n  Root,\n  toggleEdgeSidebarCollapse,\n} from "../layout-core-v6";\n\nexport function LayoutV6AppGmail() {\n  const [showDrawer, setShowDrawer] = React.useState(false);\n  const [showSettings, setShowSettings] = React.useState(false);\n  return (\n    <Box\n      sx={{\n        display: "flex",\n      }}\n    >\n      <Root\n        sx={{\n          flex: "auto",\n          bgcolor: "#F5F8FC",\n          "--EdgeSidebar-sidelineWidth": "0px",\n          ...applyRootStyles({ height: "100lvh", fixedHeight: true }),\n          [`& .${layoutClasses.Content}`]: {\n            marginBottom: "1rem",\n          },\n          [`& .${layoutClasses.Header}`]: {\n            background: "unset",\n            borderBottom: "unset",\n          },\n          [`& .${layoutClasses.EdgeSidebarContent}`]: {\n            borderRight: "0px",\n          },\n          [`& .${layoutClasses.InsetSidebarContent}`]: {\n            background: "unset",\n          },\n        }}\n      >\n        <Header\n          sx={{\n            p: 1,\n            ...applyHeaderStyles({ height: "64px", fullWidth: true }),\n          }}\n        >\n          <IconButton\n            className={layoutClasses.EdgeSidebarCollapser}\n            size="large"\n            sx={{ mx: 0.5 }}\n            onClick={(event) => {\n              toggleEdgeSidebarCollapse({ event });\n            }}\n          >\n            <MenuIcon />\n          </IconButton>\n          <Box\n            component="img"\n            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"\n            srcSet="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png 1x, https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png 2x "\n            alt=""\n            aria-hidden="true"\n            role="presentation"\n          />\n          <Box sx={{ width: { xs: 8, md: 80 } }} />\n          <Box\n            sx={{\n              minWidth: 0,\n              flex: 9999,\n              maxWidth: 720,\n              height: 48,\n              borderRadius: "48px",\n              bgcolor: "#eaf1fb",\n            }}\n          />\n          <Box sx={{ flex: 1, minWidth: 16 }} />\n          <IconButton sx={{ mx: 1 }} onClick={() => setShowSettings(true)}>\n            <SettingsIcon />\n          </IconButton>\n          <Box sx={{ mx: 1, alignSelf: "center", lineHeight: 0 }}>\n            <AvatarGoogle size={32} />\n          </Box>\n        </Header>\n        <EdgeSidebar\n          sx={(theme) => ({\n            px: 1,\n            gap: 1,\n            containerType: "inline-size",\n            ...applyEdgeSidebarStyles({\n              theme,\n              config: {\n                xs: {\n                  variant: "permanent",\n                  collapsedWidth: "72px",\n                  autoCollapse: "sm",\n                  expandOnHover: true,\n                },\n              },\n            }),\n          })}\n        >\n          <Button\n            variant="contained"\n            startIcon={<EditIcon />}\n            size="large"\n            sx={{\n              flexShrink: 0,\n              boxShadow: "none !important",\n              borderRadius: "12px",\n              height: "56px",\n              color: "#001d35",\n              bgcolor: "#c2e7ff",\n              textTransform: "none",\n              transition: "width 0.2s",\n              justifyContent: "flex-start",\n              overflow: "hidden",\n              minWidth: "initial",\n              width: {\n                "@": 56,\n                "@200": 140,\n              },\n              padding: {\n                "@": "1rem",\n                "@200": "8px 22px",\n              },\n              "& .MuiButton-startIcon": {\n                marginRight: {\n                  "@": "999px",\n                  "@200": "8px",\n                },\n                marginLeft: {\n                  "@": "2px",\n                  "@200": 0,\n                },\n              },\n            }}\n          >\n            Compose\n          </Button>\n          <Box sx={{ minHeight: 0, flex: 1, overflow: "auto" }}>\n            <Box sx={{ height: "2000px", flex: "none" }}></Box>\n          </Box>\n        </EdgeSidebar>\n        <EdgeSidebarRight\n          sx={(theme) => ({\n            ...applyEdgeSidebarRightStyles({\n              theme,\n              config: {\n                xs: {\n                  variant: "temporary",\n                },\n                [theme.breakpoints.up(780)]: {\n                  variant: "permanent",\n                  width: "56px",\n                },\n              },\n            }),\n          })}\n        >\n          <IconButton\n            onClick={() => {\n              setShowDrawer(true);\n            }}\n            sx={{\n              height: 56,\n              backgroundRepeat: "no-repeat",\n              backgroundSize: "24px",\n              backgroundPosition: "center",\n              backgroundImage:\n                \'url("https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png")\',\n            }}\n          ></IconButton>\n        </EdgeSidebarRight>\n        <Content sx={{ gap: 1 }}>\n          <Box\n            sx={{\n              borderRadius: "16px",\n              bgcolor: "background.paper",\n              height: "100%",\n              overflow: "auto",\n            }}\n          >\n            <Box sx={{ height: "2000px" }}>\n              <Box\n                sx={{\n                  p: 1,\n                  display: "flex",\n                  gap: 1,\n                  position: "sticky",\n                  top: 0,\n                  alignItems: "center",\n                }}\n              >\n                <Checkbox />\n                <IconButton size="small">\n                  <RefreshIcon />\n                </IconButton>\n                <IconButton size="small">\n                  <MoreVert />\n                </IconButton>\n              </Box>\n            </Box>\n          </Box>\n          {showSettings && (\n            <InsetSidebar\n              sx={{\n                ...applyInsetSidebarStyles({\n                  position: "absolute",\n                  width: "300px",\n                }),\n              }}\n            >\n              <InsetSidebarContent\n                sx={{\n                  borderRadius: "16px",\n                  bgcolor: "background.paper",\n                }}\n              >\n                <Box\n                  sx={{\n                    height: "2000px",\n                    flex: "none",\n                  }}\n                >\n                  <Box sx={{ position: "sticky", top: 0 }}>\n                    <Box\n                      sx={{\n                        display: "flex",\n                        p: 2,\n                      }}\n                    >\n                      <Typography variant="h6" sx={{ mr: "auto" }}>\n                        Quick settings\n                      </Typography>\n                      <IconButton\n                        size="small"\n                        onClick={() => setShowSettings(false)}\n                      >\n                        <CloseIcon />\n                      </IconButton>\n                    </Box>\n                    <Box\n                      sx={{\n                        p: 2,\n                        pt: 0,\n                        borderBottom: "1px solid",\n                        borderColor: "divider",\n                      }}\n                    >\n                      <Button\n                        fullWidth\n                        variant="outlined"\n                        sx={{ borderRadius: "40px" }}\n                      >\n                        See all settings\n                      </Button>\n                    </Box>\n                  </Box>\n                </Box>\n              </InsetSidebarContent>\n            </InsetSidebar>\n          )}\n        </Content>\n      </Root>\n      {showDrawer && <Box sx={{ height: "100lvh", width: "300px" }}></Box>}\n    </Box>\n  );\n}\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"LayoutV6/App/Gmail"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone layout-v6-app-gmail\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"layoutv6appgmail",children:"LayoutV6AppGmail"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:LayoutV6AppGmailraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./blocks/layout-v6-app-gmail/LayoutV6AppGmail.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Gmail:()=>Gmail,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LayoutV6AppGmail_stories});var react=__webpack_require__("./node_modules/react/index.js"),googleFont=__webpack_require__("./.storybook/decorators/googleFont.tsx"),storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),Close=__webpack_require__("./node_modules/@mui/icons-material/Close.js"),EditOutlined=__webpack_require__("./node_modules/@mui/icons-material/EditOutlined.js"),Menu=__webpack_require__("./node_modules/@mui/icons-material/Menu.js"),MoreVert=__webpack_require__("./node_modules/@mui/icons-material/MoreVert.js"),Refresh=__webpack_require__("./node_modules/@mui/icons-material/Refresh.js"),SettingsOutlined=__webpack_require__("./node_modules/@mui/icons-material/SettingsOutlined.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),Checkbox=__webpack_require__("./node_modules/@mui/material/Checkbox/Checkbox.js"),IconButton=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),avatar_google=__webpack_require__("./blocks/avatar-google/index.ts"),layout_core_v6=__webpack_require__("./blocks/layout-core-v6/index.ts");function LayoutV6AppGmail(){const[showDrawer,setShowDrawer]=react.useState(!1),[showSettings,setShowSettings]=react.useState(!1);return react.createElement(Box.Z,{sx:{display:"flex"}},react.createElement(layout_core_v6.fC,{sx:{flex:"auto",bgcolor:"#F5F8FC","--EdgeSidebar-sidelineWidth":"0px",...(0,layout_core_v6.Hx)({height:"100lvh",fixedHeight:!0}),[`& .${layout_core_v6.KG.Content}`]:{marginBottom:"1rem"},[`& .${layout_core_v6.KG.Header}`]:{background:"unset",borderBottom:"unset"},[`& .${layout_core_v6.KG.EdgeSidebarContent}`]:{borderRight:"0px"},[`& .${layout_core_v6.KG.InsetSidebarContent}`]:{background:"unset"}}},react.createElement(layout_core_v6.h4,{sx:{p:1,...(0,layout_core_v6.pJ)({height:"64px",fullWidth:!0})}},react.createElement(IconButton.Z,{className:layout_core_v6.KG.EdgeSidebarCollapser,size:"large",sx:{mx:.5},onClick:event=>{(0,layout_core_v6.fO)({event})}},react.createElement(Menu.Z,null)),react.createElement(Box.Z,{component:"img",src:"https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png",srcSet:"https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png 1x, https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png 2x ",alt:"","aria-hidden":"true",role:"presentation"}),react.createElement(Box.Z,{sx:{width:{xs:8,md:80}}}),react.createElement(Box.Z,{sx:{minWidth:0,flex:9999,maxWidth:720,height:48,borderRadius:"48px",bgcolor:"#eaf1fb"}}),react.createElement(Box.Z,{sx:{flex:1,minWidth:16}}),react.createElement(IconButton.Z,{sx:{mx:1},onClick:()=>setShowSettings(!0)},react.createElement(SettingsOutlined.Z,null)),react.createElement(Box.Z,{sx:{mx:1,alignSelf:"center",lineHeight:0}},react.createElement(avatar_google.N,{size:32}))),react.createElement(layout_core_v6.NW,{sx:theme=>({px:1,gap:1,containerType:"inline-size",...(0,layout_core_v6.oz)({theme,config:{xs:{variant:"permanent",collapsedWidth:"72px",autoCollapse:"sm",expandOnHover:!0}}})})},react.createElement(Button.Z,{variant:"contained",startIcon:react.createElement(EditOutlined.Z,null),size:"large",sx:{flexShrink:0,boxShadow:"none !important",borderRadius:"12px",height:"56px",color:"#001d35",bgcolor:"#c2e7ff",textTransform:"none",transition:"width 0.2s",justifyContent:"flex-start",overflow:"hidden",minWidth:"initial",width:{"@":56,"@200":140},padding:{"@":"1rem","@200":"8px 22px"},"& .MuiButton-startIcon":{marginRight:{"@":"999px","@200":"8px"},marginLeft:{"@":"2px","@200":0}}}},"Compose"),react.createElement(Box.Z,{sx:{minHeight:0,flex:1,overflow:"auto"}},react.createElement(Box.Z,{sx:{height:"2000px",flex:"none"}}))),react.createElement(layout_core_v6.zC,{sx:theme=>({...(0,layout_core_v6.H7)({theme,config:{xs:{variant:"temporary"},[theme.breakpoints.up(780)]:{variant:"permanent",width:"56px"}}})})},react.createElement(IconButton.Z,{onClick:()=>{setShowDrawer(!0)},sx:{height:56,backgroundRepeat:"no-repeat",backgroundSize:"24px",backgroundPosition:"center",backgroundImage:'url("https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png")'}})),react.createElement(layout_core_v6.VY,{sx:{gap:1}},react.createElement(Box.Z,{sx:{borderRadius:"16px",bgcolor:"background.paper",height:"100%",overflow:"auto"}},react.createElement(Box.Z,{sx:{height:"2000px"}},react.createElement(Box.Z,{sx:{p:1,display:"flex",gap:1,position:"sticky",top:0,alignItems:"center"}},react.createElement(Checkbox.Z,null),react.createElement(IconButton.Z,{size:"small"},react.createElement(Refresh.Z,null)),react.createElement(IconButton.Z,{size:"small"},react.createElement(MoreVert.Z,null))))),showSettings&&react.createElement(layout_core_v6.bM,{sx:{...(0,layout_core_v6.Q5)({position:"absolute",width:"300px"})}},react.createElement(layout_core_v6.JF,{sx:{borderRadius:"16px",bgcolor:"background.paper"}},react.createElement(Box.Z,{sx:{height:"2000px",flex:"none"}},react.createElement(Box.Z,{sx:{position:"sticky",top:0}},react.createElement(Box.Z,{sx:{display:"flex",p:2}},react.createElement(Typography.Z,{variant:"h6",sx:{mr:"auto"}},"Quick settings"),react.createElement(IconButton.Z,{size:"small",onClick:()=>setShowSettings(!1)},react.createElement(Close.Z,null))),react.createElement(Box.Z,{sx:{p:2,pt:0,borderBottom:"1px solid",borderColor:"divider"}},react.createElement(Button.Z,{fullWidth:!0,variant:"outlined",sx:{borderRadius:"40px"}},"See all settings")))))))),showDrawer&&react.createElement(Box.Z,{sx:{height:"100lvh",width:"300px"}}))}var usage=__webpack_require__("./blocks/layout-v6-app-gmail/usage.mdx");const LayoutV6AppGmail_stories={title:"Layout V6/App/Gmail",component:LayoutV6AppGmail,parameters:{layout:"fullscreen",githubUsername:"siriwatknp"},decorators:[(0,storyDialog.Z)(usage.default),(0,googleFont.Z)([])]},Gmail={render:()=>react.createElement(LayoutV6AppGmail,null)};Gmail.parameters={...Gmail.parameters,docs:{...Gmail.parameters?.docs,source:{originalSource:"{\n  render: () => <LayoutV6AppGmail />\n}",...Gmail.parameters?.docs?.source}}};const __namedExportsOrder=["Gmail"]},"./.storybook/decorators/googleFont.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>googleFont});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function googleFont(fonts=[]){return Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap",rel:"stylesheet"}),fonts.map((font=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{key:font,rel:"stylesheet",href:`https://fonts.googleapis.com/css2?family=${font}&display=swap`}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js"),_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/DialogContent/DialogContent.js"),_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/DialogTitle/DialogTitle.js"),_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/SvgIcon/SvgIcon.js"),_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-ZHZY55TS.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_1__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,context){const[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z,{title:"Show source code",placement:"top-start",sx:{zIndex:1e5}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__.Z,{sx:{position:"fixed",bottom:"1rem",left:"0.5rem",zIndex:99999,borderRadius:40},onClick:()=>setOpen(!0)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_5__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"}))))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_6__.Z,{open,onClose:()=>setOpen(!1)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_7__.Z,null,"Usage"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_theming__WEBPACK_IMPORTED_MODULE_9__.f6,{theme:defaultTheme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_10__.Z,{components:defaultComponents},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,null))))))}}},"./blocks/avatar-google/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>AvatarGoogle});var react=__webpack_require__("./node_modules/react/index.js"),Avatar=__webpack_require__("./node_modules/@mui/material/Avatar/Avatar.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function AvatarGoogle({size:avatarSize=40,style,...props}){return react.createElement(Box.Z,_extends({component:"button",sx:{position:"relative",display:"inline-block","& > .MuiAvatar-root":{width:"var(--avatarSize)",height:"var(--avatarSize)"},"&:before":{width:"calc(var(--avatarSize) + 8px)",height:"calc(var(--avatarSize) + 8px)",top:"50%",left:"50%",transform:"translate(-50%, -50%)",content:'""',display:"block",position:"absolute",backgroundSize:"calc(var(--avatarSize) + 8px)",backgroundImage:'url(\'data:image/svg+xml,%3Csvg focusable="false" height="40px" version="1.1" viewBox="0 0 40 40" width="40px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="opacity:1.0"%3E%3Cpath d="M4.02,28.27C2.73,25.8,2,22.98,2,20c0-2.87,0.68-5.59,1.88-8l-1.72-1.04C0.78,13.67,0,16.75,0,20c0,3.31,0.8,6.43,2.23,9.18L4.02,28.27z" fill="%23F6AD01"%3E%3C/path%3E%3Cpath d="M32.15,33.27C28.95,36.21,24.68,38,20,38c-6.95,0-12.98-3.95-15.99-9.73l-1.79,0.91C5.55,35.61,12.26,40,20,40c5.2,0,9.93-1.98,13.48-5.23L32.15,33.27z" fill="%23249A41"%3E%3C/path%3E%3Cpath d="M33.49,34.77C37.49,31.12,40,25.85,40,20c0-5.86-2.52-11.13-6.54-14.79l-1.37,1.46C35.72,9.97,38,14.72,38,20c0,5.25-2.26,9.98-5.85,13.27L33.49,34.77z" fill="%233174F1"%3E%3C/path%3E%3Cpath d="M20,2c4.65,0,8.89,1.77,12.09,4.67l1.37-1.46C29.91,1.97,25.19,0,20,0l0,0C12.21,0,5.46,4.46,2.16,10.96L3.88,12C6.83,6.08,12.95,2,20,2" fill="%23E92D18"%3E%3C/path%3E%3C/svg%3E\')',backgroundRepeat:"no-repeat"}},style:{"--avatarSize":`${avatarSize}px`,...style}},props),react.createElement(Avatar.Z,{src:"https://lh3.googleusercontent.com/ogw/ADGmqu8IRt2zAKQDEDvqL5Egm51VKCxJm2eb-N8YELr3=s192-c-mo"}))}}}]);