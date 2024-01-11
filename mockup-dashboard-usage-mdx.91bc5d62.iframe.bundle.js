"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[1842],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./blocks/mockup-dashboard/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const IconNavraw_namespaceObject='import React from "react";\nimport AppRegistrationRounded from "@mui/icons-material/AppRegistrationRounded";\nimport EventNoteRounded from "@mui/icons-material/EventNoteRounded";\nimport ForumRounded from "@mui/icons-material/ForumRounded";\nimport HomeRounded from "@mui/icons-material/HomeRounded";\nimport SearchRounded from "@mui/icons-material/SearchRounded";\nimport SettingsRounded from "@mui/icons-material/SettingsRounded";\nimport Box, { BoxProps } from "@mui/material/Box";\nimport IconButton, { IconButtonProps } from "@mui/material/IconButton";\nimport { alpha } from "@mui/material/styles";\nimport { getLightestGrey } from "../mockup-utils";\n\nconst defaultIcons = [\n  <SearchRounded />,\n  <HomeRounded />,\n  <ForumRounded />,\n  <SettingsRounded />,\n  <AppRegistrationRounded />,\n  <EventNoteRounded />,\n];\n\nexport const IconNavMockup = ({\n  activeIndex = 1,\n  icons = defaultIcons,\n  size,\n  ...props\n}: { icons?: Array<React.ReactNode>; activeIndex?: number } & Pick<\n  IconButtonProps,\n  "size"\n> &\n  BoxProps) => {\n  return (\n    <Box\n      {...props}\n      sx={{\n        display: "inline-flex",\n        flexDirection: "column",\n        gap: 2,\n        p: 2,\n        bgcolor: getLightestGrey,\n        "& .MuiIconButton-root": {\n          borderRadius: 2,\n        },\n        ...props.sx,\n      }}\n    >\n      {icons.map((icon, index) => (\n        <IconButton\n          key={index}\n          disableTouchRipple\n          size={size}\n          sx={{\n            ...(index === 0 && { mb: 0 }),\n            ...(index === activeIndex && {\n              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.12),\n              "& svg": {\n                color: (theme) => theme.palette.primary.main,\n              },\n            }),\n          }}\n        >\n          {icon}\n        </IconButton>\n      ))}\n    </Box>\n  );\n};\n',LinkNavraw_namespaceObject='import React from "react";\nimport List, { ListProps } from "@mui/material/List";\nimport ListItem from "@mui/material/ListItem";\nimport { alpha } from "@mui/material/styles";\nimport { Word } from "../mockup-typography";\n\nexport const LinkNavMockup = ({\n  lineCount = 5,\n  ...props\n}: { lineCount?: number } & ListProps) => {\n  return (\n    <List\n      {...props}\n      sx={{\n        flexGrow: 1,\n        p: 2,\n        "& .MuiListItem-root": {\n          borderRadius: 2,\n          "&:hover": {\n            bgcolor: (theme) => alpha(theme.palette.grey[300], 0.2),\n            color: "grey.500",\n          },\n        },\n        ...props.sx,\n      }}\n    >\n      {[...Array(lineCount).fill(undefined)].map((_, index) => (\n        <ListItem key={index} button>\n          <Word sx={{ my: 1 }} />\n        </ListItem>\n      ))}\n    </List>\n  );\n};\n',SideNavUserInforaw_namespaceObject='import React from "react";\nimport Box, { BoxProps } from "@mui/material/Box";\nimport { Circle } from "../mockup-shape";\nimport { Word } from "../mockup-typography";\nimport { getLightestGrey, getLightGrey } from "../mockup-utils";\n\nexport const SideNavUserInfoMockup = ({\n  collapsed,\n  ...props\n}: { collapsed?: boolean } & BoxProps) => {\n  return (\n    <Box\n      {...props}\n      sx={{\n        borderRadius: 1,\n        bgcolor: getLightestGrey,\n        p: 1.5,\n        display: "flex",\n        alignItems: "center",\n        ...props.sx,\n      }}\n    >\n      <Circle sx={{ fontSize: collapsed ? 36 : 48, transition: "0.2s" }} />\n      {!collapsed && (\n        <Box sx={{ ml: 1.5, minWidth: "0px" }}>\n          <Word />\n          <Word\n            sx={{\n              height: 10,\n              borderRadius: 2,\n              mt: 0.75,\n              bgcolor: getLightGrey,\n            }}\n          />\n        </Box>\n      )}\n    </Box>\n  );\n};\n',StatCardraw_namespaceObject='import React from "react";\nimport Box, { BoxProps } from "@mui/material/Box";\nimport { Square } from "../mockup-shape";\nimport { Word } from "../mockup-typography";\nimport { getLightGrey } from "../mockup-utils";\n\nexport const StatCardMockup = (props: BoxProps) => {\n  return (\n    <Box\n      {...props}\n      sx={{\n        borderRadius: 1,\n        border: "1px solid",\n        borderColor: getLightGrey,\n        bgcolor: "background.paper",\n        p: 1.5,\n        display: "flex",\n        alignItems: "center",\n        boxShadow: "0 2px 6px 0 rgba(0,0,0,0.08)",\n        ...props.sx,\n      }}\n    >\n      <Square />\n      <Box sx={{ ml: 1.5, minWidth: "0px" }}>\n        <Word\n          sx={{\n            height: 10,\n            borderRadius: 3,\n            bgcolor: getLightGrey,\n            m: 0,\n          }}\n        />\n        <Word sx={{ mt: 0.5, mb: 0 }} />\n      </Box>\n    </Box>\n  );\n};\n',TopUsersCardraw_namespaceObject='import React from "react";\nimport Avatar from "@mui/material/Avatar";\nimport Box, { BoxProps } from "@mui/material/Box";\nimport Divider from "@mui/material/Divider";\nimport List from "@mui/material/List";\nimport ListItem from "@mui/material/ListItem";\nimport ListItemAvatar from "@mui/material/ListItemAvatar";\nimport { Circle } from "../mockup-shape";\nimport { Word } from "../mockup-typography";\nimport { getLightGrey } from "../mockup-utils";\n\nexport const TopUsersCardMockup = ({\n  userCount = 5,\n  ...props\n}: { userCount?: number } & BoxProps) => {\n  return (\n    <Box\n      {...props}\n      sx={{\n        borderRadius: 1,\n        border: "1px solid",\n        borderColor: getLightGrey,\n        bgcolor: "background.paper",\n        boxShadow: "0 2px 6px 0 rgba(0,0,0,0.08)",\n        ...props.sx,\n      }}\n    >\n      <Box sx={{ display: "flex", p: 1.5, alignItems: "center" }}>\n        <Box>\n          <Word\n            sx={{\n              height: 10,\n              borderRadius: 3,\n              bgcolor: getLightGrey,\n              m: 0,\n              width: 40,\n            }}\n          />\n          <Word sx={{ mt: 0.5, mb: 0 }} />\n        </Box>\n        <Circle sx={{ ml: "auto", fontSize: 24 }} />\n      </Box>\n      <Divider />\n      <List>\n        {[...Array(userCount).fill(undefined)].map((_, index) => (\n          <ListItem key={index}>\n            <ListItemAvatar>\n              <Avatar />\n            </ListItemAvatar>\n            <Word />\n          </ListItem>\n        ))}\n      </List>\n    </Box>\n  );\n};\n',UserActiveCardraw_namespaceObject='import React from "react";\nimport Box, { BoxProps } from "@mui/material/Box";\nimport LinearProgress from "@mui/material/LinearProgress";\nimport Typography from "@mui/material/Typography";\nimport { Circle, Square } from "../mockup-shape";\nimport { Word } from "../mockup-typography";\nimport { getLightGrey } from "../mockup-utils";\n\nexport const UserActiveCardMockup = (props: BoxProps) => {\n  return (\n    <Box\n      {...props}\n      sx={{\n        borderRadius: 1,\n        border: "1px solid",\n        borderColor: getLightGrey,\n        bgcolor: "background.paper",\n        p: 1.5,\n        boxShadow: "0 2px 6px 0 rgba(0,0,0,0.08)",\n        ...props.sx,\n      }}\n    >\n      <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>\n        <Word sx={{ bgcolor: getLightGrey }} />\n        <Circle sx={{ fontSize: 20, ml: "auto" }} />\n      </Box>\n      <br />\n      <Box sx={{ display: "flex", justifyContent: "space-around" }}>\n        <Box>\n          <Box sx={{ display: "flex", alignItems: "center" }}>\n            <Square sx={{ fontSize: 16, bgcolor: "primary.main", mr: 1 }} />\n            <Typography variant="h4">\n              <b>92%</b>\n            </Typography>\n          </Box>\n          <Word\n            sx={{\n              bgcolor: getLightGrey,\n              ml: 3,\n              height: 12,\n              borderRadius: 2,\n              width: 48,\n            }}\n          />\n        </Box>\n        <Box>\n          <Box sx={{ display: "flex", alignItems: "center" }}>\n            <Square sx={{ fontSize: 16, bgcolor: "error.main", mr: 1 }} />\n            <Typography variant="h4">\n              <b>8%</b>\n            </Typography>\n          </Box>\n          <Word\n            sx={{\n              bgcolor: getLightGrey,\n              ml: 3,\n              height: 12,\n              borderRadius: 2,\n              width: 48,\n            }}\n          />\n        </Box>\n      </Box>\n      <br />\n      <LinearProgress\n        variant="determinate"\n        value={92}\n        sx={{\n          height: 10,\n          borderRadius: 3,\n          bgcolor: getLightGrey,\n          "& > .MuiLinearProgress-bar": {\n            borderRadius: 3,\n          },\n        }}\n      />\n      <Box height={16} />\n      <LinearProgress\n        variant="determinate"\n        value={8}\n        sx={{\n          height: 10,\n          borderRadius: 3,\n          bgcolor: getLightGrey,\n          "& > .MuiLinearProgress-bar": {\n            borderRadius: 3,\n            bgcolor: "error.main",\n          },\n        }}\n      />\n      <br />\n    </Box>\n  );\n};\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Mockup/Dashboard"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone mockup-dashboard\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"mockupdashboard",children:"MockupDashboard"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"iconnav",children:"IconNav"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:IconNavraw_namespaceObject,language:"tsx"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"linknav",children:"LinkNav"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:LinkNavraw_namespaceObject,language:"tsx"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"sidenavuserinfo",children:"SideNavUserInfo"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:SideNavUserInforaw_namespaceObject,language:"tsx"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"statcard",children:"StatCard"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:StatCardraw_namespaceObject,language:"tsx"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"topuserscard",children:"TopUsersCard"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:TopUsersCardraw_namespaceObject,language:"tsx"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"useractivecard",children:"UserActiveCard"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:UserActiveCardraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);