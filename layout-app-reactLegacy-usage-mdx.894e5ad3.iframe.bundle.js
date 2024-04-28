"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[5774],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./blocks/layout-app-reactLegacy/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const LayoutAppReactLegacyraw_namespaceObject='function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\nimport React from "react";\nimport KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";\nimport UnfoldMore from "@mui/icons-material/UnfoldMore";\nimport Box from "@mui/material/Box";\nimport Container from "@mui/material/Container";\nimport CssBaseline from "@mui/material/CssBaseline";\nimport Fab from "@mui/material/Fab";\nimport Grid from "@mui/material/Grid";\nimport { createTheme, responsiveFontSizes, styled, ThemeProvider } from "@mui/material/styles";\nimport Toolbar from "@mui/material/Toolbar";\nimport Typography from "@mui/material/Typography";\nimport { Content, EdgeSidebar, Footer, Header, InsetAvoidingView, InsetContainer, InsetSidebar, Root } from "../layout-core-v5";\n// @ts-ignore\nimport { ReactContent, ReactHeader, ReactNextArticle } from "./components";\nconst theme = responsiveFontSizes(createTheme({\n  palette: {\n    primary: {\n      main: "#20232a"\n    },\n    secondary: {\n      main: "#61dafb"\n    }\n  },\n  typography: {\n    fontFamily: \'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"\',\n    body1: {\n      fontSize: "1.065rem"\n    }\n  },\n  components: {\n    MuiCssBaseline: {\n      styleOverrides: {\n        "strong, b": {\n          fontWeight: "bold"\n        }\n      }\n    }\n  }\n}));\n// @ts-ignore\ntheme.vars = null;\nconst StyledToolbar = styled(Toolbar)(({\n  theme: {\n    breakpoints\n  }\n}) => ({\n  minHeight: 60,\n  [breakpoints.up("md")]: {\n    minHeight: 60\n  }\n}));\nconst StyledFab = styled(Fab)(() => ({\n  position: "fixed",\n  bottom: 32,\n  right: 16,\n  color: "#61dafb",\n  "& svg": {\n    fontSize: 32\n  }\n}));\n\n// @ts-ignore\nconst FooterMenu = ({\n  isHeader,\n  ...props\n}) => {\n  return /*#__PURE__*/React.createElement(React.Fragment, null, isHeader && /*#__PURE__*/React.createElement(Box, {\n    mt: 5\n  }), /*#__PURE__*/React.createElement(Typography, _extends({\n    sx: {\n      color: "#fff",\n      lineHeight: 2,\n      ...(isHeader && {\n        opacity: 0.6,\n        lineHeight: 3,\n        textTransform: "uppercase",\n        letterSpacing: "0.08em",\n        fontSize: 14,\n        fontWeight: "bold"\n      })\n    }\n  }, props)));\n};\nexport const LayoutAppReactLegacy = () => {\n  const sidebarContent = /*#__PURE__*/React.createElement(Box, {\n    mt: 7.5,\n    ml: 3\n  }, getData()[0].map((label, i) => /*#__PURE__*/React.createElement(Typography, {\n    key: i,\n    sx: {\n      lineHeight: 3,\n      textTransform: "uppercase",\n      letterSpacing: "0.08em",\n      fontSize: 14,\n      fontWeight: "bold"\n    }\n  }, label, " ", /*#__PURE__*/React.createElement(KeyboardArrowDown, {\n    color: "inherit",\n    sx: {\n      marginTop: "-2px",\n      verticalAlign: "middle"\n    }\n  }))));\n  return /*#__PURE__*/React.createElement(ThemeProvider, {\n    theme: theme\n  }, /*#__PURE__*/React.createElement(Root, {\n    scheme: {\n      header: {\n        config: {\n          xs: {\n            position: "fixed",\n            height: 60\n          }\n        }\n      },\n      rightEdgeSidebar: {\n        config: {\n          xs: {\n            variant: "temporary",\n            width: 256\n          }\n        }\n      },\n      rightInsetSidebar: {\n        config: {\n          sm: {\n            position: "fixed",\n            width: 200\n          },\n          md: {\n            position: "fixed",\n            width: 256\n          }\n        }\n      }\n    }\n  }, ({\n    setOpen\n  }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CssBaseline, null), /*#__PURE__*/React.createElement(StyledFab, {\n    color: "primary",\n    onClick: () => setOpen("rightEdgeSidebar", true)\n  }, /*#__PURE__*/React.createElement(UnfoldMore, null)), /*#__PURE__*/React.createElement(Header, {\n    color: "primary"\n  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(StyledToolbar, {\n    disableGutters: true\n  }, /*#__PURE__*/React.createElement(ReactHeader, {\n    concise: true\n  })))), /*#__PURE__*/React.createElement(EdgeSidebar, {\n    anchor: "right"\n  }, sidebarContent), /*#__PURE__*/React.createElement(Content, null, /*#__PURE__*/React.createElement(InsetContainer, {\n    rightSidebar: /*#__PURE__*/React.createElement(InsetSidebar, {\n      sx: {\n        borderLeft: "1px solid #ececec",\n        backgroundColor: "rgb(247, 247, 247)"\n      }\n    }, sidebarContent)\n  }, /*#__PURE__*/React.createElement(ReactContent, null))), /*#__PURE__*/React.createElement(Footer, null, /*#__PURE__*/React.createElement(Box, {\n    bgcolor: "rgb(40, 44, 52)"\n  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(InsetAvoidingView, null, /*#__PURE__*/React.createElement(ReactNextArticle, null)))), /*#__PURE__*/React.createElement(Box, {\n    bgcolor: "#20232a"\n  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(InsetAvoidingView, null, /*#__PURE__*/React.createElement(Box, {\n    pr: {\n      xs: 0,\n      md: 5\n    },\n    pb: 5\n  }, /*#__PURE__*/React.createElement(Grid, {\n    container: true\n  }, /*#__PURE__*/React.createElement(Grid, {\n    item: true,\n    lg: 4\n  }, /*#__PURE__*/React.createElement(Typography, {\n    sx: {\n      mt: "56px",\n      color: "#888"\n    }\n  }, "Copyright \\xA9 2022")), /*#__PURE__*/React.createElement(Grid, {\n    item: true,\n    lg: 8,\n    container: true\n  }, getData().map((category, i) => /*#__PURE__*/React.createElement(Grid, {\n    key: i,\n    item: true,\n    xs: 6\n  }, category.map((label, j) => /*#__PURE__*/React.createElement(FooterMenu, {\n    key: j,\n    isHeader: j === 0\n  }, label))))))))))))));\n};\nconst getData = () => [["Docs", "Installation", "Main Concepts", "Advanced Guides", "API Reference", "Hooks", "Testing", "Concurrent Mode", "Contributing"], ["Channels", "Github", "Stack Overflow", "Discussion Forums", "Reactiflux Chat", "DEV Community", "Facebook", "Twitter"], ["Community", "Code of Conduct", "Community Resources"], ["More", "Tutorial", "Blog", "Acknowledgements", "React Native"]];';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Layout v5/App/ReactLegacy"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone layout-app-reactLegacy\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"layoutappreactlegacy",children:"LayoutAppReactLegacy"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:LayoutAppReactLegacyraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);