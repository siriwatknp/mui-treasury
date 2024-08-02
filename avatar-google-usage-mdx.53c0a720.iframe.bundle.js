"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[7355],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./blocks/avatar-google/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const AvatarGoogleraw_namespaceObject='import React from "react";\nimport Avatar from "@mui/material/Avatar";\nimport Box, { BoxProps } from "@mui/material/Box";\n\nexport function AvatarGoogle({\n  size: avatarSize = 40,\n  style,\n  ...props\n}: { size?: number } & BoxProps) {\n  return (\n    <Box\n      component="button"\n      sx={{\n        position: "relative",\n        display: "inline-block",\n        "& > .MuiAvatar-root": {\n          width: "var(--avatarSize)",\n          height: "var(--avatarSize)",\n        },\n        "&:before": {\n          width: "calc(var(--avatarSize) + 8px)",\n          height: "calc(var(--avatarSize) + 8px)",\n          top: "50%",\n          left: "50%",\n          transform: "translate(-50%, -50%)",\n          content: \'""\',\n          display: "block",\n          position: "absolute" as const,\n          backgroundSize: "calc(var(--avatarSize) + 8px)",\n          backgroundImage: `url(\'data:image/svg+xml,%3Csvg focusable="false" height="40px" version="1.1" viewBox="0 0 40 40" width="40px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="opacity:1.0"%3E%3Cpath d="M4.02,28.27C2.73,25.8,2,22.98,2,20c0-2.87,0.68-5.59,1.88-8l-1.72-1.04C0.78,13.67,0,16.75,0,20c0,3.31,0.8,6.43,2.23,9.18L4.02,28.27z" fill="%23F6AD01"%3E%3C/path%3E%3Cpath d="M32.15,33.27C28.95,36.21,24.68,38,20,38c-6.95,0-12.98-3.95-15.99-9.73l-1.79,0.91C5.55,35.61,12.26,40,20,40c5.2,0,9.93-1.98,13.48-5.23L32.15,33.27z" fill="%23249A41"%3E%3C/path%3E%3Cpath d="M33.49,34.77C37.49,31.12,40,25.85,40,20c0-5.86-2.52-11.13-6.54-14.79l-1.37,1.46C35.72,9.97,38,14.72,38,20c0,5.25-2.26,9.98-5.85,13.27L33.49,34.77z" fill="%233174F1"%3E%3C/path%3E%3Cpath d="M20,2c4.65,0,8.89,1.77,12.09,4.67l1.37-1.46C29.91,1.97,25.19,0,20,0l0,0C12.21,0,5.46,4.46,2.16,10.96L3.88,12C6.83,6.08,12.95,2,20,2" fill="%23E92D18"%3E%3C/path%3E%3C/svg%3E\')`,\n          backgroundRepeat: "no-repeat",\n        },\n      }}\n      style={{\n        ...({ "--avatarSize": `${avatarSize}px` } as any),\n        ...style,\n      }}\n      {...props}\n    >\n      <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu8IRt2zAKQDEDvqL5Egm51VKCxJm2eb-N8YELr3=s192-c-mo" />\n    </Box>\n  );\n}\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Avatar/Google"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone avatar-google\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"avatargoogle",children:"AvatarGoogle"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:AvatarGoogleraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);