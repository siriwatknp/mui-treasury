<img src="https://user-images.githubusercontent.com/18292247/60601737-cb425a00-9ddc-11e9-8cb7-642fa581aa3d.png" alt="logo" width="150" height="136" />

# Material-UI Layout `v4` [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/siriwatknp/mui-layout/pulls)

A set of components that allows you to build dynamic and responsive layout based on Material-UI

## Prerequisites

This project based on [React Material-UI](https://material-ui.com/), so you have to install `@material-ui/core @material-ui/icons`.

## Installation

```bash
// yarn
yarn add @material-ui/core @material-ui/icons @mui-treasury/layout

// npm
npm install @material-ui/core @material-ui/icons @mui-treasury/layout
```
please check that `@mui-treasury/layout` is 4.x.x

## Demo

see demo here [Codesandbox Demo](https://codesandbox.io/s/material-ui-layout-7mn9xq3nnj)

## Examples

<details><summary>Dashboard Layout</summary>
<br />

```jsx
import React from "react";
import styled from "styled-components";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  HeaderMockUp,
  NavHeaderMockUp,
  NavContentMockUp,
  ContentMockUp,
  FooterMockUp,
} from "@mui-treasury/mockup/layout";
import Layout, {
  Root,
  getHeader,
  getDrawerSidebar,
  getSidebarTrigger,
  getSidebarContent,
  getCollapseBtn,
  getContent,
  getFooter,
} from "@mui-treasury/layout";

const Header = getHeader(styled)
const DrawerSidebar = getDrawerSidebar(styled)
const SidebarTrigger = getSidebarTrigger(styled)
const SidebarContent = getSidebarContent(styled)
const CollapseBtn = getCollapseBtn(styled)
const Content = getContent(styled)
const Footer = getFooter(styled)

const scheme = Layout();

scheme.configureHeader((builder) => {
  builder
    .registerConfig("xs", {
      position: "sticky",
    })
    .registerConfig("md", {
      position: "relative", // won't stick to top when scroll down
    });
});

scheme.configureEdgeSidebar((builder) => {
  builder
    .create("unique_id", { anchor: "left" })
    .registerTemporaryConfig("xs", {
      anchor: "left",
      width: "auto", // 'auto' is only valid for temporary variant
    })
    .registerPermanentConfig("md", {
      width: 256, // px, (%, rem, em is compatible)
      collapsible: true,
      collapsedWidth: 64,
    });
});

scheme.enableAutoCollapse('unique_id', 'md')

const Dashboard = () => {
  return (
    <Root scheme={scheme}>
      {({ state: { sidebar } }) => (
        <>
          <CssBaseline />
          <Header>
            <Toolbar>
              <SidebarTrigger sidebarId="unique_id" />
              <HeaderMockUp />
            </Toolbar>
          </Header>
          <DrawerSidebar sidebarId="unique_id">
            <SidebarContent>
              <NavHeaderMockUp collapsed={sidebar.unique_id.collapsed} />
              <NavContentMockUp />
            </SidebarContent>
            <CollapseBtn />
          </DrawerSidebar>
          <Content>
            <ContentMockUp />
          </Content>
          <Footer>
            <FooterMockUp />
          </Footer>
        </>
      )}
    </Root>
  );
};

export default Dashboard;
```

</details>

<details><summary>Blog Layout</summary>
<br />

```jsx
import React from "react";
import styled from "styled-components";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  HeaderMockUp,
  NavHeaderMockUp,
  NavContentMockUp,
  ContentMockUp,
  FooterMockUp,
} from "@mui-treasury/mockup/layout";
import Layout, {
  Root,
  getHeader,
  getDrawerSidebar,
  getSidebarTrigger,
  getSidebarContent,
  getCollapseBtn,
  getContent,
  getInsetContainer,
  getInsetSidebar,
  getInsetFooter,
} from "@mui-treasury/layout";

const Header = getHeader(styled)
const DrawerSidebar = getDrawerSidebar(styled)
const SidebarTrigger = getSidebarTrigger(styled)
const SidebarContent = getSidebarContent(styled)
const CollapseBtn = getCollapseBtn(styled)
const Content = getContent(styled)
const InsetContainer = getInsetContainer(styled)
const InsetSidebar = getInsetSidebar(styled)
const InsetFooter = getInsetFooter(styled)

const scheme = Layout();

scheme.configureHeader((builder) => {
  builder
    .create("appHeader")
    .registerConfig("xs", {
      position: "sticky",
      initialHeight: 56,
    })
    .registerConfig("md", {
      position: "relative", // won't stick to top when scroll down
      initialHeight: 64,
    });
});

scheme.configureEdgeSidebar((builder) => {
  builder
    .create("primarySidebar", { anchor: "left" })
    .registerTemporaryConfig("xs", {
      width: "auto", // 'auto' is only valid for temporary variant
    });
});

scheme.configureInsetSidebar((builder) => {
  builder
    .create("secondarySidebar", { anchor: "right" })
    .registerFixedConfig("md", {
      width: 256,
    });
});

const Blog = () => {
  return (
    <Root scheme={scheme}>
      {({ state: { sidebar } }) => (
        <>
          <CssBaseline />
          <Header>
            <Toolbar>
              <SidebarTrigger sidebarId="primarySidebar" />
              <HeaderMockUp />
            </Toolbar>
          </Header>
          <DrawerSidebar sidebarId="primarySidebar">
            <SidebarContent>
              <NavHeaderMockUp collapsed={sidebar.primarySidebar.collapsed} />
              <NavContentMockUp />
            </SidebarContent>
            <CollapseBtn />
          </DrawerSidebar>
          <Content>
            <InsetContainer
              rightSidebar={
                <InsetSidebar sidebarId="secondarySidebar">
                  <NavContentMockUp />
                </InsetSidebar>
              }
            >
              <ContentMockUp />
            </InsetContainer>
          </Content>
          <InsetFooter>
            <FooterMockUp />
          </InsetFooter>
        </>
      )}
    </Root>
  );
};

export default Blog;
```
</details>

## Built-in Features

- Collapsible Nav

  ![Alt Text](https://media.giphy.com/media/1BgIQWDxSNQHZS0HiN/giphy.gif)

- Header Magnet

  ![alt text](https://media.giphy.com/media/L0ZQCiCrFiVKaHb5St/giphy.gif)

- Auto Collapsed

  ![alt text](https://media.giphy.com/media/XbySngD0dtVnHeDq1a/giphy.gif)

## Custom Styles

Mostly, you will custom `Header` & `Nav`. This is an example for `Header`

## Presets

- Standard

  ![Alt Text](https://media.giphy.com/media/1jXGr4qb8dVizIUudS/giphy.gif)

- Fixed

  ![Alt Text](https://media.giphy.com/media/fnW25ZYsCtCyrX2aho/giphy.gif)

- Content Based

  ![Alt Text](https://media.giphy.com/media/1ZnFrQUZpCibwtTGj9/giphy.gif)

- Cozy

  ![Alt Text](https://media.giphy.com/media/w9d1LsOBFndXpzV62z/giphy.gif)

## How it works

- No magic, just React Context API.

- They are basically material-ui components that are combined to make things easier.
  `AppBar`, `Drawer`

- use react-hooks

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
