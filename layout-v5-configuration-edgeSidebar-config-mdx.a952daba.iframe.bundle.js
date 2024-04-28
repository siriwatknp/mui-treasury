"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[9891],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/addon-docs/dist/blocks.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./docs/layout-v5/configuration/edgeSidebar-config.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_mui_treasury_mui_treasury_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,_home_runner_work_mui_treasury_mui_treasury_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.a)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.h_,{title:"Layout v5/Configuration/EdgeSidebar"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style",{children:"\n  .sbdocs-content {\n    max-width: 720px;\n  }\n"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"edgesidebar-configuration",children:"EdgeSidebar Configuration"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-tsx",children:"<Root\n  scheme={{\n    leftEdgeSidebar: {\n      config: Responsive<EdgeSidebarConfig>,\n    },\n    rightEdgeSidebar: {\n      config: Responsive<EdgeSidebarConfig>,\n    },\n  }}\n></Root>\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"api",children:"API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["There are 3 variants of ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"EdgeSidebarConfig"}),". For the UX of each variant, check ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://material-ui.com/components/drawers/#drawer",rel:"nofollow",children:"material-ui drawer"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"PermanentEdgeSidebar"})," extends ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"CollapsibleConfig"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"PersistentEdgeSidebar"})," extends ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"CollapsibleConfig"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"TemporaryEdgeSidebar"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"collapsibleconfig",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"CollapsibleConfig"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-ts",children:"{\n  /**\n   * If `true`, this sidebar can be collapsed\n   */\n  collapsible?: boolean;\n  /**\n   * If `collapsible: true`, when sidebar collapsed will have this width (support all CSS units)\n   */\n  collapsedWidth?: number | string;\n  /**\n   * If `collapsible: true`, when hover on collapsed sidebar it will expand to specified `width` without affecting other components.\n   */\n  uncollapsedOnHover?: boolean;\n  /**\n   * @deprecated autoExpanded will be remove in the next major version, use 'uncollapsedOnHover' instead\n   */\n  autoExpanded?: boolean;\n  /**\n   * sidebar's width (support all CSS units)\n   */\n  width: number | string;\n  /**\n   * If header with `position: relative` clip this sidebar, when scroll the page will cause this sidebar to stick with header\n   */\n  headerMagnetEnabled?: boolean;\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"permanent",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Permanent"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-ts",children:"{\n  /**\n   * Material UI Drawer : permanent\n   * https://material-ui.com/components/drawers/#permanent-drawer\n   */\n  variant: 'permanent';\n} & CollapsibleConfig\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"persistent",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Persistent"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-ts",children:"{\n  /**\n   * Effect to other components when this sidebar open. Possible values are 'fit' | 'flexible' | 'none'\n   */\n  persistentBehavior:\n    | PersistentBehavior\n    | Partial<Record<HEADER_ID | CONTENT_ID | FOOTER_ID, PersistentBehavior>>;\n  /**\n   * Material UI Drawer : persistent\n   * https://material-ui.com/components/drawers/#persistent-drawer\n   */\n  variant: \"persistent\";\n} & CollapsibleConfig\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"temporary",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Temporary"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-ts",children:'/**\n * sidebar\'s width (support all CSS units)\n */\nwidth: number | string;\n/**\n * Material UI Drawer : persistent\n * https://material-ui.com/components/drawers/#temporary-drawer\n */\nvariant: "temporary";\n'})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_mui_treasury_mui_treasury_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.a)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);