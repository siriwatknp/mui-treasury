---
to: stories/layout/<%=category%>/<%=name%>.tsx
unless_exists: true
---
import React from "react";
import {
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import {
  Root,
  Header,
  EdgeSidebar,
  SidebarContent,
  Content,
  Footer,
} from "@mui-treasury/layout";

const theme = createTheme();

const <%= name %> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Root
        scheme={{
          header: {
            // header configuration goes here!
          },
          leftEdgeSidebar: {
            // left edge-sidebar configuration goes here!
          },
        }}
      >
        <CssBaseline />
        <Header>
          <div>Header</div>
        </Header>
        <EdgeSidebar anchor="left">
          <SidebarContent>
            Sidebar
          </SidebarContent>
        </EdgeSidebar>
        <Content>
          Content
        </Content>
        <Footer>
          Footer
        </Footer>
      </Root>
    </ThemeProvider>
  );
}

export default <%= name %>;
