/*! For license information please see layout-v5-example-rtl-LayoutV5ExampleRtl-stories.29499acf.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[4132],{"./node_modules/@mui/material/styles/useThemeProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>useThemeProps});var _mui_system_useThemeProps__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/useThemeProps/useThemeProps.js"),_defaultTheme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/styles/defaultTheme.js"),_identifier__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/styles/identifier.js");function useThemeProps({props,name}){return(0,_mui_system_useThemeProps__WEBPACK_IMPORTED_MODULE_0__.Z)({props,name,defaultTheme:_defaultTheme__WEBPACK_IMPORTED_MODULE_1__.Z,themeId:_identifier__WEBPACK_IMPORTED_MODULE_2__.Z})}},"./node_modules/@mui/material/utils/debounce.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/debounce/debounce.js").Z},"./node_modules/@mui/material/utils/ownerWindow.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js").Z},"./node_modules/@mui/system/useThemeProps/useThemeProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>useThemeProps});var resolveProps=__webpack_require__("./node_modules/@mui/utils/esm/resolveProps/resolveProps.js");var useTheme=__webpack_require__("./node_modules/@mui/system/useTheme/useTheme.js");function useThemeProps({props,name,defaultTheme,themeId}){let theme=(0,useTheme.Z)(defaultTheme);themeId&&(theme=theme[themeId]||theme);const mergedProps=function getThemeProps(params){const{theme,name,props}=params;return theme&&theme.components&&theme.components[name]&&theme.components[name].defaultProps?(0,resolveProps.Z)(theme.components[name].defaultProps,props):props}({theme,name,props});return mergedProps}},"./node_modules/@mui/utils/esm/debounce/debounce.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function debounce(func,wait=166){let timeout;function debounced(...args){clearTimeout(timeout),timeout=setTimeout((()=>{func.apply(this,args)}),wait)}return debounced.clear=()=>{clearTimeout(timeout)},debounced}__webpack_require__.d(__webpack_exports__,{Z:()=>debounce})},"./blocks/layout-v5-example-rtl/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const LayoutV5ExampleRtlraw_namespaceObject='import { CacheProvider } from "@emotion/react";\nimport React from "react";\nimport createCache from "@emotion/cache";\nimport Box from "@mui/material/Box";\nimport Container from "@mui/material/Container";\nimport CssBaseline from "@mui/material/CssBaseline";\nimport rtlPlugin from "stylis-plugin-rtl";\nimport {\n  Content,\n  EdgeSidebar,\n  Footer,\n  Header,\n  InsetAvoidingView,\n  InsetContainer,\n  InsetSidebar,\n  Root,\n  SidebarContent,\n} from "../layout-core-v5";\n\n// Create rtl cache\nconst cacheRtl = createCache({\n  key: "muirtl",\n  // @ts-ignore\n  stylisPlugins: [rtlPlugin],\n});\n\nexport const LayoutExampleRtl = () => {\n  return (\n    <CacheProvider value={cacheRtl}>\n      <div dir="rtl">\n        <Root\n          initialState={{\n            leftEdgeSidebar: {\n              open: true,\n              collapsed: true,\n            },\n          }}\n          scheme={{\n            header: {\n              config: {\n                xs: {\n                  position: "sticky",\n                  height: 56,\n                  clipped: {\n                    leftEdgeSidebar: true,\n                  },\n                },\n                md: {\n                  position: "sticky",\n                  height: 64,\n                  clipped: true,\n                },\n              },\n            },\n            leftEdgeSidebar: {\n              config: {\n                xs: {\n                  variant: "temporary",\n                  width: 256,\n                },\n                sm: {\n                  variant: "persistent",\n                  persistentBehavior: "fit",\n                  width: 256,\n                  collapsible: true,\n                  collapsedWidth: 72,\n                  headerMagnetEnabled: true,\n                },\n                lg: {\n                  variant: "permanent",\n                  width: 256,\n                  collapsible: true,\n                  collapsedWidth: 80,\n                  autoExpanded: true,\n                  headerMagnetEnabled: true,\n                },\n              },\n              autoCollapse: "sm",\n            },\n            rightInsetSidebar: {\n              config: {\n                xs: {\n                  position: "fixed",\n                  headerMagnetEnabled: true,\n                  width: 256,\n                },\n              },\n            },\n          }}\n        >\n          <CssBaseline />\n          <Header>Header</Header>\n          <EdgeSidebar anchor="left">\n            <SidebarContent>Sidebar</SidebarContent>\n          </EdgeSidebar>\n          <EdgeSidebar anchor="left">\n            <SidebarContent>Hello</SidebarContent>\n          </EdgeSidebar>\n          {/* <EdgeSidebar anchor="right">Hello</EdgeSidebar> */}\n          <Content>\n            <InsetContainer\n              maxWidth={"md"}\n              rightSidebar={\n                <InsetSidebar>\n                  {/* <Box mt={10} /> */}\n                  Hello test\n                </InsetSidebar>\n              }\n            >\n              <Container maxWidth="md">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                eiusmod tempor incididunt ut labore et dolore magna aliqua.\n                Proin sagittis nisl rhoncus mattis. Enim neque volutpat ac\n                tincidunt vitae. Purus viverra accumsan in nisl nisi. Amet\n                venenatis urna cursus eget nunc scelerisque viverra. Pulvinar\n                mattis nunc sed blandit libero volutpat sed cras. Nam at lectus\n                urna duis convallis convallis. Tincidunt lobortis feugiat\n                vivamus at augue. Ac felis donec et odio pellentesque diam\n                volutpat commodo sed.\n                <br />\n                <br />\n                Et netus et malesuada fames ac. Et ultrices neque ornare aenean\n                euismod elementum nisi. Sollicitudin ac orci phasellus egestas\n                tellus rutrum tellus pellentesque. Sed risus pretium quam\n                vulputate dignissim suspendisse in. Tortor aliquam nulla\n                facilisi cras fermentum odio eu feugiat pretium. Urna duis\n                convallis convallis tellus. Mattis aliquam faucibus purus in\n                massa tempor nec feugiat. Imperdiet dui accumsan sit amet nulla\n                facilisi. In ornare quam viverra orci sagittis eu volutpat odio.\n                Et sollicitudin ac orci phasellus egestas tellus rutrum. Quam\n                vulputate dignissim suspendisse in est ante. Orci sagittis eu\n                volutpat odio facilisis mauris sit amet massa. Amet mattis\n                vulputate enim nulla aliquet porttitor lacus luctus. Volutpat\n                consequat mauris nunc congue nisi vitae suscipit tellus.\n                Fermentum iaculis eu non diam. Non quam lacus suspendisse\n                faucibus interdum posuere. In ornare quam viverra orci sagittis\n                eu volutpat.\n                <br />\n                <br />\n                Quis blandit turpis cursus in hac habitasse. Etiam non quam\n                lacus suspendisse faucibus. Sit amet nulla facilisi morbi tempus\n                iaculis urna id volutpat. Suspendisse ultrices gravida dictum\n                fusce ut. Maecenas volutpat blandit aliquam etiam erat velit\n                scelerisque in dictum. Pellentesque elit eget gravida cum. At\n                lectus urna duis convallis. Aliquam id diam maecenas ultricies.\n                Cursus turpis massa tincidunt dui ut. Sollicitudin nibh sit amet\n                commodo nulla facilisi. Aliquet bibendum enim facilisis gravida.\n                In dictum non consectetur a erat nam at lectus. Nunc faucibus a\n                pellentesque sit amet porttitor eget dolor. Adipiscing diam\n                donec adipiscing tristique risus nec feugiat. Ut diam quam nulla\n                porttitor massa id. Lectus arcu bibendum at varius vel. In ante\n                metus dictum at tempor commodo ullamcorper a. Consectetur libero\n                id faucibus nisl tincidunt eget nullam non. Diam vel quam\n                elementum pulvinar. Est ullamcorper eget nulla facilisi. Sit\n                amet volutpat consequat mauris nunc congue nisi. Tellus\n                elementum sagittis vitae et leo duis ut diam quam.\n                <br />\n                <br />\n              </Container>\n            </InsetContainer>\n          </Content>\n          <Footer>\n            <Container maxWidth="md">\n              <InsetAvoidingView>\n                <Box my={5}>\n                  Footer: Proin fermentum leo vel orci. Aliquet enim tortor at\n                  auctor urna nunc id cursus. Leo vel orci porta non pulvinar\n                  neque laoreet suspendisse interdum.\n                </Box>\n              </InsetAvoidingView>\n            </Container>\n          </Footer>\n        </Root>\n      </div>\n    </CacheProvider>\n  );\n};\n';function _createMdxContent(props){const _components={code:"code",h2:"h2",pre:"pre",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Layout v5/Example/Right-to-Left"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone layoutV5-example-rtl\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"layoutexamplertl",children:"LayoutExampleRtl"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:LayoutV5ExampleRtlraw_namespaceObject,language:"tsx"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./blocks/layout-v5-example-rtl/LayoutV5ExampleRtl.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{RighttoLeft:()=>RighttoLeft,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LayoutV5ExampleRtl_stories});var react=__webpack_require__("./node_modules/react/index.js"),googleFont=__webpack_require__("./.storybook/decorators/googleFont.tsx"),storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),emotion_cache_browser_esm=__webpack_require__("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Container=__webpack_require__("./node_modules/@mui/material/Container/Container.js"),CssBaseline=__webpack_require__("./node_modules/@mui/material/CssBaseline/CssBaseline.js"),cssjanus=__webpack_require__("./node_modules/cssjanus/src/cssjanus.js"),cssjanus_default=__webpack_require__.n(cssjanus),Enum=__webpack_require__("./node_modules/stylis/src/Enum.js"),Serializer=__webpack_require__("./node_modules/stylis/src/Serializer.js"),Utility=__webpack_require__("./node_modules/stylis/src/Utility.js"),Parser=__webpack_require__("./node_modules/stylis/src/Parser.js");function stringifyPreserveComments(element,index,children){switch(element.type){case Enum.K$:case Enum.h5:case Enum.Ab:return element.return=element.return||element.value;case Enum.Fr:element.value=Array.isArray(element.props)?element.props.join(","):element.props,Array.isArray(element.children)&&element.children.forEach((function(x){x.type===Enum.Ab&&(x.children=x.value)}))}var serializedChildren=(0,Serializer.q)(Array.prototype.concat(element.children),stringifyPreserveComments);return(0,Utility.to)(serializedChildren)?element.return=element.value+"{"+serializedChildren+"}":""}function stylisRTLPlugin(element,index,children,callback){if(element.type===Enum.lK||element.type===Enum.QY||element.type===Enum.Fr&&(!element.parent||element.parent.type===Enum.iD||element.parent.type===Enum.Fr)){var stringified=cssjanus_default().transform(stringifyPreserveComments(element));element.children=stringified?(0,Parser.MY)(stringified)[0].children:[],element.return=""}}Object.defineProperty(stylisRTLPlugin,"name",{value:"stylisRTLPlugin"});const stylis_rtl=stylisRTLPlugin;var layout_core_v5=__webpack_require__("./blocks/layout-core-v5/index.ts");const cacheRtl=(0,emotion_cache_browser_esm.Z)({key:"muirtl",stylisPlugins:[stylis_rtl]}),LayoutExampleRtl=()=>react.createElement(emotion_element_c39617d8_browser_esm.C,{value:cacheRtl},react.createElement("div",{dir:"rtl"},react.createElement(layout_core_v5.fC,{initialState:{leftEdgeSidebar:{open:!0,collapsed:!0}},scheme:{header:{config:{xs:{position:"sticky",height:56,clipped:{leftEdgeSidebar:!0}},md:{position:"sticky",height:64,clipped:!0}}},leftEdgeSidebar:{config:{xs:{variant:"temporary",width:256},sm:{variant:"persistent",persistentBehavior:"fit",width:256,collapsible:!0,collapsedWidth:72,headerMagnetEnabled:!0},lg:{variant:"permanent",width:256,collapsible:!0,collapsedWidth:80,autoExpanded:!0,headerMagnetEnabled:!0}},autoCollapse:"sm"},rightInsetSidebar:{config:{xs:{position:"fixed",headerMagnetEnabled:!0,width:256}}}}},react.createElement(CssBaseline.ZP,null),react.createElement(layout_core_v5.h4,null,"Header"),react.createElement(layout_core_v5.NW,{anchor:"left"},react.createElement(layout_core_v5.TZ,null,"Sidebar")),react.createElement(layout_core_v5.NW,{anchor:"left"},react.createElement(layout_core_v5.TZ,null,"Hello")),react.createElement(layout_core_v5.VY,null,react.createElement(layout_core_v5.pN,{maxWidth:"md",rightSidebar:react.createElement(layout_core_v5.bM,null,"Hello test")},react.createElement(Container.Z,{maxWidth:"md"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin sagittis nisl rhoncus mattis. Enim neque volutpat ac tincidunt vitae. Purus viverra accumsan in nisl nisi. Amet venenatis urna cursus eget nunc scelerisque viverra. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Nam at lectus urna duis convallis convallis. Tincidunt lobortis feugiat vivamus at augue. Ac felis donec et odio pellentesque diam volutpat commodo sed.",react.createElement("br",null),react.createElement("br",null),"Et netus et malesuada fames ac. Et ultrices neque ornare aenean euismod elementum nisi. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Sed risus pretium quam vulputate dignissim suspendisse in. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Urna duis convallis convallis tellus. Mattis aliquam faucibus purus in massa tempor nec feugiat. Imperdiet dui accumsan sit amet nulla facilisi. In ornare quam viverra orci sagittis eu volutpat odio. Et sollicitudin ac orci phasellus egestas tellus rutrum. Quam vulputate dignissim suspendisse in est ante. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Fermentum iaculis eu non diam. Non quam lacus suspendisse faucibus interdum posuere. In ornare quam viverra orci sagittis eu volutpat.",react.createElement("br",null),react.createElement("br",null),"Quis blandit turpis cursus in hac habitasse. Etiam non quam lacus suspendisse faucibus. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Suspendisse ultrices gravida dictum fusce ut. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Pellentesque elit eget gravida cum. At lectus urna duis convallis. Aliquam id diam maecenas ultricies. Cursus turpis massa tincidunt dui ut. Sollicitudin nibh sit amet commodo nulla facilisi. Aliquet bibendum enim facilisis gravida. In dictum non consectetur a erat nam at lectus. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Adipiscing diam donec adipiscing tristique risus nec feugiat. Ut diam quam nulla porttitor massa id. Lectus arcu bibendum at varius vel. In ante metus dictum at tempor commodo ullamcorper a. Consectetur libero id faucibus nisl tincidunt eget nullam non. Diam vel quam elementum pulvinar. Est ullamcorper eget nulla facilisi. Sit amet volutpat consequat mauris nunc congue nisi. Tellus elementum sagittis vitae et leo duis ut diam quam.",react.createElement("br",null),react.createElement("br",null)))),react.createElement(layout_core_v5.$_,null,react.createElement(Container.Z,{maxWidth:"md"},react.createElement(layout_core_v5.FK,null,react.createElement(Box.Z,{my:5},"Footer: Proin fermentum leo vel orci. Aliquet enim tortor at auctor urna nunc id cursus. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum.")))))));var usage=__webpack_require__("./blocks/layout-v5-example-rtl/usage.mdx");const LayoutV5ExampleRtl_stories={title:"Layout v5/Example/Right-to-Left",component:LayoutExampleRtl,parameters:{layout:"fullscreen",githubUsername:"siriwatknp"},decorators:[(0,storyDialog.Z)(usage.default),(0,googleFont.Z)([])]},RighttoLeft={render:()=>react.createElement(LayoutExampleRtl,null)};RighttoLeft.parameters={...RighttoLeft.parameters,docs:{...RighttoLeft.parameters?.docs,source:{originalSource:"{\n  render: () => <LayoutExampleRtl />\n}",...RighttoLeft.parameters?.docs?.source}}};const __namedExportsOrder=["RighttoLeft"]},"./node_modules/cssjanus/src/cssjanus.js":(module,exports)=>{var cssjanus;function Tokenizer(regex,token){var matches=[],index=0;function tokenizeCallback(match){return matches.push(match),token}function detokenizeCallback(){return matches[index++]}return{tokenize:function(str){return str.replace(regex,tokenizeCallback)},detokenize:function(str){return str.replace(new RegExp("("+token+")","g"),detokenizeCallback)}}}cssjanus=new function CSSJanus(){var escapePattern="(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f])",nmcharPattern="(?:[_a-z0-9-]|[^\\u0020-\\u007e]|"+escapePattern+")",quantPattern="(?:[0-9]*\\.[0-9]+|[0-9]+)(?:\\s*(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)|"+("-?"+("(?:[_a-z]|[^\\u0020-\\u007e]|"+escapePattern+")")+nmcharPattern+"*")+")?",signedQuantPattern="((?:-?"+quantPattern+")|(?:inherit|auto))",colorPattern="(#?"+nmcharPattern+"+|(?:rgba?|hsla?)\\([ \\d.,%-]+\\))",urlCharsPattern="(?:[!#$%&*-~]|[^\\u0020-\\u007e]|"+escapePattern+")*?",lookAheadNotOpenBracePattern="(?!("+nmcharPattern+"|\\r?\\n|\\s|#|\\:|\\.|\\,|\\+|>|~|\\(|\\)|\\[|\\]|=|\\*=|~=|\\^=|'[^']*'|\"[^\"]*\"|`COMMENT`)*?{)",lookAheadNotClosingParenPattern="(?!"+urlCharsPattern+"['\"]?\\s*\\))",lookAheadForClosingParenPattern="(?="+urlCharsPattern+"['\"]?\\s*\\))",suffixPattern="(\\s*(?:!important\\s*)?[;}])",temporaryTokenRegExp=/`TMP`/g,commentRegExp=new RegExp("\\/\\*[^*]*\\*+([^\\/*][^*]*\\*+)*\\/","gi"),noFlipSingleRegExp=new RegExp("(\\/\\*\\!?\\s*@noflip\\s*\\*\\/"+lookAheadNotOpenBracePattern+"[^;}]+;?)","gi"),noFlipClassRegExp=new RegExp("(\\/\\*\\!?\\s*@noflip\\s*\\*\\/[^\\}]*?})","gi"),directionLtrRegExp=new RegExp("(direction\\s*:\\s*)ltr","gi"),directionRtlRegExp=new RegExp("(direction\\s*:\\s*)rtl","gi"),leftRegExp=new RegExp("(^|[^a-zA-Z])(left)(?![a-zA-Z])"+lookAheadNotClosingParenPattern+lookAheadNotOpenBracePattern,"gi"),rightRegExp=new RegExp("(^|[^a-zA-Z])(right)(?![a-zA-Z])"+lookAheadNotClosingParenPattern+lookAheadNotOpenBracePattern,"gi"),leftInUrlRegExp=new RegExp("(^|[^a-zA-Z])(left)"+lookAheadForClosingParenPattern,"gi"),rightInUrlRegExp=new RegExp("(^|[^a-zA-Z])(right)"+lookAheadForClosingParenPattern,"gi"),ltrInUrlRegExp=new RegExp("(^|[^a-zA-Z])(ltr)"+lookAheadForClosingParenPattern,"gi"),rtlInUrlRegExp=new RegExp("(^|[^a-zA-Z])(rtl)"+lookAheadForClosingParenPattern,"gi"),cursorEastRegExp=new RegExp("(^|[^a-zA-Z])([ns]?)e-resize","gi"),cursorWestRegExp=new RegExp("(^|[^a-zA-Z])([ns]?)w-resize","gi"),fourNotationQuantRegExp=new RegExp("((?:margin|padding|border-width)\\s*:\\s*)"+signedQuantPattern+"(\\s+)"+signedQuantPattern+"(\\s+)"+signedQuantPattern+"(\\s+)"+signedQuantPattern+suffixPattern,"gi"),fourNotationColorRegExp=new RegExp("((?:-color|border-style)\\s*:\\s*)"+colorPattern+"(\\s+)"+colorPattern+"(\\s+)"+colorPattern+"(\\s+)"+colorPattern+suffixPattern,"gi"),bgHorizontalPercentageRegExp=new RegExp("(background(?:-position)?\\s*:\\s*(?:[^:;}\\s]+\\s+)*?)("+quantPattern+")","gi"),bgHorizontalPercentageXRegExp=new RegExp("(background-position-x\\s*:\\s*)(-?(?:[0-9]*\\.[0-9]+|[0-9]+)%)","gi"),borderRadiusRegExp=new RegExp("(border-radius\\s*:\\s*)"+signedQuantPattern+"(?:(?:\\s+"+signedQuantPattern+")(?:\\s+"+signedQuantPattern+")?(?:\\s+"+signedQuantPattern+")?)?(?:(?:(?:\\s*\\/\\s*)"+signedQuantPattern+")(?:\\s+"+signedQuantPattern+")?(?:\\s+"+signedQuantPattern+")?(?:\\s+"+signedQuantPattern+")?)?"+suffixPattern,"gi"),boxShadowRegExp=new RegExp("(box-shadow\\s*:\\s*(?:inset\\s*)?)"+signedQuantPattern,"gi"),textShadow1RegExp=new RegExp("(text-shadow\\s*:\\s*)"+signedQuantPattern+"(\\s*)"+colorPattern,"gi"),textShadow2RegExp=new RegExp("(text-shadow\\s*:\\s*)"+colorPattern+"(\\s*)"+signedQuantPattern,"gi"),textShadow3RegExp=new RegExp("(text-shadow\\s*:\\s*)"+signedQuantPattern,"gi"),translateXRegExp=new RegExp("(transform\\s*:[^;}]*)(translateX\\s*\\(\\s*)"+signedQuantPattern+"(\\s*\\))","gi"),translateRegExp=new RegExp("(transform\\s*:[^;}]*)(translate\\s*\\(\\s*)"+signedQuantPattern+"((?:\\s*,\\s*"+signedQuantPattern+"){0,2}\\s*\\))","gi");function calculateNewBackgroundPosition(match,pre,value){var idx,len;return"%"===value.slice(-1)&&(-1!==(idx=value.indexOf("."))?(len=value.length-idx-2,value=(value=100-parseFloat(value)).toFixed(len)+"%"):value=100-parseFloat(value)+"%"),pre+value}function flipBorderRadiusValues(values){switch(values.length){case 4:values=[values[1],values[0],values[3],values[2]];break;case 3:values=[values[1],values[0],values[1],values[2]];break;case 2:values=[values[1],values[0]];break;case 1:values=[values[0]]}return values.join(" ")}function calculateNewBorderRadius(match,pre){var args=[].slice.call(arguments),firstGroup=args.slice(2,6).filter((function(val){return val})),secondGroup=args.slice(6,10).filter((function(val){return val})),post=args[10]||"";return pre+(secondGroup.length?flipBorderRadiusValues(firstGroup)+" / "+flipBorderRadiusValues(secondGroup):flipBorderRadiusValues(firstGroup))+post}function flipSign(value){return 0===parseFloat(value)?value:"-"===value[0]?value.slice(1):"-"+value}function calculateNewShadow(match,property,offset){return property+flipSign(offset)}function calculateNewTranslate(match,property,prefix,offset,suffix){return property+prefix+flipSign(offset)+suffix}function calculateNewFourTextShadow(match,property,color,space,offset){return property+color+space+flipSign(offset)}return{transform:function(css,options){var noFlipSingleTokenizer=new Tokenizer(noFlipSingleRegExp,"`NOFLIP_SINGLE`"),noFlipClassTokenizer=new Tokenizer(noFlipClassRegExp,"`NOFLIP_CLASS`"),commentTokenizer=new Tokenizer(commentRegExp,"`COMMENT`");return css=commentTokenizer.tokenize(noFlipClassTokenizer.tokenize(noFlipSingleTokenizer.tokenize(css.replace("`","%60")))),options.transformDirInUrl&&(css=css.replace(ltrInUrlRegExp,"$1`TMP`").replace(rtlInUrlRegExp,"$1ltr").replace(temporaryTokenRegExp,"rtl")),options.transformEdgeInUrl&&(css=css.replace(leftInUrlRegExp,"$1`TMP`").replace(rightInUrlRegExp,"$1left").replace(temporaryTokenRegExp,"right")),css=css.replace(directionLtrRegExp,"$1`TMP`").replace(directionRtlRegExp,"$1ltr").replace(temporaryTokenRegExp,"rtl").replace(leftRegExp,"$1`TMP`").replace(rightRegExp,"$1left").replace(temporaryTokenRegExp,"right").replace(cursorEastRegExp,"$1$2`TMP`").replace(cursorWestRegExp,"$1$2e-resize").replace(temporaryTokenRegExp,"w-resize").replace(borderRadiusRegExp,calculateNewBorderRadius).replace(boxShadowRegExp,calculateNewShadow).replace(textShadow1RegExp,calculateNewFourTextShadow).replace(textShadow2RegExp,calculateNewFourTextShadow).replace(textShadow3RegExp,calculateNewShadow).replace(translateXRegExp,calculateNewTranslate).replace(translateRegExp,calculateNewTranslate).replace(fourNotationQuantRegExp,"$1$2$3$8$5$6$7$4$9").replace(fourNotationColorRegExp,"$1$2$3$8$5$6$7$4$9").replace(bgHorizontalPercentageRegExp,calculateNewBackgroundPosition).replace(bgHorizontalPercentageXRegExp,calculateNewBackgroundPosition),css=noFlipSingleTokenizer.detokenize(noFlipClassTokenizer.detokenize(commentTokenizer.detokenize(css)))}}},module.exports?exports.transform=function(css,options,transformEdgeInUrl){var norm;return"object"==typeof options?norm=options:(norm={},"boolean"==typeof options&&(norm.transformDirInUrl=options),"boolean"==typeof transformEdgeInUrl&&(norm.transformEdgeInUrl=transformEdgeInUrl)),cssjanus.transform(css,norm)}:"undefined"!=typeof window&&(window.cssjanus=cssjanus)}}]);