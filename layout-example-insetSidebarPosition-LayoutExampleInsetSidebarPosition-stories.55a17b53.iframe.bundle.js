"use strict";(self.webpackChunkmui_treasury=self.webpackChunkmui_treasury||[]).push([[7380],{"./blocks/layout-example-insetSidebarPosition/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const LayoutExampleInsetSidebarPositionraw_namespaceObject='import React from "react";\nimport Box from "@mui/material/Box";\nimport Container from "@mui/material/Container";\nimport CssBaseline from "@mui/material/CssBaseline";\nimport FormControlLabel from "@mui/material/FormControlLabel";\nimport FormLabel from "@mui/material/FormLabel";\nimport Radio from "@mui/material/Radio";\nimport RadioGroup from "@mui/material/RadioGroup";\nimport { createTheme, ThemeProvider } from "@mui/material/styles";\nimport {\n  Content,\n  Footer,\n  Fullscreen,\n  Header,\n  InsetAvoidingView,\n  InsetContainer,\n  InsetSidebar,\n  Root,\n} from "../layout-core-v5";\n\nconst theme = createTheme();\n\ntype Position = "fixed" | "absolute" | "sticky";\n\nexport const LayoutExampleInsetSidebarPosition = () => {\n  const [position, setPosition] = React.useState<Position>("fixed");\n  const Wrapper = position === "absolute" ? Fullscreen : "div";\n  return (\n    <ThemeProvider theme={theme}>\n      <Root\n        scheme={{\n          header: {\n            config: {\n              xs: {\n                position: "sticky",\n                height: 56,\n              },\n            },\n          },\n          rightInsetSidebar: {\n            config: {\n              xs: {\n                position,\n                top: position === "sticky" ? 64 : 0,\n                width: 256,\n              },\n            },\n          },\n        }}\n      >\n        <Wrapper>\n          <CssBaseline />\n          <Header>\n            <div>Header</div>\n          </Header>\n          <Content>\n            <InsetContainer\n              disableGutters\n              rightSidebar={\n                <InsetSidebar\n                  sx={{\n                    ...(position === "sticky" && {\n                      marginTop: "80px",\n                    }),\n                  }}\n                >\n                  {position === "fixed" && (\n                    <Box p={2}>\n                      Fixed content but scrollable if long list, Try scolling\n                      the content.\n                    </Box>\n                  )}\n                  {position === "sticky" && (\n                    <Box p={2}>\n                      Controlled by `top` and provide margin to\n                      InsetSidebar-body\n                    </Box>\n                  )}\n                  {position === "absolute" && <Box p={2}>Some Settings</Box>}\n                </InsetSidebar>\n              }\n            >\n              <Box p={2} width="100%">\n                <FormLabel>Inset Sidebar Position</FormLabel>\n                <RadioGroup\n                  value={position}\n                  onChange={(event) =>\n                    setPosition(event.target.value as Position)\n                  }\n                >\n                  <FormControlLabel\n                    control={<Radio />}\n                    value="fixed"\n                    label="fixed"\n                  />\n                  <FormControlLabel\n                    control={<Radio />}\n                    value="sticky"\n                    label="sticky"\n                  />\n                  <FormControlLabel\n                    control={<Radio />}\n                    value="absolute"\n                    label="absolute"\n                  />\n                </RadioGroup>\n                <br />\n                {position === "fixed" && (\n                  <Box p={2} bgcolor="primary.main" color="common.white">\n                    <b>`fixed`</b> is a great fit for displaying topics of the\n                    page that has long content because the sidebar will not move\n                    if user scroll on the content. Also the area of `fixed`\n                    inset sidebar cover to the edge of the screen.\n                  </Box>\n                )}\n                {position === "sticky" && (\n                  <Box p={2} bgcolor="primary.main" color="common.white">\n                    <b>`sticky`</b> is similar to <b>`fixed`</b> but for\n                    displaying things that will have initial space at the top on\n                    intial load and once user scroll on the content, it stick at\n                    the top (the area of sidebar stay inside the container). One\n                    example is displaying ads.\n                  </Box>\n                )}\n                {position === "absolute" && (\n                  <Box p={2} bgcolor="primary.main" color="common.white">\n                    <b>`absolute`</b> is for app that want to display Footer at\n                    all times. A good example is Facebook Messenger.\n                  </Box>\n                )}\n\n                <Box maxWidth={700}>\n                  <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n                    do eiusmod tempor incididunt ut labore et dolore magna\n                    aliqua. Adipiscing elit pellentesque habitant morbi\n                    tristique senectus. Massa eget egestas purus viverra\n                    accumsan in. Consectetur adipiscing elit duis tristique.\n                    Egestas dui id ornare arcu odio ut sem nulla pharetra.\n                    Egestas erat imperdiet sed euismod nisi porta lorem.\n                    Phasellus faucibus scelerisque eleifend donec pretium\n                    vulputate sapien nec sagittis. Interdum posuere lorem ipsum\n                    dolor sit amet. Ullamcorper dignissim cras tincidunt\n                    lobortis feugiat vivamus at augue eget. Habitant morbi\n                    tristique senectus et netus et malesuada fames. Ac felis\n                    donec et odio. Amet porttitor eget dolor morbi.\n                  </p>\n                  <p>\n                    Donec pretium vulputate sapien nec sagittis aliquam. Viverra\n                    justo nec ultrices dui sapien eget mi proin. Sed elementum\n                    tempus egestas sed sed risus pretium. Diam sollicitudin\n                    tempor id eu. Ipsum nunc aliquet bibendum enim facilisis\n                    gravida neque convallis a. Faucibus a pellentesque sit amet\n                    porttitor. Eget aliquet nibh praesent tristique. Mattis nunc\n                    sed blandit libero volutpat sed cras ornare. Rhoncus aenean\n                    vel elit scelerisque mauris. Blandit libero volutpat sed\n                    cras ornare arcu.\n                  </p>\n                  <p>\n                    Sodales ut etiam sit amet. Sagittis vitae et leo duis.\n                    Lectus sit amet est placerat in. Nunc mattis enim ut tellus\n                    elementum sagittis vitae. Ut sem nulla pharetra diam sit\n                    amet nisl suscipit adipiscing. Adipiscing diam donec\n                    adipiscing tristique risus nec feugiat in fermentum. Eget\n                    arcu dictum varius duis at consectetur lorem donec. Orci a\n                    scelerisque purus semper eget duis at tellus at. Pharetra\n                    diam sit amet nisl suscipit adipiscing. Amet volutpat\n                    consequat mauris nunc congue nisi. Pretium fusce id velit ut\n                    tortor. Vitae turpis massa sed elementum tempus egestas.\n                    Risus nullam eget felis eget. Sed id semper risus in\n                    hendrerit. Malesuada fames ac turpis egestas maecenas\n                    pharetra convallis posuere.\n                  </p>\n                </Box>\n              </Box>\n            </InsetContainer>\n          </Content>\n          <Footer>\n            <Container disableGutters sx={{ backgroundColor: "grey.100" }}>\n              <InsetAvoidingView>\n                <Box p={2} pb={5}>\n                  <p>\n                    <b>Footer</b>\n                  </p>\n                  {position !== "absolute" && (\n                    <p>\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n                      sed do eiusmod tempor incididunt ut labore et dolore magna\n                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n                      ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                      Duis aute irure dolor in reprehenderit in voluptate velit\n                      esse cillum dolore eu fugiat nulla pariatur\n                    </p>\n                  )}\n                </Box>\n              </InsetAvoidingView>\n            </Container>\n          </Footer>\n        </Wrapper>\n      </Root>\n    </ThemeProvider>\n  );\n};\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Layout v5/Example/InsetSidebarPosition"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx mui-treasury@latest clone layout-example-insetSidebarPosition\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"layoutexampleinsetsidebarposition",children:"LayoutExampleInsetSidebarPosition"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:LayoutExampleInsetSidebarPositionraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./blocks/layout-example-insetSidebarPosition/LayoutExampleInsetSidebarPosition.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InsetSidebarPosition:()=>InsetSidebarPosition,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LayoutExampleInsetSidebarPosition_stories});var react=__webpack_require__("./node_modules/react/index.js"),googleFont=__webpack_require__("./.storybook/decorators/googleFont.tsx"),storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Container=__webpack_require__("./node_modules/@mui/material/Container/Container.js"),CssBaseline=__webpack_require__("./node_modules/@mui/material/CssBaseline/CssBaseline.js"),FormControlLabel=__webpack_require__("./node_modules/@mui/material/FormControlLabel/FormControlLabel.js"),FormLabel=__webpack_require__("./node_modules/@mui/material/FormLabel/FormLabel.js"),Radio=__webpack_require__("./node_modules/@mui/material/Radio/Radio.js"),RadioGroup=__webpack_require__("./node_modules/@mui/material/RadioGroup/RadioGroup.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),ThemeProvider=__webpack_require__("./node_modules/@mui/material/styles/ThemeProvider.js"),layout_core_v5=__webpack_require__("./blocks/layout-core-v5/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const theme=(0,createTheme.Z)(),LayoutExampleInsetSidebarPosition=()=>{const[position,setPosition]=react.useState("fixed"),Wrapper="absolute"===position?layout_core_v5.iT:"div";return(0,jsx_runtime.jsx)(ThemeProvider.Z,{theme,children:(0,jsx_runtime.jsx)(layout_core_v5.fC,{scheme:{header:{config:{xs:{position:"sticky",height:56}}},rightInsetSidebar:{config:{xs:{position,top:"sticky"===position?64:0,width:256}}}},children:(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsx)(CssBaseline.ZP,{}),(0,jsx_runtime.jsx)(layout_core_v5.h4,{children:(0,jsx_runtime.jsx)("div",{children:"Header"})}),(0,jsx_runtime.jsx)(layout_core_v5.VY,{children:(0,jsx_runtime.jsx)(layout_core_v5.pN,{disableGutters:!0,rightSidebar:(0,jsx_runtime.jsxs)(layout_core_v5.bM,{sx:{..."sticky"===position&&{marginTop:"80px"}},children:["fixed"===position&&(0,jsx_runtime.jsx)(Box.Z,{p:2,children:"Fixed content but scrollable if long list, Try scolling the content."}),"sticky"===position&&(0,jsx_runtime.jsx)(Box.Z,{p:2,children:"Controlled by `top` and provide margin to InsetSidebar-body"}),"absolute"===position&&(0,jsx_runtime.jsx)(Box.Z,{p:2,children:"Some Settings"})]}),children:(0,jsx_runtime.jsxs)(Box.Z,{p:2,width:"100%",children:[(0,jsx_runtime.jsx)(FormLabel.Z,{children:"Inset Sidebar Position"}),(0,jsx_runtime.jsxs)(RadioGroup.Z,{value:position,onChange:event=>setPosition(event.target.value),children:[(0,jsx_runtime.jsx)(FormControlLabel.Z,{control:(0,jsx_runtime.jsx)(Radio.Z,{}),value:"fixed",label:"fixed"}),(0,jsx_runtime.jsx)(FormControlLabel.Z,{control:(0,jsx_runtime.jsx)(Radio.Z,{}),value:"sticky",label:"sticky"}),(0,jsx_runtime.jsx)(FormControlLabel.Z,{control:(0,jsx_runtime.jsx)(Radio.Z,{}),value:"absolute",label:"absolute"})]}),(0,jsx_runtime.jsx)("br",{}),"fixed"===position&&(0,jsx_runtime.jsxs)(Box.Z,{p:2,bgcolor:"primary.main",color:"common.white",children:[(0,jsx_runtime.jsx)("b",{children:"`fixed`"})," is a great fit for displaying topics of the page that has long content because the sidebar will not move if user scroll on the content. Also the area of `fixed` inset sidebar cover to the edge of the screen."]}),"sticky"===position&&(0,jsx_runtime.jsxs)(Box.Z,{p:2,bgcolor:"primary.main",color:"common.white",children:[(0,jsx_runtime.jsx)("b",{children:"`sticky`"})," is similar to ",(0,jsx_runtime.jsx)("b",{children:"`fixed`"})," but for displaying things that will have initial space at the top on intial load and once user scroll on the content, it stick at the top (the area of sidebar stay inside the container). One example is displaying ads."]}),"absolute"===position&&(0,jsx_runtime.jsxs)(Box.Z,{p:2,bgcolor:"primary.main",color:"common.white",children:[(0,jsx_runtime.jsx)("b",{children:"`absolute`"})," is for app that want to display Footer at all times. A good example is Facebook Messenger."]}),(0,jsx_runtime.jsxs)(Box.Z,{maxWidth:700,children:[(0,jsx_runtime.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit pellentesque habitant morbi tristique senectus. Massa eget egestas purus viverra accumsan in. Consectetur adipiscing elit duis tristique. Egestas dui id ornare arcu odio ut sem nulla pharetra. Egestas erat imperdiet sed euismod nisi porta lorem. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Interdum posuere lorem ipsum dolor sit amet. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Habitant morbi tristique senectus et netus et malesuada fames. Ac felis donec et odio. Amet porttitor eget dolor morbi."}),(0,jsx_runtime.jsx)("p",{children:"Donec pretium vulputate sapien nec sagittis aliquam. Viverra justo nec ultrices dui sapien eget mi proin. Sed elementum tempus egestas sed sed risus pretium. Diam sollicitudin tempor id eu. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Faucibus a pellentesque sit amet porttitor. Eget aliquet nibh praesent tristique. Mattis nunc sed blandit libero volutpat sed cras ornare. Rhoncus aenean vel elit scelerisque mauris. Blandit libero volutpat sed cras ornare arcu."}),(0,jsx_runtime.jsx)("p",{children:"Sodales ut etiam sit amet. Sagittis vitae et leo duis. Lectus sit amet est placerat in. Nunc mattis enim ut tellus elementum sagittis vitae. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Eget arcu dictum varius duis at consectetur lorem donec. Orci a scelerisque purus semper eget duis at tellus at. Pharetra diam sit amet nisl suscipit adipiscing. Amet volutpat consequat mauris nunc congue nisi. Pretium fusce id velit ut tortor. Vitae turpis massa sed elementum tempus egestas. Risus nullam eget felis eget. Sed id semper risus in hendrerit. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere."})]})]})})}),(0,jsx_runtime.jsx)(layout_core_v5.$_,{children:(0,jsx_runtime.jsx)(Container.Z,{disableGutters:!0,sx:{backgroundColor:"grey.100"},children:(0,jsx_runtime.jsx)(layout_core_v5.FK,{children:(0,jsx_runtime.jsxs)(Box.Z,{p:2,pb:5,children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)("b",{children:"Footer"})}),"absolute"!==position&&(0,jsx_runtime.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"})]})})})})]})})})};LayoutExampleInsetSidebarPosition.displayName="LayoutExampleInsetSidebarPosition";var usage=__webpack_require__("./blocks/layout-example-insetSidebarPosition/usage.mdx");const LayoutExampleInsetSidebarPosition_stories={title:"Layout v5/Example/InsetSidebarPosition",component:LayoutExampleInsetSidebarPosition,parameters:{layout:"fullscreen",githubUsername:"siriwatknp"},decorators:[(0,storyDialog.Z)(usage.default),(0,googleFont.Z)([])]},InsetSidebarPosition={render:()=>(0,jsx_runtime.jsx)(LayoutExampleInsetSidebarPosition,{})};InsetSidebarPosition.parameters={...InsetSidebarPosition.parameters,docs:{...InsetSidebarPosition.parameters?.docs,source:{originalSource:"{\n  render: () => <LayoutExampleInsetSidebarPosition />\n}",...InsetSidebarPosition.parameters?.docs?.source}}};const __namedExportsOrder=["InsetSidebarPosition"]}}]);