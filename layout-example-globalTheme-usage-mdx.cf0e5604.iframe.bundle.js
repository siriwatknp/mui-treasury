"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[8981],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./blocks/layout-example-globalTheme/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const LayoutExampleGlobalThemeraw_namespaceObject='import React from "react";\nimport Comment from "@mui/icons-material/Comment";\nimport Home from "@mui/icons-material/Home";\nimport Notifications from "@mui/icons-material/Notifications";\nimport Person from "@mui/icons-material/Person";\nimport Search from "@mui/icons-material/Search";\nimport Settings from "@mui/icons-material/Settings";\nimport Avatar from "@mui/material/Avatar";\nimport Badge from "@mui/material/Badge";\nimport Box from "@mui/material/Box";\nimport Button from "@mui/material/Button";\nimport Card from "@mui/material/Card";\nimport CardContent from "@mui/material/CardContent";\nimport CardHeader from "@mui/material/CardHeader";\nimport CssBaseline from "@mui/material/CssBaseline";\nimport { drawerClasses } from "@mui/material/Drawer";\nimport FilledInput from "@mui/material/FilledInput";\nimport Grid from "@mui/material/Grid";\nimport IconButton from "@mui/material/IconButton";\nimport InputAdornment from "@mui/material/InputAdornment";\nimport { inputBaseClasses } from "@mui/material/InputBase";\nimport Paper from "@mui/material/Paper";\nimport Skeleton from "@mui/material/Skeleton";\nimport { createTheme, ThemeProvider } from "@mui/material/styles";\nimport TextField from "@mui/material/TextField";\nimport Typography from "@mui/material/Typography";\nimport { Content, EdgeSidebar, Footer, Fullscreen, Header, InsetContainer, InsetSidebar, Root, SidebarContent } from "../layout-core-v5";\n\n// https://github.com/tailwindlabs/tailwindcss/blob/master/colors.js#L244\nconst coolGray = {\n  50: "#f9fafb",\n  100: "#f3f4f6",\n  200: "#e5e7eb",\n  300: "#d1d5db",\n  400: "#9ca3af",\n  500: "#6b7280",\n  600: "#4b5563",\n  700: "#374151",\n  800: "#1f2937",\n  900: "#111827"\n};\nconst theme = createTheme({\n  palette: {\n    primary: {\n      main: coolGray[800]\n    },\n    text: {\n      primary: coolGray[900],\n      secondary: coolGray[600],\n      disabled: coolGray[300]\n    },\n    background: {\n      default: coolGray[100],\n      paper: "#fff"\n    },\n    grey: coolGray\n  },\n  components: {\n    AppEdgeSidebar: {\n      styleOverrides: {\n        root: {\n          [`& .${drawerClasses.paper}`]: {\n            backgroundColor: "rgba(0,0,0,0)",\n            border: "none"\n          }\n        }\n      }\n    },\n    AppContent: {\n      styleOverrides: {\n        root: {\n          marginBottom: 16\n        }\n      }\n    },\n    AppInsetSidebar: {\n      styleOverrides: {\n        root: {\n          padding: 16,\n          paddingLeft: 0\n        }\n      }\n    },\n    AppFooter: {\n      styleOverrides: {\n        root: {\n          marginBottom: 20\n        }\n      }\n    },\n    MuiButton: {\n      styleOverrides: {\n        root: {\n          borderRadius: 40\n        }\n      }\n    },\n    MuiFilledInput: {\n      styleOverrides: {\n        root: {\n          [`&.${inputBaseClasses.hiddenLabel}`]: {\n            borderRadius: 40\n          },\n          backgroundColor: coolGray[100],\n          "&:hover": {\n            backgroundColor: coolGray[200]\n          },\n          "&.Mui-focused": {\n            boxShadow: `0 0 0 1px ${coolGray[500]}`,\n            backgroundColor: "#fff"\n          }\n        }\n      }\n    },\n    MuiPaper: {\n      defaultProps: {\n        elevation: 0\n      }\n    },\n    MuiSkeleton: {\n      styleOverrides: {\n        root: {\n          backgroundColor: coolGray[200]\n        }\n      }\n    }\n  }\n});\n// @ts-ignore\ntheme.vars = null;\nexport const LayoutExampleGlobalTheme = () => {\n  return /*#__PURE__*/React.createElement(ThemeProvider, {\n    theme: theme\n  }, /*#__PURE__*/React.createElement(Fullscreen, null, /*#__PURE__*/React.createElement(Root, {\n    scheme: {\n      header: {\n        config: {\n          xs: {\n            position: "sticky",\n            height: 80\n          }\n        }\n      },\n      leftEdgeSidebar: {\n        config: {\n          xs: {\n            variant: "permanent",\n            width: 80\n          },\n          md: {\n            variant: "permanent",\n            width: 120\n          }\n        }\n      },\n      rightEdgeSidebar: {\n        config: {\n          md: {\n            variant: "permanent",\n            width: 80\n          }\n        }\n      },\n      rightInsetSidebar: {\n        config: {\n          sm: {\n            position: "sticky",\n            width: "max(33%, 256px)"\n          }\n        }\n      }\n    }\n  }, /*#__PURE__*/React.createElement(CssBaseline, null), /*#__PURE__*/React.createElement(Header, null, /*#__PURE__*/React.createElement(Box, {\n    sx: {\n      mt: 3,\n      mr: 2,\n      px: 2,\n      flexGrow: 1,\n      minWidth: 0,\n      display: "flex",\n      gap: 2,\n      bgcolor: "background.paper",\n      borderTopLeftRadius: 20,\n      borderTopRightRadius: 20,\n      alignItems: "center"\n    }\n  }, /*#__PURE__*/React.createElement(Typography, {\n    variant: "h5"\n  }, /*#__PURE__*/React.createElement("b", null, "Dashboard")), /*#__PURE__*/React.createElement(FilledInput, {\n    size: "small",\n    disableUnderline: true,\n    hiddenLabel: true,\n    placeholder: "Search...",\n    startAdornment: /*#__PURE__*/React.createElement(InputAdornment, {\n      position: "start"\n    }, /*#__PURE__*/React.createElement(Search, null))\n  }), /*#__PURE__*/React.createElement(IconButton, {\n    sx: {\n      ml: "auto"\n    }\n  }, /*#__PURE__*/React.createElement(Badge, {\n    badgeContent: 4,\n    color: "secondary"\n  }, /*#__PURE__*/React.createElement(Notifications, null))), /*#__PURE__*/React.createElement(Avatar, null, "A"))), /*#__PURE__*/React.createElement(EdgeSidebar, {\n    anchor: "left"\n  }, /*#__PURE__*/React.createElement(SidebarContent, {\n    sx: {\n      justifyContent: "center",\n      alignItems: "center",\n      gap: 3\n    }\n  }, /*#__PURE__*/React.createElement(Button, {\n    color: "primary",\n    variant: "contained"\n  }, /*#__PURE__*/React.createElement(Home, null)), /*#__PURE__*/React.createElement(Button, {\n    color: "primary"\n  }, /*#__PURE__*/React.createElement(Person, null)), /*#__PURE__*/React.createElement(Button, {\n    color: "primary"\n  }, /*#__PURE__*/React.createElement(Comment, null)), /*#__PURE__*/React.createElement(Button, {\n    color: "primary"\n  }, /*#__PURE__*/React.createElement(Settings, null)))), /*#__PURE__*/React.createElement(EdgeSidebar, {\n    anchor: "right"\n  }, /*#__PURE__*/React.createElement(SidebarContent, {\n    sx: {\n      pr: 2,\n      mt: 3\n    }\n  }, [...Array(6).fill(undefined)].map((_, index) => /*#__PURE__*/React.createElement(IconButton, {\n    key: index\n  }, /*#__PURE__*/React.createElement(Avatar, null))))), /*#__PURE__*/React.createElement(Content, null, /*#__PURE__*/React.createElement(InsetContainer, {\n    maxWidth: false,\n    disableGutters: true,\n    rightSidebar: /*#__PURE__*/React.createElement(InsetSidebar, {\n      sx: {\n        p: 2,\n        height: "100%"\n      }\n    }, /*#__PURE__*/React.createElement(Avatar, {\n      sx: {\n        width: 100,\n        height: 100,\n        mx: "auto"\n      }\n    }), /*#__PURE__*/React.createElement(TextField, {\n      label: "First Name",\n      margin: "normal",\n      fullWidth: true\n    }), /*#__PURE__*/React.createElement(TextField, {\n      label: "Last Name",\n      margin: "normal",\n      fullWidth: true\n    }), /*#__PURE__*/React.createElement(TextField, {\n      label: "Address",\n      multiline: true,\n      minRows: 3,\n      margin: "normal",\n      fullWidth: true\n    })),\n    sx: {\n      borderBottomLeftRadius: 20,\n      borderBottomRightRadius: 20,\n      bgcolor: "background.paper",\n      mr: 2\n    }\n  }, /*#__PURE__*/React.createElement(Box, {\n    p: 2\n  }, /*#__PURE__*/React.createElement(Grid, {\n    container: true,\n    spacing: 2\n  }, [...Array(9).fill(undefined)].map((_, index) => /*#__PURE__*/React.createElement(Grid, {\n    item: true,\n    xs: 12,\n    sm: 6,\n    md: 4,\n    key: index\n  }, /*#__PURE__*/React.createElement(Card, {\n    variant: "outlined"\n  }, /*#__PURE__*/React.createElement(CardHeader, {\n    avatar: /*#__PURE__*/React.createElement(Skeleton, {\n      animation: "wave",\n      variant: "circular",\n      width: 40,\n      height: 40\n    }),\n    title: /*#__PURE__*/React.createElement(Skeleton, {\n      animation: "wave",\n      height: 10,\n      width: "80%",\n      style: {\n        marginBottom: 6\n      }\n    }),\n    subheader: /*#__PURE__*/React.createElement(Skeleton, {\n      animation: "wave",\n      height: 10,\n      width: "40%"\n    })\n  }), /*#__PURE__*/React.createElement(Skeleton, {\n    animation: "wave",\n    variant: "rectangular",\n    sx: {\n      height: "0px",\n      pb: "56.25%"\n    }\n  }), /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement(Skeleton, {\n    animation: "wave",\n    height: 10,\n    style: {\n      marginBottom: 6\n    }\n  }), /*#__PURE__*/React.createElement(Skeleton, {\n    animation: "wave",\n    height: 10,\n    width: "80%"\n  }))))))))), /*#__PURE__*/React.createElement(Footer, null, /*#__PURE__*/React.createElement(Paper, {\n    sx: {\n      mr: 2,\n      borderRadius: "20px",\n      p: 2\n    }\n  }, /*#__PURE__*/React.createElement(Typography, {\n    variant: "body2"\n  }, /*#__PURE__*/React.createElement("b", null, "Footer")))))));\n};';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Layout v5/Example/GlobalTheme"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone layout-example-globalTheme\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"layoutexampleglobaltheme",children:"LayoutExampleGlobalTheme"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:LayoutExampleGlobalThemeraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);