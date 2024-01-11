import { CacheProvider } from "@emotion/react";
import React from "react";
import createCache from "@emotion/cache";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import rtlPlugin from "stylis-plugin-rtl";
import {
  Content,
  EdgeSidebar,
  Footer,
  Header,
  InsetAvoidingView,
  InsetContainer,
  InsetSidebar,
  Root,
  SidebarContent,
} from "../layout-core";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  // @ts-ignore
  stylisPlugins: [rtlPlugin],
});

export const LayoutExampleRtl = () => {
  return (
    <CacheProvider value={cacheRtl}>
      <div dir="rtl">
        <Root
          initialState={{
            leftEdgeSidebar: {
              open: true,
              collapsed: true,
            },
          }}
          scheme={{
            header: {
              config: {
                xs: {
                  position: "sticky",
                  height: 56,
                  clipped: {
                    leftEdgeSidebar: true,
                  },
                },
                md: {
                  position: "sticky",
                  height: 64,
                  clipped: true,
                },
              },
            },
            leftEdgeSidebar: {
              config: {
                xs: {
                  variant: "temporary",
                  width: 256,
                },
                sm: {
                  variant: "persistent",
                  persistentBehavior: "fit",
                  width: 256,
                  collapsible: true,
                  collapsedWidth: 72,
                  headerMagnetEnabled: true,
                },
                lg: {
                  variant: "permanent",
                  width: 256,
                  collapsible: true,
                  collapsedWidth: 80,
                  autoExpanded: true,
                  headerMagnetEnabled: true,
                },
              },
              autoCollapse: "sm",
            },
            rightInsetSidebar: {
              config: {
                xs: {
                  position: "fixed",
                  headerMagnetEnabled: true,
                  width: 256,
                },
              },
            },
          }}
        >
          <CssBaseline />
          <Header>Header</Header>
          <EdgeSidebar anchor="left">
            <SidebarContent>Sidebar</SidebarContent>
          </EdgeSidebar>
          <EdgeSidebar anchor="left">
            <SidebarContent>Hello</SidebarContent>
          </EdgeSidebar>
          {/* <EdgeSidebar anchor="right">Hello</EdgeSidebar> */}
          <Content>
            <InsetContainer
              maxWidth={"md"}
              rightSidebar={
                <InsetSidebar>
                  {/* <Box mt={10} /> */}
                  Hello test
                </InsetSidebar>
              }
            >
              <Container maxWidth="md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Proin sagittis nisl rhoncus mattis. Enim neque volutpat ac
                tincidunt vitae. Purus viverra accumsan in nisl nisi. Amet
                venenatis urna cursus eget nunc scelerisque viverra. Pulvinar
                mattis nunc sed blandit libero volutpat sed cras. Nam at lectus
                urna duis convallis convallis. Tincidunt lobortis feugiat
                vivamus at augue. Ac felis donec et odio pellentesque diam
                volutpat commodo sed.
                <br />
                <br />
                Et netus et malesuada fames ac. Et ultrices neque ornare aenean
                euismod elementum nisi. Sollicitudin ac orci phasellus egestas
                tellus rutrum tellus pellentesque. Sed risus pretium quam
                vulputate dignissim suspendisse in. Tortor aliquam nulla
                facilisi cras fermentum odio eu feugiat pretium. Urna duis
                convallis convallis tellus. Mattis aliquam faucibus purus in
                massa tempor nec feugiat. Imperdiet dui accumsan sit amet nulla
                facilisi. In ornare quam viverra orci sagittis eu volutpat odio.
                Et sollicitudin ac orci phasellus egestas tellus rutrum. Quam
                vulputate dignissim suspendisse in est ante. Orci sagittis eu
                volutpat odio facilisis mauris sit amet massa. Amet mattis
                vulputate enim nulla aliquet porttitor lacus luctus. Volutpat
                consequat mauris nunc congue nisi vitae suscipit tellus.
                Fermentum iaculis eu non diam. Non quam lacus suspendisse
                faucibus interdum posuere. In ornare quam viverra orci sagittis
                eu volutpat.
                <br />
                <br />
                Quis blandit turpis cursus in hac habitasse. Etiam non quam
                lacus suspendisse faucibus. Sit amet nulla facilisi morbi tempus
                iaculis urna id volutpat. Suspendisse ultrices gravida dictum
                fusce ut. Maecenas volutpat blandit aliquam etiam erat velit
                scelerisque in dictum. Pellentesque elit eget gravida cum. At
                lectus urna duis convallis. Aliquam id diam maecenas ultricies.
                Cursus turpis massa tincidunt dui ut. Sollicitudin nibh sit amet
                commodo nulla facilisi. Aliquet bibendum enim facilisis gravida.
                In dictum non consectetur a erat nam at lectus. Nunc faucibus a
                pellentesque sit amet porttitor eget dolor. Adipiscing diam
                donec adipiscing tristique risus nec feugiat. Ut diam quam nulla
                porttitor massa id. Lectus arcu bibendum at varius vel. In ante
                metus dictum at tempor commodo ullamcorper a. Consectetur libero
                id faucibus nisl tincidunt eget nullam non. Diam vel quam
                elementum pulvinar. Est ullamcorper eget nulla facilisi. Sit
                amet volutpat consequat mauris nunc congue nisi. Tellus
                elementum sagittis vitae et leo duis ut diam quam.
                <br />
                <br />
              </Container>
            </InsetContainer>
          </Content>
          <Footer>
            <Container maxWidth="md">
              <InsetAvoidingView>
                <Box my={5}>
                  Footer: Proin fermentum leo vel orci. Aliquet enim tortor at
                  auctor urna nunc id cursus. Leo vel orci porta non pulvinar
                  neque laoreet suspendisse interdum.
                </Box>
              </InsetAvoidingView>
            </Container>
          </Footer>
        </Root>
      </div>
    </CacheProvider>
  );
};
