# Tutorials

Step-by-step lessons to get started with layout-core components. Follow these to build your first layout.

**Prerequisite:** Install components first — see [SKILL.md](../SKILL.md#installation).

## What You'll Build

This tutorial walks through building a **dashboard layout** — a common pattern for admin panels, analytics tools, and productivity apps. The same foundation applies to any layout that needs side navigation: CMS, settings panels, file managers, etc.

Steps:

- [ ] Set up the basic layout shell (Root, Header, Content, Footer)
- [ ] Add an EdgeSidebar for primary navigation
- [ ] Make the sidebar collapsible
- [ ] Make it responsive (drawer on mobile, permanent on desktop)
- [ ] Add sidebar navigation with primitives
- [ ] Organize menus into labeled sections
- [ ] Add collapsible menus for nested items
- [ ] Show popup menus when sidebar is collapsed

## Your First Layout

Every layout starts with 4 components: `Root`, `Header`, `Content`, `Footer`.

```tsx
import Content from "@/mui-treasury/layout/layout-core/Content";
import Footer from "@/mui-treasury/layout/layout-core/Footer";
import Header from "@/mui-treasury/layout/layout-core/Header";
import Root from "@/mui-treasury/layout/layout-core/Root";

export function MyLayout() {
  return (
    <Root>
      <Header>
        <Box sx={{ px: 2, display: "flex", alignItems: "center" }}>
          <Typography variant="h6">My App</Typography>
        </Box>
      </Header>
      <Content>
        <Box sx={{ p: 2 }}>Hello world</Box>
      </Content>
      <Footer>
        <Box sx={{ p: 2 }}>© 2025</Box>
      </Footer>
    </Root>
  );
}
```

What you get:

- `Root` fills the viewport (`min-height: 100svh`) using CSS Grid with `auto 1fr auto` rows
- `Header` is sticky at top with a bottom border
- `Content` fills remaining space, rendered as `<main>`
- `Footer` has a top border

## Adding a Sidebar

The layout system provides two types of sidebars for different purposes:

- **EdgeSidebar** — occupies its own grid column alongside Content. It pushes Content to make room and can be a permanent panel or a temporary drawer. Use for **primary navigation** (dashboards, admin panels, app shells). Defaults to left side; use `EdgeSidebarRight` for right placement.
- **InsetSidebar** — lives _inside_ the Content area. It doesn't affect the overall grid. Use for **secondary content** (table of contents, filters, detail panels). See the [Blog layout how-to](how-to-guides/blog-layout.md) for an example.

This tutorial focuses on **EdgeSidebar** for building a dashboard navigation.

### Adding an EdgeSidebar

Add `EdgeSidebar` between `Header` and `Content`. Always wrap sidebar content with `EdgeSidebarContent`.

```tsx
import {
  Content,
  EdgeSidebar,
  EdgeSidebarContent,
  Header,
  Root,
} from "@/mui-treasury/layout/layout-core";

<Root>
  <Header>…</Header>

  <EdgeSidebar id="main-sidebar" variant={["permanent", { width: "256px" }]}>
    <EdgeSidebarContent>
      <Box sx={{ p: 2 }}>Sidebar content</Box>
    </EdgeSidebarContent>
  </EdgeSidebar>

  <Content>
    <Box sx={{ p: 2 }}>Main content</Box>
  </Content>
</Root>;
```

**Always set `id` on EdgeSidebar** — trigger functions need it to target the right sidebar.

**Always put user content inside `EdgeSidebarContent`** — it provides scrolling and prevents overflow. Only layout-level elements like `SidebarRail` or `EdgeDrawerClose` should be direct children of `EdgeSidebar`.

## Making It Collapsible

Add `collapsedWidth` to the permanent config to enable collapse, then add `EdgeSidebarCollapser` inside the sidebar. Values below use [recommended defaults](../SKILL.md#recommended-defaults).

```tsx
<EdgeSidebar
  id="main-sidebar"
  permanentAutoCollapse="lg"
  variant={["permanent", { width: "256px", collapsedWidth: "52px" }]}
>
  <EdgeSidebarContent>
    <Box sx={{ p: 2 }}>…nav items…</Box>

    <EdgeSidebarCollapser
      render={
        <IconButton>
          <EdgeUncollapsedVisible render={<ArrowLeftIcon />} />
          <EdgeCollapsedVisible render={<ArrowRightIcon />} />
        </IconButton>
      }
    />
  </EdgeSidebarContent>
</EdgeSidebar>
```

Import `EdgeSidebarCollapser`, `EdgeCollapsedVisible`, `EdgeUncollapsedVisible` from `@/mui-treasury/layout/layout-core`.

## Making It Responsive (Drawer on Mobile)

Use a responsive variant object to switch modes per breakpoint. Add `EdgeDrawerTrigger` in the header and `EdgeDrawerClose` in the sidebar.

**Responsive variants are mobile-first** — always start from the smallest breakpoint (`xs`) and go up. Each breakpoint overrides the previous one.

```tsx
<Root>
  <Header>
    <Box sx={{ px: 2, display: "flex", alignItems: "center", gap: 1 }}>
      {/* Shows only in drawer mode (mobile) */}
      <EdgeDrawerTrigger
        render={
          <IconButton>
            <MenuIcon />
          </IconButton>
        }
      />
      {/* Shows only in permanent mode (desktop) */}
      <EdgeSidebarCollapser
        render={
          <IconButton>
            <EdgeUncollapsedVisible render={<ArrowLeftIcon />} />
            <EdgeCollapsedVisible render={<ArrowRightIcon />} />
          </IconButton>
        }
      />
      <Typography variant="h6">My App</Typography>
    </Box>
  </Header>

  <EdgeSidebar
    id="main-sidebar"
    permanentAutoCollapse="lg"
    // mobile-first: start from xs, then override at larger breakpoints
    variant={{
      xs: ["drawer"],
      md: ["permanent", { width: "256px", collapsedWidth: "52px" }],
    }}
  >
    <EdgeDrawerClose />
    <EdgeSidebarContent>…</EdgeSidebarContent>
  </EdgeSidebar>

  <Content>…</Content>
</Root>
```

`EdgeDrawerTrigger` auto-hides when sidebar is in permanent mode. `EdgeSidebarCollapser` auto-hides when sidebar is in drawer mode. No manual display logic needed.

## Adding Sidebar Navigation with Primitives

Use [sidebar primitives](reference-guides.md#sidebar-primitives) inside `EdgeSidebarContent` for navigation that auto-adapts to collapsed state.

Start with a simple menu list — `SidebarContainer` > `SidebarMenuList` > `SidebarMenuItem` > `SidebarMenuButton`:

```tsx
import {
  SidebarContainer,
  SidebarIcon,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuList,
  SidebarText,
  SidebarTooltip,
} from "@/mui-treasury/components/sidebar";

<EdgeSidebarContent>
  <SidebarContainer>
    <SidebarMenuList>
      <SidebarMenuItem>
        <SidebarTooltip title="Dashboard">
          <SidebarMenuButton active>
            <SidebarIcon shrinkSize="20px">
              <DashboardIcon />
            </SidebarIcon>
            <SidebarText>Dashboard</SidebarText>
          </SidebarMenuButton>
        </SidebarTooltip>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarTooltip title="Settings">
          <SidebarMenuButton>
            <SidebarIcon shrinkSize="20px">
              <SettingsIcon />
            </SidebarIcon>
            <SidebarText>Settings</SidebarText>
          </SidebarMenuButton>
        </SidebarTooltip>
      </SidebarMenuItem>
    </SidebarMenuList>
  </SidebarContainer>
</EdgeSidebarContent>;
```

When the sidebar collapses:

- `SidebarText` fades out automatically
- `SidebarTooltip` appears on hover (only when collapsed)
- `SidebarIcon` can use `shrinkSize` to resize in collapsed state

## Organizing Menus into Sections

Wrap items with `SidebarGroup` and `SidebarGroupLabel` to create labeled sections:

```tsx
<SidebarContainer>
  <SidebarGroup>
    <SidebarGroupLabel>Main</SidebarGroupLabel>
    <SidebarMenuList>
      <SidebarMenuItem>…</SidebarMenuItem>
    </SidebarMenuList>
  </SidebarGroup>
  <SidebarGroup>
    <SidebarGroupLabel>Settings</SidebarGroupLabel>
    <SidebarMenuList>
      <SidebarMenuItem>…</SidebarMenuItem>
    </SidebarMenuList>
  </SidebarGroup>
  <SidebarRail />
</SidebarContainer>
```

`SidebarGroupLabel` auto-hides when collapsed. `SidebarRail` provides drag-to-collapse interaction.

## Adding Collapsible Menus

When you have many menu items, use collapsible sections to keep the sidebar manageable. Install the collapsible primitives:

```bash
npx mui-treasury@latest add collapsible
```

Wrap a `SidebarMenuButton` with `CollapsibleTrigger` and add `CollapsibleContent` for the nested items:

```tsx
import {
  CollapsibleContent,
  CollapsibleIcon,
  CollapsibleTrigger,
} from "@/mui-treasury/components/collapsible";

<SidebarMenuItem>
  <CollapsibleTrigger
    defaultChecked
    render={
      <SidebarMenuButton>
        <SidebarIcon shrinkSize="20px">
          <FolderIcon />
        </SidebarIcon>
        <SidebarText>Projects</SidebarText>
        <CollapsibleIcon>
          <KeyboardArrowDownIcon />
        </CollapsibleIcon>
      </SidebarMenuButton>
    }
  />
  <CollapsibleContent>
    {/* CollapsibleContent requires a single direct <div> child to animate correctly */}
    <div>
      <SidebarMenuList nested>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <SidebarText>Project Alpha</SidebarText>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <SidebarText>Project Beta</SidebarText>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenuList>
    </div>
  </CollapsibleContent>
</SidebarMenuItem>;
```

- `CollapsibleTrigger` wraps the button and injects a hidden checkbox — no React state needed
- `defaultChecked` opens the section by default
- `CollapsibleIcon` rotates 180deg when toggled
- `CollapsibleContent` animates with CSS Grid for smooth expand/collapse
- `SidebarMenuList nested` adds a left border indent for the nested items

## Showing Popup Menus When Collapsed

When the sidebar is collapsed, collapsible sections are hidden — there's no room for nested items. Use popup menus to show them in a floating panel instead.

The `PopupMenu*` components are already included in the `sidebar` package (no extra install). The pattern uses **two sibling elements** for each expandable item — one visible when uncollapsed (the collapsible), one visible when collapsed (the popup). `SidebarMenuButton hideWhen` controls which one shows.

Here's the "Projects" item with both modes:

```tsx
import {
  PopupMenuContent,
  PopupMenuItem,
  PopupMenuLink,
  PopupMenuList,
} from "@/mui-treasury/components/sidebar/popup-menu";

<SidebarMenuList>
  <PopupMenuList>
    {/* Popup — visible only when sidebar is collapsed */}
    <PopupMenuItem
      tooltip="Projects"
      render={
        <SidebarMenuButton hideWhen="uncollapsed">
          <SidebarIcon shrinkSize="20px">
            <FolderIcon />
          </SidebarIcon>
        </SidebarMenuButton>
      }
    >
      <PopupMenuContent>
        <SidebarMenuList>
          <SidebarMenuItem>
            <PopupMenuLink>Project Alpha</PopupMenuLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <PopupMenuLink>Project Beta</PopupMenuLink>
          </SidebarMenuItem>
        </SidebarMenuList>
      </PopupMenuContent>
    </PopupMenuItem>

    {/* Collapsible — visible only when sidebar is uncollapsed */}
    <SidebarMenuItem>
      <CollapsibleTrigger
        defaultChecked
        render={
          <SidebarMenuButton hideWhen="collapsed">
            <SidebarIcon shrinkSize="20px">
              <FolderIcon />
            </SidebarIcon>
            <SidebarText>Projects</SidebarText>
            <CollapsibleIcon>
              <KeyboardArrowDownIcon />
            </CollapsibleIcon>
          </SidebarMenuButton>
        }
      />
      <CollapsibleContent>
        {/* CollapsibleContent requires a single direct <div> child */}
        <div>
          <SidebarMenuList nested>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <SidebarText>Project Alpha</SidebarText>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <SidebarText>Project Beta</SidebarText>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenuList>
        </div>
      </CollapsibleContent>
    </SidebarMenuItem>
  </PopupMenuList>
</SidebarMenuList>;
```

- `PopupMenuList` wraps items that need popup behavior when collapsed
- `hideWhen="uncollapsed"` hides the popup trigger when the sidebar is expanded
- `hideWhen="collapsed"` hides the collapsible trigger when the sidebar is collapsed
- The popup appears as a floating panel to the right of the collapsed sidebar
- `PopupMenuItem tooltip="..."` shows a tooltip when there are no children (for non-expandable items)

## Next Steps

You now have a fully functional dashboard layout with collapsible sidebar navigation. From here:

- See [Nested Popup Menus (3 Levels)](how-to-guides/nested-popup-menus.md) to add multi-level flyout menus when collapsed
- See [SKILL.md How-to Guides](../SKILL.md#how-to-guides) for other layout patterns — chat/messenger, blog, shopping cart with right sidebar
- See [Reference Guides](reference-guides.md) for complete API of all layout and sidebar components
- See [Explanation](explanation.md) for architecture details — how CSS variables drive collapse, EdgeSidebar vs InsetSidebar trade-offs
