<img src="https://user-images.githubusercontent.com/18292247/60601737-cb425a00-9ddc-11e9-8cb7-642fa581aa3d.png" alt="logo" width="150" height="136" />

# Material-UI Layout `v2`  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/siriwatknp/mui-layout/pulls)

A set of components that allows you to build dynamic and responsive layout based on Material-UI

## Prerequisites
This project based on [React Material-UI](https://material-ui.com/), so you have to install `@material-ui/core @material-ui/styles`

## Installation

```bash
// yarn
yarn add mui-layout @material-ui/core @material-ui/styles @material-ui/icons

// npm
npm install mui-layout @material-ui/core @material-ui/styles @material-ui/icons
```

## Demo
see demo here [Storybook Demo](https://siriwatknp.github.io/mui-layout/?path=/story/welcome--introduction)


## Usage

```jsx
// this example use icon from material-ui/icons, you can use your own!
import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import MenuRounded from '@material-ui/icons/MenuRounded';

import {
 Root,
 Header,
 Nav,
 Content,
 Footer,
 presets,
} from 'mui-layout';

const baseTheme = createMuiTheme(); // or use your own theme;
const config = presets.createStandardLayout();

const App = () => (
  <ThemeProvider theme={baseTheme}>
   <Root config={config}>
     <Header
       renderMenuIcon={open => (open ? <ChevronLeft /> : <MenuRounded />)}
     >
       header
     </Header>
     <Nav
       renderIcon={collapsed =>
         collapsed ? <ChevronRight /> : <ChevronLeft />
       }
     >
       nav
     </Nav>
     <Content>
       content
     </Content>
     <Footer>
       footer
     </Footer>
   </Root>
  </ThemeProvider>
)

export default App;
```

## Built-in Features
- Collapsible Nav

  ![Alt Text](https://media.giphy.com/media/1BgIQWDxSNQHZS0HiN/giphy.gif)
- Header Magnet

  ![alt text](https://media.giphy.com/media/L0ZQCiCrFiVKaHb5St/giphy.gif)
- Auto Collapsed

  ![alt text](https://media.giphy.com/media/XbySngD0dtVnHeDq1a/giphy.gif)
- Responsive Config
  ```
  const extendedConfigs2 = {
    ...defaultConfig,
  
    // navVariant is 'temporary' in mobile and tablet, 'permanent' in desktop and greater
    navVariant: {
      xs: 'temporary',
      md: 'permanent',
    },
  ```
  
## Custom Styles
Mostly, you will custom `Header` & `Nav`. This is an example for `Header`

[Explanation is in storybook](https://siriwatknp.github.io/mui-layout/?path=/story/custom-styles--header)

```js
import { makeStyles } from '@material-ui/styles';

const useHeaderStyles = makeStyles(({ palette, spacing }) => ({
  header: {
    backgroundColor: palette.secondary.main,
  },
  menuBtn: {
    padding: spacing(2.5),
    borderRadius: 0,
  },
  icon: {
    color: palette.common.white,
  },
  toolbar: {
    padding: spacing(0, 1),
  },
}));

function App() {
  const {
    icon: iconCss,
    toolbar: toolbarCss,
    header: headerCss,
    menuBtn: menuBtnCss,
  } = useHeaderStyles();
  return (
    <Header
      classes={{ root: headerCss }}
      renderMenuIcon={open =>
        open ? (
          <ChevronLeft className={iconCss} />
        ) : (
          <MenuRounded classes={{ root: iconCss }} />
        )
      }
      menuButtonProps={{ className: menuBtnCss }}
      toolbarProps={{ className: toolbarCss }}
    />
  );
}
```
  
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
- They are basically material-ui components that are combined to make things easier.
`AppBar`, `Toolbar`, `Drawer`

- use `@material-ui/styles` to style components

- use react-hooks

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
