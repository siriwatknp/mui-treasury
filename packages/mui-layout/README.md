<img src="https://user-images.githubusercontent.com/18292247/60601737-cb425a00-9ddc-11e9-8cb7-642fa581aa3d.png" alt="logo" width="150" height="136" />

# Material-UI Layout `v2` [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/siriwatknp/mui-layout/pulls)

A set of components that allows you to build dynamic and responsive layout based on Material-UI

## Prerequisites

This project based on [React Material-UI](https://material-ui.com/), so you have to install `@material-ui/core @material-ui/styles`.

## Installation

```bash
// yarn
yarn add @material-ui/core @material-ui/icons @mui-treasury/layout

// npm
npm install @material-ui/core @material-ui/icons @mui-treasury/layout
```

## Demo

see demo here [Codesandbox Demo](https://codesandbox.io/s/material-ui-layout-7mn9xq3nnj)

## Usage

```jsx
import React from 'react';
import {
  Root,
  Header,
  Sidebar,
  SidebarTrigger,
  SidebarTriggerIcon,
  CollapseBtn,
  CollapseIcon,
  Footer,
  Content,
  standardLayoutPreset,
} from '@mui-treasury/layout';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';

const App = () => {
  return (
    <Root config={standardLayoutPreset}>
      {({ sidebarStyles, headerStyles }) => (
        <>
          <Header>
            <Toolbar>
              <SidebarTrigger className={headerStyles.leftTrigger}>
                <SidebarTriggerIcon />
              </SidebarTrigger>
              test
            </Toolbar>
          </Header>
          <Sidebar>
            <div className={sidebarStyles.container}>Sidebar</div>
            <CollapseBtn className={sidebarStyles.collapseBtn}>
              <CollapseIcon />
            </CollapseBtn>
          </Sidebar>
          <Content>
            <Box minHeight={1000}>
              <p>Content</p>
            </Box>
          </Content>
          <Footer>Footer</Footer>
        </>
      )}
    </Root>
  );
};

export default App;
```

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

- use `@material-ui/styles` to style components

- use react-hooks

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
