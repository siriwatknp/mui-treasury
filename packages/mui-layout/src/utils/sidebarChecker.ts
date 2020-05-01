import {
  AbsoluteInsetSidebarConfig,
  FixedInsetSidebarConfig,
  InsetSidebarConfig,
  PermanentSidebarConfig,
  PersistentSidebarConfig,
  EdgeSidebarConfig,
  StickyInsetSidebarConfig,
  TemporarySidebarConfig,
  CollapsibleSidebarConfig,
} from "../types"

export const isCollapsibleSidebarConfig = (
  config: EdgeSidebarConfig
): config is CollapsibleSidebarConfig => {
  return (
    !!config &&
    typeof (config as CollapsibleSidebarConfig).collapsible === "boolean"
  )
}

export const isPersistentSidebarConfig = (
  config: EdgeSidebarConfig
): config is PersistentSidebarConfig => {
  return (
    !!config && (config as PersistentSidebarConfig).variant === "persistent"
  )
}

export const isPermanentSidebarConfig = (
  config: EdgeSidebarConfig
): config is PermanentSidebarConfig => {
  return !!config && (config as PermanentSidebarConfig).variant === "permanent"
}

export const isTemporarySidebarConfig = (
  config: EdgeSidebarConfig
): config is TemporarySidebarConfig => {
  return !!config && (config as TemporarySidebarConfig).variant === "temporary"
}

export const isFixedInsetSidebarConfig = (
  config: InsetSidebarConfig
): config is FixedInsetSidebarConfig => {
  return !!config && (config as FixedInsetSidebarConfig).variant === "fixed"
}

export const isAbsoluteInsetSidebarConfig = (
  config: InsetSidebarConfig
): config is AbsoluteInsetSidebarConfig => {
  return (
    !!config && (config as AbsoluteInsetSidebarConfig).variant === "absolute"
  )
}

export const isStickyInsetSidebarConfig = (
  config: InsetSidebarConfig
): config is StickyInsetSidebarConfig => {
  return !!config && (config as StickyInsetSidebarConfig).variant === "sticky"
}
