"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[8861],{"./blocks/field-number-input/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const FieldNumberInputraw_namespaceObject='import React, { PropsWithChildren } from "react";\nimport Box from "@mui/material/Box";\nimport ButtonBase from "@mui/material/ButtonBase";\nimport InputAdornment from "@mui/material/InputAdornment";\nimport OutlinedInput, { OutlinedInputProps } from "@mui/material/OutlinedInput";\nimport SvgIcon from "@mui/material/SvgIcon";\nimport { useNumberInput, UseNumberInputOptions } from "../use-number-input";\n\nexport type {\n  NumberInputError as FieldNumberInputError,\n  NumberInputEventType as FieldNumberInputEventType,\n} from "../use-number-input";\n\nexport type FieldNumberInputProps = UseNumberInputOptions & {\n  inputElement?: React.ReactElement;\n  incrementIcon?: React.ReactNode;\n  decrementIcon?: React.ReactNode;\n} & Omit<OutlinedInputProps, "onChange">;\n\nexport const FieldNumberInput = React.forwardRef<\n  any,\n  PropsWithChildren<FieldNumberInputProps>\n>(function NumberInput(props, ref) {\n  const {\n    inputElement = <OutlinedInput />,\n    endAdornment = null,\n    defaultValue,\n    allowMouseWheel,\n    keepWithinRange,\n    clampValueOnBlur,\n    focusInputOnChange,\n    formatter,\n    parser,\n    size = "medium",\n    ...other\n  } = props;\n\n  const { inputRef, getInputProps, getIncrementProps, getDecrementProps } =\n    useNumberInput(props);\n\n  return React.cloneElement(inputElement, {\n    ref,\n    size,\n    ...other,\n    inputRef,\n    inputProps: getInputProps(props),\n    endAdornment: (\n      <>\n        {endAdornment}\n        <InputAdornment position="end">\n          <Box\n            sx={(theme) => ({\n              display: "flex",\n              flexDirection: "column",\n              marginRight: "-0.5rem",\n              "& > button": {\n                display: "flex",\n                justifyContent: "center",\n                alignItems: "center",\n                borderRadius: 4,\n                "&:hover": {\n                  color: theme.palette.text.primary,\n                },\n                "&.Mui-disabled": {\n                  opacity: 0.5,\n                  cursor: "not-allowed",\n                },\n              },\n            })}\n          >\n            <ButtonBase {...getIncrementProps()}>\n              <SvgIcon>\n                <path d="M0 0h24v24H0z" fill="none" />\n                <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />\n              </SvgIcon>\n            </ButtonBase>\n            <ButtonBase {...getDecrementProps()}>\n              <SvgIcon>\n                <path d="M0 0h24v24H0V0z" fill="none" />\n                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />\n              </SvgIcon>\n            </ButtonBase>\n          </Box>\n        </InputAdornment>\n      </>\n    ),\n  });\n});\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Field/Number/Input"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone field-number-input use-number-input\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"fieldnumberinput",children:"FieldNumberInput"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:FieldNumberInputraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./blocks/field-number-input/FieldNumberInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ErrorOnBlur:()=>ErrorOnBlur,Filled:()=>Filled,FormatAndParse:()=>FormatAndParse,MinMax:()=>MinMax,NoClampOnBlur:()=>NoClampOnBlur,Precision:()=>Precision,Step:()=>Step,Warning:()=>Warning,Wheel:()=>Wheel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FieldNumberInput_stories});var react=__webpack_require__("./node_modules/react/index.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),FilledInput=__webpack_require__("./node_modules/@mui/material/FilledInput/FilledInput.js"),FormHelperText=__webpack_require__("./node_modules/@mui/material/FormHelperText/FormHelperText.js"),storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),ButtonBase=__webpack_require__("./node_modules/@mui/material/ButtonBase/ButtonBase.js"),InputAdornment=__webpack_require__("./node_modules/@mui/material/InputAdornment/InputAdornment.js"),OutlinedInput=__webpack_require__("./node_modules/@mui/material/OutlinedInput/OutlinedInput.js"),SvgIcon=__webpack_require__("./node_modules/@mui/material/SvgIcon/SvgIcon.js"),use_number_input=__webpack_require__("./blocks/use-number-input/index.ts");const FieldNumberInput=react.forwardRef((function NumberInput(props,ref){const{inputElement=react.createElement(OutlinedInput.Z,null),endAdornment=null,defaultValue,allowMouseWheel,keepWithinRange,clampValueOnBlur,focusInputOnChange,formatter,parser,size="medium",...other}=props,{inputRef,getInputProps,getIncrementProps,getDecrementProps}=(0,use_number_input.MM)(props);return react.cloneElement(inputElement,{ref,size,...other,inputRef,inputProps:getInputProps(props),endAdornment:react.createElement(react.Fragment,null,endAdornment,react.createElement(InputAdornment.Z,{position:"end"},react.createElement(Box.Z,{sx:theme=>({display:"flex",flexDirection:"column",marginRight:"-0.5rem","& > button":{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:4,"&:hover":{color:theme.palette.text.primary},"&.Mui-disabled":{opacity:.5,cursor:"not-allowed"}}})},react.createElement(ButtonBase.Z,getIncrementProps(),react.createElement(SvgIcon.Z,null,react.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),react.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"}))),react.createElement(ButtonBase.Z,getDecrementProps(),react.createElement(SvgIcon.Z,null,react.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),react.createElement("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}))))))})}));var usage=__webpack_require__("./blocks/field-number-input/usage.mdx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const FieldNumberInput_stories={title:"Field/Number/Input",component:FieldNumberInput,args:{placeholder:"enter number",size:"medium"},parameters:{layout:"centered",githubUsername:"siriwatknp",modules:["use-number-input"]},decorators:[(0,storyDialog.Z)(usage.default)]},Default={render:args=>react.createElement(FieldNumberInput,args)},Filled={render:args=>react.createElement(FieldNumberInput,_extends({},args,{inputElement:react.createElement(FilledInput.Z,{hiddenLabel:!0,disableUnderline:!0})}))},MinMax={args:{min:-5,max:5},render:args=>react.createElement(FieldNumberInput,args)},Precision={args:{precision:2,defaultValue:4},render:args=>react.createElement(FieldNumberInput,args)},Step={args:{step:10,defaultValue:4},render:args=>react.createElement(FieldNumberInput,args)},NoClampOnBlur={render:args=>react.createElement(FieldNumberInput,args),args:{defaultValue:10,clampValueOnBlur:!1}},Wheel={render:args=>react.createElement(FieldNumberInput,args),args:{defaultValue:0,allowMouseWheel:!0}},Warning={render:args=>{const[error,setError]=react.useState(null);return react.createElement(Box.Z,{height:100,width:256},react.createElement(FieldNumberInput,_extends({},args,{onChange:(_,metadata)=>{setError(metadata.error)},sx:{...!!error&&{"& .MuiOutlinedInput-notchedOutline":{borderColor:"orange !important"}}}})),error&&react.createElement(FormHelperText.Z,{sx:{...!!error&&{color:"orange"}}},"exceed-max"===error&&"Too high value, might affect performance","below-min"===error&&"Too low value, might not see any change"))},args:{defaultValue:20,allowMouseWheel:!0,step:10,min:10,max:40,keepWithinRange:!1}},ErrorOnBlur={render:args=>{const[error,setError]=react.useState(null);return react.createElement(Box.Z,{height:100,width:256},react.createElement(FieldNumberInput,_extends({},args,{onChange:(_,metadata)=>{metadata.error&&"blur"===metadata.eventType?setError(metadata.error):setError(null)},sx:{...!!error&&{"& .MuiOutlinedInput-notchedOutline":{borderColor:"red !important"}}}})),error&&react.createElement(FormHelperText.Z,{sx:{...!!error&&{color:"red"}}},"exceed-max"===error&&"Too high value, might affect performance","below-min"===error&&"Too low value, might not see any change"))},args:{defaultValue:20,allowMouseWheel:!0,step:10,min:10,max:40,keepWithinRange:!1,clampValueOnBlur:!1}},FormatAndParse={render:args=>react.createElement(FieldNumberInput,_extends({},args,{formatter:valueText=>`$${function addComma(str){return str.replace(/\B(?=(\d{3})+(?!\d))/g,",")}(valueText)}`,parser:valueText=>valueText.replace("$","").replace(/,/g,"")})),args:{defaultValue:1e3,step:2e3,allowMouseWheel:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    return <FieldNumberInput {...args} />;\n  }\n}",...Default.parameters?.docs?.source}}},Filled.parameters={...Filled.parameters,docs:{...Filled.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    return <FieldNumberInput {...args} inputElement={<FilledInput hiddenLabel disableUnderline />} />;\n  }\n}",...Filled.parameters?.docs?.source}}},MinMax.parameters={...MinMax.parameters,docs:{...MinMax.parameters?.docs,source:{originalSource:"{\n  args: {\n    min: -5,\n    max: 5\n  },\n  render: args => {\n    return <FieldNumberInput {...args} />;\n  }\n}",...MinMax.parameters?.docs?.source}}},Precision.parameters={...Precision.parameters,docs:{...Precision.parameters?.docs,source:{originalSource:"{\n  args: {\n    precision: 2,\n    defaultValue: 4\n  },\n  render: args => {\n    return <FieldNumberInput {...args} />;\n  }\n}",...Precision.parameters?.docs?.source}}},Step.parameters={...Step.parameters,docs:{...Step.parameters?.docs,source:{originalSource:"{\n  args: {\n    step: 10,\n    defaultValue: 4\n  },\n  render: args => {\n    return <FieldNumberInput {...args} />;\n  }\n}",...Step.parameters?.docs?.source}}},NoClampOnBlur.parameters={...NoClampOnBlur.parameters,docs:{...NoClampOnBlur.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    return <FieldNumberInput {...args} />;\n  }\n}",...NoClampOnBlur.parameters?.docs?.source}}},Wheel.parameters={...Wheel.parameters,docs:{...Wheel.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    return <FieldNumberInput {...args} />;\n  }\n}",...Wheel.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const [error, setError] = React.useState<FieldNumberInputError | null>(null);\n    return <Box height={100} width={256}>\n        <FieldNumberInput {...args} onChange={(_, metadata) => {\n        setError(metadata.error);\n      }} sx={{\n        ...(!!error && {\n          "& .MuiOutlinedInput-notchedOutline": {\n            borderColor: "orange !important"\n          }\n        })\n      }} />\n        {error && <FormHelperText sx={{\n        ...(!!error && {\n          color: "orange"\n        })\n      }}>\n            {error === "exceed-max" && "Too high value, might affect performance"}\n            {error === "below-min" && "Too low value, might not see any change"}\n          </FormHelperText>}\n      </Box>;\n  }\n}',...Warning.parameters?.docs?.source}}},ErrorOnBlur.parameters={...ErrorOnBlur.parameters,docs:{...ErrorOnBlur.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const [error, setError] = React.useState<FieldNumberInputError | null>(null);\n    return <Box height={100} width={256}>\n        <FieldNumberInput {...args} onChange={(_, metadata) => {\n        if (metadata.error && metadata.eventType === "blur") {\n          setError(metadata.error);\n        } else {\n          setError(null);\n        }\n      }} sx={{\n        ...(!!error && {\n          "& .MuiOutlinedInput-notchedOutline": {\n            borderColor: "red !important"\n          }\n        })\n      }} />\n        {error && <FormHelperText sx={{\n        ...(!!error && {\n          color: "red"\n        })\n      }}>\n            {error === "exceed-max" && "Too high value, might affect performance"}\n            {error === "below-min" && "Too low value, might not see any change"}\n          </FormHelperText>}\n      </Box>;\n  }\n}',...ErrorOnBlur.parameters?.docs?.source}}},FormatAndParse.parameters={...FormatAndParse.parameters,docs:{...FormatAndParse.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    function addComma(str: string) {\n      return str.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ",");\n    }\n    return <FieldNumberInput {...args} formatter={valueText => `$${addComma(valueText)}`} parser={valueText => valueText.replace("$", "").replace(/,/g, "")} />;\n  }\n}',...FormatAndParse.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Filled","MinMax","Precision","Step","NoClampOnBlur","Wheel","Warning","ErrorOnBlur","FormatAndParse"]},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Container/Container.js"),_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js"),_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/DialogContent/DialogContent.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-ZHZY55TS.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_1__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,{globals,...rest}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__.Z,{fullScreen:!0,open:globals.blockUsage||!1,transitionDuration:{enter:300,exit:400},slotProps:{backdrop:{sx:theme=>({backgroundColor:`rgba(${theme.vars.palette.background.defaultChannel}/0.5)`})}}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__.Z,{maxWidth:"md"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.f6,{theme:defaultTheme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.Z,{components:defaultComponents},react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:"loading..."},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,null))))))))}}},"./blocks/use-number-input/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{MM:()=>_useNumberInput__WEBPACK_IMPORTED_MODULE_0__.MM});var _useNumberInput__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./blocks/use-number-input/useNumberInput.ts")},"./blocks/use-number-input/useNumberInput.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{MM:()=>useNumberInput});var react=__webpack_require__("./node_modules/react/index.js");const useSafeLayoutEffect=function canUseDOM(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}()?react.useLayoutEffect:react.useEffect;function useInterval(callback,delay){const fn=function useCallbackRef(fn,deps=[]){const ref=react.useRef(fn);return useSafeLayoutEffect((()=>{ref.current=fn})),react.useCallback(((...args)=>ref.current?.(...args)),deps)}(callback);react.useEffect((()=>{let intervalId=null;const tick=()=>fn();return null!==delay&&(intervalId=window.setInterval(tick,delay)),()=>{intervalId&&window.clearInterval(intervalId)}}),[delay,fn])}function useSpinner(increment,decrement){const[isSpinning,setIsSpinning]=(0,react.useState)(!1),[action,setAction]=(0,react.useState)(null),[runOnce,setRunOnce]=(0,react.useState)(!0),paramsRef=(0,react.useRef)(),timeoutRef=(0,react.useRef)(null),removeTimeout=()=>clearTimeout(timeoutRef.current);useInterval((()=>{"increment"===action&&increment(paramsRef.current),"decrement"===action&&decrement(paramsRef.current)}),isSpinning?50:null);const up=(0,react.useCallback)((params=>{paramsRef.current=params,runOnce&&increment(params),timeoutRef.current=setTimeout((()=>{setRunOnce(!1),setIsSpinning(!0),setAction("increment")}),300)}),[increment,runOnce]),down=(0,react.useCallback)((params=>{paramsRef.current=params,runOnce&&decrement(paramsRef.current),timeoutRef.current=setTimeout((()=>{setRunOnce(!1),setIsSpinning(!0),setAction("decrement")}),300)}),[decrement,runOnce]),stop=(0,react.useCallback)((()=>{paramsRef.current=void 0,setRunOnce(!0),setIsSpinning(!1),removeTimeout()}),[]);return function useUnmountEffect(fn,deps=[]){return react.useEffect((()=>()=>fn()),deps)}(removeTimeout),{up,down,stop}}const minSafeInteger=Number.MIN_SAFE_INTEGER||-9007199254740991,maxSafeInteger=Number.MAX_SAFE_INTEGER||9007199254740991,toNumber=value=>{if(""===value)return;const result=Number(value);return Number.isNaN(result)?void 0:result},numberToString=(value,precision=0)=>{const result=value?.toFixed(precision)??"";return"NaN"===result?"":result},getStepFactor=(event,step,precision)=>{let ratio=1;(event.metaKey||event.ctrlKey)&&(ratio=.1),event.shiftKey&&(ratio=10);let stepFactor=ratio*step;return stepFactor<1/Math.pow(10,precision)&&(stepFactor=step),stepFactor},noop=value=>value;function callAllHandlers(...handlers){return event=>{handlers.forEach((handler=>{"function"==typeof handler&&handler(event)}))}}function getError(value,min,max){if("number"==typeof value){if(value<min)return"below-min";if(value>max)return"exceed-max"}return null}const useNumberInput=(options={})=>{const inputRef=(0,react.useRef)(null),{min=minSafeInteger,max=maxSafeInteger,step=1,precision=0,focusInputOnChange=!0,keepWithinRange=!0,clampValueOnBlur=!0,allowMouseWheel=!1,parser=noop,formatter=noop,onChange}=options,{interfaceValue,setInterfaceValue,numberValue,increment,decrement}=((options={})=>{const{min=minSafeInteger,max=maxSafeInteger,defaultValue,value,precision=0,step=1,keepWithinRange=!0,formatter=noop,parser=noop}=options,[interfaceValue,setInterfaceValue]=(0,react.useState)(formatter(numberToString(defaultValue,precision))),numberValue=toNumber(parser(interfaceValue));function change(multiplier=1,params={}){setInterfaceValue((current=>{const result=(toNumber(parser(current))??0)+multiplier*(params.step??step),digits=params.precision??precision;if(keepWithinRange){if(result>max)return max.toFixed(digits);if(result<min)return min.toFixed(digits)}return formatter(result.toFixed(digits))}))}return(0,react.useEffect)((()=>{void 0===defaultValue&&value!==numberValue&&setInterfaceValue(formatter(numberToString(value,precision)))}),[value]),{numberValue,interfaceValue,setInterfaceValue:value=>{setInterfaceValue(formatter(value))},increment:function increment(params={}){change(1,params)},decrement:function decrement(params={}){change(-1,params)}}})(options);(0,react.useEffect)((()=>{function handler(event){const isInputFocused=document.activeElement===inputRef.current;if(!allowMouseWheel||!isInputFocused)return;event.preventDefault();const stepFactor=getStepFactor(event,step,precision),direction=Math.sign(event.deltaY);-1===direction?increment({step:stepFactor}):1===direction&&decrement({step:stepFactor})}return document.addEventListener("wheel",handler),()=>{document.removeEventListener("wheel",handler)}}),[inputRef.current]);const isFirstMount=(()=>{const isFirstMount=(0,react.useRef)(!0);return(0,react.useEffect)((()=>{isFirstMount.current=!1}),[]),isFirstMount.current})();(0,react.useEffect)((()=>{isFirstMount||onChange?.(numberValue,{valueText:interfaceValue,error:getError(numberValue,min,max),eventType:"change"})}),[interfaceValue]);const tempInterfaceValue=(0,react.useRef)(interfaceValue),spinner=useSpinner(increment,decrement),spinUp=event=>{event.preventDefault(),spinner.up({step:getStepFactor(event,step,precision)}),focusInputOnChange&&inputRef.current?.focus()},spinDown=event=>{event.preventDefault(),spinner.down({step:getStepFactor(event,step,precision)}),focusInputOnChange&&inputRef.current?.focus()},handleKeyDown=event=>{const stepFactor=getStepFactor(event,step,precision),keyMap={ArrowUp:()=>increment({step:stepFactor}),ArrowDown:()=>decrement({step:stepFactor})},eventKey=function normalizeEventKey(event){const{key,keyCode}=event;return keyCode>=37&&keyCode<=40&&0!==key.indexOf("Arrow")?`Arrow${key}`:key}(event),action=keyMap[eventKey];action&&(event.preventDefault(),action(event))},handleChange=event=>{tempInterfaceValue.current=interfaceValue;const result=parser(event.target.value);result.match(/^(-|\+)?(0|[1-9]\d*)?(\.)?(\d+)?$/)&&setInterfaceValue(result)},handleBlur=event=>{const parsedValue=parser(event.target.value);if(""!==parsedValue){const nextNum=Number(parsedValue);let result="";Number.isNaN(nextNum)?result=tempInterfaceValue.current:(result=nextNum.toFixed(precision),clampValueOnBlur&&(nextNum>max&&(result=max.toFixed(precision)),nextNum<min&&(result=min.toFixed(precision)))),setInterfaceValue(result),onChange?.(Number(result),{valueText:formatter(result),error:getError(Number(result),min,max),eventType:"blur"})}else onChange?.(void 0,{valueText:"",error:null,eventType:"blur"})},incrementDisabled=keepWithinRange&&"number"==typeof numberValue&&numberValue>=max,decrementDisabled=keepWithinRange&&"number"==typeof numberValue&&numberValue<=min;return{inputRef,getInputProps:handlers=>({pattern:"[0-9]*(.[0-9]+)?",role:"spinbutton","aria-valuemin":min,"aria-valuemax":max,autoComplete:"off",autoCorrect:"off","aria-valuetext":interfaceValue,"aria-valuenow":numberValue,value:interfaceValue,onChange:handleChange,onBlur:callAllHandlers(handleBlur,handlers?.onBlur),onKeyDown:callAllHandlers(handleKeyDown,handlers?.onKeyDown)}),getIncrementProps:handlers=>({tabIndex:-1,..."undefined"!=typeof window&&document.documentElement.ontouchstart?{onTouchStart:callAllHandlers(spinUp,handlers?.onTouchStart)}:{onMouseDown:callAllHandlers(spinUp,handlers?.onMouseDown)},onMouseUp:callAllHandlers(spinner.stop,handlers?.onMouseUp),onMouseLeave:callAllHandlers(spinner.stop,handlers?.onMouseLeave),onTouchEnd:callAllHandlers(spinner.stop,handlers?.onTouchEnd),disabled:incrementDisabled,"aria-disabled":!!incrementDisabled||void 0}),getDecrementProps:handlers=>({tabIndex:-1,..."undefined"!=typeof window&&document.documentElement.ontouchstart?{onTouchStart:callAllHandlers(spinDown,handlers?.onTouchStart)}:{onMouseDown:callAllHandlers(spinDown,handlers?.onMouseDown)},onMouseUp:callAllHandlers(spinner.stop,handlers?.onMouseUp),onMouseLeave:callAllHandlers(spinner.stop,handlers?.onMouseLeave),onTouchEnd:callAllHandlers(spinner.stop,handlers?.onTouchEnd),disabled:decrementDisabled,"aria-disabled":!!decrementDisabled||void 0})}}}}]);