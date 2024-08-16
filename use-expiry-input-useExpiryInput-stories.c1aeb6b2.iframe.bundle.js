"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[5877],{"./blocks/use-expiry-input/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const useExpiryInputraw_namespaceObject='import React from "react";\nimport {\n  InputHanders,\n  useIsFirstMount,\n  useSeparatorInput,\n} from "../use-input-siblings";\n\nexport interface ExpiryValue {\n  expMonth?: number;\n  expYear?: number;\n}\nexport interface UseExpiryInputOptions {\n  /**\n   * If `true`, year will be in YYYY format\n   */\n  fullYear?: boolean;\n  /**\n   * initial value (don\'t use together with `value`)\n   */\n  defaultValue?: ExpiryValue;\n  /**\n   * value for controlled input\n   */\n  value?: ExpiryValue;\n  /**\n   * a callback function when input value changed\n   */\n  onChange?: (value: ExpiryValue, meta: { invalid: boolean }) => void;\n}\nconst prependZero = (value: number | undefined) => {\n  if (!value) return "";\n  return value.toString().length === 1 ? `0${value}` : value;\n};\n\nconst formatValue = (value: ExpiryValue) =>\n  value.expMonth ? `${prependZero(value.expMonth)}/${value.expYear || ""}` : "";\n\nexport const expiryValidator = (value: string) =>\n  new RegExp(/^(0[1-9]|1[0-2])\\/(2[0-9]{3}|[0-9]{2})$/).test(value);\n\nexport const useExpiryInput = (options?: UseExpiryInputOptions) => {\n  const { fullYear = false, defaultValue, value } = options || {};\n  const formattedValue = formatValue(value || defaultValue || {});\n  const expiry = useSeparatorInput({\n    maxLength: [2, fullYear ? 4 : 2],\n    separator: "/",\n    value: formattedValue,\n    validator: expiryValidator,\n  });\n\n  const isFirstMount = useIsFirstMount();\n\n  React.useEffect(() => {\n    if (!isFirstMount) {\n      const [expMonth, expYear] = expiry.value.split("/");\n      options?.onChange?.(\n        {\n          expMonth: Number(expMonth) || undefined,\n          expYear: Number(expYear) || undefined,\n        },\n        { invalid: !expiryValidator(expiry.value) }\n      );\n    }\n  }, [expiry.value]);\n\n  return {\n    ...expiry,\n    getInputProps: (handlers?: Pick<InputHanders, "onChange">) => {\n      const inputProps = expiry.getInputProps(handlers);\n      return {\n        ...inputProps,\n        size: fullYear ? 7 : 5,\n        type: "tel",\n        inputMode: "numeric" as const,\n        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {\n          const inputValue = event.target.value;\n          if (\n            inputValue.length === 2 &&\n            Number.isInteger(Number(inputValue[0])) &&\n            inputValue[1] === "/"\n          ) {\n            handlers?.onChange?.(event);\n            expiry.setValue(`0${inputValue}`);\n          } else {\n            inputProps.onChange(event);\n          }\n        },\n      };\n    },\n  };\n};\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Hook/useExpiryInput"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone use-expiry-input use-input-siblings\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"useexpiryinput",children:"UseExpiryInput"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:useExpiryInputraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./blocks/use-expiry-input/useExpiryInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Input:()=>Input,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_decorators_storyDialog__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),_usage_mdx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./blocks/use-expiry-input/usage.mdx"),_useExpiryInput__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./blocks/use-expiry-input/useExpiryInput.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Hook/useExpiryInput",parameters:{layout:"centered",githubUsername:"siriwatknp",modules:["use-input-siblings"]},decorators:[(0,_storybook_decorators_storyDialog__WEBPACK_IMPORTED_MODULE_1__.Z)(_usage_mdx__WEBPACK_IMPORTED_MODULE_2__.default)]},Input={render:args=>{const{getInputProps}=(0,_useExpiryInput__WEBPACK_IMPORTED_MODULE_3__.Y)(args);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{htmlFor:"expiry",style:{display:"block",fontSize:"12px"}},"Expiry date"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",_extends({id:"expiry"},getInputProps())))}};Input.parameters={...Input.parameters,docs:{...Input.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const {\n      getInputProps\n    } = useExpiryInput(args);\n    return <div>\n        <label htmlFor="expiry" style={{\n        display: "block",\n        fontSize: "12px"\n      }}>\n          Expiry date\n        </label>\n        <input id="expiry" {...getInputProps()} />\n      </div>;\n  }\n}',...Input.parameters?.docs?.source}}};const __namedExportsOrder=["Input"]},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Container/Container.js"),_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js"),_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/DialogContent/DialogContent.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-ZHZY55TS.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_1__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,{globals,...rest}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__.Z,{fullScreen:!0,open:globals.blockUsage||!1,transitionDuration:{enter:300,exit:400},slotProps:{backdrop:{sx:theme=>({backgroundColor:`rgba(${theme.vars.palette.background.defaultChannel}/0.5)`})}}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__.Z,{maxWidth:"md"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.f6,{theme:defaultTheme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.Z,{components:defaultComponents},react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:"loading..."},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,null))))))))}}},"./blocks/use-expiry-input/useExpiryInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>useExpiryInput});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_input_siblings__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./blocks/use-input-siblings/index.ts");const expiryValidator=value=>new RegExp(/^(0[1-9]|1[0-2])\/(2[0-9]{3}|[0-9]{2})$/).test(value),useExpiryInput=options=>{const{fullYear=!1,defaultValue,value}=options||{},formattedValue=(value=>value.expMonth?`${(value=>value?1===value.toString().length?`0${value}`:value:"")(value.expMonth)}/${value.expYear||""}`:"")(value||defaultValue||{}),expiry=(0,_use_input_siblings__WEBPACK_IMPORTED_MODULE_1__.Ux)({maxLength:[2,fullYear?4:2],separator:"/",value:formattedValue,validator:expiryValidator}),isFirstMount=(0,_use_input_siblings__WEBPACK_IMPORTED_MODULE_1__.C6)();return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{if(!isFirstMount){const[expMonth,expYear]=expiry.value.split("/");options?.onChange?.({expMonth:Number(expMonth)||void 0,expYear:Number(expYear)||void 0},{invalid:!expiryValidator(expiry.value)})}}),[expiry.value]),{...expiry,getInputProps:handlers=>{const inputProps=expiry.getInputProps(handlers);return{...inputProps,size:fullYear?7:5,type:"tel",inputMode:"numeric",onChange:event=>{const inputValue=event.target.value;2===inputValue.length&&Number.isInteger(Number(inputValue[0]))&&"/"===inputValue[1]?(handlers?.onChange?.(event),expiry.setValue(`0${inputValue}`)):inputProps.onChange(event)}}}}}},"./blocks/use-input-siblings/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gl:()=>useInput,tz:()=>useInputSiblings,C6:()=>useIsFirstMount,Ux:()=>useSeparatorInput,Cm:()=>useTwoNumbersInput});var react=__webpack_require__("./node_modules/react/index.js");const useIsFirstMount=()=>{const firstMount=react.useRef(!0);return react.useEffect((()=>{firstMount.current=!1}),[]),firstMount.current},useInput=options=>{const{autoFocus=!1,value}=options,ref=react.useRef(null),[internalValue,setInternalValue]=react.useState((value||options.defaultValue||"").slice(0,options.maxLength));(0,react.useEffect)((()=>{autoFocus&&ref.current&&(ref.current.focus(),0!==ref.current.value.length&&ref.current.setSelectionRange(0,ref.current.value.length))}),[autoFocus]);const isFirstMount=useIsFirstMount();return(0,react.useEffect)((()=>{isFirstMount||setInternalValue(value||"")}),[value]),{options,value:internalValue,invalid:"function"==typeof options.validator&&!options.validator(internalValue),setValue:setInternalValue,getDOM:()=>ref.current,getInputProps:handlers=>({ref,value:internalValue,onChange:event=>{let inputValue=event.target.value;handlers?.onChange?.(event),inputValue=inputValue.substr(0,options.maxLength),setInternalValue(inputValue),options.onChange?.(inputValue,{invalid:"function"==typeof options.validator&&!options.validator(inputValue)})}})}},prependZero=value=>value?1===value.length?`0${value}`:value:"",useTwoNumbersInput=options=>{let defaultValue=options?.defaultValue;void 0!==defaultValue&&(defaultValue=prependZero(defaultValue));let value=options?.value;void 0!==value&&(value=prependZero(value));const result=useInput({validator:value=>new RegExp(/^\d{0,2}$/).test(value),...options,defaultValue,value,maxLength:2});return{...result,getInputProps:handlers=>({...result.getInputProps(handlers),onBlur:event=>{console.log("blur"),handlers?.onBlur?.(event),result.setValue((currentValue=>1===currentValue.length?`0${currentValue}`:currentValue))}})}};const useInputSiblings=options=>{const{siblings}=options,blurEvent=react.useRef(void 0),[unFocused,setUnFocused]=react.useState(!1);return react.useEffect((()=>{unFocused&&siblings.every((input=>{const DOM=input.getDOM();return DOM&&DOM.ownerDocument.activeElement!==DOM}))&&blurEvent.current&&options?.onBlur?.(blurEvent.current)}),[unFocused]),siblings.map(((input,index)=>function(handlers){const inputProps=input.getInputProps();return{...inputProps,onFocus:event=>{handlers?.onFocus?.(event),inputProps.onFocus?.(event),setUnFocused(!1)},onChange:event=>{handlers?.onChange?.(event),inputProps.onChange?.(event);const{value}=event.target,jumpLength=function getJumpLength(maxLength){return"number"==typeof maxLength?maxLength:maxLength.reduce(((total,num)=>total+num))+maxLength.length-1}(input.options.maxLength);if(value.length===jumpLength){const nextDOM=siblings[index+1]?.getDOM();nextDOM&&(nextDOM.focus(),nextDOM.setSelectionRange(0,nextDOM.value.length))}},onBlur:event=>{handlers?.onBlur?.(event),inputProps.onBlur?.(event),blurEvent.current=event,setUnFocused(!0)},onKeyDown:event=>{if(handlers?.onKeyDown?.(event),inputProps.onKeyDown?.(event),index>0){const DOM=siblings[index].getDOM();"Backspace"===event.code&&DOM&&!DOM.value.length&&siblings[index-1].getDOM()?.focus()}}}}))},someEqual=(value,matches)=>matches.some((match=>value===match)),useSeparatorInput=options=>{const{autoFocus=!1,defaultValue,value,maxLength,separator="/",validator}=options,maxCharaters=maxLength.reduce(((total,num)=>total+num))+maxLength.length-1,separatorIndexes=(maxLength=>{const chars=[];let count=0;return maxLength.forEach(((num,index,array)=>{count+=num,index!==array.length-1&&chars.push(count),count+=1})),chars})(maxLength),ref=react.useRef(null),codeRef=react.useRef(),[internalValue,setInternalValue]=react.useState(((value,separatorIndexes)=>someEqual(value.length,separatorIndexes)?`${value}/`:value)((value||defaultValue||"").slice(0,maxCharaters),separatorIndexes));react.useEffect((()=>{autoFocus&&ref.current&&ref.current.focus()}),[autoFocus]);const isFirstMount=useIsFirstMount();return react.useEffect((()=>{isFirstMount||setInternalValue(value||"")}),[value]),{options,value:internalValue,setValue:setInternalValue,invalid:"function"==typeof validator&&!validator(internalValue),getDOM:()=>ref.current,getInputProps:handlers=>({ref,value:internalValue,onChange:event=>{handlers?.onChange?.(event);const inputValue=event.target.value;let newValue=inputValue;"Backspace"===codeRef.current&&someEqual(inputValue.length,separatorIndexes)?newValue=inputValue.slice(0,-1):someEqual(inputValue.length,separatorIndexes)&&(newValue=`${inputValue}${separator}`),newValue=newValue.substr(0,maxCharaters),setInternalValue(newValue),options?.onChange?.(newValue,{invalid:"function"==typeof validator&&!validator(newValue)})},onKeyDown:event=>{handlers?.onKeyDown?.(event),codeRef.current=event.code}})}}}}]);