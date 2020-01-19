---
category: Beginner Tutorial
title: Dashboard Layout
---

This tutorial will take you through basic installation and configuration of mui-layout.

Let’s use create-react-app to kickstart the project

```bash
npx create-react-app my-layout
```

<br>

when the process is done, install packages

```bash
cd my-layout
yarn add @material-ui/core @mui-treasury/layout @mui-treasury/mockup

// note: this tutorial is based on @mui-treasury/layout v3.3.2
```

<br>

Now, when you run `yarn start`, you will see react logo in the browser.

![image](https://user-images.githubusercontent.com/18292247/72663709-0f6b1400-3a28-11ea-828e-85355b16524a.png)

Next, open file `/src/App.js` and replace with the code below

```jsx
import React from 'react';
import { Root } from '@mui-treasury/layout';

function App() {
  return <Root>hello</Root>;
}

export default App;
```

<br />

Your page will turn to just `Hello` text.

> mui-layout use react-context at its core.
> `Root` is the Provider that render nothing except its children.

By default, Root has ThemeProvider inside to provide default theme from material-ui
but you can also add custom theme to Root by doing this

```jsx
import React from 'react';
import { Root } from '@mui-treasury/layout';
// highlight-start
import { createMuiTheme } from '@material-ui/core/styles';

const customTheme = createMuiTheme({
  palette: { primary: { main: '#ff5252' } },
});
// highlight-end

function App() {
  // highlight-next-line
  return <Root theme={customTheme}>hello</Root>;
}

export default App;
```

<br />

## Sidebar

Let’s add sidebar to the page. we can configure behavior by passing config object to `Root`

in this case, we want Sidebar to appear `permanent` on the `left` and has `width: 256(px)`

```jsx
import React from 'react';
// highlight-start
import { Root, Sidebar } from '@mui-treasury/layout';
import { NavHeaderMockUp, NavContentMockUp } from '@mui-treasury/mockup/layout';
// highlight-end
import { createMuiTheme } from '@material-ui/core/styles';

const customTheme = createMuiTheme({
  palette: { primary: { main: '#ff5252' } },
});

// highlight-start
const config = {
  sidebar: {
    anchor: 'left',
    width: 256,
    variant: 'permanent',
  },
};
// highlight-end

function App() {
  return (
    // highlight-start
    <Root theme={customTheme} config={config}>
      <Sidebar>
        <NavHeaderMockUp />
        <NavContentMockUp />
      </Sidebar>
    </Root>
    // highlight-end
  );
}

export default App;
```

<br />

Save and then you should see this in your browser.

![image](https://user-images.githubusercontent.com/18292247/72664467-d5524000-3a30-11ea-8b01-8d59ce319771.png)

I feel like this sidebar should be collapsible because
I care so much about my users and I want them to be able to
see more space in tablet viewport. Here is how to do it.

```jsx
// highlight-next-line
import { Root, Sidebar, CollapseBtn } from '@mui-treasury/layout';

const config = {
  sidebar: {
    anchor: 'left',
    width: 256,
    variant: 'permanent',
    // highlight-start
    collapsible: true,
    collapsedWidth: 64,
    // highlight-end
  },
};

function App() {
  return (
    <Root theme={customTheme} config={config}>
      {/* // highlight-start */}
      {({ sidebarStyles, collapsed }) => (
        <Sidebar>
          <div className={sidebarStyles.container}>
            <NavHeaderMockUp />
            <NavContentMockUp />
          </div>
          <CollapseBtn className={sidebarStyles.collapseBtn}>
            {collapsed ? 'Open' : 'Collapse'}
          </CollapseBtn>
        </Sidebar>
      )}
      {/* // highlight-end */}
    </Root>
  );
}
```

<br />

I know, it changes a lot so let me explain one by one. Inside `Root`,
there is a state called `collapsed` (a boolean). `<Root>` can accept function as a child with an
object that contains `sidebarStyles: string`, `collapsed: boolean`, `setCollapsed: Function` and a lot more.
Another thing, `CollapseBtn` is used to toggle the state. All you have to do is render it (anywhere) below `Root`.

`@mui-treasury/layout` also provide collapse icon to make it easier to use but you need to install icons first.

```bash
yarn add @material-ui/icons
```

<br />

then you can use it like this.

```jsx
// highlight-next-line
import { Root, Sidebar, CollapseBtn, CollapseIcon } from "@mui-treasury/layout";

...
<CollapseBtn className={sidebarStyles.collapseBtn}>
  {/* // highlight-next-line */}
  <CollapseIcon />
</CollapseBtn>
...
```

<br />

## Header

I want to have `fixed` Header in my layout. Let's add header to the config.

```jsx
import {
  Root,
  // highlight-next-line
  Header,
  Sidebar,
  CollapseBtn,
  CollapseIcon
} from "@mui-treasury/layout";
// highlight-next-line
import { Toolbar } from "@material-ui/core";

const config = {
  sidebar: { ... },
  // highlight-start
  header: {
    position: "fixed"
  }
  // highlight-end
};

function App() {
  return (
    <Root theme={customTheme} config={config}>
      {({ sidebarStyles }) => (
        <>
          {/* // highlight-start */}
          <Header>
            <Toolbar>Header</Toolbar>
          </Header>
          {/* // highlight-end */}
          <Sidebar>
            <div className={sidebarStyles.container}>
              <NavHeaderMockUp />
              <NavContentMockUp />
            </div>
            <CollapseBtn className={sidebarStyles.collapseBtn}>
              <CollapseIcon />
            </CollapseBtn>
          </Sidebar>
        </>
      )}
    </Root>
  );
}
```

<br />

Save and then see the result in your browser.

![gif](https://media.giphy.com/media/hqmjTICgw6Xy5kfatG/giphy.gif)

Well, it looks good but I prefer to have my Header stay on top of Sidebar. just add `clipped` to the config and save.

```jsx
const config = {
  sidebar: { ... },
  header: {
    position: "fixed",
    // highlight-next-line
    clipped: true
  }
};
```

<br />

Now the problem arise because the content in `Sidebar` is overlapped by `Header`.

![image](https://user-images.githubusercontent.com/18292247/72665901-852eaa00-3a3f-11ea-8802-7c74a16a7e07.png)

Here is an easy fix that mui-layout provide by adding `offsetHeight: unit` to config.

```jsx
const config = {
  sidebar: { ... },
  header: {
    position: "fixed",
    // highlight-next-line
    offsetHeight: 64, // 64 is the height of header
    clipped: true
  }
};
```

<br />

## Content & Footer

Let's add `Content` and `Footer` to the page and see how they appear.

```jsx
import {
  Root,
  Header,
  Sidebar,
  CollapseBtn,
  CollapseIcon,
  // highlight-start
  Content,
  Footer,
  // highlight-end
} from '@mui-treasury/layout';
import {
  NavHeaderMockUp,
  NavContentMockUp,
  // highlight-start
  ContentMockUp,
  FooterMockUp,
  // highlight-end
} from '@mui-treasury/mockup/layout';

function App() {
  return (
    <Root theme={customTheme} config={config}>
      {({ sidebarStyles }) => (
        <>
          <Header>
            <Toolbar>Header</Toolbar>
          </Header>
          <Sidebar>
            <div className={sidebarStyles.container}>
              <NavHeaderMockUp />
              <NavContentMockUp />
            </div>
            <CollapseBtn className={sidebarStyles.collapseBtn}>
              <CollapseIcon />
            </CollapseBtn>
          </Sidebar>
          {/* // highlight-start */}
          <Content>
            <ContentMockUp />
          </Content>
          <Footer>
            <FooterMockUp />
          </Footer>
          {/* // highlight-end */}
        </>
      )}
    </Root>
  );
}
```

<br />

There is only one property that can be configurable in Content and Footer which is `persistentBehavior` but
The Sidebar variant must be `persistent`. Let's change sidebar to persistent and see how it looks like.
When you set sidebar to `persistent`, you need a trigger(`SidebarTrigger`) to control sidebar state.

```jsx
import {
  Root,
  Header,
  Sidebar,
  CollapseBtn,
  CollapseIcon,
  // highlight-start
  SidebarTrigger,
  SidebarTriggerIcon,
  // highlight-end
  Content,
  Footer
} from "@mui-treasury/layout";

const config = {
  sidebar: {
    anchor: "left",
    width: 256,
    // highlight-next-line
    variant: "persistent",
    collapsible: true,
    collapsedWidth: 64
  },
  header: {...}
};

...
  <Header>
    <Toolbar>
      {/* // highlight-start */}
      <SidebarTrigger className={headerStyles.leftTrigger}>
        {/* headerStyles is from Root function as a child */}
        <SidebarTriggerIcon />
      </SidebarTrigger>
      {/* // highlight-end */}
      Header
    </Toolbar>
  </Header>
...
```

<br />

Now you will see menu bar in header and when you click on it, sidebar will open without affecting Content and Footer.
However, if you want Content and Footer to move with Sidebar, you can insert `persistentBehavior: 'fit' | 'flexible' | 'none'`
to config like this.

```jsx
const config = {
  sidebar: { ... },
  secondarySidebar: {},
  header: { ... },
  // highlight-start
  content: {
    persistentBehavior: "fit"
  },
  footer: {
    persistentBehavior: "flexible"
  }
  // highlight-end
};
```

<br />

> Explanation: `fit` will have width within viewport and pushed by sidebar, `flexible` will fix the element width and pushed by sidebar
> `none` means no affect

I want to show something cool that mui-layout gives you. Let change Header `position` to `relative` and scroll the page.

Okay, I'll wait you...

I assume you changed it. Pretty cool, right? The Sidebar stick to the `relative` Header when you scroll down the page.
This feature is called Header Magnet. If you don't like it you can disable by adding this line in config.

```jsx
const config = {
  // highlight-next-line
  heightAdjustmentDisabled: true,
  sidebar: {...},
  header: {...},
  content: {...},
  footer: {...}
};
```

<br />

One last thing in this tutorial is that `Header` can also have `persistentBehavior` but its position need to be
`static`, `relative` or `absolute` and unclipped.

```jsx
const config = {
  sidebar: { ... },
  secondarySidebar: {},
  header: {
    position: "relative",
    offsetHeight: 64,
    // highlight-start
    clipped: false,
    persistentBehavior: "fit"
    // highlight-end
  },
  content: { ... },
  footer: { ... }
};
```
<br />

### Congratulations! you have completed this tutorial.

Thanks for stopping by, feel free to comment or open issue in github.
