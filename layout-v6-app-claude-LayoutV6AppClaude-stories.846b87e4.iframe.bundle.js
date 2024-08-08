"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[5973],{"./blocks/layout-v6-app-claude/LayoutV6AppClaude.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Claude:()=>Claude,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LayoutV6AppClaude_stories});var react=__webpack_require__("./node_modules/react/index.js"),googleFont=__webpack_require__("./.storybook/decorators/googleFont.tsx"),Close=__webpack_require__("./node_modules/@mui/icons-material/Close.js"),Menu=__webpack_require__("./node_modules/@mui/icons-material/Menu.js"),Tune=__webpack_require__("./node_modules/@mui/icons-material/Tune.js"),Avatar=__webpack_require__("./node_modules/@mui/material/Avatar/Avatar.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Card=__webpack_require__("./node_modules/@mui/material/Card/Card.js"),IconButton=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),layout_core_v6=__webpack_require__("./blocks/layout-core-v6/index.ts");function LayoutV6AppClaude(){return react.createElement(layout_core_v6.fC,{sx:{backgroundColor:"#f5f5f5","--EdgeSidebar-sidelineWidth":"0px","--EdgeSidebarContent-shadow":"none",...(0,layout_core_v6.Hx)({height:"100vh",fixedHeight:!0})}},react.createElement(layout_core_v6.h4,{sx:{...(0,layout_core_v6.pJ)({fullWidth:!0,height:"56px"})}},react.createElement(IconButton.Z,{className:"EdgeSidebar-trigger",onClick:()=>(0,layout_core_v6.SL)()},react.createElement(Menu.Z,null)),"Header",react.createElement(IconButton.Z,{className:layout_core_v6.KG.TemporaryEdgeSidebarRightTrigger,sx:{ml:"auto"},onClick:()=>{(0,layout_core_v6.Vy)()}},react.createElement(Tune.Z,null)),react.createElement(IconButton.Z,{className:layout_core_v6.KG.EdgeSidebarRightCollapser,sx:{ml:"auto"},onClick:event=>{(0,layout_core_v6.DY)({event})}},react.createElement(Tune.Z,null))),react.createElement(layout_core_v6.VY,{sx:{overflow:"auto"}},react.createElement(Box.Z,{sx:{maxWidth:400,px:2,pt:.5,mx:"auto"}},react.createElement(Box.Z,{sx:{display:"flex",flexDirection:"column",gap:2}},[...Array(20)].map(((_,index)=>react.createElement(Card.Z,{elevation:0,variant:"outlined",key:index,sx:{height:300}})))))),react.createElement(layout_core_v6.NW,{sx:theme=>({...(0,layout_core_v6.oz)({theme,config:{xs:{variant:"temporary",fullHeight:!0},sm:{variant:"permanent",width:"288px",autoCollapse:9999,collapsedWidth:"56px",expandOnHover:!0}}}),"&::before":{display:"none"}})},react.createElement(layout_core_v6.dD,{sx:{background:"none",marginTop:"var(--permanent, calc(-1 * var(--Header-height)))",containerType:"inline-size"}},react.createElement(Box.Z,{sx:{border:"1px solid",borderColor:"divider",backgroundColor:"rgba(0 0 0 / 0.12)",height:"100%",m:1,borderRadius:"8px",backdropFilter:"blur(4px)",opacity:{"@":0,"@100":1},transition:"opacity 0.3s"}},react.createElement(Box.Z,{sx:{textAlign:"right",p:1}},react.createElement(IconButton.Z,{className:"EdgeSidebar-trigger",onClick:()=>(0,layout_core_v6.SL)()},react.createElement(Close.Z,null)))),react.createElement(Box.Z,{sx:{position:"fixed",bottom:"1rem",left:"1rem"}},react.createElement(Avatar.Z,null)))),react.createElement(layout_core_v6.zC,{sx:theme=>({...(0,layout_core_v6.H7)({theme,config:{xs:{variant:"temporary",width:"clamp(420px, (720px - 100vw) * 9999, 100vw)"},md:{variant:"permanent",width:"420px",collapsedWidth:"0px"}}}),"&::before":{display:"none"}})},react.createElement(layout_core_v6.dD,{sx:{background:"none"}},react.createElement(Box.Z,{sx:{border:"1px solid",borderColor:"divider",backgroundColor:"rgba(0 0 0 / 0.12)",m:1,height:{xs:"calc(100% - var(--Header-height) - 16px)",md:"100%"},borderRadius:"8px",backdropFilter:"blur(4px)"}},react.createElement(Box.Z,{sx:{textAlign:"right",p:1}},react.createElement(IconButton.Z,{className:layout_core_v6.KG.TemporaryEdgeSidebarRightTrigger,onClick:()=>(0,layout_core_v6.Vy)()},react.createElement(Close.Z,null)),react.createElement(IconButton.Z,{className:layout_core_v6.KG.EdgeSidebarRightCollapser,onClick:event=>(0,layout_core_v6.DY)({event})},react.createElement(Close.Z,null)))))),react.createElement(layout_core_v6.$_,{sx:{background:"unset",border:"none"}},react.createElement(Box.Z,{sx:{maxWidth:400,p:"10px 10px 10px 16px",mx:"auto",display:"flex",flexDirection:"column",gap:1,border:"1px solid",borderColor:"divider",borderBottomWidth:0,borderTopLeftRadius:16,borderTopRightRadius:16}},react.createElement(Box.Z,{component:"input",placeholder:"Reply to Claude",sx:{backgroundColor:"initial",height:28,width:"100%","&:focus":{outline:"none"}}}),react.createElement("div",{style:{fontSize:"0.875rem"}},"Claude 3.5 Sonnet"))))}const LayoutV6AppClaude_stories={title:"Layout v6/App/Claude",component:LayoutV6AppClaude,parameters:{layout:"fullscreen",githubUsername:"siriwatknp"},decorators:[(0,googleFont.Z)([])]},Claude={render:()=>react.createElement(LayoutV6AppClaude,null)};Claude.parameters={...Claude.parameters,docs:{...Claude.parameters?.docs,source:{originalSource:"{\n  render: () => <LayoutV6AppClaude />\n}",...Claude.parameters?.docs?.source}}};const __namedExportsOrder=["Claude"]},"./.storybook/decorators/googleFont.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>googleFont});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function googleFont(fonts=[]){return Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap",rel:"stylesheet"}),fonts.map((font=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{key:font,rel:"stylesheet",href:`https://fonts.googleapis.com/css2?family=${font}&display=swap`}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))}},"./blocks/layout-core-v6/EdgeSidebar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{SL:()=>toggleTemporaryEdgeSidebar,ZP:()=>__WEBPACK_DEFAULT_EXPORT__,fO:()=>toggleEdgeSidebarCollapse,oz:()=>applyEdgeSidebarStyles});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_layoutClasses__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./blocks/layout-core-v6/layoutClasses.ts"),_SharedEdgeSidebar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./blocks/layout-core-v6/SharedEdgeSidebar.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function applyTemporaryStyles(params){const{width="300px",fullHeight}=params||{};return{"--EdgeSidebar-temporaryWidth":"0px",[`.${_layoutClasses__WEBPACK_IMPORTED_MODULE_1__.K.Root}:has(&)`]:{"--EdgeSidebar-variant":"var(--temporary)",[`.${_layoutClasses__WEBPACK_IMPORTED_MODULE_1__.K.EdgeSidebarCollapser}`]:{display:"none"}},[`&[${_layoutClasses__WEBPACK_IMPORTED_MODULE_1__.o.isTemporaryEdgeSidebarOpen}], &[${_layoutClasses__WEBPACK_IMPORTED_MODULE_1__.o.isTemporaryEdgeSidebarClosing}]`]:{"--EdgeSidebar-temporaryWidth":width},...fullHeight&&{zIndex:5,[`& .${_layoutClasses__WEBPACK_IMPORTED_MODULE_1__.K.EdgeSidebarContent}`]:{top:0}}}}function applyPersistentStyles(params){const{width="256px",persistentBehavior="fit"}=params||{};return{..."none"===persistentBehavior&&{zIndex:2,"--SidebarContent-width":`var(--collapsed, var(--_permanentWidth, 0px)) var(--uncollapsed, ${width})`,"--SidebarContent-shadow":"0 0 10px rgba(0,0,0,0.1), var(--EdgeSidebar-sidelineWidth) 0 var(--EdgeSidebar-sidelineColor)",[`&:not([${_layoutClasses__WEBPACK_IMPORTED_MODULE_1__.o.isEdgeSidebarUncollapsed}])`]:{"--SidebarContent-shadow":"none"}},[`.${_layoutClasses__WEBPACK_IMPORTED_MODULE_1__.K.Root}:has(&)`]:{"--EdgeSidebar-variant":"var(--permanent)","--EdgeSidebar-collapsedWidth":"0px",..."none"===persistentBehavior?{"--EdgeSidebar-permanentWidth":"0px"}:{...width&&{"--EdgeSidebar-permanentWidth":width}},"--EdgeSidebar-collapsible":"var(--collapsed)",[`.${_layoutClasses__WEBPACK_IMPORTED_MODULE_1__.K.EdgeSidebarCollapser}`]:{display:"var(--display, inline-flex)"},[`.${_layoutClasses__WEBPACK_IMPORTED_MODULE_1__.K.TemporaryEdgeSidebarTrigger}`]:{display:"none"}},[`.${_layoutClasses__WEBPACK_IMPORTED_MODULE_1__.K.Root}:has(&[${_layoutClasses__WEBPACK_IMPORTED_MODULE_1__.o.isEdgeSidebarUncollapsed}])`]:{"--EdgeSidebar-collapsible":"var(--uncollapsed)"}}}function applyPermanentStyles(params){"autoCollapse"in params&&!params.collapsedWidth&&console.warn("MUI Treasury Layout: `collapsedWidth` is required when `autoCollapse` is enabled.");const{width,collapsedWidth}=params||{},defaultExpandConfig={delay:"0.3s",shadow:"0 0 10px rgba(0,0,0,0.1)"};let expandConfig;return"expandOnHover"in params&&(expandConfig=!0===params.expandOnHover?defaultExpandConfig:params.expandOnHover),{"--SidebarContent-shadow":"none","--SidebarContent-width":"var(--_permanentWidth, 0px)",[`.${_layoutClasses__WEBPACK_IMPORTED_MODULE_1__.K.Root}:has(&)`]:{"--EdgeSidebar-variant":"var(--permanent)",...width&&{"--EdgeSidebar-permanentWidth":width},...collapsedWidth&&{"--EdgeSidebar-collapsedWidth":collapsedWidth},[`.${_layoutClasses__WEBPACK_IMPORTED_MODULE_1__.K.EdgeSidebarCollapser}`]:{display:"var(--display, inline-flex)"},[`.${_layoutClasses__WEBPACK_IMPORTED_MODULE_1__.K.TemporaryEdgeSidebarTrigger}`]:{display:"none"}},...expandConfig&&{[`& .${_layoutClasses__WEBPACK_IMPORTED_MODULE_1__.K.EdgeSidebarContent}:hover`]:{"--SidebarContent-width":"var(--EdgeSidebar-permanentWidth)","--SidebarContent-transitionDelay":expandConfig.delay,"--SidebarContent-shadow":`var(--collapsed, ${expandConfig.shadow}, var(--EdgeSidebar-sidelineWidth) 0 var(--EdgeSidebar-sidelineColor))`}}}}function applyEdgeSidebarStyles(params){const{config,theme}=params;let autoCollapseStyles={};const responsive={};return Object.keys(config).sort(((a,b)=>theme.breakpoints.values[a]-theme.breakpoints.values[b])).forEach((breakpoint=>{const variantConfig=config[breakpoint];if(variantConfig){const{variant,...params}=variantConfig;if("permanent"===variant&&"autoCollapse"in variantConfig&&variantConfig.autoCollapse){let nextBreakpoint;"number"==typeof variantConfig.autoCollapse?nextBreakpoint=variantConfig.autoCollapse+.01:theme.breakpoints.keys.includes(variantConfig.autoCollapse)&&(nextBreakpoint=theme.breakpoints.keys[theme.breakpoints.keys.indexOf(variantConfig.autoCollapse)+1]),nextBreakpoint?autoCollapseStyles={[`.${_layoutClasses__WEBPACK_IMPORTED_MODULE_1__.K.Root}:has(&)`]:{[theme.breakpoints.between(breakpoint,nextBreakpoint)]:{"--EdgeSidebar-collapsible":"var(--collapsed)"},[theme.breakpoints.up(nextBreakpoint)]:{"--EdgeSidebar-collapsible":"var(--uncollapsed)"}},[theme.breakpoints.between(variantConfig.autoCollapse,nextBreakpoint)]:{[`.${_layoutClasses__WEBPACK_IMPORTED_MODULE_1__.K.Root}:has(&[${_layoutClasses__WEBPACK_IMPORTED_MODULE_1__.o.isAutoCollapseOff}])`]:{"--EdgeSidebar-collapsible":"var(--uncollapsed)"},[`.${_layoutClasses__WEBPACK_IMPORTED_MODULE_1__.K.Root}:has(&) .${_layoutClasses__WEBPACK_IMPORTED_MODULE_1__.K.EdgeSidebarCollapser}`]:{"--_autoCollapse":"1"}}}:console.warn("MUI Treasury Layout: `autoCollapse` cannot be the largest breakpoint.")}const variantStyles={temporary:applyTemporaryStyles,persistent:applyPersistentStyles,permanent:applyPermanentStyles}[variant](params);theme.breakpoints.keys.includes(breakpoint)?responsive[theme.breakpoints.up(breakpoint)]=variantStyles:responsive[breakpoint]=variantStyles}})),{...responsive,...autoCollapseStyles}}function toggleEdgeSidebarCollapse(options){const{sidebarId}=options||{};let selector=".EdgeSidebar";sidebarId&&(selector=`#${sidebarId}`),(0,_SharedEdgeSidebar__WEBPACK_IMPORTED_MODULE_2__.v6)({...options,selector})}function toggleTemporaryEdgeSidebar(options){const{sidebarId}=options||{};let selector=".EdgeSidebar";sidebarId&&(selector=`#${sidebarId}`),(0,_SharedEdgeSidebar__WEBPACK_IMPORTED_MODULE_2__.tx)({...options,selector})}const StyledEdgeSidebarLeft=(0,__webpack_require__("./node_modules/@mui/material/styles/styled.js").ZP)(_SharedEdgeSidebar__WEBPACK_IMPORTED_MODULE_2__.mH)({[`.${_layoutClasses__WEBPACK_IMPORTED_MODULE_1__.K.Root}:has(&)`]:{"--EdgeSidebar-variant":"var(--permanent)","--EdgeSidebar-permanentWidth":"256px","--EdgeSidebar-collapsible":"var(--uncollapsed)","--EdgeSidebar-collapsedWidth":"80px","--temporary":"var(--EdgeSidebar-variant,)","--permanent":"var(--EdgeSidebar-variant,)","--_permanentWidth":"var(--uncollapsed, var(--EdgeSidebar-permanentWidth))\n                        var(--collapsed, var(--EdgeSidebar-collapsedWidth, 0px))","--collapsed":"var(--EdgeSidebar-collapsible,)","--uncollapsed":"var(--EdgeSidebar-collapsible,)",[`.${_layoutClasses__WEBPACK_IMPORTED_MODULE_1__.K.EdgeSidebarCollapser}`]:{display:"var(--display, inline-flex)","--_sidebarCollapsed":"var(--collapsed, 1)",[`.${_layoutClasses__WEBPACK_IMPORTED_MODULE_1__.K.EdgeSidebarUncollapsedVisible}`]:{display:"var(--collapsed, none) var(--uncollapsed, inline-block)"},[`.${_layoutClasses__WEBPACK_IMPORTED_MODULE_1__.K.EdgeSidebarCollapsedVisible}`]:{display:"var(--collapsed, inline-block) var(--uncollapsed, none)"}}},[`.${_layoutClasses__WEBPACK_IMPORTED_MODULE_1__.K.Root}:has(&[${_layoutClasses__WEBPACK_IMPORTED_MODULE_1__.o.isEdgeSidebarCollapsed}])`]:{"--EdgeSidebar-collapsible":"var(--collapsed)"},"--EdgeSidebar-anchor":"var(--anchorLeft)","--SidebarContent-width":"var(--_permanentWidth, 0px)","--_temporary":"var(--temporary)","--_permanent":"var(--permanent)",gridArea:_layoutClasses__WEBPACK_IMPORTED_MODULE_1__.K.EdgeSidebar,width:"var(--temporary, 0)\n          var(--permanent, var(--_permanentWidth))",borderRight:"var(--permanent, min(var(--EdgeSidebar-sidelineWidth), 1 * var(--SidebarContent-width)) solid)",borderColor:"var(--EdgeSidebar-sidelineColor)","&::after":{border:"inherit",left:0},"&::before":{display:"var(--temporary, block)\n              var(--permanent, none)"},[`&:not([${_layoutClasses__WEBPACK_IMPORTED_MODULE_1__.o.isTemporaryEdgeSidebarOpen}], [${_layoutClasses__WEBPACK_IMPORTED_MODULE_1__.o.isTemporaryEdgeSidebarClosing}])`]:{overflow:"var(--temporary, hidden)"}}),__WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function EdgeSidebar({className,...props},ref){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledEdgeSidebarLeft,_extends({ref},props,{className:`${_layoutClasses__WEBPACK_IMPORTED_MODULE_1__.K.EdgeSidebar} ${className||""}`}))}))},"./blocks/layout-core-v6/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$_:()=>_Footer__WEBPACK_IMPORTED_MODULE_6__.Z,DY:()=>_EdgeSidebarRight__WEBPACK_IMPORTED_MODULE_4__.DY,FK:()=>_InsetAvoidingView__WEBPACK_IMPORTED_MODULE_8__.Z,H7:()=>_EdgeSidebarRight__WEBPACK_IMPORTED_MODULE_4__.H7,Hx:()=>_Root__WEBPACK_IMPORTED_MODULE_7__.H,JF:()=>_InsetSidebarContent__WEBPACK_IMPORTED_MODULE_10__.Z,KG:()=>_layoutClasses__WEBPACK_IMPORTED_MODULE_11__.K,NW:()=>_EdgeSidebar__WEBPACK_IMPORTED_MODULE_2__.ZP,Q5:()=>_InsetSidebar__WEBPACK_IMPORTED_MODULE_9__.Q,SL:()=>_EdgeSidebar__WEBPACK_IMPORTED_MODULE_2__.SL,VY:()=>_Content__WEBPACK_IMPORTED_MODULE_0__.Z,Vy:()=>_EdgeSidebarRight__WEBPACK_IMPORTED_MODULE_4__.Vy,bM:()=>_InsetSidebar__WEBPACK_IMPORTED_MODULE_9__.Z,cR:()=>_EdgeTemporaryClose__WEBPACK_IMPORTED_MODULE_1__.Z,dD:()=>_EdgeSidebarContent__WEBPACK_IMPORTED_MODULE_3__.Z,fC:()=>_Root__WEBPACK_IMPORTED_MODULE_7__.Z,fO:()=>_EdgeSidebar__WEBPACK_IMPORTED_MODULE_2__.fO,h4:()=>_Header__WEBPACK_IMPORTED_MODULE_5__.Z,oz:()=>_EdgeSidebar__WEBPACK_IMPORTED_MODULE_2__.oz,pJ:()=>_Header__WEBPACK_IMPORTED_MODULE_5__.p,zC:()=>_EdgeSidebarRight__WEBPACK_IMPORTED_MODULE_4__.ZP});var _Content__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./blocks/layout-core-v6/Content.tsx"),_EdgeTemporaryClose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./blocks/layout-core-v6/EdgeTemporaryClose.tsx"),_EdgeSidebar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./blocks/layout-core-v6/EdgeSidebar.tsx"),_EdgeSidebarContent__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./blocks/layout-core-v6/EdgeSidebarContent.tsx"),_EdgeSidebarRight__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./blocks/layout-core-v6/EdgeSidebarRight.tsx"),_Header__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./blocks/layout-core-v6/Header.tsx"),_Footer__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./blocks/layout-core-v6/Footer.tsx"),_Root__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./blocks/layout-core-v6/Root.tsx"),_InsetAvoidingView__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./blocks/layout-core-v6/InsetAvoidingView.tsx"),_InsetSidebar__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./blocks/layout-core-v6/InsetSidebar.tsx"),_InsetSidebarContent__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./blocks/layout-core-v6/InsetSidebarContent.tsx"),_layoutClasses__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./blocks/layout-core-v6/layoutClasses.ts")}}]);