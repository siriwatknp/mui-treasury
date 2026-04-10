# How to Build a Dashboard Layout

A dashboard with a collapsible left sidebar (drawer on mobile, permanent on desktop).

```tsx
import ChevronLeftRounded from "@mui/icons-material/ChevronLeftRounded";
import MenuRounded from "@mui/icons-material/MenuRounded";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import {
  SidebarContainer,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarIcon,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuList,
  SidebarRail,
  SidebarText,
  SidebarTooltip,
} from "@/mui-treasury/components/sidebar";
import {
  Content,
  EdgeCollapsedVisible,
  EdgeDrawerClose,
  EdgeDrawerTrigger,
  EdgeSidebar,
  EdgeSidebarCollapser,
  EdgeSidebarContent,
  EdgeUncollapsedVisible,
  Header,
  Root,
} from "@/mui-treasury/layout/layout-core";

<Root>
  <Header height={{ xs: "48px", md: "64px" }}>
    <Box sx={{ px: 2, display: "flex", alignItems: "center", gap: 1 }}>
      <EdgeDrawerTrigger
        render={
          <IconButton>
            <MenuRounded />
          </IconButton>
        }
      />
      <EdgeSidebarCollapser
        render={
          <IconButton>
            <EdgeUncollapsedVisible render={<ChevronLeftRounded />} />
            <EdgeCollapsedVisible render={<MenuRounded />} />
          </IconButton>
        }
      />
      <Typography variant="h6">
        <b>Dashboard</b>
      </Typography>
    </Box>
  </Header>

  <EdgeSidebar
    id="main-sidebar"
    permanentAutoCollapse="lg"
    variant={{
      xs: ["drawer"],
      lg: [
        "permanent",
        {
          width: "280px",
          collapsedWidth: "64px",
          hoverUncollapse: true,
        },
      ],
    }}
  >
    <EdgeDrawerClose />
    <EdgeSidebarContent>
      <SidebarContainer>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarMenuList>
            <SidebarMenuItem>
              <SidebarTooltip title="Dashboard">
                <SidebarMenuButton active>
                  <SidebarIcon>
                    <DashboardIcon />
                  </SidebarIcon>
                  <SidebarText>Dashboard</SidebarText>
                </SidebarMenuButton>
              </SidebarTooltip>
            </SidebarMenuItem>
          </SidebarMenuList>
        </SidebarGroup>
        <SidebarRail />
      </SidebarContainer>
    </EdgeSidebarContent>
  </EdgeSidebar>

  <Content>
    <Box sx={{ p: 2 }}>…dashboard content…</Box>
  </Content>
</Root>;
```

**Key points:**

- `EdgeDrawerTrigger` auto-hides when sidebar is permanent mode
- `EdgeSidebarCollapser` auto-hides when sidebar is drawer mode
- `permanentAutoCollapse="lg"` collapses the sidebar below `lg` breakpoint (when permanent)
- `hoverUncollapse: true` expands sidebar on hover when collapsed
- `SidebarRail` allows drag-to-collapse interaction
