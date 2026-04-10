# How to Build Nested Popup Menus (3 Levels)

When a collapsed sidebar menu item has sub-items that also have their own children, use nested `PopupMenuList` inside `PopupMenuContent` for a multi-level flyout. This creates 3 levels: sidebar icon → first popup (e.g. "Reports", "Dashboard") → second flyout (e.g. "Overview", "Details").

```tsx
import {
  PopupMenuContent,
  PopupMenuItem,
  PopupMenuLink,
  PopupMenuList,
} from "@/mui-treasury/components/sidebar/popup-menu";

<SidebarMenuList>
  <PopupMenuList>
    {/* Level 1: Popup trigger — visible only when collapsed */}
    <PopupMenuItem
      tooltip="Analytics"
      render={
        <SidebarMenuButton hideWhen="uncollapsed">
          <SidebarIcon shrinkSize="20px">
            <BarChartIcon />
          </SidebarIcon>
        </SidebarMenuButton>
      }
    >
      <PopupMenuContent>
        <SidebarMenuList>
          {/* Level 2: Sub-item with its own flyout */}
          <PopupMenuList>
            <PopupMenuItem
              render={
                <SidebarMenuButton>
                  <SidebarText>Reports</SidebarText>
                  <SidebarIcon>
                    <ChevronRightIcon />
                  </SidebarIcon>
                </SidebarMenuButton>
              }
            >
              {/* Level 3: Leaf items */}
              <PopupMenuContent>
                <SidebarMenuList>
                  <SidebarMenuItem>
                    <PopupMenuLink>Overview</PopupMenuLink>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <PopupMenuLink>Details</PopupMenuLink>
                  </SidebarMenuItem>
                </SidebarMenuList>
              </PopupMenuContent>
            </PopupMenuItem>
          </PopupMenuList>

          <SidebarMenuItem>
            <PopupMenuLink>Dashboard</PopupMenuLink>
          </SidebarMenuItem>
        </SidebarMenuList>
      </PopupMenuContent>
    </PopupMenuItem>

    {/* Collapsible — visible only when uncollapsed */}
    <SidebarMenuItem>
      <CollapsibleTrigger
        defaultChecked
        render={
          <SidebarMenuButton hideWhen="collapsed">
            <SidebarIcon shrinkSize="20px">
              <BarChartIcon />
            </SidebarIcon>
            <SidebarText>Analytics</SidebarText>
            <CollapsibleIcon>
              <KeyboardArrowDownIcon />
            </CollapsibleIcon>
          </SidebarMenuButton>
        }
      />
      <CollapsibleContent>
        <div>
          <SidebarMenuList nested>
            {/* "Reports" has its own nested collapsible */}
            <SidebarMenuItem>
              <CollapsibleTrigger
                defaultChecked
                render={
                  <SidebarMenuButton>
                    <SidebarText>Reports</SidebarText>
                    <CollapsibleIcon>
                      <KeyboardArrowDownIcon />
                    </CollapsibleIcon>
                  </SidebarMenuButton>
                }
              />
              <CollapsibleContent>
                <div>
                  <SidebarMenuList nested>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <SidebarText>Overview</SidebarText>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <SidebarText>Details</SidebarText>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenuList>
                </div>
              </CollapsibleContent>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <SidebarText>Dashboard</SidebarText>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenuList>
        </div>
      </CollapsibleContent>
    </SidebarMenuItem>
  </PopupMenuList>
</SidebarMenuList>;
```

**Key points:**

- `PopupMenuItem` and `SidebarMenuItem` (collapsible) are siblings inside `PopupMenuList`
- `hideWhen="uncollapsed"` / `hideWhen="collapsed"` toggles which one is visible
- Nest `PopupMenuList` > `PopupMenuItem` inside `PopupMenuContent` for level 3 flyout
- Use a right chevron icon to indicate a sub-menu
