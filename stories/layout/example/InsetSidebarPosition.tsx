import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

import {
  Root,
  Header,
  Fullscreen,
  InsetContainer,
  InsetSidebar,
  Content,
  Footer,
  InsetAvoidingView,
} from "@mui-treasury/layout";

const theme = createTheme();

type Position = "fixed" | "absolute" | "sticky";

const InsetSidebarPosition = () => {
  const [position, setPosition] = React.useState<Position>("fixed");
  const Wrapper = position === "absolute" ? Fullscreen : "div";
  return (
    <ThemeProvider theme={theme}>
      <Root
        scheme={{
          header: {
            config: {
              xs: {
                position: "sticky",
                height: 56,
              },
            },
          },
          rightInsetSidebar: {
            config: {
              xs: {
                position,
                top: position === "sticky" ? 64 : 0,
                width: 256,
              },
            },
          },
        }}
      >
        <Wrapper>
          <CssBaseline />
          <Header>
            <div>Header</div>
          </Header>
          <Content>
            <InsetContainer
              disableGutters
              rightSidebar={
                <InsetSidebar
                  sx={{
                    ...(position === "sticky" && {
                      marginTop: "80px",
                    }),
                  }}
                >
                  {position === "fixed" && (
                    <Box p={2}>
                      Fixed content but scrollable if long list, Try scolling
                      the content.
                    </Box>
                  )}
                  {position === "sticky" && (
                    <Box p={2}>
                      Controlled by `top` and provide margin to
                      InsetSidebar-body
                    </Box>
                  )}
                  {position === "absolute" && <Box p={2}>Some Settings</Box>}
                </InsetSidebar>
              }
            >
              <Box p={2} width="100%">
                <FormLabel>Inset Sidebar Position</FormLabel>
                <RadioGroup
                  value={position}
                  onChange={(event) =>
                    setPosition(event.target.value as Position)
                  }
                >
                  <FormControlLabel
                    control={<Radio />}
                    value="fixed"
                    label="fixed"
                  />
                  <FormControlLabel
                    control={<Radio />}
                    value="sticky"
                    label="sticky"
                  />
                  <FormControlLabel
                    control={<Radio />}
                    value="absolute"
                    label="absolute"
                  />
                </RadioGroup>
                <br />
                {position === "fixed" && (
                  <Box p={2} bgcolor="primary.main" color="common.white">
                    <b>`fixed`</b> is a great fit for displaying topics of the
                    page that has long content because the sidebar will not move
                    if user scroll on the content. Also the area of `fixed`
                    inset sidebar cover to the edge of the screen.
                  </Box>
                )}
                {position === "sticky" && (
                  <Box p={2} bgcolor="primary.main" color="common.white">
                    <b>`sticky`</b> is similar to <b>`fixed`</b> but for
                    displaying things that will have initial space at the top on
                    intial load and once user scroll on the content, it stick at
                    the top (the area of sidebar stay inside the container). One
                    example is displaying ads.
                  </Box>
                )}
                {position === "absolute" && (
                  <Box p={2} bgcolor="primary.main" color="common.white">
                    <b>`absolute`</b> is for app that want to display Footer at
                    all times. A good example is Facebook Messenger.
                  </Box>
                )}

                <Box maxWidth={700}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Adipiscing elit pellentesque habitant morbi
                    tristique senectus. Massa eget egestas purus viverra
                    accumsan in. Consectetur adipiscing elit duis tristique.
                    Egestas dui id ornare arcu odio ut sem nulla pharetra.
                    Egestas erat imperdiet sed euismod nisi porta lorem.
                    Phasellus faucibus scelerisque eleifend donec pretium
                    vulputate sapien nec sagittis. Interdum posuere lorem ipsum
                    dolor sit amet. Ullamcorper dignissim cras tincidunt
                    lobortis feugiat vivamus at augue eget. Habitant morbi
                    tristique senectus et netus et malesuada fames. Ac felis
                    donec et odio. Amet porttitor eget dolor morbi.
                  </p>
                  <p>
                    Donec pretium vulputate sapien nec sagittis aliquam. Viverra
                    justo nec ultrices dui sapien eget mi proin. Sed elementum
                    tempus egestas sed sed risus pretium. Diam sollicitudin
                    tempor id eu. Ipsum nunc aliquet bibendum enim facilisis
                    gravida neque convallis a. Faucibus a pellentesque sit amet
                    porttitor. Eget aliquet nibh praesent tristique. Mattis nunc
                    sed blandit libero volutpat sed cras ornare. Rhoncus aenean
                    vel elit scelerisque mauris. Blandit libero volutpat sed
                    cras ornare arcu.
                  </p>
                  <p>
                    Sodales ut etiam sit amet. Sagittis vitae et leo duis.
                    Lectus sit amet est placerat in. Nunc mattis enim ut tellus
                    elementum sagittis vitae. Ut sem nulla pharetra diam sit
                    amet nisl suscipit adipiscing. Adipiscing diam donec
                    adipiscing tristique risus nec feugiat in fermentum. Eget
                    arcu dictum varius duis at consectetur lorem donec. Orci a
                    scelerisque purus semper eget duis at tellus at. Pharetra
                    diam sit amet nisl suscipit adipiscing. Amet volutpat
                    consequat mauris nunc congue nisi. Pretium fusce id velit ut
                    tortor. Vitae turpis massa sed elementum tempus egestas.
                    Risus nullam eget felis eget. Sed id semper risus in
                    hendrerit. Malesuada fames ac turpis egestas maecenas
                    pharetra convallis posuere.
                  </p>
                </Box>
              </Box>
            </InsetContainer>
          </Content>
          <Footer>
            <Container disableGutters sx={{ backgroundColor: "grey.100" }}>
              <InsetAvoidingView>
                <Box p={2} pb={5}>
                  <p>
                    <b>Footer</b>
                  </p>
                  {position !== "absolute" && (
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  )}
                </Box>
              </InsetAvoidingView>
            </Container>
          </Footer>
        </Wrapper>
      </Root>
    </ThemeProvider>
  );
};

export default InsetSidebarPosition;
