# Mui Treasury + Nextjs

## Get started

```bash
1. git clone https://github.com/siriwatknp/mui-treasury.git
2. cd starters/nextjs
3. yarn && yarn dev
4. visit localhost:3000
```

## Create your own nextjs + mui-treasury/layout

1. follow `nextjs` installation from [here](https://nextjs.org/docs)

2. run the project and you will see the nextjs starter website

3. add mui-treasury/layout

```bash
yarn add @mui-treasury/layout @mui-treasury/mockup next-transpile-modules
```

4. create `next.config.js` at root (same level as package.json)

```bash
// next.config.js
const withTM = require('next-transpile-modules');

module.exports = withTM({
  transpileModules: ['@mui-treasury/layout', '@mui-treasury/mockup'],
});
```

5. replace this code in `pages/index.js`

```js
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import {
  Root,
  Header,
  Sidebar,
  Content,
  Footer,
  CollapseBtn,
  CollapseIcon,
  SidebarTrigger,
  SidebarTriggerIcon,
  standardLayoutPreset,
} from '@mui-treasury/layout';
import {
  HeaderMockUp,
  NavContentMockUp,
  ContentMockUp,
  FooterMockUp,
} from '@mui-treasury/mockup/layout';

const StandardLayout = () => (
  <Root config={standardLayoutPreset}>
    {({ headerStyles, sidebarStyles }) => (
      <>
        <CssBaseline />
        <Header>
          <Toolbar>
            <SidebarTrigger className={headerStyles.leftTrigger}>
              <SidebarTriggerIcon />
            </SidebarTrigger>
            <HeaderMockUp />
          </Toolbar>
        </Header>
        <Sidebar>
          <div className={sidebarStyles.container}>
            <NavContentMockUp />
          </div>
          <CollapseBtn className={sidebarStyles.collapseBtn}>
            <CollapseIcon />
          </CollapseBtn>
        </Sidebar>
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

export default StandardLayout;
```

6. run `yarn dev` and you should see it in your localhost

7. remove `@mui-treasury/mockup` from `package.json` & `next.config.js` once you are ready for development

#### For more examples & how to use, visit [mui-treasury/layout](https://mui-treasury/layout)
