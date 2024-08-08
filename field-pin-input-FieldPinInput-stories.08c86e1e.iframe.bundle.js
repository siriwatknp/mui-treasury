"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[3522],{"./node_modules/@mui/material/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Box_Box});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),styled_engine=__webpack_require__("./node_modules/@mui/styled-engine/index.js"),styleFunctionSx=__webpack_require__("./node_modules/@mui/system/styleFunctionSx/styleFunctionSx.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/styleFunctionSx/extendSxProp.js"),useTheme=__webpack_require__("./node_modules/@mui/system/useTheme/useTheme.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var ClassNameGenerator=__webpack_require__("./node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),identifier=__webpack_require__("./node_modules/@mui/material/styles/identifier.js");const Box_boxClasses=(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").Z)("MuiBox",["root"]),defaultTheme=(0,createTheme.Z)(),Box=function createBox(options={}){const{themeId,defaultTheme,defaultClassName="MuiBox-root",generateClassName}=options,BoxRoot=(0,styled_engine.ZP)("div",{shouldForwardProp:prop=>"theme"!==prop&&"sx"!==prop&&"as"!==prop})(styleFunctionSx.Z);return react.forwardRef((function Box(inProps,ref){const theme=(0,useTheme.Z)(defaultTheme),{className,component="div",...other}=(0,extendSxProp.Z)(inProps);return(0,jsx_runtime.jsx)(BoxRoot,{as:component,ref,className:(0,clsx.Z)(className,generateClassName?generateClassName(defaultClassName):defaultClassName),theme:themeId&&theme[themeId]||theme,...other})}))}({themeId:identifier.Z,defaultTheme,defaultClassName:Box_boxClasses.root,generateClassName:ClassNameGenerator.Z.generate}),Box_Box=Box},"./blocks/field-pin-input/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const FieldPinInputraw_namespaceObject='import React from "react";\nimport Box, { BoxProps } from "@mui/material/Box";\nimport { usePinInput, UsePinInputOptions } from "../use-pin-input";\n\nexport type FieldPinInputProps = {\n  children: Array<React.ReactElement>;\n} & Omit<BoxProps, "children"> &\n  Omit<UsePinInputOptions, "pinLength">;\n\nexport const FieldPinInput = React.forwardRef<\n  HTMLDivElement,\n  React.PropsWithChildren<FieldPinInputProps>\n>(function FieldPinInput(props, ref) {\n  const { children, onChange, onBlur, ...other } = props;\n  const { pins } = usePinInput({ ...props, pinLength: children.length });\n\n  return (\n    <Box\n      ref={ref}\n      {...other}\n      sx={{\n        display: "flex",\n        gap: "0.5rem",\n        "& input": {\n          textAlign: "center",\n          caretColor: "transparent",\n        },\n      }}\n    >\n      {pins.map((getInputProps, index) => {\n        const inputElement = children[index];\n        return (\n          <React.Fragment key={index}>\n            {React.cloneElement(inputElement, {\n              inputProps: getInputProps({\n                ...inputElement.props.inputProps,\n              }),\n            })}\n          </React.Fragment>\n        );\n      })}\n    </Box>\n  );\n});\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Field/Pin/Input"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone field-pin-input use-pin-input use-input-siblings\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"fieldpininput",children:"FieldPinInput"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:FieldPinInputraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./blocks/field-pin-input/FieldPinInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Filled:()=>Filled,Outlined:()=>Outlined,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FieldPinInput_stories});var react=__webpack_require__("./node_modules/react/index.js"),FilledInput=__webpack_require__("./node_modules/@mui/material/FilledInput/FilledInput.js"),OutlinedInput=__webpack_require__("./node_modules/@mui/material/OutlinedInput/OutlinedInput.js"),storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),usePinInput=__webpack_require__("./blocks/use-pin-input/usePinInput.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const FieldPinInput=react.forwardRef((function FieldPinInput(props,ref){const{children,onChange,onBlur,...other}=props,{pins}=(0,usePinInput.b)({...props,pinLength:children.length});return react.createElement(Box.Z,_extends({ref},other,{sx:{display:"flex",gap:"0.5rem","& input":{textAlign:"center",caretColor:"transparent"}}}),pins.map(((getInputProps,index)=>{const inputElement=children[index];return react.createElement(react.Fragment,{key:index},react.cloneElement(inputElement,{inputProps:getInputProps({...inputElement.props.inputProps})}))})))}));var usage=__webpack_require__("./blocks/field-pin-input/usage.mdx");const FieldPinInput_stories={title:"Field/Pin/Input",component:FieldPinInput,parameters:{layout:"centered",githubUsername:"siriwatknp",modules:["use-pin-input","use-input-siblings"]},decorators:[(0,storyDialog.Z)(usage.default)]},Outlined={render:args=>react.createElement(FieldPinInput,args,react.createElement(OutlinedInput.Z,null),react.createElement(OutlinedInput.Z,null),react.createElement(OutlinedInput.Z,null),react.createElement(OutlinedInput.Z,null))},Filled={render:args=>react.createElement(FieldPinInput,args,react.createElement(FilledInput.Z,{disableUnderline:!0,hiddenLabel:!0}),react.createElement(FilledInput.Z,{disableUnderline:!0,hiddenLabel:!0}),react.createElement(FilledInput.Z,{disableUnderline:!0,hiddenLabel:!0}),react.createElement(FilledInput.Z,{disableUnderline:!0,hiddenLabel:!0}))};Outlined.parameters={...Outlined.parameters,docs:{...Outlined.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    return <FieldPinInput {...args}>\n        <OutlinedInput />\n        <OutlinedInput />\n        <OutlinedInput />\n        <OutlinedInput />\n      </FieldPinInput>;\n  }\n}",...Outlined.parameters?.docs?.source}}},Filled.parameters={...Filled.parameters,docs:{...Filled.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    return <FieldPinInput {...args}>\n        <FilledInput disableUnderline hiddenLabel />\n        <FilledInput disableUnderline hiddenLabel />\n        <FilledInput disableUnderline hiddenLabel />\n        <FilledInput disableUnderline hiddenLabel />\n      </FieldPinInput>;\n  }\n}",...Filled.parameters?.docs?.source}}};const __namedExportsOrder=["Outlined","Filled"]},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js"),_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/DialogContent/DialogContent.js"),_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/DialogTitle/DialogTitle.js"),_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/SvgIcon/SvgIcon.js"),_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-ZHZY55TS.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_1__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,context){const[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z,{title:"Show source code",placement:"top-start",sx:{zIndex:1e5}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__.Z,{sx:{position:"fixed",bottom:"1rem",left:"0.5rem",zIndex:99999,borderRadius:40},onClick:()=>setOpen(!0)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_5__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"}))))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_6__.Z,{open,onClose:()=>setOpen(!1)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_7__.Z,null,"Usage"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_theming__WEBPACK_IMPORTED_MODULE_9__.f6,{theme:defaultTheme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_10__.Z,{components:defaultComponents},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,null))))))}}},"./blocks/use-input-siblings/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gl:()=>useInput,tz:()=>useInputSiblings,C6:()=>useIsFirstMount,Ux:()=>useSeparatorInput,Cm:()=>useTwoNumbersInput});var react=__webpack_require__("./node_modules/react/index.js");const useIsFirstMount=()=>{const firstMount=react.useRef(!0);return react.useEffect((()=>{firstMount.current=!1}),[]),firstMount.current},useInput=options=>{const{autoFocus=!1,value}=options,ref=react.useRef(null),[internalValue,setInternalValue]=react.useState((value||options.defaultValue||"").slice(0,options.maxLength));(0,react.useEffect)((()=>{autoFocus&&ref.current&&(ref.current.focus(),0!==ref.current.value.length&&ref.current.setSelectionRange(0,ref.current.value.length))}),[autoFocus]);const isFirstMount=useIsFirstMount();return(0,react.useEffect)((()=>{isFirstMount||setInternalValue(value||"")}),[value]),{options,value:internalValue,invalid:"function"==typeof options.validator&&!options.validator(internalValue),setValue:setInternalValue,getDOM:()=>ref.current,getInputProps:handlers=>({ref,value:internalValue,onChange:event=>{let inputValue=event.target.value;handlers?.onChange?.(event),inputValue=inputValue.substr(0,options.maxLength),setInternalValue(inputValue),options.onChange?.(inputValue,{invalid:"function"==typeof options.validator&&!options.validator(inputValue)})}})}},prependZero=value=>value?1===value.length?`0${value}`:value:"",useTwoNumbersInput=options=>{let defaultValue=options?.defaultValue;void 0!==defaultValue&&(defaultValue=prependZero(defaultValue));let value=options?.value;void 0!==value&&(value=prependZero(value));const result=useInput({validator:value=>new RegExp(/^\d{0,2}$/).test(value),...options,defaultValue,value,maxLength:2});return{...result,getInputProps:handlers=>({...result.getInputProps(handlers),onBlur:event=>{console.log("blur"),handlers?.onBlur?.(event),result.setValue((currentValue=>1===currentValue.length?`0${currentValue}`:currentValue))}})}};const useInputSiblings=options=>{const{siblings}=options,blurEvent=react.useRef(void 0),[unFocused,setUnFocused]=react.useState(!1);return react.useEffect((()=>{unFocused&&siblings.every((input=>{const DOM=input.getDOM();return DOM&&DOM.ownerDocument.activeElement!==DOM}))&&blurEvent.current&&options?.onBlur?.(blurEvent.current)}),[unFocused]),siblings.map(((input,index)=>function(handlers){const inputProps=input.getInputProps();return{...inputProps,onFocus:event=>{handlers?.onFocus?.(event),inputProps.onFocus?.(event),setUnFocused(!1)},onChange:event=>{handlers?.onChange?.(event),inputProps.onChange?.(event);const{value}=event.target,jumpLength=function getJumpLength(maxLength){return"number"==typeof maxLength?maxLength:maxLength.reduce(((total,num)=>total+num))+maxLength.length-1}(input.options.maxLength);if(value.length===jumpLength){const nextDOM=siblings[index+1]?.getDOM();nextDOM&&(nextDOM.focus(),nextDOM.setSelectionRange(0,nextDOM.value.length))}},onBlur:event=>{handlers?.onBlur?.(event),inputProps.onBlur?.(event),blurEvent.current=event,setUnFocused(!0)},onKeyDown:event=>{if(handlers?.onKeyDown?.(event),inputProps.onKeyDown?.(event),index>0){const DOM=siblings[index].getDOM();"Backspace"===event.code&&DOM&&!DOM.value.length&&siblings[index-1].getDOM()?.focus()}}}}))},someEqual=(value,matches)=>matches.some((match=>value===match)),useSeparatorInput=options=>{const{autoFocus=!1,defaultValue,value,maxLength,separator="/",validator}=options,maxCharaters=maxLength.reduce(((total,num)=>total+num))+maxLength.length-1,separatorIndexes=(maxLength=>{const chars=[];let count=0;return maxLength.forEach(((num,index,array)=>{count+=num,index!==array.length-1&&chars.push(count),count+=1})),chars})(maxLength),ref=react.useRef(null),codeRef=react.useRef(),[internalValue,setInternalValue]=react.useState(((value,separatorIndexes)=>someEqual(value.length,separatorIndexes)?`${value}/`:value)((value||defaultValue||"").slice(0,maxCharaters),separatorIndexes));react.useEffect((()=>{autoFocus&&ref.current&&ref.current.focus()}),[autoFocus]);const isFirstMount=useIsFirstMount();return react.useEffect((()=>{isFirstMount||setInternalValue(value||"")}),[value]),{options,value:internalValue,setValue:setInternalValue,invalid:"function"==typeof validator&&!validator(internalValue),getDOM:()=>ref.current,getInputProps:handlers=>({ref,value:internalValue,onChange:event=>{handlers?.onChange?.(event);const inputValue=event.target.value;let newValue=inputValue;"Backspace"===codeRef.current&&someEqual(inputValue.length,separatorIndexes)?newValue=inputValue.slice(0,-1):someEqual(inputValue.length,separatorIndexes)&&(newValue=`${inputValue}${separator}`),newValue=newValue.substr(0,maxCharaters),setInternalValue(newValue),options?.onChange?.(newValue,{invalid:"function"==typeof validator&&!validator(newValue)})},onKeyDown:event=>{handlers?.onKeyDown?.(event),codeRef.current=event.code}})}}},"./blocks/use-pin-input/usePinInput.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>usePinInput});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_input_siblings__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./blocks/use-input-siblings/index.ts");const numberValidator=value=>new RegExp(/\d/).test(value),alphanumericValidator=value=>new RegExp(/[a-zA-Z0-9]/).test(value),usePinInput=(options={})=>{const{pinLength=4,defaultValue,value,type="number",mask=!1}=options,validator="number"===type?numberValidator:alphanumericValidator,splittedValue=(value||defaultValue||"").split(""),siblings=[...Array(pinLength).fill(void 0)].map(((_,index)=>(0,_use_input_siblings__WEBPACK_IMPORTED_MODULE_1__.Gl)({autoFocus:options.autoFocus&&0===index,maxLength:1,validator,value:splittedValue[index]}))),isFirstMount=(0,_use_input_siblings__WEBPACK_IMPORTED_MODULE_1__.C6)(),pinArray=siblings.map((({value})=>value));react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{isFirstMount||options.onChange?.(pinArray.join(""),{invalid:siblings.some((pinInput=>pinInput.invalid))})}),pinArray);return{pins:(0,_use_input_siblings__WEBPACK_IMPORTED_MODULE_1__.tz)({siblings,onBlur:options?.onBlur}).map((getInputProps=>handlers=>{const inputProps=getInputProps(handlers);return{"aria-label":"Please enter your pin code",size:1,type:mask?"password":"tel",pattern:"d",placeholder:"○",inputMode:"numeric",autoComplete:options.otp?"one-time-code":"off",...inputProps,onChange:event=>{let inputValue=event.target.value;if(inputValue.length>2){inputValue=inputValue[0]===inputProps.value?inputValue.slice(1):inputValue.substring(-1),handlers?.onChange?.(event);const valueArray=inputValue.split("").filter(validator).slice(0,siblings.length);valueArray.forEach(((val,index)=>{siblings[index].setValue(val)}));const nextInput=siblings[Math.min(valueArray.length,siblings.length-1)].getDOM();nextInput&&nextInput.focus()}else inputProps.onChange(event)}}}))}}}}]);