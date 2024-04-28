"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[3988],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./blocks/use-dayMonthYear-input/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const useDayMonthYearInputraw_namespaceObject='import React from "react";\nimport { useInput, useInputSiblings, useIsFirstMount, useTwoNumbersInput } from "../use-input-siblings";\nconst prependZero = value => {\n  if (!value) return undefined;\n  return value <= 9 ? `0${value}` : `${value}`;\n};\nconst dayMonthYearValidator = (day, month, year) => {\n  return Number(day) >= 1 && Number(day) <= 31 && Number(month) >= 1 && Number(month) <= 12 && Number(year) >= 1500 && Number(year) <= 2999;\n};\nexport const useDayMonthYearInput = options => {\n  const {\n    value\n  } = options || {};\n  const [defaultValue] = React.useState(options?.defaultValue);\n  const day = useTwoNumbersInput({\n    value: prependZero(value?.day || defaultValue?.day)\n  });\n  const month = useTwoNumbersInput({\n    value: prependZero(value?.month || defaultValue?.month)\n  });\n  const year = useInput({\n    maxLength: 4,\n    value: prependZero(value?.year || defaultValue?.year)\n  });\n  const [getDayInputProps, getMonthInputProps, getYearInputProps] = useInputSiblings({\n    siblings: [day, month, year],\n    onBlur: options?.onBlur\n  });\n  const isFirstMount = useIsFirstMount();\n  React.useEffect(() => {\n    if (!isFirstMount) {\n      options?.onChange?.({\n        day: Number(day.value) || undefined,\n        month: Number(month.value) || undefined,\n        year: Number(year.value) || undefined\n      }, {\n        invalid: !dayMonthYearValidator(day.value, month.value, year.value)\n      });\n    }\n  }, [day.value, month.value, year.value]);\n  return {\n    day,\n    month,\n    year,\n    getDayInputProps: handlers => ({\n      pattern: "^(^$|[0-9]|0[0-9]|1[0-9]|2[0-9]|3[0-1])$",\n      size: 2,\n      maxLength: 2,\n      type: "tel",\n      ...getDayInputProps(handlers)\n    }),\n    getMonthInputProps: handlers => ({\n      pattern: "^(^$|[0-9]|0[1-9]|1[0-2])$",\n      size: 2,\n      maxLength: 2,\n      type: "tel",\n      ...getMonthInputProps(handlers)\n    }),\n    getYearInputProps: handlers => ({\n      pattern: "^(^$|[1-2]|[1-2][0-9]{0,3})$",\n      size: 4,\n      maxLength: 4,\n      type: "tel",\n      ...getYearInputProps(handlers)\n    })\n  };\n};';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Hook/useDayMonthYearInput"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone use-dayMonthYear-input use-input-siblings\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usedaymonthyearinput",children:"UseDayMonthYearInput"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:useDayMonthYearInputraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);