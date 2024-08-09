"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[9308],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./blocks/layout-v6-app-claude/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const LayoutV6AppClauderaw_namespaceObject='import React from "react";\nimport Close from "@mui/icons-material/Close";\nimport Menu from "@mui/icons-material/Menu";\nimport TuneIcon from "@mui/icons-material/Tune";\nimport Avatar from "@mui/material/Avatar";\nimport Box from "@mui/material/Box";\nimport Card from "@mui/material/Card";\nimport IconButton from "@mui/material/IconButton";\nimport {\n  applyEdgeSidebarRightStyles,\n  applyEdgeSidebarStyles,\n  applyHeaderStyles,\n  applyRootStyles,\n  Content,\n  EdgeSidebar,\n  EdgeSidebarContent,\n  EdgeSidebarRight,\n  Footer,\n  Header,\n  layoutAttrs,\n  layoutClasses,\n  Root,\n  toggleEdgeSidebarRightCollapse,\n  toggleTemporaryEdgeSidebar,\n  toggleTemporaryEdgeSidebarRight,\n} from "../layout-core-v6";\n\nexport function LayoutV6AppClaude() {\n  return (\n    <Root\n      sx={{\n        backgroundColor: "hsl(var(--bg-200))",\n        "--bg-000": "60 6.7% 97.1%",\n        "--bg-100": "50 23.1% 94.9%",\n        "--bg-200": "49 26.8% 92%",\n        "--bg-300": "49 25.8% 87.8%",\n        "--bg-400": "46 28.3% 82%",\n        "--bg-500": "47 27% 71%",\n        "--mui-palette-divider": "hsl(48 12.5% 39.2% /.25)",\n        "--mui-palette-background-paper": "hsl(var(--bg-100))",\n        "--conversation-width": "720px",\n        "--EdgeSidebar-sidelineWidth": "0px", // remove border from left and right sidebars\n        "--EdgeSidebarContent-shadow": "none", // remove shadow on hover from left and right sidebars\n        ...applyRootStyles({ height: "100vh", fixedHeight: true }),\n        [`& .${layoutClasses.Content}`]: {\n          paddingBlock: "1rem",\n        },\n        [`& .${layoutClasses.Header}`]: {\n          background: "none",\n          borderBottom: "unset",\n        },\n      }}\n    >\n      <Box\n        sx={(theme) => ({\n          position: "fixed",\n          left: "1rem",\n          top: "18px",\n          zIndex: 1000,\n          pointerEvents: "none",\n          display: "none",\n          [theme.breakpoints.up(768)]: {\n            display: "block",\n          },\n          [`html:has(.${layoutClasses.EdgeSidebar}[${layoutAttrs.isTemporaryEdgeSidebarOpen}]) &`]:\n            {\n              display: "block",\n            },\n        })}\n      >\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          viewBox="0 0 139 34"\n          className="h-4 flex-shrink-0 text-text-300"\n          fill="currentColor"\n          aria-label="Claude"\n        >\n          <path d="M18.07 30.79c-5.02 0-8.46-2.8-10.08-7.11a19.2 19.2 0 0 1-1.22-7.04C6.77 9.41 10 4.4 17.16 4.4c4.82 0 7.78 2.1 9.48 7.1h2.06l-.28-6.9c-2.88-1.86-6.48-2.81-10.87-2.81-6.16 0-11.41 2.77-14.34 7.74A16.77 16.77 0 0 0 1 18.2c0 5.53 2.6 10.42 7.5 13.15a17.51 17.51 0 0 0 8.74 2.06c4.78 0 8.57-.91 11.93-2.5l.87-7.62h-2.1c-1.26 3.48-2.76 5.57-5.25 6.68-1.22.55-2.76.83-4.62.83Zm21.65-26.4.2-3.39H38.5l-6.33 1.9v1.02l2.8 1.3v23.79c0 1.62-.82 1.98-3 2.25V33h10.75v-1.74c-2.17-.27-3-.63-3-2.25V4.4Zm42.75 29h.83l7.27-1.38v-1.78l-1.03-.07c-1.7-.16-2.13-.52-2.13-1.9V15.58l.2-4.07h-1.15l-6.87.99v1.73l.67.12c1.85.28 2.4.8 2.4 2.1v11.3C80.9 29.13 79.2 30 77.19 30c-2.26 0-3.64-1.15-3.64-3.8V15.58l.2-4.07h-1.19l-6.87.99v1.73l.71.12c1.86.28 2.41.8 2.41 2.1v10.43c0 4.42 2.49 6.52 6.48 6.52 3.04 0 5.53-1.62 7.39-3.88l-.2 3.88Zm-20-14.06c0-5.65-3-7.82-8.4-7.82-4.79 0-8.27 1.97-8.27 5.25 0 1 .36 1.74 1.07 2.25l3.64-.47c-.16-1.1-.24-1.78-.24-2.05 0-1.86.99-2.8 3-2.8 2.97 0 4.47 2.09 4.47 5.44v1.11l-7.51 2.25c-2.49.67-3.91 1.27-4.86 2.65a5 5 0 0 0-.71 2.8c0 3.2 2.21 5.46 5.97 5.46 2.72 0 5.13-1.23 7.23-3.56.75 2.33 1.9 3.56 3.95 3.56 1.66 0 3.16-.68 4.5-1.98l-.4-1.38c-.59.16-1.14.23-1.73.23-1.15 0-1.7-.9-1.7-2.68v-8.26Zm-9.6 10.87c-2.05 0-3.31-1.19-3.31-3.28 0-1.43.67-2.26 2.1-2.73l6.08-1.94v5.85c-1.94 1.46-3.08 2.1-4.86 2.1Zm63.3 1.81v-1.78l-1.02-.07c-1.7-.16-2.14-.52-2.14-1.9V4.4l.2-3.4h-1.42l-6.32 1.9v1.02l2.8 1.3v7.83a8.84 8.84 0 0 0-5.37-1.54c-6.28 0-11.18 4.78-11.18 11.93 0 5.89 3.51 9.96 9.32 9.96 3 0 5.61-1.47 7.23-3.72l-.2 3.72h.83l7.27-1.39Zm-13.15-18.13c3 0 5.25 1.74 5.25 4.94v9a7.2 7.2 0 0 1-5.21 2.1c-4.31 0-6.48-3.4-6.48-7.94 0-5.1 2.48-8.1 6.44-8.1Zm28.52 4.5c-.55-2.64-2.17-4.15-4.42-4.15-3.36 0-5.7 2.53-5.7 6.17 0 5.37 2.85 8.85 7.44 8.85a8.6 8.6 0 0 0 7.38-4.35l1.35.36c-.6 4.66-4.82 8.14-10 8.14-6.08 0-10.27-4.5-10.27-10.9 0-6.45 4.54-11 10.63-11 4.54 0 7.74 2.73 8.77 7.48l-15.84 4.85V21.7l10.66-3.32Z"></path>\n        </svg>\n      </Box>\n      <Header\n        sx={{\n          ...applyHeaderStyles({\n            fullWidth: true,\n            height: "56px",\n          }),\n          px: 2,\n          "&::before": {\n            content: \'""\',\n            position: "absolute",\n            display: "block",\n            width: "100%",\n            height: "30%",\n            top: "100%",\n            left: 0,\n            background:\n              "linear-gradient(to bottom,hsl(var(--bg-200)), hsl(var(--bg-200)/0))",\n          },\n        }}\n      >\n        <IconButton\n          className={layoutClasses.TemporaryEdgeSidebarTrigger}\n          onClick={() => toggleTemporaryEdgeSidebar()}\n        >\n          <Menu />\n        </IconButton>\n        <IconButton\n          className={layoutClasses.TemporaryEdgeSidebarRightTrigger}\n          sx={{ ml: "auto" }}\n          onClick={() => {\n            toggleTemporaryEdgeSidebarRight();\n          }}\n        >\n          <TuneIcon />\n        </IconButton>\n        <IconButton\n          className={layoutClasses.EdgeSidebarRightCollapser}\n          sx={{ ml: "auto" }}\n          onClick={(event) => {\n            toggleEdgeSidebarRightCollapse({ event });\n          }}\n        >\n          <TuneIcon />\n        </IconButton>\n      </Header>\n      <Content sx={{ overflow: "auto" }}>\n        <Box\n          sx={{\n            maxWidth: "var(--conversation-width)",\n            px: 2,\n            pt: 0.5,\n            mx: "auto",\n          }}\n        >\n          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>\n            {[...Array(20)].map((_, index) => (\n              <Card\n                elevation={0}\n                variant="outlined"\n                key={index}\n                sx={{ height: 300 }}\n              ></Card>\n            ))}\n          </Box>\n        </Box>\n      </Content>\n      <EdgeSidebar\n        sx={(theme) => ({\n          ...applyEdgeSidebarStyles({\n            theme,\n            config: {\n              xs: {\n                variant: "temporary",\n                fullHeight: true,\n              },\n              [theme.breakpoints.up(768)]: {\n                variant: "permanent",\n                width: "288px",\n                autoCollapse: 9999,\n                collapsedWidth: "56px",\n                expandOnHover: true,\n              },\n            },\n          }),\n          "&::before": {\n            display: "none",\n          },\n        })}\n      >\n        <EdgeSidebarContent\n          sx={{\n            background: "none",\n            marginTop: "var(--permanent, calc(-1 * var(--Header-height)))",\n            containerType: "inline-size",\n            overflow: "initial",\n          }}\n        >\n          <Box\n            sx={{\n              border: "1px solid",\n              borderColor: "divider",\n              background:\n                "linear-gradient(to bottom,hsl(var(--bg-300)/0.7),hsl(var(--bg-400)/0.7))",\n              height: "100%",\n              m: 0.5,\n              ml: 0,\n              borderRadius: "0 8px 8px 0",\n              backdropFilter: "blur(8px)",\n              opacity: {\n                "@": 0,\n                "@100": 1,\n              },\n              transition: "opacity 0.3s",\n              boxShadow:\n                "-80px 200px 120px 0 rgba(0,0,0,.1),-8px 20px 48px 0 rgba(0,0,0,.15)",\n            }}\n          >\n            <Box sx={{ textAlign: "right", p: 1 }}>\n              <IconButton\n                className={layoutClasses.TemporaryEdgeSidebarTrigger}\n                onClick={() => toggleTemporaryEdgeSidebar()}\n              >\n                <Close />\n              </IconButton>\n            </Box>\n          </Box>\n          <Box sx={{ position: "fixed", bottom: "1rem", left: "1rem" }}>\n            <Avatar />\n          </Box>\n        </EdgeSidebarContent>\n      </EdgeSidebar>\n      <EdgeSidebarRight\n        sx={(theme) => ({\n          ...applyEdgeSidebarRightStyles({\n            theme,\n            config: {\n              xs: {\n                variant: "temporary",\n                // ถ้าจอเล็กกว่า 720px ให้ width = 100vw\n                // ถ้าจอใหญ่กว่า 720px ให้ width = 420px\n                width: "clamp(420px, (720px - 100vw) * 9999, 100vw)",\n              },\n              md: {\n                variant: "persistent",\n                width: "420px",\n              },\n            },\n          }),\n          "&::before": {\n            display: "none",\n          },\n        })}\n      >\n        <EdgeSidebarContent sx={{ background: "none" }}>\n          <Box\n            sx={{\n              border: "1px solid",\n              borderColor: "divider",\n              backgroundColor: "hsl(var(--bg-100))",\n              m: 1,\n              height: {\n                xs: "calc(100% - var(--Header-height) - 16px)",\n                md: "100%",\n              },\n              borderRadius: "8px",\n              backdropFilter: "blur(4px)",\n            }}\n          >\n            <Box sx={{ textAlign: "right", p: 1 }}>\n              <IconButton\n                className={layoutClasses.TemporaryEdgeSidebarRightTrigger}\n                onClick={() => toggleTemporaryEdgeSidebarRight()}\n              >\n                <Close />\n              </IconButton>\n              <IconButton\n                className={layoutClasses.EdgeSidebarRightCollapser}\n                onClick={(event) =>\n                  toggleEdgeSidebarRightCollapse({\n                    event,\n                  })\n                }\n              >\n                <Close />\n              </IconButton>\n            </Box>\n          </Box>\n        </EdgeSidebarContent>\n      </EdgeSidebarRight>\n      <Footer sx={{ background: "unset", border: "none" }}>\n        <Box\n          sx={{\n            maxWidth: "var(--conversation-width)",\n            p: "10px 10px 10px 16px",\n            mx: "auto",\n            display: "flex",\n            flexDirection: "column",\n            gap: 1,\n            border: "1px solid",\n            borderColor: "divider",\n            borderBottomWidth: 0,\n            borderTopLeftRadius: 16,\n            borderTopRightRadius: 16,\n            bgcolor: "background.paper",\n          }}\n        >\n          <Box\n            component="input"\n            placeholder="Reply to Claude"\n            sx={{\n              backgroundColor: "initial",\n              height: 28,\n              width: "100%",\n              "&:focus": {\n                outline: "none",\n              },\n            }}\n          />\n          <div style={{ fontSize: "0.875rem" }}>Claude 3.5 Sonnet</div>\n        </Box>\n      </Footer>\n    </Root>\n  );\n}\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"LayoutV6/App/Claude"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone layout-v6-app-claude\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"layoutv6appclaude",children:"LayoutV6AppClaude"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:LayoutV6AppClauderaw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);