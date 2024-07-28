"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[3189],{"./node_modules/@mui/material/Checkbox/Checkbox.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Checkbox_Checkbox});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/colorManipulator/colorManipulator.js"),SwitchBase=__webpack_require__("./node_modules/@mui/material/internal/SwitchBase.js"),createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CheckBoxOutlineBlank=(0,createSvgIcon.Z)((0,jsx_runtime.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),CheckBox=(0,createSvgIcon.Z)((0,jsx_runtime.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),IndeterminateCheckBox=(0,createSvgIcon.Z)((0,jsx_runtime.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),rootShouldForwardProp=__webpack_require__("./node_modules/@mui/material/styles/rootShouldForwardProp.js"),checkboxClasses=__webpack_require__("./node_modules/@mui/material/Checkbox/checkboxClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js");const CheckboxRoot=(0,styled.ZP)(SwitchBase.Z,{shouldForwardProp:prop=>(0,rootShouldForwardProp.Z)(prop)||"classes"===prop,name:"MuiCheckbox",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.indeterminate&&styles.indeterminate,styles[`size${(0,capitalize.Z)(ownerState.size)}`],"default"!==ownerState.color&&styles[`color${(0,capitalize.Z)(ownerState.color)}`]]}})((({theme})=>({color:(theme.vars||theme).palette.text.secondary,variants:[{props:{color:"default",disableRipple:!1},style:{"&:hover":{backgroundColor:theme.vars?`rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.Fq)(theme.palette.action.active,theme.palette.action.hoverOpacity)}}},...Object.entries(theme.palette).filter((([,palette])=>palette&&palette.main)).map((([color])=>({props:{color,disableRipple:!1},style:{"&:hover":{backgroundColor:theme.vars?`rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.Fq)(theme.palette[color].main,theme.palette.action.hoverOpacity)}}}))),...Object.entries(theme.palette).filter((([,palette])=>palette&&palette.main)).map((([color])=>({props:{color},style:{[`&.${checkboxClasses.Z.checked}, &.${checkboxClasses.Z.indeterminate}`]:{color:(theme.vars||theme).palette[color].main},[`&.${checkboxClasses.Z.disabled}`]:{color:(theme.vars||theme).palette.action.disabled}}}))),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]}))),defaultCheckedIcon=(0,jsx_runtime.jsx)(CheckBox,{}),defaultIcon=(0,jsx_runtime.jsx)(CheckBoxOutlineBlank,{}),defaultIndeterminateIcon=(0,jsx_runtime.jsx)(IndeterminateCheckBox,{}),Checkbox_Checkbox=react.forwardRef((function Checkbox(inProps,ref){const props=(0,DefaultPropsProvider.i)({props:inProps,name:"MuiCheckbox"}),{checkedIcon=defaultCheckedIcon,color="primary",icon:iconProp=defaultIcon,indeterminate=!1,indeterminateIcon:indeterminateIconProp=defaultIndeterminateIcon,inputProps,size="medium",disableRipple=!1,className,...other}=props,icon=indeterminate?indeterminateIconProp:iconProp,indeterminateIcon=indeterminate?indeterminateIconProp:checkedIcon,ownerState={...props,disableRipple,color,indeterminate,size},classes=(ownerState=>{const{classes,indeterminate,color,size}=ownerState,slots={root:["root",indeterminate&&"indeterminate",`color${(0,capitalize.Z)(color)}`,`size${(0,capitalize.Z)(size)}`]},composedClasses=(0,composeClasses.Z)(slots,checkboxClasses.y,classes);return{...classes,...composedClasses}})(ownerState);return(0,jsx_runtime.jsx)(CheckboxRoot,{type:"checkbox",inputProps:{"data-indeterminate":indeterminate,...inputProps},icon:react.cloneElement(icon,{fontSize:icon.props.fontSize??size}),checkedIcon:react.cloneElement(indeterminateIcon,{fontSize:indeterminateIcon.props.fontSize??size}),ownerState,ref,className:(0,clsx.Z)(classes.root,className),...other,classes})}))},"./node_modules/@mui/material/Checkbox/checkboxClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,y:()=>getCheckboxUtilityClass});var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getCheckboxUtilityClass(slot){return(0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.ZP)("MuiCheckbox",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"])},"./node_modules/@mui/system/styled/styled.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./node_modules/@mui/system/createStyled/createStyled.js").ZP)()},"./blocks/checkbox-neon/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CheckboxNeonraw_namespaceObject='import React from "react";\nimport Checkbox, { checkboxClasses } from "@mui/material/Checkbox";\nimport FormControlLabel from "@mui/material/FormControlLabel";\nimport { styled } from "@mui/material/styles";\n\nconst mainColor = "#137cbd";\nconst encodedMainColor = encodeURIComponent(mainColor);\nconst lightColor = "rgba(19, 124, 189, 0.2)";\n\nconst errorColor = "#d52731";\nconst lightErrorColor = "rgba(213, 39, 49, 0.2)";\n\nconst NeonCheckbox = styled(Checkbox)({\n  "& + *": {\n    marginTop: "2px",\n    fontSize: "0.875rem",\n  },\n  "&:hover, &.Mui-focusVisible": {\n    backgroundColor: "transparent !important",\n  },\n  "& input + *": {\n    borderRadius: 3,\n    width: 16,\n    height: 16,\n  },\n  "& input:disabled + *": {\n    boxShadow: "inset 0 0 0 1px rgba(16,22,26,.3) !important",\n    background: "rgba(206,217,224,.5) !important",\n  },\n  [`&:not(.${checkboxClasses.checked})`]: {\n    "& input + *": {\n      boxShadow:\n        "0 1px 3px 0 rgba(0,0,0,0.12), inset 0 0 0 1px rgba(16,22,26,.5)",\n      backgroundColor: "#fff",\n    },\n    "& input:hover ~ *, & input:focus + *": {\n      boxShadow: `inset 0 0 0 1px ${mainColor}, inset 0 -1px 0 ${mainColor}`,\n      backgroundColor: lightColor,\n    },\n    "& input + .Mui-error": {\n      boxShadow: `0 1px 3px 0 ${lightErrorColor}, inset 0 0 0 1px ${errorColor}`,\n    },\n    "& input:hover + .Mui-error, input:focus + .Mui-error": {\n      background: lightErrorColor,\n    },\n  },\n  [`&.${checkboxClasses.checked}`]: {\n    "& input + *": {\n      boxShadow: `inset 0 0 0 1px ${mainColor}, inset 0 -1px 0 ${mainColor}`,\n      backgroundColor: "#fff",\n      backgroundImage:\n        "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",\n      "&:before": {\n        display: "block",\n        width: 16,\n        height: 16,\n        backgroundImage:\n          `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3E%3Cpath` +\n          " fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +\n          `1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z\' fill=\'${encodedMainColor}\'/%3E%3C/svg%3E")`,\n        content: \'""\',\n      },\n    },\n    "& input:focus + *": {\n      backgroundColor: lightColor,\n    },\n  },\n});\n\nexport function CheckboxNeon() {\n  return (\n    <div>\n      <FormControlLabel\n        control={\n          <NeonCheckbox disableRipple checkedIcon={<span />} icon={<span />} />\n        }\n        label={"Awesome"}\n      />\n      <br />\n      <FormControlLabel\n        control={\n          <NeonCheckbox\n            disableRipple\n            checkedIcon={<span />}\n            icon={<span className="Mui-error" />}\n          />\n        }\n        label={"Error"}\n      />\n      <br />\n      <FormControlLabel\n        disabled\n        control={\n          <NeonCheckbox disableRipple checkedIcon={<span />} icon={<span />} />\n        }\n        label={"Disabled"}\n      />\n    </div>\n  );\n}\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Checkbox/Neon"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone checkbox-neon\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"checkboxneon",children:"CheckboxNeon"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CheckboxNeonraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./blocks/checkbox-neon/CheckboxNeon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Neon:()=>Neon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CheckboxNeon_stories});var react=__webpack_require__("./node_modules/react/index.js"),googleFont=__webpack_require__("./.storybook/decorators/googleFont.tsx"),storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),usage=__webpack_require__("./blocks/checkbox-neon/usage.mdx"),Checkbox=__webpack_require__("./node_modules/@mui/material/Checkbox/Checkbox.js"),checkboxClasses=__webpack_require__("./node_modules/@mui/material/Checkbox/checkboxClasses.js"),FormControlLabel=__webpack_require__("./node_modules/@mui/material/FormControlLabel/FormControlLabel.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js");const encodedMainColor=encodeURIComponent("#137cbd"),NeonCheckbox=(0,styled.ZP)(Checkbox.Z)({"& + *":{marginTop:"2px",fontSize:"0.875rem"},"&:hover, &.Mui-focusVisible":{backgroundColor:"transparent !important"},"& input + *":{borderRadius:3,width:16,height:16},"& input:disabled + *":{boxShadow:"inset 0 0 0 1px rgba(16,22,26,.3) !important",background:"rgba(206,217,224,.5) !important"},[`&:not(.${checkboxClasses.Z.checked})`]:{"& input + *":{boxShadow:"0 1px 3px 0 rgba(0,0,0,0.12), inset 0 0 0 1px rgba(16,22,26,.5)",backgroundColor:"#fff"},"& input:hover ~ *, & input:focus + *":{boxShadow:"inset 0 0 0 1px #137cbd, inset 0 -1px 0 #137cbd",backgroundColor:"rgba(19, 124, 189, 0.2)"},"& input + .Mui-error":{boxShadow:"0 1px 3px 0 rgba(213, 39, 49, 0.2), inset 0 0 0 1px #d52731"},"& input:hover + .Mui-error, input:focus + .Mui-error":{background:"rgba(213, 39, 49, 0.2)"}},[`&.${checkboxClasses.Z.checked}`]:{"& input + *":{boxShadow:"inset 0 0 0 1px #137cbd, inset 0 -1px 0 #137cbd",backgroundColor:"#fff",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))","&:before":{display:"block",width:16,height:16,backgroundImage:`url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='${encodedMainColor}'/%3E%3C/svg%3E")`,content:'""'}},"& input:focus + *":{backgroundColor:"rgba(19, 124, 189, 0.2)"}}});function CheckboxNeon(){return react.createElement("div",null,react.createElement(FormControlLabel.Z,{control:react.createElement(NeonCheckbox,{disableRipple:!0,checkedIcon:react.createElement("span",null),icon:react.createElement("span",null)}),label:"Awesome"}),react.createElement("br",null),react.createElement(FormControlLabel.Z,{control:react.createElement(NeonCheckbox,{disableRipple:!0,checkedIcon:react.createElement("span",null),icon:react.createElement("span",{className:"Mui-error"})}),label:"Error"}),react.createElement("br",null),react.createElement(FormControlLabel.Z,{disabled:!0,control:react.createElement(NeonCheckbox,{disableRipple:!0,checkedIcon:react.createElement("span",null),icon:react.createElement("span",null)}),label:"Disabled"}))}const CheckboxNeon_stories={title:"Checkbox/Neon",component:CheckboxNeon,parameters:{layout:"centered",githubUsername:"siriwatknp"},decorators:[(0,storyDialog.Z)(usage.default),(0,googleFont.Z)([])]},Neon={render:()=>react.createElement(CheckboxNeon,null)};Neon.parameters={...Neon.parameters,docs:{...Neon.parameters?.docs,source:{originalSource:"{\n  render: () => <CheckboxNeon />\n}",...Neon.parameters?.docs?.source}}};const __namedExportsOrder=["Neon"]},"./.storybook/decorators/googleFont.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>googleFont});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function googleFont(fonts=[]){return Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap",rel:"stylesheet"}),fonts.map((font=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{key:font,rel:"stylesheet",href:`https://fonts.googleapis.com/css2?family=${font}&display=swap`}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js"),_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/DialogContent/DialogContent.js"),_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/DialogTitle/DialogTitle.js"),_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/SvgIcon/SvgIcon.js"),_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-ZHZY55TS.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_1__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,context){const[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z,{title:"Show source code",placement:"top-start",sx:{zIndex:1e5}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__.Z,{sx:{position:"fixed",bottom:"1rem",left:"0.5rem",zIndex:99999,borderRadius:40},onClick:()=>setOpen(!0)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_5__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"}))))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_6__.Z,{open,onClose:()=>setOpen(!1)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_7__.Z,null,"Usage"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_theming__WEBPACK_IMPORTED_MODULE_9__.f6,{theme:defaultTheme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_10__.Z,{components:defaultComponents},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,null))))))}}}}]);