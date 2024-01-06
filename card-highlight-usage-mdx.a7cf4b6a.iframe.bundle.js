"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[3650],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./blocks/card-highlight/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardHighlightraw_namespaceObject='import React from "react";\nimport Avatar from "@mui/material/Avatar";\nimport Box from "@mui/material/Box";\nimport CardMedia from "@mui/material/CardMedia";\nimport Grid from "@mui/material/Grid";\nimport { styled } from "@mui/material/styles";\nimport Color from "color"; // v3.2.1\n\nconst defaultColor = "#747f84";\n\nconst StyledRoot = styled("div")<{ color?: string }>(\n  ({ color = defaultColor }) => ({\n    position: "relative",\n    borderRadius: "1rem",\n    minWidth: 320,\n    paddingTop: 160,\n    "&:before": {\n      transition: "0.2s",\n      position: "absolute",\n      width: "100%",\n      height: "100%",\n      content: \'""\',\n      display: "block",\n      borderRadius: "1rem",\n      zIndex: 0,\n      bottom: 0,\n      backgroundColor: Color(color).darken(0.3).desaturate(0.2).string(),\n    },\n    "&:hover": {\n      "&:before": {\n        bottom: -6,\n      },\n      "& .MuiAvatar-root": {\n        transform: "scale(1.1)",\n        boxShadow: "0 6px 20px 0 rgba(0,0,0,0.38)",\n      },\n    },\n  })\n);\n\nconst CardMediaCover = styled(CardMedia)(() => ({\n  borderRadius: "1rem",\n  position: "absolute",\n  width: "100%",\n  height: "100%",\n  top: 0,\n  left: 0,\n  zIndex: 0,\n  backgroundColor: "rgba(0, 0, 0, 0.08)",\n  backgroundPosition: "center",\n}));\n\nconst StyledH2 = styled("h2")(() => ({\n  fontFamily: "Fjalla One",\n  fontSize: "1.25rem",\n  color: "#fff",\n  margin: 0,\n}));\n\nconst StyledContent = styled("div")<{ color?: string }>(\n  ({ color = defaultColor }) => ({\n    position: "relative",\n    zIndex: 1,\n    padding: "1rem",\n    borderRadius: "1rem",\n    boxShadow: `0 6px 16px 0 ${Color(color).fade(0.5)}`,\n    "&:before": {\n      content: \'""\',\n      display: "block",\n      position: "absolute",\n      left: 0,\n      top: 1,\n      zIndex: 0,\n      width: "100%",\n      height: "100%",\n      clipPath:\n        "polygon(0% 100%, 0% 35%, 0.3% 33%, 1% 31%, 1.5% 30%, 2% 29%, 2.5% 28.4%, 3% 27.9%, 3.3% 27.6%, 5% 27%,95% 0%,100% 0%, 100% 100%)",\n      borderRadius: "1rem",\n      background: `linear-gradient(to top, ${color}, ${Color(color)\n        .rotate(24)\n        .lighten(0.12)})`,\n    },\n  })\n);\n\nconst AvatarLogo = styled(Avatar)(() => ({\n  transition: "0.3s",\n  width: 100,\n  height: 100,\n  boxShadow: "0 4px 12px 0 rgba(0,0,0,0.24)",\n  borderRadius: "1rem",\n}));\n\nconst StyledDivTeam = styled("div")(({ theme }) => ({\n  fontFamily: "Sen",\n  fontSize: "0.75rem",\n  color: "rgba(255 255 255 / 80%)",\n}));\n\nconst StyledDivDate = styled("div")(({ theme }) => ({\n  fontFamily: "Sen",\n  color: "#fff",\n  backgroundColor: theme.palette.text.disabled,\n  opacity: 0.72,\n  fontSize: "0.75rem",\n  padding: "0 0.5rem",\n  borderRadius: 12,\n}));\n\nconst CustomCard = ({\n  color,\n  cover,\n  logo,\n  title,\n  brand,\n  date,\n}: {\n  color?: string;\n  cover: string;\n  logo: string;\n  title: React.ReactNode;\n  brand: string;\n  date: string;\n}) => {\n  return (\n    <StyledRoot color={color}>\n      <CardMediaCover image={cover} />\n      <StyledContent color={color}>\n        <Box position={"relative"} zIndex={1}>\n          <Box display="flex" p={0} gap={2} sx={{ flexWrap: "nowrap" }}>\n            <Box>\n              <AvatarLogo src={logo} />\n            </Box>\n            <Box alignSelf="flex-end">\n              <StyledH2>{title}</StyledH2>\n            </Box>\n          </Box>\n          <Box display="flex" mt={4} alignItems={"center"}>\n            <Box>\n              <StyledDivTeam>{brand}</StyledDivTeam>\n            </Box>\n            <Box ml="auto">\n              <StyledDivDate>{date}</StyledDivDate>\n            </Box>\n          </Box>\n        </Box>\n      </StyledContent>\n    </StyledRoot>\n  );\n};\n\nexport function CardHighlight() {\n  return (\n    <Grid wrap={"nowrap"} container spacing={4}>\n      <Grid item>\n        <CustomCard\n          color="#fc7944"\n          brand={"Overwatch Official"}\n          date={"02.04.2020"}\n          cover={\n            "https://cdn.vox-cdn.com/thumbor/C6_-SDnnoFdS19XRH4XvAYN1BT8=/148x0:1768x1080/1400x1400/filters:focal(148x0:1768x1080):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/49641465/tracer_overwatch.0.0.jpg"\n          }\n          logo={"https://d3fa68hw0m2vcc.cloudfront.net/bf4/156511609.jpeg"}\n          title={\n            <>\n              Astronomy Binoculars\n              <br />A Great Alternative\n            </>\n          }\n        />\n      </Grid>\n      <Grid item>\n        <CustomCard\n          color="#5357ce"\n          brand={"League of Legends Official"}\n          date={"02.04.2020"}\n          cover={"https://www.pcclean.io/wp-content/uploads/2019/04/559308.jpg"}\n          logo={\n            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XNqnR-ilQYSK60Hb4kIHMlWQFasoZhmARmaZNxChryILm1wS8das-NkdGzxIw32jtUE&usqp=CAU"\n          }\n          title={\n            <>\n              Astronomy Binoculars\n              <br />A Great Alternative\n            </>\n          }\n        />\n      </Grid>\n    </Grid>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",ul:"ul",li:"li",a:"a",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/Highlight"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/Qix-/color",target:"_blank",rel:"nofollow noopener noreferrer",children:"Qix-/Color"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"yarn add color @types/color\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone card-highlight\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cardhighlight",children:"CardHighlight"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardHighlightraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);