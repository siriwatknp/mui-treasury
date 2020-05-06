export type SidebarState = {
  collapsed?: boolean
  open?: boolean
}

export type SidebarStateById = {
  [key: string]: SidebarState
}

export type State = {
  sidebar: SidebarStateById
}
