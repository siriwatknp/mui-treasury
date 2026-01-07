"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { RegistryItem } from "@/lib/registry";

interface CategorySidebarProps {
  allCategoryItems: RegistryItem[];
  categoryName: string;
}

const STORAGE_KEY = "sidebar-open-groups";

function getStoredGroups(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? new Set(JSON.parse(stored)) : new Set();
  } catch {
    return new Set();
  }
}

function storeGroups(groups: Set<string>) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify([...groups]));
  } catch {
    // ignore
  }
}

export function CategorySidebar({
  allCategoryItems,
  categoryName,
}: CategorySidebarProps) {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState<string>("");
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set());
  const [isHydrated, setIsHydrated] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const autoExpandedRef = useRef<Set<string>>(new Set());

  // Hydrate from sessionStorage on mount
  useEffect(() => {
    const stored = getStoredGroups();
    if (stored.size > 0) {
      setOpenGroups(stored);
    }
    setIsHydrated(true);
  }, []);

  // Extract current subcategory from pathname
  // e.g., /primitive/card -> "card", /primitive -> undefined
  const currentSubcategory = React.useMemo(() => {
    const parts = pathname.split("/").filter(Boolean);
    // parts[0] = category, parts[1] = subcategory or item name
    if (parts.length >= 2) {
      const potentialSubcat = parts[1];
      // Check if it's a subcategory by looking at our groups
      const hasSubcategory = allCategoryItems.some(
        (item) => item.meta.subcategory === potentialSubcat,
      );
      return hasSubcategory ? potentialSubcat : undefined;
    }
    return undefined;
  }, [pathname, allCategoryItems]);

  // Group items by subcategory
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

  // Items to track with intersection observer (depends on current page)
  const observableItems = React.useMemo(() => {
    if (currentSubcategory) {
      // On subcategory page, track items in that subcategory
      return groups.get(currentSubcategory) || [];
    }
    // On category page, track uncategorized items
    return uncategorized;
  }, [currentSubcategory, groups, uncategorized]);

  // Persist openGroups to sessionStorage
  useEffect(() => {
    storeGroups(openGroups);
  }, [openGroups]);

  // Auto-expand current subcategory on navigation (only once per subcategory)
  useEffect(() => {
    if (!isHydrated) return;
    if (
      currentSubcategory &&
      !openGroups.has(currentSubcategory) &&
      !autoExpandedRef.current.has(currentSubcategory)
    ) {
      autoExpandedRef.current.add(currentSubcategory);
      setOpenGroups((prev) => {
        const next = new Set(prev);
        next.add(currentSubcategory);
        return next;
      });
    }
  }, [currentSubcategory, openGroups, isHydrated]);

  // Handle hash on mount/navigation
  useEffect(() => {
    if (!isHydrated) return;
    const hash = window.location.hash.slice(1);
    if (hash && !currentSubcategory) {
      // On category page with hash, find which group contains this item
      for (const [subcategory, items] of groups) {
        if (items.some((item) => item.name === hash)) {
          setOpenGroups((prev) => {
            const next = new Set(prev);
            next.add(subcategory);
            return next;
          });
          break;
        }
      }
    }
  }, [pathname, groups, currentSubcategory, isHydrated]);

  // Intersection observer for active state
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

  // Scroll active link into view in sidebar
  useEffect(() => {
    if (!activeItem || !navRef.current) return;

    const activeLink = navRef.current.querySelector(
      `a[href$="#${activeItem}"]`,
    );
    if (activeLink) {
      activeLink.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [activeItem]);

  const toggleGroup = (subcategory: string) => {
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(subcategory)) {
        next.delete(subcategory);
      } else {
        next.add(subcategory);
      }
      return next;
    });
  };

  return (
    <nav
      ref={navRef}
      className="space-y-1 p-2 text-xs hide-scrollbar min-h-0 overflow-auto"
    >
      {/* Collapsible subcategory groups */}
      {groups.size > 0 && (
        <div className="mb-2 pb-2 border-b">
          {Array.from(groups)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([subcategory, groupItems]) => {
              const isOpen = openGroups.has(subcategory);
              const label = subcategory
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");

              return (
                <Collapsible key={subcategory} open={isOpen}>
                  <CollapsibleTrigger
                    asChild
                    onClick={(e) => {
                      e.preventDefault();
                      toggleGroup(subcategory);
                    }}
                  >
                    <Link
                      href={`/${categoryName}/${subcategory}`}
                      className="flex items-center justify-between w-full px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className="font-medium">{label}</span>
                      <span className="flex items-center gap-1">
                        <span className="text-muted-foreground/60">
                          {groupItems.length}
                        </span>
                        <ChevronDown
                          className={`h-3 w-3 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </Link>
                  </CollapsibleTrigger>
                  <CollapsibleContent
                    forceMount
                    className={isOpen ? "" : "hidden"}
                  >
                    {groupItems.map((item) => (
                      <Link
                        key={item.name}
                        href={`/${categoryName}/${subcategory}#${item.name}`}
                        className={`flex items-center px-3 py-2 pl-5 transition-colors truncate relative ${
                          activeItem === item.name
                            ? "text-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {item.title
                          .replace(/^Ai\s/, "AI ")
                          .replace(new RegExp(`^${label}\\s+`, "i"), "")}
                        <div
                          className={`absolute right-0 w-0.5 h-5 transition-colors ${
                            activeItem === item.name
                              ? "bg-primary"
                              : "bg-transparent"
                          }`}
                        />
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              );
            })}
        </div>
      )}

      {/* Non-subcategory items */}
      {uncategorized.map((item) => (
        <Link
          key={item.name}
          href={`/${categoryName}#${item.name}`}
          className={`flex items-center px-3 py-2 transition-colors truncate relative ${
            activeItem === item.name
              ? "text-foreground font-medium"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {item.title.replace(/^Ai\s/, "AI ")}
          <div
            className={`absolute right-0 w-0.5 h-5 transition-colors ${
              activeItem === item.name ? "bg-primary" : "bg-transparent"
            }`}
          />
        </Link>
      ))}
    </nav>
  );
}
