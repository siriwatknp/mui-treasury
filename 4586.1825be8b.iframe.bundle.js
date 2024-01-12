"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[4586],{"./node_modules/@mui/material/FormControl/FormControlContext.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/react/index.js").createContext(void 0)},"./node_modules/@mui/material/FormControl/formControlState.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function formControlState({props,states,muiFormControl}){return states.reduce(((acc,state)=>(acc[state]=props[state],muiFormControl&&void 0===props[state]&&(acc[state]=muiFormControl[state]),acc)),{})}__webpack_require__.d(__webpack_exports__,{Z:()=>formControlState})},"./node_modules/@mui/material/FormControl/useFormControl.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useFormControl});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_FormControlContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/FormControl/FormControlContext.js");function useFormControl(){return react__WEBPACK_IMPORTED_MODULE_0__.useContext(_FormControlContext__WEBPACK_IMPORTED_MODULE_1__.Z)}},"./node_modules/@mui/material/FormControlLabel/FormControlLabel.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_mui_base_composeClasses__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),_FormControl__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/material/FormControl/useFormControl.js"),_Stack__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),_Typography__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_utils_capitalize__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),_styles_styled__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),_formControlLabelClasses__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/FormControlLabel/formControlLabelClasses.js"),_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/material/FormControl/formControlState.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],FormControlLabelRoot=(0,_styles_styled__WEBPACK_IMPORTED_MODULE_5__.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[{[`& .${_formControlLabelClasses__WEBPACK_IMPORTED_MODULE_4__.Z.label}`]:styles.label},styles.root,styles[`labelPlacement${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_2__.Z)(ownerState.labelPlacement)}`]]}})((({theme,ownerState})=>(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${_formControlLabelClasses__WEBPACK_IMPORTED_MODULE_4__.Z.disabled}`]:{cursor:"default"}},"start"===ownerState.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===ownerState.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===ownerState.labelPlacement&&{flexDirection:"column",marginLeft:16},{[`& .${_formControlLabelClasses__WEBPACK_IMPORTED_MODULE_4__.Z.label}`]:{[`&.${_formControlLabelClasses__WEBPACK_IMPORTED_MODULE_4__.Z.disabled}`]:{color:(theme.vars||theme).palette.text.disabled}}}))),AsteriskComponent=(0,_styles_styled__WEBPACK_IMPORTED_MODULE_5__.ZP)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(props,styles)=>styles.asterisk})((({theme})=>({[`&.${_formControlLabelClasses__WEBPACK_IMPORTED_MODULE_4__.Z.error}`]:{color:(theme.vars||theme).palette.error.main}}))),__WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function FormControlLabel(inProps,ref){var _ref,_slotProps$typography;const props=(0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_7__.Z)({props:inProps,name:"MuiFormControlLabel"}),{className,componentsProps={},control,disabled:disabledProp,disableTypography,label:labelProp,labelPlacement="end",required:requiredProp,slotProps={}}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_8__.Z)(props,_excluded),muiFormControl=(0,_FormControl__WEBPACK_IMPORTED_MODULE_9__.Z)(),disabled=null!=(_ref=null!=disabledProp?disabledProp:control.props.disabled)?_ref:null==muiFormControl?void 0:muiFormControl.disabled,required=null!=requiredProp?requiredProp:control.props.required,controlProps={disabled,required};["checked","name","onChange","value","inputRef"].forEach((key=>{void 0===control.props[key]&&void 0!==props[key]&&(controlProps[key]=props[key])}));const fcs=(0,_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_10__.Z)({props,muiFormControl,states:["error"]}),ownerState=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({},props,{disabled,labelPlacement,required,error:fcs.error}),classes=(ownerState=>{const{classes,disabled,labelPlacement,error,required}=ownerState,slots={root:["root",disabled&&"disabled",`labelPlacement${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_2__.Z)(labelPlacement)}`,error&&"error",required&&"required"],label:["label",disabled&&"disabled"],asterisk:["asterisk",error&&"error"]};return(0,_mui_base_composeClasses__WEBPACK_IMPORTED_MODULE_3__.Z)(slots,_formControlLabelClasses__WEBPACK_IMPORTED_MODULE_4__.r,classes)})(ownerState),typographySlotProps=null!=(_slotProps$typography=slotProps.typography)?_slotProps$typography:componentsProps.typography;let label=labelProp;return null==label||label.type===_Typography__WEBPACK_IMPORTED_MODULE_11__.Z||disableTypography||(label=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Typography__WEBPACK_IMPORTED_MODULE_11__.Z,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({component:"span"},typographySlotProps,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_12__.Z)(classes.label,null==typographySlotProps?void 0:typographySlotProps.className),children:label}))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FormControlLabelRoot,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_12__.Z)(classes.root,className),ownerState,ref},other,{children:[react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(control,controlProps),required?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Stack__WEBPACK_IMPORTED_MODULE_13__.Z,{display:"block",children:[label,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(AsteriskComponent,{ownerState,"aria-hidden":!0,className:classes.asterisk,children:[" ","*"]})]}):label]}))}))},"./node_modules/@mui/material/FormControlLabel/formControlLabelClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,r:()=>getFormControlLabelUtilityClasses});var _mui_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getFormControlLabelUtilityClasses(slot){return(0,_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.Z)("MuiFormControlLabel",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"])},"./node_modules/@mui/material/Stack/Stack.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Stack_Stack});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@mui/system/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@mui/system/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),deepmerge=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js"),styled=__webpack_require__("./node_modules/@mui/system/esm/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/system/esm/useThemeProps/useThemeProps.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),createTheme=__webpack_require__("./node_modules/@mui/system/esm/createTheme/createTheme.js"),breakpoints=__webpack_require__("./node_modules/@mui/system/esm/breakpoints.js"),spacing=__webpack_require__("./node_modules/@mui/system/esm/spacing.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["component","direction","spacing","divider","children","className","useFlexGap"],defaultTheme=(0,createTheme.Z)(),defaultCreateStyledComponent=(0,styled.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(props,styles)=>styles.root});function useThemePropsDefault(props){return(0,useThemeProps.Z)({props,name:"MuiStack",defaultTheme})}function joinChildren(children,separator){const childrenArray=react.Children.toArray(children).filter(Boolean);return childrenArray.reduce(((output,child,index)=>(output.push(child),index<childrenArray.length-1&&output.push(react.cloneElement(separator,{key:`separator-${index}`})),output)),[])}const style=({ownerState,theme})=>{let styles=(0,esm_extends.Z)({display:"flex",flexDirection:"column"},(0,breakpoints.k9)({theme},(0,breakpoints.P$)({values:ownerState.direction,breakpoints:theme.breakpoints.values}),(propValue=>({flexDirection:propValue}))));if(ownerState.spacing){const transformer=(0,spacing.hB)(theme),base=Object.keys(theme.breakpoints.values).reduce(((acc,breakpoint)=>(("object"==typeof ownerState.spacing&&null!=ownerState.spacing[breakpoint]||"object"==typeof ownerState.direction&&null!=ownerState.direction[breakpoint])&&(acc[breakpoint]=!0),acc)),{}),directionValues=(0,breakpoints.P$)({values:ownerState.direction,base}),spacingValues=(0,breakpoints.P$)({values:ownerState.spacing,base});"object"==typeof directionValues&&Object.keys(directionValues).forEach(((breakpoint,index,breakpoints)=>{if(!directionValues[breakpoint]){const previousDirectionValue=index>0?directionValues[breakpoints[index-1]]:"column";directionValues[breakpoint]=previousDirectionValue}}));const styleFromPropValue=(propValue,breakpoint)=>{return ownerState.useFlexGap?{gap:(0,spacing.NA)(transformer,propValue)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${direction=breakpoint?directionValues[breakpoint]:ownerState.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[direction]}`]:(0,spacing.NA)(transformer,propValue)}};var direction};styles=(0,deepmerge.Z)(styles,(0,breakpoints.k9)({theme},spacingValues,styleFromPropValue))}return styles=(0,breakpoints.dt)(theme.breakpoints,styles),styles};var styles_styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles_useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js");const Stack=function createStack(options={}){const{createStyledComponent=defaultCreateStyledComponent,useThemeProps=useThemePropsDefault,componentName="MuiStack"}=options,StackRoot=createStyledComponent(style),Stack=react.forwardRef((function Grid(inProps,ref){const themeProps=useThemeProps(inProps),props=(0,extendSxProp.Z)(themeProps),{component="div",direction="column",spacing=0,divider,children,className,useFlexGap=!1}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState={direction,spacing,useFlexGap},classes=(0,composeClasses.Z)({root:["root"]},(slot=>(0,generateUtilityClass.Z)(componentName,slot)),{});return(0,jsx_runtime.jsx)(StackRoot,(0,esm_extends.Z)({as:component,ownerState,ref,className:(0,clsx.Z)(classes.root,className)},other,{children:divider?joinChildren(children,divider):children}))}));return Stack}({createStyledComponent:(0,styles_styled.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(props,styles)=>styles.root}),useThemeProps:inProps=>(0,styles_useThemeProps.Z)({props:inProps,name:"MuiStack"})}),Stack_Stack=Stack},"./node_modules/@mui/material/internal/SwitchBase.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>internal_SwitchBase});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useControlled=__webpack_require__("./node_modules/@mui/material/utils/useControlled.js"),useFormControl=__webpack_require__("./node_modules/@mui/material/FormControl/useFormControl.js"),ButtonBase=__webpack_require__("./node_modules/@mui/material/ButtonBase/ButtonBase.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getSwitchBaseUtilityClass(slot){return(0,generateUtilityClass.Z)("PrivateSwitchBase",slot)}(0,generateUtilityClasses.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],SwitchBaseRoot=(0,styled.ZP)(ButtonBase.Z)((({ownerState})=>(0,esm_extends.Z)({padding:9,borderRadius:"50%"},"start"===ownerState.edge&&{marginLeft:"small"===ownerState.size?-3:-12},"end"===ownerState.edge&&{marginRight:"small"===ownerState.size?-3:-12}))),SwitchBaseInput=(0,styled.ZP)("input",{shouldForwardProp:styled.FO})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),internal_SwitchBase=react.forwardRef((function SwitchBase(props,ref){const{autoFocus,checked:checkedProp,checkedIcon,className,defaultChecked,disabled:disabledProp,disableFocusRipple=!1,edge=!1,icon,id,inputProps,inputRef,name,onBlur,onChange,onFocus,readOnly,required=!1,tabIndex,type,value}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),[checked,setCheckedState]=(0,useControlled.Z)({controlled:checkedProp,default:Boolean(defaultChecked),name:"SwitchBase",state:"checked"}),muiFormControl=(0,useFormControl.Z)();let disabled=disabledProp;muiFormControl&&void 0===disabled&&(disabled=muiFormControl.disabled);const hasLabelFor="checkbox"===type||"radio"===type,ownerState=(0,esm_extends.Z)({},props,{checked,disabled,disableFocusRipple,edge}),classes=(ownerState=>{const{classes,checked,disabled,edge}=ownerState,slots={root:["root",checked&&"checked",disabled&&"disabled",edge&&`edge${(0,capitalize.Z)(edge)}`],input:["input"]};return(0,composeClasses.Z)(slots,getSwitchBaseUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsxs)(SwitchBaseRoot,(0,esm_extends.Z)({component:"span",className:(0,clsx.Z)(classes.root,className),centerRipple:!0,focusRipple:!disableFocusRipple,disabled,tabIndex:null,role:void 0,onFocus:event=>{onFocus&&onFocus(event),muiFormControl&&muiFormControl.onFocus&&muiFormControl.onFocus(event)},onBlur:event=>{onBlur&&onBlur(event),muiFormControl&&muiFormControl.onBlur&&muiFormControl.onBlur(event)},ownerState,ref},other,{children:[(0,jsx_runtime.jsx)(SwitchBaseInput,(0,esm_extends.Z)({autoFocus,checked:checkedProp,defaultChecked,className:classes.input,disabled,id:hasLabelFor?id:void 0,name,onChange:event=>{if(event.nativeEvent.defaultPrevented)return;const newChecked=event.target.checked;setCheckedState(newChecked),onChange&&onChange(event,newChecked)},readOnly,ref:inputRef,required,ownerState,tabIndex,type},"checkbox"===type&&void 0===value?{}:{value},inputProps)),checked?checkedIcon:icon]}))}))}}]);