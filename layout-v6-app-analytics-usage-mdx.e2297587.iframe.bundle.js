"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[815],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./blocks/layout-v6-app-analytics/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const LayoutV6AppAnalyticsraw_namespaceObject='import React from "react";\nimport ChevronLeftRounded from "@mui/icons-material/ChevronLeftRounded";\nimport MenuRounded from "@mui/icons-material/MenuRounded";\nimport Box from "@mui/material/Box";\nimport Grid from "@mui/material/Grid";\nimport IconButton from "@mui/material/IconButton";\nimport Tab from "@mui/material/Tab";\nimport Typography from "@mui/material/Typography";\nimport useScrollTrigger from "@mui/material/useScrollTrigger";\nimport Content from "../layout-core-v6/Content";\nimport EdgeSidebar, {\n  applyEdgeSidebarStyles,\n  toggleEdgeSidebarCollapse,\n  toggleTemporaryEdgeSidebar,\n} from "../layout-core-v6/EdgeSidebar";\nimport EdgeSidebarContent from "../layout-core-v6/EdgeSidebarContent";\nimport EdgeTemporaryClose from "../layout-core-v6/EdgeTemporaryClose";\nimport Header from "../layout-core-v6/Header";\nimport Root from "../layout-core-v6/Root";\nimport {\n  IconNavMockup,\n  LinkNavMockup,\n  SideNavUserInfoMockup,\n  StatCardMockup,\n  TopUsersCardMockup,\n  UserActiveCardMockup,\n} from "../mockup-dashboard";\nimport { UnderlineTabs } from "../mockup-tabs";\nimport { Word } from "../mockup-typography";\n\nexport function LayoutV6AppAnalytics() {\n  const [tabIndex, setTabIndex] = React.useState(0);\n  const trigger = useScrollTrigger({\n    threshold: 0,\n    disableHysteresis: true,\n  });\n  return (\n    <Root>\n      <Header\n        sx={{\n          height: { xs: 48, sm: 64, md: 72 },\n          bgcolor: "rgba(255,255,255,0.5)",\n          backdropFilter: "blur(12px)",\n          ...(trigger && {\n            transition: "0.2s",\n            boxShadow: "0 0 4px 0 #e2e8f0",\n            "&:before": {\n              content: \'""\',\n              position: "absolute",\n              display: "block",\n              width: "100%",\n              height: "1px",\n              bgcolor: "grey.200",\n              bottom: 0,\n            },\n          }),\n        }}\n      >\n        <Box\n          sx={{\n            px: { xs: 1, md: 2.5 },\n            display: "flex",\n            alignItems: "center",\n            gap: 1,\n            height: { xs: 52, sm: 64, md: 72 },\n          }}\n        >\n          <IconButton\n            className="EdgeSidebar-trigger"\n            onClick={() => toggleTemporaryEdgeSidebar()}\n          >\n            <MenuRounded />\n          </IconButton>\n\n          <IconButton\n            className="EdgeSidebar-collapser"\n            onClick={(event) => toggleEdgeSidebarCollapse({ event })}\n            sx={{\n              marginLeft:\n                "var(--uncollapsed, max(0px, (1px - var(--EdgeSidebar-permanentWidth)) * 240))",\n              transition: "margin-left 0.3s",\n            }}\n          >\n            <MenuRounded className="Icon-uncollapse" />\n            <ChevronLeftRounded className="Icon-collapse" />\n          </IconButton>\n\n          <Typography\n            variant="h6"\n            sx={{ fontSize: "clamp(18px, 1vw + 1rem, 24px)" }}\n          >\n            <b>Analytics</b>\n          </Typography>\n        </Box>\n      </Header>\n      <EdgeSidebar\n        sx={(theme) => ({\n          ...applyEdgeSidebarStyles({\n            theme,\n            config: {\n              xs: {\n                variant: "temporary",\n              },\n              md: {\n                variant: "persistent",\n                persistentBehavior: "none",\n              },\n              lg: {\n                autoCollapse: "xl",\n                variant: "permanent",\n                width: "300px",\n                collapsedWidth: "80px",\n                expandOnHover: true,\n              },\n            },\n          }),\n        })}\n      >\n        <EdgeTemporaryClose />\n\n        <EdgeSidebarContent>\n          <SideNavUserInfoMockup />\n          <Box\n            sx={{\n              borderTop: "1px solid",\n              borderColor: "grey.200",\n              display: "flex",\n              height: "100%",\n            }}\n          >\n            <IconNavMockup size="small" />\n            <LinkNavMockup />\n          </Box>\n        </EdgeSidebarContent>\n      </EdgeSidebar>\n      <Content>\n        <UnderlineTabs\n          value={tabIndex}\n          onChange={(event, index) => setTabIndex(index)}\n          sx={{\n            minHeight: { xs: 44, md: 48 },\n            px: 2,\n            "& .MuiTab-root": {\n              minHeight: { xs: 44, md: 48 },\n              minWidth: 0,\n              fontSize: { md: 16 },\n            },\n          }}\n        >\n          <Tab label={<Word cached />} disableTouchRipple />\n          <Tab label={<Word cached />} disableTouchRipple />\n          <Tab label={<Word cached />} disableTouchRipple />\n        </UnderlineTabs>\n        <Box\n          sx={{\n            height: "16vh",\n            minHeight: 240,\n            borderRadius: 2,\n            bgcolor: "rgba(0 0 0 / 0.12)",\n            m: 2,\n          }}\n        />\n        <Box sx={{ px: 2 }}>\n          <Grid container spacing={2}>\n            <Grid item xs={12} sm={6} md={8} container spacing={2}>\n              <Grid item xs={6}>\n                <StatCardMockup />\n              </Grid>\n              <Grid item xs={6}>\n                <StatCardMockup />\n              </Grid>\n              <Grid item xs={6}>\n                <StatCardMockup />\n              </Grid>\n              <Grid item xs={6}>\n                <StatCardMockup />\n              </Grid>\n              <Grid item xs={12} md={6}>\n                <UserActiveCardMockup />\n              </Grid>\n            </Grid>\n            <Grid item xs={12} sm={6} md={4}>\n              <TopUsersCardMockup sx={{ height: "100%" }} />\n            </Grid>\n          </Grid>\n        </Box>\n        <br />\n        <br />\n        <br />\n      </Content>\n    </Root>\n  );\n}\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Layout v6/App"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone layout-v6-app-analytics\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"layoutv6appanalytics",children:"LayoutV6AppAnalytics"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:LayoutV6AppAnalyticsraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);