"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[8696],{"./blocks/use-birthdate-input/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const useBirthdateInputraw_namespaceObject='import React from "react";\nimport { useSeparatorInput } from "../use-input-siblings";\n\nexport interface UseBirthdateInputOptions {\n  /**\n   * separator between number, 10/02/1999\n   * @default "/"\n   */\n  separator?: string;\n  /**\n   * initial value (don\'t use together with `value`)\n   */\n  defaultValue?: string;\n  /**\n   * value for controlled input\n   */\n  value?: string;\n  /**\n   * a callback function when input value changed\n   */\n  onChange?: (value: string, meta: { invalid: boolean }) => void;\n}\ninterface InputHanders {\n  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;\n  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;\n}\n\nconst dayMonthYearValidator = (day?: string, month?: string, year?: string) => {\n  return (\n    Number(day) >= 1 &&\n    Number(day) <= 31 &&\n    Number(month) >= 1 &&\n    Number(month) <= 12 &&\n    Number(year) >= 1500 &&\n    Number(year) <= 2999\n  );\n};\n\nexport const useBirthdateInput = (options: UseBirthdateInputOptions = {}) => {\n  const { separator = "/" } = options;\n  const result = useSeparatorInput({\n    ...options,\n    separator,\n    maxLength: [2, 2, 4],\n    validator: (value) => dayMonthYearValidator(...value.split(separator)),\n  });\n  return {\n    ...result,\n    getInputProps: (handlers?: InputHanders) => ({\n      size: 10,\n      pattern: "[0-9]{2}.[0-9]{2}.[0-9]{4}",\n      inputMode: "numeric" as const,\n      ...result.getInputProps(handlers),\n    }),\n  };\n};\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"hook/useBirthdateInput"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone use-birthdate-input use-input-siblings\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usebirthdateinput",children:"UseBirthdateInput"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:useBirthdateInputraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js"),_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/material/DialogContent/DialogContent.js"),_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/DialogTitle/DialogTitle.js"),_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/SvgIcon/SvgIcon.js"),_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-6P7RB4HF.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_2__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,context){const[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__.Z,{title:"Show source code",placement:"top-start",sx:{zIndex:1e5},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__.Z,{sx:{position:"fixed",bottom:"1rem",left:"0.5rem",zIndex:99999,borderRadius:40},onClick:()=>setOpen(!0),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_6__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"})})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_7__.Z,{open,onClose:()=>setOpen(!1),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8__.Z,{children:"Usage"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_9__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_theming__WEBPACK_IMPORTED_MODULE_10__.f6,{theme:defaultTheme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mdx_js_react__WEBPACK_IMPORTED_MODULE_11__.Zo,{components:defaultComponents,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component,{})})})})]})]})}}},"./blocks/use-birthdate-input/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>useBirthdateInput});var use_input_siblings=__webpack_require__("./blocks/use-input-siblings/index.ts");const useBirthdateInput=(options={})=>{const{separator="/"}=options,result=(0,use_input_siblings.Ux)({...options,separator,maxLength:[2,2,4],validator:value=>((day,month,year)=>Number(day)>=1&&Number(day)<=31&&Number(month)>=1&&Number(month)<=12&&Number(year)>=1500&&Number(year)<=2999)(...value.split(separator))});return{...result,getInputProps:handlers=>({size:10,pattern:"[0-9]{2}.[0-9]{2}.[0-9]{4}",inputMode:"numeric",...result.getInputProps(handlers)})}}},"./blocks/use-input-siblings/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gl:()=>useInput,tz:()=>useInputSiblings,C6:()=>useIsFirstMount,Ux:()=>useSeparatorInput,Cm:()=>useTwoNumbersInput});var react=__webpack_require__("./node_modules/react/index.js");const useIsFirstMount=()=>{const firstMount=react.useRef(!0);return react.useEffect((()=>{firstMount.current=!1}),[]),firstMount.current},useInput=options=>{const{autoFocus=!1,value}=options,ref=react.useRef(null),[internalValue,setInternalValue]=react.useState((value||options.defaultValue||"").slice(0,options.maxLength));(0,react.useEffect)((()=>{autoFocus&&ref.current&&(ref.current.focus(),0!==ref.current.value.length&&ref.current.setSelectionRange(0,ref.current.value.length))}),[autoFocus]);const isFirstMount=useIsFirstMount();return(0,react.useEffect)((()=>{isFirstMount||setInternalValue(value||"")}),[value]),{options,value:internalValue,invalid:"function"==typeof options.validator&&!options.validator(internalValue),setValue:setInternalValue,getDOM:()=>ref.current,getInputProps:handlers=>({ref,value:internalValue,onChange:event=>{let inputValue=event.target.value;handlers?.onChange?.(event),inputValue=inputValue.substr(0,options.maxLength),setInternalValue(inputValue),options.onChange?.(inputValue,{invalid:"function"==typeof options.validator&&!options.validator(inputValue)})}})}},prependZero=value=>value?1===value.length?`0${value}`:value:"",useTwoNumbersInput=options=>{let defaultValue=options?.defaultValue;void 0!==defaultValue&&(defaultValue=prependZero(defaultValue));let value=options?.value;void 0!==value&&(value=prependZero(value));const result=useInput({validator:value=>new RegExp(/^\d{0,2}$/).test(value),...options,defaultValue,value,maxLength:2});return{...result,getInputProps:handlers=>({...result.getInputProps(handlers),onBlur:event=>{console.log("blur"),handlers?.onBlur?.(event),result.setValue((currentValue=>1===currentValue.length?`0${currentValue}`:currentValue))}})}};const useInputSiblings=options=>{const{siblings}=options,blurEvent=react.useRef(void 0),[unFocused,setUnFocused]=react.useState(!1);return react.useEffect((()=>{unFocused&&siblings.every((input=>{const DOM=input.getDOM();return DOM&&DOM.ownerDocument.activeElement!==DOM}))&&blurEvent.current&&options?.onBlur?.(blurEvent.current)}),[unFocused]),siblings.map(((input,index)=>function(handlers){const inputProps=input.getInputProps();return{...inputProps,onFocus:event=>{handlers?.onFocus?.(event),inputProps.onFocus?.(event),setUnFocused(!1)},onChange:event=>{handlers?.onChange?.(event),inputProps.onChange?.(event);const{value}=event.target,jumpLength=function getJumpLength(maxLength){return"number"==typeof maxLength?maxLength:maxLength.reduce(((total,num)=>total+num))+maxLength.length-1}(input.options.maxLength);if(value.length===jumpLength){const nextDOM=siblings[index+1]?.getDOM();nextDOM&&(nextDOM.focus(),nextDOM.setSelectionRange(0,nextDOM.value.length))}},onBlur:event=>{handlers?.onBlur?.(event),inputProps.onBlur?.(event),blurEvent.current=event,setUnFocused(!0)},onKeyDown:event=>{if(handlers?.onKeyDown?.(event),inputProps.onKeyDown?.(event),index>0){const DOM=siblings[index].getDOM();"Backspace"===event.code&&DOM&&!DOM.value.length&&siblings[index-1].getDOM()?.focus()}}}}))},someEqual=(value,matches)=>matches.some((match=>value===match)),useSeparatorInput=options=>{const{autoFocus=!1,defaultValue,value,maxLength,separator="/",validator}=options,maxCharaters=maxLength.reduce(((total,num)=>total+num))+maxLength.length-1,separatorIndexes=(maxLength=>{const chars=[];let count=0;return maxLength.forEach(((num,index,array)=>{count+=num,index!==array.length-1&&chars.push(count),count+=1})),chars})(maxLength),ref=react.useRef(null),codeRef=react.useRef(),[internalValue,setInternalValue]=react.useState(((value,separatorIndexes)=>someEqual(value.length,separatorIndexes)?`${value}/`:value)((value||defaultValue||"").slice(0,maxCharaters),separatorIndexes));react.useEffect((()=>{autoFocus&&ref.current&&ref.current.focus()}),[autoFocus]);const isFirstMount=useIsFirstMount();return react.useEffect((()=>{isFirstMount||setInternalValue(value||"")}),[value]),{options,value:internalValue,setValue:setInternalValue,invalid:"function"==typeof validator&&!validator(internalValue),getDOM:()=>ref.current,getInputProps:handlers=>({ref,value:internalValue,onChange:event=>{handlers?.onChange?.(event);const inputValue=event.target.value;let newValue=inputValue;"Backspace"===codeRef.current&&someEqual(inputValue.length,separatorIndexes)?newValue=inputValue.slice(0,-1):someEqual(inputValue.length,separatorIndexes)&&(newValue=`${inputValue}${separator}`),newValue=newValue.substr(0,maxCharaters),setInternalValue(newValue),options?.onChange?.(newValue,{invalid:"function"==typeof validator&&!validator(newValue)})},onKeyDown:event=>{handlers?.onKeyDown?.(event),codeRef.current=event.code}})}}},"./blocks/use-birthdate-input/useBirthdateInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FormikIntegration:()=>FormikIntegration,NativeInput:()=>NativeInput,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var formik__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/formik/dist/formik.esm.js"),yup__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/yup/index.esm.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./blocks/use-birthdate-input/index.ts"),_storybook_decorators_storyDialog__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),_usage_mdx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./blocks/use-birthdate-input/usage.mdx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"hook/useBirthdateInput",argTypes:{onChange:{action:"change"}},args:{separator:"/"},parameters:{layout:"centered",githubUsername:"siriwatknp"},decorators:[(0,_storybook_decorators_storyDialog__WEBPACK_IMPORTED_MODULE_3__.Z)(_usage_mdx__WEBPACK_IMPORTED_MODULE_4__.default)]},NativeInput={render:args=>{const{getInputProps}=(0,___WEBPACK_IMPORTED_MODULE_2__.g)(args);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label",{htmlFor:"birthdate",children:"Birthdate"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",{id:"birthdate",...getInputProps()})]})}},FormikInput=()=>{const[field,meta,helpers]=(0,formik__WEBPACK_IMPORTED_MODULE_6__.U$)("birthdate"),{getInputProps}=(0,___WEBPACK_IMPORTED_MODULE_2__.g)({onChange:value=>helpers.setValue(value)});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label",{htmlFor:"birthdate",children:"Birthdate"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",{id:"birthdate",required:!0,...field,...getInputProps()}),meta.touched&&meta.error?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:{color:"#ff5252"},children:meta.error}):null]})},FormikIntegration=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(formik__WEBPACK_IMPORTED_MODULE_6__.J9,{initialValues:{birthdate:""},validationSchema:yup__WEBPACK_IMPORTED_MODULE_1__.Ry({birthdate:yup__WEBPACK_IMPORTED_MODULE_1__.Z_().matches(/^\d{2}\/\d{2}\/\d{4}$/,'format must be "DD/MM/YYYY"').required("Required")}),onSubmit:values=>{alert(JSON.stringify(values,null,2))},children:({handleSubmit})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("form",{onSubmit:handleSubmit,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(FormikInput,{})})});FormikIntegration.displayName="FormikIntegration",NativeInput.parameters={...NativeInput.parameters,docs:{...NativeInput.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const {\n      getInputProps\n    } = useBirthdateInput(args);\n    return <div>\n        <div>\n          <label htmlFor="birthdate">Birthdate</label>\n        </div>\n        <input id="birthdate" {...getInputProps()} />\n      </div>;\n  }\n}',...NativeInput.parameters?.docs?.source}}},FormikIntegration.parameters={...FormikIntegration.parameters,docs:{...FormikIntegration.parameters?.docs,source:{originalSource:'() => {\n  return <Formik initialValues={{\n    birthdate: ""\n  }} validationSchema={Yup.object({\n    birthdate: Yup.string().matches(/^\\d{2}\\/\\d{2}\\/\\d{4}$/, \'format must be "DD/MM/YYYY"\').required("Required")\n  })} onSubmit={values => {\n    alert(JSON.stringify(values, null, 2));\n  }}>\n      {({\n      handleSubmit\n    }) => <form onSubmit={handleSubmit}>\n          <FormikInput />\n        </form>}\n    </Formik>;\n}',...FormikIntegration.parameters?.docs?.source}}};const __namedExportsOrder=["NativeInput","FormikIntegration"]}}]);