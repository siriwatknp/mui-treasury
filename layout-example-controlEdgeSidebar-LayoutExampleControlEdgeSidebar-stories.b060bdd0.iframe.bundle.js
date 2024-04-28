"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[909],{"./blocks/layout-example-controlEdgeSidebar/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const LayoutExampleControlEdgeSidebarraw_namespaceObject='import React from "react";\nimport ArrowLeft from "@mui/icons-material/ArrowLeft";\nimport Menu from "@mui/icons-material/Menu";\nimport Box from "@mui/material/Box";\nimport CssBaseline from "@mui/material/CssBaseline";\nimport IconButton from "@mui/material/IconButton";\nimport List from "@mui/material/List";\nimport ListItem from "@mui/material/ListItem";\nimport ListItemButton from "@mui/material/ListItemButton";\nimport ListItemText from "@mui/material/ListItemText";\nimport ListSubheader from "@mui/material/ListSubheader";\nimport { Content, EdgeSidebar, EdgeTrigger, Header, Root, SidebarContent, useLayoutCtx } from "../layout-core-v5";\nconst TriggerUsingHook = () => {\n  const {\n    state: {\n      leftEdgeSidebar\n    },\n    toggleLeftSidebarOpen\n  } = useLayoutCtx();\n  return /*#__PURE__*/React.createElement(ListItemButton, {\n    onClick: toggleLeftSidebarOpen\n  }, leftEdgeSidebar?.open ? "Close" : "Open");\n};\nexport const LayoutExampleControlEdgeSidebar = () => {\n  return /*#__PURE__*/React.createElement(Root, {\n    scheme: {\n      header: {\n        config: {\n          xs: {\n            position: "sticky",\n            height: 56\n          }\n        }\n      },\n      leftEdgeSidebar: {\n        config: {\n          sm: {\n            variant: "persistent",\n            persistentBehavior: "fit",\n            width: 256,\n            collapsible: true,\n            collapsedWidth: 120,\n            headerMagnetEnabled: true\n          }\n        }\n      }\n    },\n    initialState: {\n      leftEdgeSidebar: {\n        open: true,\n        collapsed: true\n      }\n    }\n  }, /*#__PURE__*/React.createElement(CssBaseline, null), /*#__PURE__*/React.createElement(Header, null, /*#__PURE__*/React.createElement(Box, {\n    display: "flex",\n    alignItems: "center",\n    gap: 1,\n    px: 1\n  }, /*#__PURE__*/React.createElement(EdgeTrigger, {\n    target: {\n      anchor: "left",\n      field: "open"\n    }\n  }, (open, setOpen) => /*#__PURE__*/React.createElement(IconButton, {\n    onClick: () => setOpen(!open)\n  }, open ? /*#__PURE__*/React.createElement(ArrowLeft, null) : /*#__PURE__*/React.createElement(Menu, null))), /*#__PURE__*/React.createElement("div", null, "Header"))), /*#__PURE__*/React.createElement(EdgeSidebar, {\n    anchor: "left"\n  }, ({\n    state: {\n      leftEdgeSidebar\n    },\n    toggleLeftSidebarCollapsed\n  }) => /*#__PURE__*/React.createElement(SidebarContent, null, /*#__PURE__*/React.createElement(List, null, /*#__PURE__*/React.createElement(ListSubheader, null, "Trigger"), /*#__PURE__*/React.createElement(ListItem, {\n    button: true,\n    onClick: toggleLeftSidebarCollapsed\n  }, /*#__PURE__*/React.createElement(ListItemText, null, leftEdgeSidebar?.collapsed ? "Expand" : "Collapse"))))), /*#__PURE__*/React.createElement(Content, null, /*#__PURE__*/React.createElement(Box, {\n    p: 2\n  }, /*#__PURE__*/React.createElement(List, null, /*#__PURE__*/React.createElement(ListSubheader, null, "Using Layout Hook"), /*#__PURE__*/React.createElement(TriggerUsingHook, null)))));\n};';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Layout v5/Example/ControlEdgeSidebar"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone layout-example-controlEdgeSidebar\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"layoutexamplecontroledgesidebar",children:"LayoutExampleControlEdgeSidebar"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:LayoutExampleControlEdgeSidebarraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./blocks/layout-example-controlEdgeSidebar/LayoutExampleControlEdgeSidebar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ControlEdgeSidebar:()=>ControlEdgeSidebar,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LayoutExampleControlEdgeSidebar_stories});var react=__webpack_require__("./node_modules/react/index.js"),googleFont=__webpack_require__("./.storybook/decorators/googleFont.tsx"),storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),ArrowLeft=__webpack_require__("./node_modules/@mui/icons-material/ArrowLeft.js"),Menu=__webpack_require__("./node_modules/@mui/icons-material/Menu.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),CssBaseline=__webpack_require__("./node_modules/@mui/material/CssBaseline/CssBaseline.js"),IconButton=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),List=__webpack_require__("./node_modules/@mui/material/List/List.js"),ListItem=__webpack_require__("./node_modules/@mui/material/ListItem/ListItem.js"),ListItemButton=__webpack_require__("./node_modules/@mui/material/ListItemButton/ListItemButton.js"),ListItemText=__webpack_require__("./node_modules/@mui/material/ListItemText/ListItemText.js"),ListSubheader=__webpack_require__("./node_modules/@mui/material/ListSubheader/ListSubheader.js"),layout_core_v5=__webpack_require__("./blocks/layout-core-v5/index.ts");const TriggerUsingHook=()=>{const{state:{leftEdgeSidebar},toggleLeftSidebarOpen}=(0,layout_core_v5.id)();return react.createElement(ListItemButton.Z,{onClick:toggleLeftSidebarOpen},leftEdgeSidebar?.open?"Close":"Open")},LayoutExampleControlEdgeSidebar=()=>react.createElement(layout_core_v5.fC,{scheme:{header:{config:{xs:{position:"sticky",height:56}}},leftEdgeSidebar:{config:{sm:{variant:"persistent",persistentBehavior:"fit",width:256,collapsible:!0,collapsedWidth:120,headerMagnetEnabled:!0}}}},initialState:{leftEdgeSidebar:{open:!0,collapsed:!0}}},react.createElement(CssBaseline.ZP,null),react.createElement(layout_core_v5.h4,null,react.createElement(Box.Z,{display:"flex",alignItems:"center",gap:1,px:1},react.createElement(layout_core_v5.Rd,{target:{anchor:"left",field:"open"}},((open,setOpen)=>react.createElement(IconButton.Z,{onClick:()=>setOpen(!open)},open?react.createElement(ArrowLeft.Z,null):react.createElement(Menu.Z,null)))),react.createElement("div",null,"Header"))),react.createElement(layout_core_v5.NW,{anchor:"left"},(({state:{leftEdgeSidebar},toggleLeftSidebarCollapsed})=>react.createElement(layout_core_v5.TZ,null,react.createElement(List.Z,null,react.createElement(ListSubheader.Z,null,"Trigger"),react.createElement(ListItem.ZP,{button:!0,onClick:toggleLeftSidebarCollapsed},react.createElement(ListItemText.Z,null,leftEdgeSidebar?.collapsed?"Expand":"Collapse")))))),react.createElement(layout_core_v5.VY,null,react.createElement(Box.Z,{p:2},react.createElement(List.Z,null,react.createElement(ListSubheader.Z,null,"Using Layout Hook"),react.createElement(TriggerUsingHook,null)))));var usage=__webpack_require__("./blocks/layout-example-controlEdgeSidebar/usage.mdx");const LayoutExampleControlEdgeSidebar_stories={title:"Layout v5/Example/ControlEdgeSidebar",component:LayoutExampleControlEdgeSidebar,parameters:{layout:"fullscreen",githubUsername:"siriwatknp"},decorators:[(0,storyDialog.Z)(usage.default),(0,googleFont.Z)([])]},ControlEdgeSidebar={render:()=>react.createElement(LayoutExampleControlEdgeSidebar,null)};ControlEdgeSidebar.parameters={...ControlEdgeSidebar.parameters,docs:{...ControlEdgeSidebar.parameters?.docs,source:{originalSource:"{\n  render: () => <LayoutExampleControlEdgeSidebar />\n}",...ControlEdgeSidebar.parameters?.docs?.source}}};const __namedExportsOrder=["ControlEdgeSidebar"]}}]);