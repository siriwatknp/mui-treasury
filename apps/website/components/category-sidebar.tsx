"use client";

import React, { useEffect, useRef, useState } from "react";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { RegistryItem } from "@/lib/registry";
import { orderItems, orderSubcategories } from "@/lib/registry-order";
import {
  CollapsibleContent,
  CollapsibleIcon,
  CollapsibleTrigger,
} from "@/registry/components/collapsible";
import {
  SidebarContainer,
  SidebarGroup,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuList,
  SidebarText,
} from "@/registry/components/sidebar";

interface CategorySidebarProps {
  allCategoryItems: RegistryItem[];
  categoryName: string;
}

export function CategorySidebar({
  allCategoryItems,
  categoryName,
}: CategorySidebarProps) {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState<string>("");
  const navRef = useRef<HTMLDivElement>(null);

  const currentSubcategory = React.useMemo(() => {
    const parts = pathname.split("/").filter(Boolean);
    if (parts.length >= 2) {
      const potentialSubcat = parts[1];
      const hasSubcategory = allCategoryItems.some(
        (item) => item.meta.subcategory === potentialSubcat,
      );
      return hasSubcategory ? potentialSubcat : undefined;
    }
    return undefined;
  }, [pathname, allCategoryItems]);

  const { groups, uncategorized } = React.useMemo(() => {
    const groupMap = new Map<string, RegistryItem[]>();
    const uncategorizedItems: RegistryItem[] = [];

    allCategoryItems.forEach((item) => {
      if (item.meta.subcategory) {
        if (!groupMap.has(item.meta.subcategory)) {
          groupMap.set(item.meta.subcategory, []);
        }
        groupMap.get(item.meta.subcategory)!.push(item);
      } else {
        uncategorizedItems.push(item);
      }
    });

    return {
      groups: groupMap,
      uncategorized: uncategorizedItems,
    };
  }, [allCategoryItems]);

  const observableItems = React.useMemo(() => {
    if (currentSubcategory) {
      return groups.get(currentSubcategory) || [];
    }
    return uncategorized;
  }, [currentSubcategory, groups, uncategorized]);

  useEffect(() => {
    const observers = new Map<string, IntersectionObserver>();

    observableItems.forEach((item) => {
      const element = document.getElementById(item.name);
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveItem(item.name);
            }
          },
          {
            rootMargin: "-80px 0px -70% 0px",
          },
        );
        observer.observe(element);
        observers.set(item.name, observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [observableItems]);

  useEffect(() => {
    if (!activeItem || !navRef.current) return;

    const activeLink = navRef.current.querySelector(
      `a[href$="#${activeItem}"]`,
    );
    if (activeLink) {
      activeLink.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [activeItem]);

  return (
    <SidebarContainer ref={navRef} component="nav" className="hide-scrollbar">
      {groups.size > 0 && (
        <SidebarGroup sx={{ borderBottom: 1, borderColor: "divider", mb: 1 }}>
          {orderSubcategories(Array.from(groups.keys()), categoryName).map(
            (subcategory) => {
              const items = groups.get(subcategory)!;
              const groupItems = orderItems(
                items,
                `${categoryName}/${subcategory}`,
              );
              const label = subcategory
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
              const isCurrentSubcategory = currentSubcategory === subcategory;

              return (
                <React.Fragment key={subcategory}>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      component={Link}
                      href={`/${categoryName}/${subcategory}`}
                    >
                      <SidebarText sx={{ fontWeight: 500 }}>
                        {label}
                      </SidebarText>
                      <span style={{ opacity: 0.4, flexShrink: 0 }}>
                        {groupItems.length}
                      </span>
                    </SidebarMenuButton>
                    <CollapsibleTrigger
                      defaultChecked={isCurrentSubcategory}
                      render={
                        <SidebarMenuAction>
                          <CollapsibleIcon>
                            <ChevronDown size={12} />
                          </CollapsibleIcon>
                        </SidebarMenuAction>
                      }
                    />
                  </SidebarMenuItem>
                  <CollapsibleContent>
                    <div>
                      <SidebarMenuList nested>
                        {groupItems.map((item) => (
                          <SidebarMenuItem key={item.name}>
                            <SidebarMenuButton
                              component={Link}
                              href={`/${categoryName}/${subcategory}#${item.name}`}
                              active={activeItem === item.name}
                            >
                              <SidebarText>
                                {item.title
                                  .replace(/^Ai\s/, "AI ")
                                  .replace(
                                    new RegExp(`^${label}\\s+`, "i"),
                                    "",
                                  )}
                              </SidebarText>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenuList>
                    </div>
                  </CollapsibleContent>
                </React.Fragment>
              );
            },
          )}
        </SidebarGroup>
      )}

      <SidebarMenuList>
        {uncategorized.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton
              component={Link}
              href={`/${categoryName}#${item.name}`}
              active={activeItem === item.name}
            >
              <SidebarText>{item.title.replace(/^Ai\s/, "AI ")}</SidebarText>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenuList>
    </SidebarContainer>
  );
}
