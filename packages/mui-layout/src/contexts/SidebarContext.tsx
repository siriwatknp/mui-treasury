import React from "react"

const Context = React.createContext({ id: undefined })
Context.displayName = "SidebarCtx"

export const useSidebarCtx = () => React.useContext(Context)

export const SidebarProvider = ({
  id,
  children,
}: React.PropsWithChildren<{ id: string }>) => {
  return <Context.Provider value={{ id }}>{children}</Context.Provider>
}
