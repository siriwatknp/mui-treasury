"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[1293],{"./blocks/use-number-input/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const useNumberInputraw_namespaceObject='import React, { useEffect, useRef, useState } from "react";\nimport { useSpinner } from "./useSpinner";\n\ntype EventKeys =\n  | "ArrowDown"\n  | "ArrowUp"\n  | "ArrowLeft"\n  | "ArrowRight"\n  | "Enter"\n  | "Space"\n  | "Tab"\n  | "Backspace"\n  | "Control"\n  | "Meta"\n  | "Home"\n  | "End"\n  | "PageDown"\n  | "PageUp"\n  | "Delete"\n  | "Escape"\n  | " "\n  | "Shift";\n\ntype EventKeyMap = Partial<Record<EventKeys, React.KeyboardEventHandler>>;\n\n/**\n * Get the normalized event key across all browsers\n * @param event keyboard event\n */\nfunction normalizeEventKey(event: Pick<KeyboardEvent, "key" | "keyCode">) {\n  const { key, keyCode } = event;\n\n  const isArrowKey =\n    keyCode >= 37 && keyCode <= 40 && key.indexOf("Arrow") !== 0;\n\n  const eventKey = isArrowKey ? `Arrow${key}` : key;\n\n  return eventKey as EventKeys;\n}\n\nexport const minSafeInteger = Number.MIN_SAFE_INTEGER || -9007199254740991;\nexport const maxSafeInteger = Number.MAX_SAFE_INTEGER || 9007199254740991;\n\nexport interface BoundaryParams {\n  defaultValue?: number;\n  value?: number;\n  min?: number;\n  max?: number;\n}\n\nexport interface SpinParams {\n  precision?: number;\n  step?: number;\n}\n\nexport const toNumber = (value: string | undefined) => {\n  if (value === "") return undefined;\n  const result = Number(value);\n  return Number.isNaN(result) ? undefined : result;\n};\n\nexport const numberToString = (value: number | undefined, precision = 0) => {\n  const result = value?.toFixed(precision) ?? "";\n  if (result === "NaN") return "";\n  return result;\n};\n\nexport const getStepFactor = (\n  event: Partial<{ metaKey: boolean; ctrlKey: boolean; shiftKey: boolean }>,\n  step: number,\n  precision: number\n) => {\n  let ratio = 1;\n  if (event.metaKey || event.ctrlKey) {\n    ratio = 0.1;\n  }\n  if (event.shiftKey) {\n    ratio = 10;\n  }\n  let stepFactor = ratio * step;\n  if (stepFactor < 1 / Math.pow(10, precision)) {\n    stepFactor = step;\n  }\n  return stepFactor;\n};\n\nconst noop = <T>(value: T) => value;\n\nexport const useNumberBoundary = (options: UseNumberInputOptions = {}) => {\n  const {\n    min = minSafeInteger,\n    max = maxSafeInteger,\n    defaultValue,\n    value,\n    precision = 0,\n    step = 1,\n    keepWithinRange = true,\n    formatter = noop,\n    parser = noop,\n  } = options;\n  const [interfaceValue, setInterfaceValue] = useState<string>(\n    formatter(numberToString(defaultValue, precision))\n  );\n  const numberValue = toNumber(parser(interfaceValue));\n\n  useEffect(() => {\n    if (defaultValue === undefined && value !== numberValue) {\n      setInterfaceValue(formatter(numberToString(value, precision)));\n    }\n  }, [value]);\n\n  function change(multiplier = 1, params: SpinParams = {}) {\n    setInterfaceValue((current) => {\n      const result =\n        (toNumber(parser(current)) ?? 0) + multiplier * (params.step ?? step);\n      const digits = params.precision ?? precision;\n      if (keepWithinRange) {\n        if (result > max) return max.toFixed(digits);\n        if (result < min) return min.toFixed(digits);\n      }\n      return formatter(result.toFixed(digits));\n    });\n  }\n\n  function increment(params: SpinParams = {}) {\n    change(1, params);\n  }\n\n  function decrement(params: SpinParams = {}) {\n    change(-1, params);\n  }\n\n  return {\n    numberValue,\n    interfaceValue,\n    setInterfaceValue: (value: string) => {\n      setInterfaceValue(formatter(value));\n    },\n    increment,\n    decrement,\n  };\n};\n\nexport type NumberInputEventType = "change" | "blur";\nexport type NumberInputError = "exceed-max" | "below-min";\nexport type UseNumberInputOptions = {\n  /**\n   * If true, the input\'s value will change based on mouse wheel\n   */\n  allowMouseWheel?: boolean;\n  /**\n   * This controls the value update when you blur out of the input. - If true and the value is greater than max, the value will be reset to max - Else, the value remains the same.\n   * @default true\n   */\n  clampValueOnBlur?: boolean;\n  /**\n   * This controls the value update behavior in general. - If true and you use the stepper or up/down arrow keys, the value will not exceed the max or go lower than min - If false, the value will be allowed to go out of range.\n   * @default true\n   */\n  keepWithinRange?: boolean;\n  /**\n   * If true, the input will be focused as you increment or decrement the value with the stepper\n   * @default true\n   */\n  focusInputOnChange?: boolean;\n  formatter?: (value: string) => string;\n  parser?: (value: string) => string;\n  /**\n   * a callback function when input value changed\n   */\n  onChange?: (\n    value: number | undefined,\n    metadata: {\n      error: NumberInputError | null;\n      eventType?: NumberInputEventType;\n      valueText?: string;\n    }\n  ) => void;\n} & BoundaryParams &\n  SpinParams;\n\ninterface InputHandlers {\n  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;\n  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;\n}\ninterface ButtonHandlers {\n  onTouchStart: (event: React.TouchEvent<HTMLButtonElement>) => void;\n  onTouchEnd: (event: React.TouchEvent<HTMLButtonElement>) => void;\n  onMouseDown: (event: React.MouseEvent<HTMLButtonElement>) => void;\n  onMouseUp: (event: React.MouseEvent<HTMLButtonElement>) => void;\n  onMouseLeave: (event: React.MouseEvent<HTMLButtonElement>) => void;\n}\n\nfunction callAllHandlers<T>(\n  ...handlers: Array<undefined | ((event: T) => void)>\n) {\n  return (event: T) => {\n    handlers.forEach((handler) => {\n      if (typeof handler === "function") {\n        handler(event);\n      }\n    });\n  };\n}\n\nconst useIsFirstMount = () => {\n  const isFirstMount = useRef(true);\n  useEffect(() => {\n    isFirstMount.current = false;\n  }, []);\n  return isFirstMount.current;\n};\n\nfunction getError(\n  value: number | undefined,\n  min: number,\n  max: number\n): NumberInputError | null {\n  if (typeof value === "number") {\n    if (value < min) return "below-min";\n    if (value > max) return "exceed-max";\n  }\n  return null;\n}\n\nexport const useNumberInput = (options: UseNumberInputOptions = {}) => {\n  const inputRef = useRef<HTMLInputElement | null>(null);\n  const {\n    min = minSafeInteger,\n    max = maxSafeInteger,\n    step = 1,\n    precision = 0,\n    focusInputOnChange = true,\n    keepWithinRange = true,\n    clampValueOnBlur = true,\n    allowMouseWheel = false,\n    parser = noop,\n    formatter = noop,\n    onChange,\n  } = options;\n  const {\n    interfaceValue,\n    setInterfaceValue,\n    numberValue,\n    increment,\n    decrement,\n  } = useNumberBoundary(options);\n\n  useEffect(() => {\n    if (process.env.NODE_ENV !== "production") {\n      if (focusInputOnChange && !inputRef.current) {\n        console.warn(`Cannot find inputRef, make sure to pass it to <input /> like this 👇\n\nfunction NumberInput() {\n  const { inputRef } = useNumberInput(options)\n  return (\n    <input ref={inputRef} />\n  )\n}\n        `);\n      }\n    }\n    function handler(event: WheelEvent) {\n      const isInputFocused = document.activeElement === inputRef.current;\n      if (!allowMouseWheel || !isInputFocused) return;\n\n      event.preventDefault();\n\n      const stepFactor = getStepFactor(event as any, step, precision);\n      const direction = Math.sign(event.deltaY);\n\n      if (direction === -1) {\n        increment({ step: stepFactor });\n      } else if (direction === 1) {\n        decrement({ step: stepFactor });\n      }\n    }\n    document.addEventListener("wheel", handler);\n    return () => {\n      document.removeEventListener("wheel", handler);\n    };\n  }, [inputRef.current]);\n\n  const isFirstMount = useIsFirstMount();\n  useEffect(() => {\n    if (!isFirstMount) {\n      onChange?.(numberValue, {\n        valueText: interfaceValue,\n        error: getError(numberValue, min, max),\n        eventType: "change",\n      });\n    }\n  }, [interfaceValue]);\n\n  const tempInterfaceValue = useRef(interfaceValue);\n  const spinner = useSpinner(increment, decrement);\n\n  const spinUp = (event: React.MouseEvent | React.TouchEvent) => {\n    event.preventDefault();\n    spinner.up({ step: getStepFactor(event, step, precision) });\n    if (focusInputOnChange) inputRef.current?.focus();\n  };\n\n  const spinDown = (event: React.MouseEvent | React.TouchEvent) => {\n    event.preventDefault();\n    spinner.down({ step: getStepFactor(event, step, precision) });\n    if (focusInputOnChange) inputRef.current?.focus();\n  };\n\n  const handleKeyDown = (event: React.KeyboardEvent) => {\n    const stepFactor = getStepFactor(event, step, precision);\n    const keyMap: EventKeyMap = {\n      ArrowUp: () => increment({ step: stepFactor }),\n      ArrowDown: () => decrement({ step: stepFactor }),\n    };\n    const eventKey = normalizeEventKey(event);\n    const action = keyMap[eventKey];\n    if (action) {\n      event.preventDefault();\n      action(event);\n    }\n  };\n\n  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n    tempInterfaceValue.current = interfaceValue;\n    const result = parser(event.target.value);\n    if (result.match(/^(-|\\+)?(0|[1-9]\\d*)?(\\.)?(\\d+)?$/)) {\n      setInterfaceValue(result);\n    }\n  };\n\n  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {\n    const parsedValue = parser(event.target.value);\n    if (parsedValue !== "") {\n      const nextNum = Number(parsedValue);\n      let result = "";\n      if (Number.isNaN(nextNum)) {\n        result = tempInterfaceValue.current;\n      } else {\n        result = nextNum.toFixed(precision);\n        if (clampValueOnBlur) {\n          if (nextNum > max) result = max.toFixed(precision);\n          if (nextNum < min) result = min.toFixed(precision);\n        }\n      }\n\n      setInterfaceValue(result);\n      onChange?.(Number(result), {\n        valueText: formatter(result),\n        error: getError(Number(result), min, max),\n        eventType: "blur",\n      });\n    } else {\n      onChange?.(undefined, {\n        valueText: "",\n        error: null,\n        eventType: "blur",\n      });\n    }\n  };\n\n  const incrementDisabled =\n    keepWithinRange && typeof numberValue === "number" && numberValue >= max;\n  const decrementDisabled =\n    keepWithinRange && typeof numberValue === "number" && numberValue <= min;\n  return {\n    inputRef,\n    getInputProps: (handlers?: Partial<InputHandlers>) => ({\n      pattern: "[0-9]*(.[0-9]+)?",\n      role: "spinbutton",\n      "aria-valuemin": min,\n      "aria-valuemax": max,\n      autoComplete: "off",\n      autoCorrect: "off",\n      "aria-valuetext": interfaceValue,\n      "aria-valuenow": numberValue,\n      value: interfaceValue,\n      onChange: handleChange,\n      onBlur: callAllHandlers(handleBlur, handlers?.onBlur),\n      onKeyDown: callAllHandlers(handleKeyDown, handlers?.onKeyDown),\n    }),\n    getIncrementProps: (handlers?: Partial<ButtonHandlers>) => ({\n      tabIndex: -1,\n      ...(typeof window !== "undefined" &&\n      !!document.documentElement.ontouchstart\n        ? {\n            onTouchStart: callAllHandlers(spinUp, handlers?.onTouchStart),\n          }\n        : {\n            onMouseDown: callAllHandlers(spinUp, handlers?.onMouseDown),\n          }),\n      onMouseUp: callAllHandlers(spinner.stop, handlers?.onMouseUp),\n      onMouseLeave: callAllHandlers(spinner.stop, handlers?.onMouseLeave),\n      onTouchEnd: callAllHandlers(spinner.stop, handlers?.onTouchEnd),\n      disabled: incrementDisabled,\n      "aria-disabled": incrementDisabled ? true : undefined,\n    }),\n    getDecrementProps: (handlers?: Partial<ButtonHandlers>) => ({\n      tabIndex: -1,\n      ...(typeof window !== "undefined" &&\n      !!document.documentElement.ontouchstart\n        ? {\n            onTouchStart: callAllHandlers(spinDown, handlers?.onTouchStart),\n          }\n        : {\n            onMouseDown: callAllHandlers(spinDown, handlers?.onMouseDown),\n          }),\n      onMouseUp: callAllHandlers(spinner.stop, handlers?.onMouseUp),\n      onMouseLeave: callAllHandlers(spinner.stop, handlers?.onMouseLeave),\n      onTouchEnd: callAllHandlers(spinner.stop, handlers?.onTouchEnd),\n      disabled: decrementDisabled,\n      "aria-disabled": decrementDisabled ? true : undefined,\n    }),\n  };\n};\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Hook/useNumberInput"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone use-number-input\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usenumberinput",children:"UseNumberInput"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:useNumberInputraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js"),_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/material/DialogContent/DialogContent.js"),_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/DialogTitle/DialogTitle.js"),_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/SvgIcon/SvgIcon.js"),_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-6P7RB4HF.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_2__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,context){const[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__.Z,{title:"Show source code",placement:"top-start",sx:{zIndex:1e5},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__.Z,{sx:{position:"fixed",bottom:"1rem",left:"0.5rem",zIndex:99999,borderRadius:40},onClick:()=>setOpen(!0),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_6__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"})})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_7__.Z,{open,onClose:()=>setOpen(!1),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8__.Z,{children:"Usage"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_9__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_theming__WEBPACK_IMPORTED_MODULE_10__.f6,{theme:defaultTheme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mdx_js_react__WEBPACK_IMPORTED_MODULE_11__.Zo,{components:defaultComponents,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component,{})})})})]})]})}}},"./blocks/use-number-input/useNumberInput.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{MM:()=>useNumberInput});var react=__webpack_require__("./node_modules/react/index.js");const useSafeLayoutEffect=function canUseDOM(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}()?react.useLayoutEffect:react.useEffect;function useInterval(callback,delay){const fn=function useCallbackRef(fn,deps=[]){const ref=react.useRef(fn);return useSafeLayoutEffect((()=>{ref.current=fn})),react.useCallback(((...args)=>ref.current?.(...args)),deps)}(callback);react.useEffect((()=>{let intervalId=null;const tick=()=>fn();return null!==delay&&(intervalId=window.setInterval(tick,delay)),()=>{intervalId&&window.clearInterval(intervalId)}}),[delay,fn])}function useSpinner(increment,decrement){const[isSpinning,setIsSpinning]=(0,react.useState)(!1),[action,setAction]=(0,react.useState)(null),[runOnce,setRunOnce]=(0,react.useState)(!0),paramsRef=(0,react.useRef)(),timeoutRef=(0,react.useRef)(null),removeTimeout=()=>clearTimeout(timeoutRef.current);useInterval((()=>{"increment"===action&&increment(paramsRef.current),"decrement"===action&&decrement(paramsRef.current)}),isSpinning?50:null);const up=(0,react.useCallback)((params=>{paramsRef.current=params,runOnce&&increment(params),timeoutRef.current=setTimeout((()=>{setRunOnce(!1),setIsSpinning(!0),setAction("increment")}),300)}),[increment,runOnce]),down=(0,react.useCallback)((params=>{paramsRef.current=params,runOnce&&decrement(paramsRef.current),timeoutRef.current=setTimeout((()=>{setRunOnce(!1),setIsSpinning(!0),setAction("decrement")}),300)}),[decrement,runOnce]),stop=(0,react.useCallback)((()=>{paramsRef.current=void 0,setRunOnce(!0),setIsSpinning(!1),removeTimeout()}),[]);return function useUnmountEffect(fn,deps=[]){return react.useEffect((()=>()=>fn()),deps)}(removeTimeout),{up,down,stop}}const minSafeInteger=Number.MIN_SAFE_INTEGER||-9007199254740991,maxSafeInteger=Number.MAX_SAFE_INTEGER||9007199254740991,toNumber=value=>{if(""===value)return;const result=Number(value);return Number.isNaN(result)?void 0:result},numberToString=(value,precision=0)=>{const result=value?.toFixed(precision)??"";return"NaN"===result?"":result},getStepFactor=(event,step,precision)=>{let ratio=1;(event.metaKey||event.ctrlKey)&&(ratio=.1),event.shiftKey&&(ratio=10);let stepFactor=ratio*step;return stepFactor<1/Math.pow(10,precision)&&(stepFactor=step),stepFactor},noop=value=>value;function callAllHandlers(...handlers){return event=>{handlers.forEach((handler=>{"function"==typeof handler&&handler(event)}))}}function getError(value,min,max){if("number"==typeof value){if(value<min)return"below-min";if(value>max)return"exceed-max"}return null}const useNumberInput=(options={})=>{const inputRef=(0,react.useRef)(null),{min=minSafeInteger,max=maxSafeInteger,step=1,precision=0,focusInputOnChange=!0,keepWithinRange=!0,clampValueOnBlur=!0,allowMouseWheel=!1,parser=noop,formatter=noop,onChange}=options,{interfaceValue,setInterfaceValue,numberValue,increment,decrement}=((options={})=>{const{min=minSafeInteger,max=maxSafeInteger,defaultValue,value,precision=0,step=1,keepWithinRange=!0,formatter=noop,parser=noop}=options,[interfaceValue,setInterfaceValue]=(0,react.useState)(formatter(numberToString(defaultValue,precision))),numberValue=toNumber(parser(interfaceValue));function change(multiplier=1,params={}){setInterfaceValue((current=>{const result=(toNumber(parser(current))??0)+multiplier*(params.step??step),digits=params.precision??precision;if(keepWithinRange){if(result>max)return max.toFixed(digits);if(result<min)return min.toFixed(digits)}return formatter(result.toFixed(digits))}))}return(0,react.useEffect)((()=>{void 0===defaultValue&&value!==numberValue&&setInterfaceValue(formatter(numberToString(value,precision)))}),[value]),{numberValue,interfaceValue,setInterfaceValue:value=>{setInterfaceValue(formatter(value))},increment:function increment(params={}){change(1,params)},decrement:function decrement(params={}){change(-1,params)}}})(options);(0,react.useEffect)((()=>{function handler(event){const isInputFocused=document.activeElement===inputRef.current;if(!allowMouseWheel||!isInputFocused)return;event.preventDefault();const stepFactor=getStepFactor(event,step,precision),direction=Math.sign(event.deltaY);-1===direction?increment({step:stepFactor}):1===direction&&decrement({step:stepFactor})}return document.addEventListener("wheel",handler),()=>{document.removeEventListener("wheel",handler)}}),[inputRef.current]);const isFirstMount=(()=>{const isFirstMount=(0,react.useRef)(!0);return(0,react.useEffect)((()=>{isFirstMount.current=!1}),[]),isFirstMount.current})();(0,react.useEffect)((()=>{isFirstMount||onChange?.(numberValue,{valueText:interfaceValue,error:getError(numberValue,min,max),eventType:"change"})}),[interfaceValue]);const tempInterfaceValue=(0,react.useRef)(interfaceValue),spinner=useSpinner(increment,decrement),spinUp=event=>{event.preventDefault(),spinner.up({step:getStepFactor(event,step,precision)}),focusInputOnChange&&inputRef.current?.focus()},spinDown=event=>{event.preventDefault(),spinner.down({step:getStepFactor(event,step,precision)}),focusInputOnChange&&inputRef.current?.focus()},handleKeyDown=event=>{const stepFactor=getStepFactor(event,step,precision),keyMap={ArrowUp:()=>increment({step:stepFactor}),ArrowDown:()=>decrement({step:stepFactor})},eventKey=function normalizeEventKey(event){const{key,keyCode}=event;return keyCode>=37&&keyCode<=40&&0!==key.indexOf("Arrow")?`Arrow${key}`:key}(event),action=keyMap[eventKey];action&&(event.preventDefault(),action(event))},handleChange=event=>{tempInterfaceValue.current=interfaceValue;const result=parser(event.target.value);result.match(/^(-|\+)?(0|[1-9]\d*)?(\.)?(\d+)?$/)&&setInterfaceValue(result)},handleBlur=event=>{const parsedValue=parser(event.target.value);if(""!==parsedValue){const nextNum=Number(parsedValue);let result="";Number.isNaN(nextNum)?result=tempInterfaceValue.current:(result=nextNum.toFixed(precision),clampValueOnBlur&&(nextNum>max&&(result=max.toFixed(precision)),nextNum<min&&(result=min.toFixed(precision)))),setInterfaceValue(result),onChange?.(Number(result),{valueText:formatter(result),error:getError(Number(result),min,max),eventType:"blur"})}else onChange?.(void 0,{valueText:"",error:null,eventType:"blur"})},incrementDisabled=keepWithinRange&&"number"==typeof numberValue&&numberValue>=max,decrementDisabled=keepWithinRange&&"number"==typeof numberValue&&numberValue<=min;return{inputRef,getInputProps:handlers=>({pattern:"[0-9]*(.[0-9]+)?",role:"spinbutton","aria-valuemin":min,"aria-valuemax":max,autoComplete:"off",autoCorrect:"off","aria-valuetext":interfaceValue,"aria-valuenow":numberValue,value:interfaceValue,onChange:handleChange,onBlur:callAllHandlers(handleBlur,handlers?.onBlur),onKeyDown:callAllHandlers(handleKeyDown,handlers?.onKeyDown)}),getIncrementProps:handlers=>({tabIndex:-1,..."undefined"!=typeof window&&document.documentElement.ontouchstart?{onTouchStart:callAllHandlers(spinUp,handlers?.onTouchStart)}:{onMouseDown:callAllHandlers(spinUp,handlers?.onMouseDown)},onMouseUp:callAllHandlers(spinner.stop,handlers?.onMouseUp),onMouseLeave:callAllHandlers(spinner.stop,handlers?.onMouseLeave),onTouchEnd:callAllHandlers(spinner.stop,handlers?.onTouchEnd),disabled:incrementDisabled,"aria-disabled":!!incrementDisabled||void 0}),getDecrementProps:handlers=>({tabIndex:-1,..."undefined"!=typeof window&&document.documentElement.ontouchstart?{onTouchStart:callAllHandlers(spinDown,handlers?.onTouchStart)}:{onMouseDown:callAllHandlers(spinDown,handlers?.onMouseDown)},onMouseUp:callAllHandlers(spinner.stop,handlers?.onMouseUp),onMouseLeave:callAllHandlers(spinner.stop,handlers?.onMouseLeave),onTouchEnd:callAllHandlers(spinner.stop,handlers?.onTouchEnd),disabled:decrementDisabled,"aria-disabled":!!decrementDisabled||void 0})}}},"./blocks/use-number-input/useNumberInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example1:()=>Example1,Example2:()=>Example2,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_decorators_storyDialog__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),_usage_mdx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./blocks/use-number-input/usage.mdx"),_useNumberInput__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./blocks/use-number-input/useNumberInput.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Hook/useNumberInput",argTypes:{onChange:{action:"changed"},min:{control:"number"},max:{control:"number"},precision:{control:"number"},step:{control:"number"},allowMouseWheel:{control:"boolean"},clampValueOnBlur:{control:"boolean"},focusInputOnChange:{control:"boolean"},keepWithinRange:{control:"boolean"}},args:{min:Number.MIN_SAFE_INTEGER,max:Number.MAX_SAFE_INTEGER,precision:0,step:1,allowMouseWheel:!1,clampValueOnBlur:!0,keepWithinRange:!0,focusInputOnChange:!0},parameters:{layout:"centered",githubUsername:"siriwatknp"},decorators:[(0,_storybook_decorators_storyDialog__WEBPACK_IMPORTED_MODULE_1__.Z)(_usage_mdx__WEBPACK_IMPORTED_MODULE_2__.default)]},Example1={render:args=>{const{inputRef,getInputProps,getDecrementProps,getIncrementProps}=(0,_useNumberInput__WEBPACK_IMPORTED_MODULE_3__.MM)(args);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{style:{display:"flex"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input",{ref:inputRef,size:4,style:{padding:8},...getInputProps()}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{...getIncrementProps(),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg",{viewBox:"0 0 24 24",height:"18px",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{...getDecrementProps(),style:{margin:0},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg",{viewBox:"0 0 24 24",height:"18px",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"})]})})]})]})}},Example2={render:args=>{const{inputRef,getInputProps,getDecrementProps,getIncrementProps}=(0,_useNumberInput__WEBPACK_IMPORTED_MODULE_3__.MM)(args);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{style:{display:"flex"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{...getDecrementProps(),style:{marginRight:4},children:"-"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input",{ref:inputRef,size:4,readOnly:!0,style:{padding:8},...getInputProps()}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{...getIncrementProps(),style:{marginLeft:4},children:"+"})]})}};Example1.parameters={...Example1.parameters,docs:{...Example1.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const {\n      inputRef,\n      getInputProps,\n      getDecrementProps,\n      getIncrementProps\n    } = useNumberInput(args);\n    return <div style={{\n      display: "flex"\n    }}>\n        <input {...{\n        ref: inputRef,\n        size: 4,\n        style: {\n          padding: 8\n        },\n        ...getInputProps()\n      }} />\n        <div style={{\n        display: "flex",\n        flexDirection: "column"\n      }}>\n          <button {...getIncrementProps()}>\n            <svg viewBox="0 0 24 24" height="18px">\n              <path d="M0 0h24v24H0z" fill="none" />\n              <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />\n            </svg>\n          </button>\n          <button {...getDecrementProps()} style={{\n          margin: 0\n        }}>\n            <svg viewBox="0 0 24 24" height="18px">\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />\n            </svg>\n          </button>\n        </div>\n      </div>;\n  }\n} satisfies Story',...Example1.parameters?.docs?.source}}},Example2.parameters={...Example2.parameters,docs:{...Example2.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const {\n      inputRef,\n      getInputProps,\n      getDecrementProps,\n      getIncrementProps\n    } = useNumberInput(args);\n    return <div style={{\n      display: "flex"\n    }}>\n        <button {...getDecrementProps()} style={{\n        marginRight: 4\n      }}>\n          -\n        </button>\n        <input {...{\n        ref: inputRef,\n        size: 4,\n        readOnly: true,\n        style: {\n          padding: 8\n        },\n        ...getInputProps()\n      }} />\n        <button {...getIncrementProps()} style={{\n        marginLeft: 4\n      }}>\n          +\n        </button>\n      </div>;\n  }\n} satisfies Story',...Example2.parameters?.docs?.source}}};const __namedExportsOrder=["Example1","Example2"]}}]);