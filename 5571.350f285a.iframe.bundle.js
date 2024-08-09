"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[5571],{"./node_modules/@mui/material/AppBar/AppBar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>AppBar_AppBar});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),Paper=__webpack_require__("./node_modules/@mui/material/Paper/Paper.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getAppBarUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiAppBar",slot)}(0,generateUtilityClasses.Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const joinVars=(var1,var2)=>var1?`${var1?.replace(")","")}, ${var2})`:var2,AppBarRoot=(0,styled.ZP)(Paper.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[`position${(0,capitalize.Z)(ownerState.position)}`],styles[`color${(0,capitalize.Z)(ownerState.color)}`]]}})((({theme})=>({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0,variants:[{props:{position:"fixed"},style:{position:"fixed",zIndex:(theme.vars||theme).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}}},{props:{position:"absolute"},style:{position:"absolute",zIndex:(theme.vars||theme).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"sticky"},style:{position:"sticky",zIndex:(theme.vars||theme).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"static"},style:{position:"static"}},{props:{position:"relative"},style:{position:"relative"}},{props:{color:"inherit"},style:{"--AppBar-color":"inherit"}},{props:{color:"default"},style:{"--AppBar-background":theme.vars?theme.vars.palette.AppBar.defaultBg:theme.palette.grey[100],"--AppBar-color":theme.vars?theme.vars.palette.text.primary:theme.palette.getContrastText(theme.palette.grey[100]),...theme.applyStyles("dark",{"--AppBar-background":theme.vars?theme.vars.palette.AppBar.defaultBg:theme.palette.grey[900],"--AppBar-color":theme.vars?theme.vars.palette.text.primary:theme.palette.getContrastText(theme.palette.grey[900])})}},...Object.entries(theme.palette).filter((([,palette])=>palette&&palette.main&&palette.contrastText)).map((([color])=>({props:{color},style:{"--AppBar-background":(theme.vars??theme).palette[color].main,"--AppBar-color":(theme.vars??theme).palette[color].contrastText}}))),{props:props=>!0===props.enableColorOnDark&&!["inherit","transparent"].includes(props.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)"}},{props:props=>!1===props.enableColorOnDark&&!["inherit","transparent"].includes(props.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...theme.applyStyles("dark",{backgroundColor:theme.vars?joinVars(theme.vars.palette.AppBar.darkBg,"var(--AppBar-background)"):null,color:theme.vars?joinVars(theme.vars.palette.AppBar.darkColor,"var(--AppBar-color)"):null})}},{props:{color:"transparent"},style:{"--AppBar-background":"transparent","--AppBar-color":"inherit",backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...theme.applyStyles("dark",{backgroundImage:"none"})}}]}))),AppBar_AppBar=react.forwardRef((function AppBar(inProps,ref){const props=(0,DefaultPropsProvider.i)({props:inProps,name:"MuiAppBar"}),{className,color="primary",enableColorOnDark=!1,position="fixed",...other}=props,ownerState={...props,color,position,enableColorOnDark},classes=(ownerState=>{const{color,position,classes}=ownerState,slots={root:["root",`color${(0,capitalize.Z)(color)}`,`position${(0,capitalize.Z)(position)}`]};return(0,composeClasses.Z)(slots,getAppBarUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(AppBarRoot,{square:!0,component:"header",ownerState,elevation:4,className:(0,clsx.Z)(classes.root,className,"fixed"===position&&"mui-fixed"),ref,...other})}))},"./node_modules/@mui/material/Container/Container.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Container_Container});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js"),useThemeProps=__webpack_require__("./node_modules/@mui/system/useThemeProps/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/system/styled/styled.js"),createTheme=__webpack_require__("./node_modules/@mui/system/createTheme/createTheme.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultTheme=(0,createTheme.Z)(),defaultCreateStyledComponent=(0,styled.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[`maxWidth${(0,capitalize.Z)(String(ownerState.maxWidth))}`],ownerState.fixed&&styles.fixed,ownerState.disableGutters&&styles.disableGutters]}}),useThemePropsDefault=inProps=>(0,useThemeProps.Z)({props:inProps,name:"MuiContainer",defaultTheme});var utils_capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),styles_styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles_useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js");const Container=function createContainer(options={}){const{createStyledComponent=defaultCreateStyledComponent,useThemeProps=useThemePropsDefault,componentName="MuiContainer"}=options,ContainerRoot=createStyledComponent((({theme,ownerState})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!ownerState.disableGutters&&{paddingLeft:theme.spacing(2),paddingRight:theme.spacing(2),[theme.breakpoints.up("sm")]:{paddingLeft:theme.spacing(3),paddingRight:theme.spacing(3)}}})),(({theme,ownerState})=>ownerState.fixed&&Object.keys(theme.breakpoints.values).reduce(((acc,breakpointValueKey)=>{const breakpoint=breakpointValueKey,value=theme.breakpoints.values[breakpoint];return 0!==value&&(acc[theme.breakpoints.up(breakpoint)]={maxWidth:`${value}${theme.breakpoints.unit}`}),acc}),{})),(({theme,ownerState})=>({..."xs"===ownerState.maxWidth&&{[theme.breakpoints.up("xs")]:{maxWidth:Math.max(theme.breakpoints.values.xs,444)}},...ownerState.maxWidth&&"xs"!==ownerState.maxWidth&&{[theme.breakpoints.up(ownerState.maxWidth)]:{maxWidth:`${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`}}}))),Container=react.forwardRef((function Container(inProps,ref){const props=useThemeProps(inProps),{className,component="div",disableGutters=!1,fixed=!1,maxWidth="lg",classes:classesProp,...other}=props,ownerState={...props,component,disableGutters,fixed,maxWidth},classes=((ownerState,componentName)=>{const{classes,fixed,disableGutters,maxWidth}=ownerState,slots={root:["root",maxWidth&&`maxWidth${(0,capitalize.Z)(String(maxWidth))}`,fixed&&"fixed",disableGutters&&"disableGutters"]};return(0,composeClasses.Z)(slots,(slot=>(0,generateUtilityClass.ZP)(componentName,slot)),classes)})(ownerState,componentName);return(0,jsx_runtime.jsx)(ContainerRoot,{as:component,ownerState,className:(0,clsx.Z)(classes.root,className),ref,...other})}));return Container}({createStyledComponent:(0,styles_styled.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[`maxWidth${(0,utils_capitalize.Z)(String(ownerState.maxWidth))}`],ownerState.fixed&&styles.fixed,ownerState.disableGutters&&styles.disableGutters]}}),useThemeProps:inProps=>(0,styles_useThemeProps.Z)({props:inProps,name:"MuiContainer"})}),Container_Container=Container},"./node_modules/@mui/material/Drawer/Drawer.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>Drawer_Drawer});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),RtlProvider=__webpack_require__("./node_modules/@mui/system/RtlProvider/index.js"),Modal=__webpack_require__("./node_modules/@mui/material/Modal/Modal.js"),Transition=__webpack_require__("./node_modules/react-transition-group/esm/Transition.js"),getReactNodeRef=__webpack_require__("./node_modules/@mui/utils/esm/getReactNodeRef/getReactNodeRef.js"),debounce=__webpack_require__("./node_modules/@mui/material/utils/debounce.js"),useForkRef=__webpack_require__("./node_modules/@mui/material/utils/useForkRef.js"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),utils=__webpack_require__("./node_modules/@mui/material/transitions/utils.js"),ownerWindow=__webpack_require__("./node_modules/@mui/material/utils/ownerWindow.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function setTranslateValue(direction,node,containerProp){const transform=function getTranslateValue(direction,node,resolvedContainer){const rect=node.getBoundingClientRect(),containerRect=resolvedContainer&&resolvedContainer.getBoundingClientRect(),containerWindow=(0,ownerWindow.Z)(node);let transform;if(node.fakeTransform)transform=node.fakeTransform;else{const computedStyle=containerWindow.getComputedStyle(node);transform=computedStyle.getPropertyValue("-webkit-transform")||computedStyle.getPropertyValue("transform")}let offsetX=0,offsetY=0;if(transform&&"none"!==transform&&"string"==typeof transform){const transformValues=transform.split("(")[1].split(")")[0].split(",");offsetX=parseInt(transformValues[4],10),offsetY=parseInt(transformValues[5],10)}return"left"===direction?containerRect?`translateX(${containerRect.right+offsetX-rect.left}px)`:`translateX(${containerWindow.innerWidth+offsetX-rect.left}px)`:"right"===direction?containerRect?`translateX(-${rect.right-containerRect.left-offsetX}px)`:`translateX(-${rect.left+rect.width-offsetX}px)`:"up"===direction?containerRect?`translateY(${containerRect.bottom+offsetY-rect.top}px)`:`translateY(${containerWindow.innerHeight+offsetY-rect.top}px)`:containerRect?`translateY(-${rect.top-containerRect.top+rect.height-offsetY}px)`:`translateY(-${rect.top+rect.height-offsetY}px)`}(direction,node,function resolveContainer(containerPropProp){return"function"==typeof containerPropProp?containerPropProp():containerPropProp}(containerProp));transform&&(node.style.webkitTransform=transform,node.style.transform=transform)}const Slide_Slide=react.forwardRef((function Slide(props,ref){const theme=(0,useTheme.Z)(),defaultEasing={enter:theme.transitions.easing.easeOut,exit:theme.transitions.easing.sharp},defaultTimeout={enter:theme.transitions.duration.enteringScreen,exit:theme.transitions.duration.leavingScreen},{addEndListener,appear=!0,children,container:containerProp,direction="down",easing:easingProp=defaultEasing,in:inProp,onEnter,onEntered,onEntering,onExit,onExited,onExiting,style,timeout=defaultTimeout,TransitionComponent=Transition.ZP,...other}=props,childrenRef=react.useRef(null),handleRef=(0,useForkRef.Z)((0,getReactNodeRef.Z)(children),childrenRef,ref),normalizedTransitionCallback=callback=>isAppearing=>{callback&&(void 0===isAppearing?callback(childrenRef.current):callback(childrenRef.current,isAppearing))},handleEnter=normalizedTransitionCallback(((node,isAppearing)=>{setTranslateValue(direction,node,containerProp),(0,utils.n)(node),onEnter&&onEnter(node,isAppearing)})),handleEntering=normalizedTransitionCallback(((node,isAppearing)=>{const transitionProps=(0,utils.C)({timeout,style,easing:easingProp},{mode:"enter"});node.style.webkitTransition=theme.transitions.create("-webkit-transform",{...transitionProps}),node.style.transition=theme.transitions.create("transform",{...transitionProps}),node.style.webkitTransform="none",node.style.transform="none",onEntering&&onEntering(node,isAppearing)})),handleEntered=normalizedTransitionCallback(onEntered),handleExiting=normalizedTransitionCallback(onExiting),handleExit=normalizedTransitionCallback((node=>{const transitionProps=(0,utils.C)({timeout,style,easing:easingProp},{mode:"exit"});node.style.webkitTransition=theme.transitions.create("-webkit-transform",transitionProps),node.style.transition=theme.transitions.create("transform",transitionProps),setTranslateValue(direction,node,containerProp),onExit&&onExit(node)})),handleExited=normalizedTransitionCallback((node=>{node.style.webkitTransition="",node.style.transition="",onExited&&onExited(node)})),updatePosition=react.useCallback((()=>{childrenRef.current&&setTranslateValue(direction,childrenRef.current,containerProp)}),[direction,containerProp]);return react.useEffect((()=>{if(inProp||"down"===direction||"right"===direction)return;const handleResize=(0,debounce.Z)((()=>{childrenRef.current&&setTranslateValue(direction,childrenRef.current,containerProp)})),containerWindow=(0,ownerWindow.Z)(childrenRef.current);return containerWindow.addEventListener("resize",handleResize),()=>{handleResize.clear(),containerWindow.removeEventListener("resize",handleResize)}}),[direction,inProp,containerProp]),react.useEffect((()=>{inProp||updatePosition()}),[inProp,updatePosition]),(0,jsx_runtime.jsx)(TransitionComponent,{nodeRef:childrenRef,onEnter:handleEnter,onEntered:handleEntered,onEntering:handleEntering,onExit:handleExit,onExited:handleExited,onExiting:handleExiting,addEndListener:next=>{addEndListener&&addEndListener(childrenRef.current,next)},appear,in:inProp,timeout,...other,children:(state,childProps)=>react.cloneElement(children,{ref:handleRef,style:{visibility:"exited"!==state||inProp?void 0:"hidden",...style,...children.props.style},...childProps})})}));var Paper=__webpack_require__("./node_modules/@mui/material/Paper/Paper.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),rootShouldForwardProp=__webpack_require__("./node_modules/@mui/material/styles/rootShouldForwardProp.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),drawerClasses=__webpack_require__("./node_modules/@mui/material/Drawer/drawerClasses.js");const overridesResolver=(props,styles)=>{const{ownerState}=props;return[styles.root,("permanent"===ownerState.variant||"persistent"===ownerState.variant)&&styles.docked,styles.modal]},DrawerRoot=(0,styled.ZP)(Modal.Z,{name:"MuiDrawer",slot:"Root",overridesResolver})((({theme})=>({zIndex:(theme.vars||theme).zIndex.drawer}))),DrawerDockedRoot=(0,styled.ZP)("div",{shouldForwardProp:rootShouldForwardProp.Z,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver})({flex:"0 0 auto"}),DrawerPaper=(0,styled.ZP)(Paper.Z,{name:"MuiDrawer",slot:"Paper",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.paper,styles[`paperAnchor${(0,capitalize.Z)(ownerState.anchor)}`],"temporary"!==ownerState.variant&&styles[`paperAnchorDocked${(0,capitalize.Z)(ownerState.anchor)}`]]}})((({theme})=>({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(theme.vars||theme).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0,variants:[{props:{anchor:"left"},style:{left:0}},{props:{anchor:"top"},style:{top:0,left:0,right:0,height:"auto",maxHeight:"100%"}},{props:{anchor:"right"},style:{right:0}},{props:{anchor:"bottom"},style:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"}},{props:({ownerState})=>"left"===ownerState.anchor&&"temporary"!==ownerState.variant,style:{borderRight:`1px solid ${(theme.vars||theme).palette.divider}`}},{props:({ownerState})=>"top"===ownerState.anchor&&"temporary"!==ownerState.variant,style:{borderBottom:`1px solid ${(theme.vars||theme).palette.divider}`}},{props:({ownerState})=>"right"===ownerState.anchor&&"temporary"!==ownerState.variant,style:{borderLeft:`1px solid ${(theme.vars||theme).palette.divider}`}},{props:({ownerState})=>"bottom"===ownerState.anchor&&"temporary"!==ownerState.variant,style:{borderTop:`1px solid ${(theme.vars||theme).palette.divider}`}}]}))),oppositeDirection={left:"right",right:"left",top:"down",bottom:"up"};const Drawer_Drawer=react.forwardRef((function Drawer(inProps,ref){const props=(0,DefaultPropsProvider.i)({props:inProps,name:"MuiDrawer"}),theme=(0,useTheme.Z)(),isRtl=(0,RtlProvider.V)(),defaultTransitionDuration={enter:theme.transitions.duration.enteringScreen,exit:theme.transitions.duration.leavingScreen},{anchor:anchorProp="left",BackdropProps,children,className,elevation=16,hideBackdrop=!1,ModalProps:{BackdropProps:BackdropPropsProp,...ModalProps}={},onClose,open=!1,PaperProps={},SlideProps,TransitionComponent=Slide_Slide,transitionDuration=defaultTransitionDuration,variant="temporary",...other}=props,mounted=react.useRef(!1);react.useEffect((()=>{mounted.current=!0}),[]);const anchorInvariant=function getAnchor({direction},anchor){return"rtl"===direction&&function isHorizontal(anchor){return-1!==["left","right"].indexOf(anchor)}(anchor)?oppositeDirection[anchor]:anchor}({direction:isRtl?"rtl":"ltr"},anchorProp),anchor=anchorProp,ownerState={...props,anchor,elevation,open,variant,...other},classes=(ownerState=>{const{classes,anchor,variant}=ownerState,slots={root:["root"],docked:[("permanent"===variant||"persistent"===variant)&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${(0,capitalize.Z)(anchor)}`,"temporary"!==variant&&`paperAnchorDocked${(0,capitalize.Z)(anchor)}`]};return(0,composeClasses.Z)(slots,drawerClasses.l,classes)})(ownerState),drawer=(0,jsx_runtime.jsx)(DrawerPaper,{elevation:"temporary"===variant?elevation:0,square:!0,...PaperProps,className:(0,clsx.Z)(classes.paper,PaperProps.className),ownerState,children});if("permanent"===variant)return(0,jsx_runtime.jsx)(DrawerDockedRoot,{className:(0,clsx.Z)(classes.root,classes.docked,className),ownerState,ref,...other,children:drawer});const slidingDrawer=(0,jsx_runtime.jsx)(TransitionComponent,{in:open,direction:oppositeDirection[anchorInvariant],timeout:transitionDuration,appear:mounted.current,...SlideProps,children:drawer});return"persistent"===variant?(0,jsx_runtime.jsx)(DrawerDockedRoot,{className:(0,clsx.Z)(classes.root,classes.docked,className),ownerState,ref,...other,children:slidingDrawer}):(0,jsx_runtime.jsx)(DrawerRoot,{BackdropProps:{...BackdropProps,...BackdropPropsProp,transitionDuration},className:(0,clsx.Z)(classes.root,classes.modal,className),open,ownerState,onClose,hideBackdrop,ref,...other,...ModalProps,children:slidingDrawer})}))},"./node_modules/@mui/material/Drawer/drawerClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,l:()=>getDrawerUtilityClass});var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getDrawerUtilityClass(slot){return(0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.ZP)("MuiDrawer",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__.Z)("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"])},"./node_modules/@mui/system/styled/styled.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./node_modules/@mui/system/createStyled/createStyled.js").ZP)()}}]);