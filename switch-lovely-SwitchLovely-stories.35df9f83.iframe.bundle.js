"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[7994],{"./blocks/switch-lovely/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const SwitchLovelyraw_namespaceObject='import { styled } from "@mui/material/styles";\nimport Switch, { switchClasses } from "@mui/material/Switch";\nconst pxToRem = (px, oneRemPx = 17) => `${px / oneRemPx}rem`;\nexport const SwitchLovely = styled(Switch)(({\n  theme\n}) => {\n  const borderWidth = 2;\n  const width = pxToRem(56);\n  const height = pxToRem(34);\n  const size = pxToRem(22);\n  const gap = (34 - 22) / 2;\n  return {\n    width,\n    height,\n    padding: 0,\n    margin: theme.spacing(1),\n    overflow: "unset",\n    [`& .${switchClasses.switchBase}`]: {\n      padding: pxToRem(gap),\n      [`&.${switchClasses.checked}`]: {\n        color: "#fff",\n        transform: `translateX(calc(${width} - ${size} - ${pxToRem(2 * gap)}))`,\n        [`& + .${switchClasses.track}`]: {\n          backgroundColor: theme.palette.primary.main,\n          opacity: 1,\n          border: "none"\n        },\n        [`& .${switchClasses.thumb}`]: {\n          backgroundColor: "#fff"\n        }\n      }\n    },\n    [`& .${switchClasses.thumb}`]: {\n      boxShadow: "none",\n      backgroundColor: theme.palette.grey[400],\n      width: size,\n      height: size\n    },\n    [`& .${switchClasses.track}`]: {\n      borderRadius: 40,\n      border: `solid ${theme.palette.grey[400]}`,\n      borderWidth,\n      backgroundColor: theme.palette.grey[50],\n      opacity: 1,\n      transition: theme.transitions.create(["background-color", "border"]),\n      boxSizing: "border-box"\n    }\n  };\n});';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Switch/Lovely"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone switch-lovely\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"switchlovely",children:"SwitchLovely"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:SwitchLovelyraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./blocks/switch-lovely/SwitchLovely.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Lovely:()=>Lovely,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SwitchLovely_stories});var react=__webpack_require__("./node_modules/react/index.js"),googleFont=__webpack_require__("./.storybook/decorators/googleFont.tsx"),storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),Switch=__webpack_require__("./node_modules/@mui/material/Switch/Switch.js"),switchClasses=__webpack_require__("./node_modules/@mui/material/Switch/switchClasses.js");const pxToRem=(px,oneRemPx=17)=>px/oneRemPx+"rem",SwitchLovely=(0,styled.ZP)(Switch.Z)((({theme})=>{const width=pxToRem(56),height=pxToRem(34),size=pxToRem(22);return{width,height,padding:0,margin:theme.spacing(1),overflow:"unset",[`& .${switchClasses.Z.switchBase}`]:{padding:pxToRem(6),[`&.${switchClasses.Z.checked}`]:{color:"#fff",transform:`translateX(calc(${width} - ${size} - ${pxToRem(12)}))`,[`& + .${switchClasses.Z.track}`]:{backgroundColor:theme.palette.primary.main,opacity:1,border:"none"},[`& .${switchClasses.Z.thumb}`]:{backgroundColor:"#fff"}}},[`& .${switchClasses.Z.thumb}`]:{boxShadow:"none",backgroundColor:theme.palette.grey[400],width:size,height:size},[`& .${switchClasses.Z.track}`]:{borderRadius:40,border:`solid ${theme.palette.grey[400]}`,borderWidth:2,backgroundColor:theme.palette.grey[50],opacity:1,transition:theme.transitions.create(["background-color","border"]),boxSizing:"border-box"}}}));var usage=__webpack_require__("./blocks/switch-lovely/usage.mdx");const SwitchLovely_stories={title:"Switch/Lovely",component:SwitchLovely,parameters:{layout:"centered",githubUsername:"siriwatknp"},decorators:[(0,storyDialog.Z)(usage.default),(0,googleFont.Z)([])]},Lovely={render:()=>react.createElement("div",{style:{display:"flex",gap:"1rem"}},react.createElement(SwitchLovely,null),react.createElement(SwitchLovely,{defaultChecked:!0}))};Lovely.parameters={...Lovely.parameters,docs:{...Lovely.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    display: "flex",\n    gap: "1rem"\n  }}>\n      <SwitchLovely />\n      <SwitchLovely defaultChecked />\n    </div>\n}',...Lovely.parameters?.docs?.source}}};const __namedExportsOrder=["Lovely"]}}]);